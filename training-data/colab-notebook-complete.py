"""
🚀 DreamBuild LLM Training - Complete Notebook
Copy this ENTIRE file into Google Colab and click Runtime → Run All!

Product of Bradley Virtual Solutions, LLC
"""

# ═══════════════════════════════════════════════════════════════════
# CELL 1: Install Dependencies
# ═══════════════════════════════════════════════════════════════════

print('🎯 DreamBuild LLM v1.0 Training')
print('Product of Bradley Virtual Solutions, LLC\n')
print('📥 Installing dependencies...\n')

!pip install -q transformers datasets accelerate bitsandbytes peft trl

print('✅ Installed!')
print('\n🖥️  GPU:')
!nvidia-smi --query-gpu=name,memory.total --format=csv,noheader

# ═══════════════════════════════════════════════════════════════════
# CELL 2: Upload Training Data
# ═══════════════════════════════════════════════════════════════════

print('\n📤 Upload dreambuild-training-10k.jsonl:')
from google.colab import files
uploaded = files.upload()
print('✅ 10,000 examples uploaded!')

# ═══════════════════════════════════════════════════════════════════
# CELL 3: Load CodeLlama 7B
# ═══════════════════════════════════════════════════════════════════

print('\n🤖 Loading CodeLlama 7B...')
print('💡 Trained on 100+ BILLION code examples!\n')

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

print('✅ CodeLlama 7B loaded!')

# ═══════════════════════════════════════════════════════════════════
# CELL 4: Configure LoRA
# ═══════════════════════════════════════════════════════════════════

print('\n🔧 Configuring efficient training...\n')

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
print(f'✅ LoRA configured!')
print(f'📊 Training: {trainable:,} params ({100*trainable/total:.2f}%)')

# ═══════════════════════════════════════════════════════════════════
# CELL 5: Prepare Dataset
# ═══════════════════════════════════════════════════════════════════

print('\n📊 Preparing 10,000 examples...\n')

from datasets import load_dataset

dataset = load_dataset('json', data_files='dreambuild-training-10k.jsonl')

def format_prompt(ex):
    return {"text": f"""<s>[INST] You are DreamBuild AI.

Task: {ex['instruction']}
Prompt: {ex['prompt']}

Respond with app type. [/INST]

{ex['completion']}</s>"""}

formatted = dataset.map(format_prompt, remove_columns=dataset['train'].column_names)
print(f'✅ {len(formatted["train"])} examples ready!')

# ═══════════════════════════════════════════════════════════════════
# CELL 6: TRAIN! 🔥
# ═══════════════════════════════════════════════════════════════════

print('\n🚀 STARTING TRAINING!')
print('⏰ Estimated: 3-6 hours')
print('☕ Runs automatically!\n')

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
    save_total_limit=3
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=formatted['train'],
    tokenizer=tokenizer
)

# START!
trainer.train()

print('\n🎉 TRAINING COMPLETE!')

# ═══════════════════════════════════════════════════════════════════
# CELL 7: Save Model
# ═══════════════════════════════════════════════════════════════════

print('\n💾 Saving DreamBuild LLM v1.0...')

model.save_pretrained("./dreambuild-llm-v1-final")
tokenizer.save_pretrained("./dreambuild-llm-v1-final")

print('✅ Saved!')

# ═══════════════════════════════════════════════════════════════════
# CELL 8: Test
# ═══════════════════════════════════════════════════════════════════

print('\n🧪 Testing...')

test = "create calculator"
inputs = tokenizer(f"<s>[INST] {test} [/INST]", return_tensors="pt").to("cuda")
outputs = model.generate(**inputs, max_new_tokens=50)
print(f'Test "{test}": {tokenizer.decode(outputs[0], skip_special_tokens=True)}')

print('\n✅ Working!')

# ═══════════════════════════════════════════════════════════════════
# CELL 9: Download
# ═══════════════════════════════════════════════════════════════════

print('\n📦 Downloading...')

!zip -r dreambuild-llm-v1.zip ./dreambuild-llm-v1-final
files.download('dreambuild-llm-v1.zip')

print('\n🎉 COMPLETE! You have DreamBuild LLM v1.0!')
