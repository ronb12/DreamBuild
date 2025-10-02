const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Modern wait function (replaces deprecated waitForTimeout)
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

console.log('🤖 DreamBuild Colab Automation v2 (Fixed)');
console.log('Product of Bradley Virtual Solutions, LLC\n');

(async () => {
  console.log('🚀 Launching browser...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox']
  });

  const page = await browser.newPage();
  
  try {
    console.log('📂 Opening Colab notebook...');
    await page.goto('https://colab.research.google.com/drive/1S2JNYbSEyUYdqo4Ip4dj0JfisAyaZE-C', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    console.log('⏳ Waiting for page to load (10 seconds)...');
    console.log('💡 If you see login, please sign in manually!');
    await wait(10000);

    // Read the fixed training code
    console.log('📖 Reading fixed training code...');
    const fixedCode = fs.readFileSync(
      path.join(__dirname, 'training-data', 'colab-training-FIXED.py'),
      'utf8'
    );
    console.log('✅ Code loaded (' + fixedCode.length + ' chars)');

    // Copy code to clipboard
    console.log('📋 Copying code to clipboard...');
    await page.evaluate((code) => {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }, fixedCode);
    console.log('✅ Code in clipboard!');
    await wait(1000);

    // Try to select all and delete
    console.log('🗑️  Clearing old code...');
    await page.keyboard.down('Meta');
    await page.keyboard.press('a');
    await page.keyboard.up('Meta');
    await wait(1000);
    await page.keyboard.press('Backspace');
    await wait(2000);

    // Paste new code
    console.log('📋 Pasting fixed code...');
    await page.keyboard.down('Meta');
    await page.keyboard.press('v');
    await page.keyboard.up('Meta');
    await wait(3000);
    console.log('✅ Code pasted!');

    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║  ✅ CODE PASTED SUCCESSFULLY!                              ║');
    console.log('║                                                            ║');
    console.log('║  NOW DO THIS IN THE BROWSER WINDOW:                       ║');
    console.log('║                                                            ║');
    console.log('║  1. Check code is pasted (scroll to verify)               ║');
    console.log('║  2. Runtime → Change runtime type → T4 GPU → Save         ║');
    console.log('║  3. Runtime → Run all                                      ║');
    console.log('║  4. Upload dreambuild-training-10k.jsonl when prompted    ║');
    console.log('║                                                            ║');
    console.log('║  Then training runs automatically for 6 hours! ☕         ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    
    console.log('\n💡 Browser will stay open. Press Ctrl+C when done.\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('\n💡 Fallback: The code is in your clipboard!');
    console.log('   Just go to Colab and press Cmd+V\n');
  }

})();
