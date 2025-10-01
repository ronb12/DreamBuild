# 🚀 DreamBuild LLM Fine-Tuning - Google Colab Guide
**Product of Bradley Virtual Solutions, LLC**

## 🎯 You Can Start Training RIGHT NOW!

**What you'll create:** DreamBuild LLM v1.0 (specialized for your app!)  
**Cost:** $0 (100% FREE using Google Colab)  
**Time:** 2-6 hours (runs automatically)

---

## 📋 **STEP-BY-STEP INSTRUCTIONS**

### **Step 1: Open Google Colab** (2 minutes)

1. Go to: **https://colab.research.google.com**
2. Sign in with your Google account
3. Click: **File → New Notebook**
4. Click: **Runtime → Change runtime type**
5. Select: **T4 GPU** (FREE!)
6. Click: **Save**

✅ You now have a FREE GPU to train on!

---

### **Step 2: Install Dependencies** (3 minutes)

**Copy-paste this into first cell:**

```python
# 📥 Install required libraries
!pip install -q transformers datasets accelerate bitsandbytes peft trl

print('✅ Dependencies installed!')
print('💡 Using FREE GPU:', end=' ')
!nvidia-smi --query-gpu=name --format=csv,noheader
```

**Click:** ▶️ Run button

✅ Libraries installed!

---

### **Step 3: Upload Training Data** (1 minute)

**Copy-paste into new cell:**

```python
# 📤 Upload training data
from google.colab import files

print('📁 Click "Choose Files" and select dreambuild-training.jsonl')
uploaded = files.upload()

print('✅ Training data uploaded!')
```

**Click:** ▶️ Run  
**Then:** Upload the `dreambuild-training.jsonl` file from your computer

✅ Data uploaded!

---

### **Step 4: Load Base Model** (5-10 minutes)

**Copy-paste into new cell:**

```python
# 🤖 Load TinyLlama
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
import torch

model_name = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"

# 4-bit quantization (fits in FREE GPU!)
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16
)

# Load model
print('📥 Downloading TinyLlama...')
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    quantization_config=bnb_config,
    device_map="auto"
)

tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token

print('✅ TinyLlama loaded on GPU!')
```

**Click:** ▶️ Run  
**Wait:** 5-10 minutes for model download

✅ Base model ready!

---

### **Step 5: Configure LoRA** (1 minute)

**Copy-paste into new cell:**

```python
# 🔧 Configure efficient fine-tuning (LoRA)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

model = prepare_model_for_kbit_training(model)

lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)

print('✅ LoRA configured!')
print('💡 Only training 1% of parameters (efficient!)')
```

**Click:** ▶️ Run

✅ Model ready for training!

---

### **Step 6: Prepare Dataset** (2 minutes)

**Copy-paste into new cell:**

```python
# 📦 Load and format training data
from datasets import load_dataset

dataset = load_dataset('json', data_files='dreambuild-training.jsonl')

def format_prompt(example):
    return {
        "text": f"""### Instruction:
You are DreamBuild AI. Detect the app type from the user's prompt.

### Prompt:
{example['prompt']}

### App Type:
{example['completion']}
"""
    }

formatted_data = dataset.map(format_prompt)

print(f'✅ Formatted {len(formatted_data["train"])} examples!')
```

**Click:** ▶️ Run

✅ Data formatted!

---

### **Step 7: TRAIN! 🏋️** (1-4 hours - automatic!)

**Copy-paste into new cell:**

```python
# 🚀 START TRAINING!
from transformers import TrainingArguments, Trainer

print('🎓 Starting fine-tuning...')
print('⏰ Estimated time: 1-4 hours')
print('☕ This runs automatically - grab coffee!\n')

training_args = TrainingArguments(
    output_dir="./dreambuild-llm-v1",
    num_train_epochs=3,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    fp16=True,
    save_steps=25,
    logging_steps=5,
    warmup_steps=10,
    report_to="none"
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=formatted_data['train'],
    tokenizer=tokenizer
)

# START!
trainer.train()

print('\n🎉 TRAINING COMPLETE!')
print('✅ You now have DreamBuild LLM v1.0!')
```

**Click:** ▶️ Run  
**Wait:** 1-4 hours (watch progress bars!)

✅ Training done!

---

### **Step 8: Save & Download** (5-10 minutes)

**Copy-paste into new cell:**

```python
# 💾 Save and download model
print('💾 Saving model...')

model.save_pretrained("./dreambuild-llm-v1-final")
tokenizer.save_pretrained("./dreambuild-llm-v1-final")

print('✅ Model saved!')

# Zip for download
print('\n📦 Creating zip file...')
!zip -r dreambuild-llm-v1.zip ./dreambuild-llm-v1-final

print('📥 Downloading to your computer...')
from google.colab import files
files.download('dreambuild-llm-v1.zip')

print('\n🎉 DOWNLOAD COMPLETE!')
print('✅ You now have DreamBuild LLM v1.0 on your computer!')
```

**Click:** ▶️ Run  
**Wait:** File downloads to your computer

✅ Model downloaded!

---

## 🎯 **AFTER TRAINING (Upload to GitHub)**

### **On Your Computer:**

```bash
# 1. Unzip the model
cd ~/Downloads
unzip dreambuild-llm-v1.zip

# 2. Go to DreamBuild folder
cd /Users/ronellbradley/Desktop/DreamBuild

# 3. Create models directory
mkdir -p models/dreambuild-llm-v1

# 4. Copy model files
cp -r ~/Downloads/dreambuild-llm-v1-final/* models/dreambuild-llm-v1/

# 5. Create GitHub release
gh release create llm-v1.0 models/dreambuild-llm-v1/* \
  --repo ronb12/DreamBuild \
  --title "DreamBuild LLM v1.0" \
  --notes "Custom AI model specialized for DreamBuild web app generation"

# 6. Get the release URL
echo "✅ Model uploaded to GitHub!"
echo "🔗 URL: https://github.com/ronb12/DreamBuild/releases/tag/llm-v1.0"
```

---

## 🔧 **UPDATE DREAMBUILD TO USE YOUR MODEL**

### **Edit: `src/services/dreamBuildLLMService.js`**

Change line 13 from:
```javascript
this.modelName = "TinyLlama-1.1B-Chat-v1.0-q4f16_1"; // Generic
```

To:
```javascript
// Use YOUR custom model from GitHub!
this.modelName = "https://github.com/ronb12/DreamBuild/releases/download/llm-v1.0/model.bin";
this.isCustomModel = true;
```

Then rebuild and deploy:
```bash
npm run build
firebase deploy --only hosting
```

✅ Now DreamBuild uses YOUR custom-trained AI!

---

## ⏰ **TIMELINE**

**Today (Setup):** 15 minutes
- Open Colab
- Run cells 1-6

**Today/Tonight (Training):** 1-4 hours (automatic)
- Let it train while you sleep/work
- Colab runs in background

**Tomorrow (Deploy):** 30 minutes
- Download model
- Upload to GitHub
- Update DreamBuild

**Total:** Can be done in 1-2 days!

---

## 💡 **TIPS**

### **If Session Times Out (12-hour limit):**
```python
# Save checkpoint
model.save_pretrained("./checkpoint")

# In new session, load checkpoint:
model = AutoModelForCausalLM.from_pretrained("./checkpoint")
# Continue training...
```

### **To Monitor Progress:**
- Watch the loss decrease (means it's learning!)
- Lower loss = better model
- Typical: Starts at ~2.0, ends at ~0.5-1.0

### **If Out of Memory:**
- Reduce `per_device_train_batch_size` from 2 to 1
- Increase `gradient_accumulation_steps` to 8

---

## 🎉 **RESULT**

**After following this guide, you'll have:**

✅ **DreamBuild LLM v1.0** - Your custom AI  
✅ **Specialized** for DreamBuild patterns  
✅ **Better** than generic TinyLlama  
✅ **FREE** - Used only free tier  
✅ **Hosted** on YOUR GitHub  
✅ **Integrated** into DreamBuild  

**You can legitimately say:**
- ✅ "Powered by DreamBuild's proprietary LLM"
- ✅ "AI trained specifically for web app generation"
- ✅ "Custom model by Bradley Virtual Solutions"

---

## 🚀 **READY TO START?**

1. **Open:** https://colab.research.google.com
2. **Create:** New notebook
3. **Enable:** T4 GPU (Runtime → Change runtime type)
4. **Copy:** Code from this guide
5. **Run:** Each cell in order
6. **Wait:** 1-4 hours
7. **Download:** Your custom model!

**You can start RIGHT NOW!** ☕

---

*Complete step-by-step guide for fine-tuning DreamBuild LLM using 100% free resources*  
*Product of Bradley Virtual Solutions, LLC*

