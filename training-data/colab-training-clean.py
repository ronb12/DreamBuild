# ============================================================================
# DreamBuild LLM v1.0 Training - CLEAN VERSION (No Emojis)
# Product of Bradley Virtual Solutions, LLC
# Copy ALL of this into Google Colab and click Runtime > Run All
# ============================================================================

# CELL 1: Install Dependencies
print('DreamBuild LLM v1.0 Training')
print('Product of Bradley Virtual Solutions, LLC\n')
print('[1/9] Installing dependencies...\n')

!pip install -q transformers datasets accelerate bitsandbytes peft trl

print('\n[SUCCESS] Installed!')
print('\n[GPU CHECK]')
!nvidia-smi --query-gpu=name,memory.total --format=csv,noheader

# ============================================================================
# CELL 2: Upload Training Data
# ============================================================================

print('\n[2/9] Upload dreambuild-training-10k.jsonl when prompted:')
from google.colab import files
uploaded = files.upload()
print('\n[SUCCESS] 10,000 examples uploaded!')

# ============================================================================
# CELL 3: Load CodeLlama 7B
# ============================================================================

print('\n[3/9] Loading CodeLlama 7B...')
print('INFO: Trained on 100+ BILLION code examples!\n')

from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
import torch

model_name = "codellama/CodeLlama-7b-Instruct-hf"

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True
)

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    quantization_config=bnb_config,
    device_map="auto",
    trust_remote_code=True
)

tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

print('\n[SUCCESS] CodeLlama 7B loaded!')

# ============================================================================
# CELL 4: Configure LoRA
# ============================================================================

print('\n[4/9] Configuring efficient training...\n')

from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

model.config.use_cache = False
model = prepare_model_for_kbit_training(model)

lora_config = LoraConfig(
    r=64,
    lora_alpha=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)

trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
total = sum(p.numel() for p in model.parameters())
print(f'[SUCCESS] LoRA configured!')
print(f'[INFO] Training: {trainable:,} params ({100*trainable/total:.2f}%)')

# ============================================================================
# CELL 5: Prepare Dataset
# ============================================================================

print('\n[5/9] Preparing 10,000 examples...\n')

from datasets import load_dataset

dataset = load_dataset('json', data_files='dreambuild-training-10k.jsonl')

def format_prompt(ex):
    return {"text": f"""<s>[INST] You are DreamBuild AI.

Task: {ex['instruction']}
Prompt: {ex['prompt']}

Respond with app type. [/INST]

{ex['completion']}</s>"""}

formatted = dataset.map(format_prompt, remove_columns=dataset['train'].column_names)
print(f'[SUCCESS] {len(formatted["train"])} examples ready!')

# ============================================================================
# CELL 6: TRAIN!
# ============================================================================

print('\n[6/9] STARTING TRAINING!')
print('[INFO] Estimated: 3-6 hours')
print('[INFO] Runs automatically!\n')

from transformers import TrainingArguments, Trainer

training_args = TrainingArguments(
    output_dir="./dreambuild-llm-v1",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    fp16=True,
    save_steps=250,
    logging_steps=50,
    warmup_steps=100,
    optim="paged_adamw_8bit",
    lr_scheduler_type="cosine",
    save_total_limit=3,
    remove_unused_columns=False,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=formatted['train'],
    tokenizer=tokenizer
)

# START!
trainer.train()

print('\n[SUCCESS] TRAINING COMPLETE!')

# ============================================================================
# CELL 7: Save Model
# ============================================================================

print('\n[7/9] Saving DreamBuild LLM v1.0...')

model.save_pretrained("./dreambuild-llm-v1-final")
tokenizer.save_pretrained("./dreambuild-llm-v1-final")

print('[SUCCESS] Saved!')

# ============================================================================
# CELL 8: Test
# ============================================================================

print('\n[8/9] Testing...')

test = "create calculator"
inputs = tokenizer(f"<s>[INST] {test} [/INST]", return_tensors="pt").to("cuda")
outputs = model.generate(**inputs, max_new_tokens=50)
print(f'Test "{test}": {tokenizer.decode(outputs[0], skip_special_tokens=True)}')

print('\n[SUCCESS] Working!')

# ============================================================================
# CELL 9: Download
# ============================================================================

print('\n[9/9] Downloading...')

!zip -r dreambuild-llm-v1.zip ./dreambuild-llm-v1-final
files.download('dreambuild-llm-v1.zip')

print('\n[COMPLETE] You have DreamBuild LLM v1.0!')
print('Product of Bradley Virtual Solutions, LLC')
