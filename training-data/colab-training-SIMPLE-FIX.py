# Find this section in your code (around line 110-125):

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
    remove_unused_columns=False,  # ADD THIS LINE!
    report_to="none",
)
