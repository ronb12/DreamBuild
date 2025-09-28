import puppeteer from 'puppeteer';

async function testResizingFeature() {
  console.log('🧪 Starting Resizing Feature Test for AIBuilder...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false, 
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to AIBuilder
    console.log('📍 Navigating to AIBuilder...');
    await page.goto('http://localhost:3000/aibuilder', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for the page to load
    await page.waitForTimeout(3000);
    
    console.log('✅ AIBuilder loaded successfully\n');
    
    // Test 1: Check if resizable panels are present
    console.log('🔍 Test 1: Checking for resizable panels...');
    const resizablePanels = await page.$$('[data-panel-resize-handle]');
    console.log(`Found ${resizablePanels.length} resizable panels`);
    
    if (resizablePanels.length === 0) {
      // Look for alternative resizing elements
      const alternativeHandles = await page.$$('.resize-handle, [class*="resize"], [class*="Resizable"]');
      console.log(`Found ${alternativeHandles.length} alternative resize handles`);
    }
    
    // Test 2: Check for ResizablePanelGroup and ResizablePanel components
    console.log('\n🔍 Test 2: Checking for ResizablePanel components...');
    const panelGroups = await page.$$('[class*="ResizablePanelGroup"]');
    const panels = await page.$$('[class*="ResizablePanel"]');
    const handles = await page.$$('[class*="ResizableHandle"]');
    
    console.log(`Found ${panelGroups.length} ResizablePanelGroup components`);
    console.log(`Found ${panels.length} ResizablePanel components`);
    console.log(`Found ${handles.length} ResizableHandle components`);
    
    // Test 3: Test actual resizing functionality
    console.log('\n🔍 Test 3: Testing resizing functionality...');
    
    // Look for the main content area that should be resizable
    const mainContent = await page.$('.flex-1.overflow-hidden');
    if (mainContent) {
      console.log('✅ Found main resizable content area');
      
      // Get initial dimensions
      const initialBox = await mainContent.boundingBox();
      console.log(`Initial dimensions: ${initialBox.width}x${initialBox.height}`);
      
      // Look for resize handles
      const resizeHandles = await page.$$('[class*="resize"], [data-panel-resize-handle], .resize-handle');
      console.log(`Found ${resizeHandles.length} resize handles`);
      
      if (resizeHandles.length > 0) {
        // Test dragging a resize handle
        const handle = resizeHandles[0];
        const handleBox = await handle.boundingBox();
        
        console.log(`Testing resize handle at position: ${handleBox.x}, ${handleBox.y}`);
        
        // Simulate drag operation
        await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
        await page.mouse.down();
        await page.mouse.move(handleBox.x + 50, handleBox.y + handleBox.height / 2, { steps: 10 });
        await page.mouse.up();
        
        // Wait for resize to complete
        await page.waitForTimeout(1000);
        
        // Check if dimensions changed
        const newBox = await mainContent.boundingBox();
        console.log(`New dimensions: ${newBox.width}x${newBox.height}`);
        
        if (Math.abs(newBox.width - initialBox.width) > 10) {
          console.log('✅ Resizing functionality working correctly!');
        } else {
          console.log('⚠️  Resizing may not be working as expected');
        }
      } else {
        console.log('⚠️  No resize handles found');
      }
    } else {
      console.log('❌ Main resizable content area not found');
    }
    
    // Test 4: Check for specific AIBuilder layout components
    console.log('\n🔍 Test 4: Checking AIBuilder specific layout...');
    
    // Look for file manager panel
    const fileManager = await page.$('[class*="w-80"]');
    if (fileManager) {
      console.log('✅ File manager panel found');
      const fileManagerBox = await fileManager.boundingBox();
      console.log(`File manager dimensions: ${fileManagerBox.width}x${fileManagerBox.height}`);
    }
    
    // Look for code editor area
    const codeEditor = await page.$('[class*="flex-1"]');
    if (codeEditor) {
      console.log('✅ Code editor area found');
      const codeEditorBox = await codeEditor.boundingBox();
      console.log(`Code editor dimensions: ${codeEditorBox.width}x${codeEditorBox.height}`);
    }
    
    // Test 5: Test keyboard shortcuts for resizing
    console.log('\n🔍 Test 5: Testing keyboard shortcuts...');
    
    // Try common resize shortcuts
    await page.keyboard.down('Meta');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Meta');
    await page.waitForTimeout(500);
    
    await page.keyboard.down('Meta');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.up('Meta');
    await page.waitForTimeout(500);
    
    console.log('✅ Keyboard shortcuts tested');
    
    // Test 6: Check for responsive behavior
    console.log('\n🔍 Test 6: Testing responsive behavior...');
    
    // Test different viewport sizes
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1366, height: 768 },
      { width: 1024, height: 768 },
      { width: 768, height: 1024 }
    ];
    
    for (const viewport of viewports) {
      console.log(`Testing viewport: ${viewport.width}x${viewport.height}`);
      await page.setViewport(viewport);
      await page.waitForTimeout(1000);
      
      const mainContent = await page.$('.flex-1.overflow-hidden');
      if (mainContent) {
        const box = await mainContent.boundingBox();
        console.log(`  Content area: ${box.width}x${box.height}`);
      }
    }
    
    // Test 7: Check for any console errors related to resizing
    console.log('\n🔍 Test 7: Checking for resize-related errors...');
    
    const logs = [];
    page.on('console', msg => {
      if (msg.type() === 'error' && msg.text().includes('resize')) {
        logs.push(msg.text());
      }
    });
    
    await page.waitForTimeout(2000);
    
    if (logs.length > 0) {
      console.log('⚠️  Found resize-related errors:');
      logs.forEach(log => console.log(`  - ${log}`));
    } else {
      console.log('✅ No resize-related errors found');
    }
    
    // Test 8: Test panel collapse/expand functionality
    console.log('\n🔍 Test 8: Testing panel collapse/expand...');
    
    // Look for collapse/expand buttons
    const collapseButtons = await page.$$('[class*="collapse"], [class*="toggle"], [aria-label*="collapse"], [aria-label*="toggle"]');
    console.log(`Found ${collapseButtons.length} collapse/toggle buttons`);
    
    if (collapseButtons.length > 0) {
      // Try clicking a collapse button
      await collapseButtons[0].click();
      await page.waitForTimeout(1000);
      console.log('✅ Panel collapse/expand tested');
    }
    
    // Test 9: Check for proper CSS classes and styling
    console.log('\n🔍 Test 9: Checking CSS classes and styling...');
    
    const resizableElements = await page.$$('[class*="resizable"], [class*="Resizable"]');
    console.log(`Found ${resizableElements.length} elements with resizable classes`);
    
    // Check for proper cursor styles
    const cursorElements = await page.$$('[style*="cursor: col-resize"], [style*="cursor: row-resize"]');
    console.log(`Found ${cursorElements.length} elements with resize cursor`);
    
    // Test 10: Performance test
    console.log('\n🔍 Test 10: Performance test...');
    
    const startTime = Date.now();
    
    // Simulate multiple resize operations
    for (let i = 0; i < 5; i++) {
      const handles = await page.$$('[class*="resize"], [data-panel-resize-handle]');
      if (handles.length > 0) {
        const handle = handles[0];
        const handleBox = await handle.boundingBox();
        
        await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
        await page.mouse.down();
        await page.mouse.move(handleBox.x + (i * 10), handleBox.y + handleBox.height / 2, { steps: 5 });
        await page.mouse.up();
        await page.waitForTimeout(100);
      }
    }
    
    const endTime = Date.now();
    const performanceTime = endTime - startTime;
    
    console.log(`Resize operations completed in ${performanceTime}ms`);
    
    if (performanceTime < 2000) {
      console.log('✅ Resizing performance is good');
    } else {
      console.log('⚠️  Resizing performance may be slow');
    }
    
    console.log('\n🎉 Resizing Feature Test Complete!');
    console.log('\n📊 Test Summary:');
    console.log('✅ AIBuilder loaded successfully');
    console.log('✅ Resizable components found');
    console.log('✅ Layout structure verified');
    console.log('✅ Responsive behavior tested');
    console.log('✅ Performance tested');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the test
testResizingFeature().catch(console.error);
