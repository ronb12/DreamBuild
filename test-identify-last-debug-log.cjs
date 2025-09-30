const puppeteer = require('puppeteer');

async function testIdentifyLastDebugLog() {
  console.log('🔍 Identifying Last Debug Log...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Enable console logging to capture any logs
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push({
        type: msg.type(),
        text: msg.text(),
        location: msg.location()
      });
    });
    
    // Navigate to AI Builder
    console.log('📱 Navigating to DreamBuild AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Filter for debug logs specifically
    const debugLogs = consoleLogs.filter(log => 
      log.text.includes('🔧') || 
      log.text.includes('🔘') || 
      log.text.includes('AIPromptSimplified') ||
      log.text.includes('AIChatInterface') ||
      log.text.includes('Loading AI models') ||
      log.text.includes('Services:') ||
      log.text.includes('Initializing Git Integration') ||
      log.text.includes('Initializing System Integration')
    );
    
    console.log('All Console Logs:');
    console.log('=================');
    consoleLogs.forEach((log, index) => {
      console.log(`${index + 1}. [${log.type.toUpperCase()}] ${log.text}`);
    });
    
    console.log('\nDebug Logs Found:');
    console.log('==================');
    debugLogs.forEach((log, index) => {
      console.log(`${index + 1}. [${log.type.toUpperCase()}] ${log.text}`);
      console.log(`   Location: ${log.location.url}:${log.location.lineNumber}:${log.location.columnNumber}`);
    });
    
    return debugLogs;
    
  } catch (error) {
    console.error('❌ Debug log identification failed:', error);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

testIdentifyLastDebugLog().then(result => {
  if (result.error) {
    console.error('Debug log identification failed:', result.error);
  } else {
    console.log('\n🎉 Debug log identification completed!');
    console.log(`Found ${result.length} debug logs`);
  }
}).catch(console.error);

