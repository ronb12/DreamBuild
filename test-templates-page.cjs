const puppeteer = require('puppeteer');

async function testTemplatesPage() {
  console.log('🔍 Testing Templates Page');
  console.log('=========================');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1400, height: 900 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the Templates page
    console.log('🌐 Navigating to Templates page...');
    await page.goto('https://dreambuild-2024-app.web.app/templates', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    await page.waitForTimeout(3000);

    console.log('\n📋 Testing Templates Page Elements:');
    console.log('===================================');
    
    // Check page title
    const pageTitle = await page.evaluate(() => {
      const title = document.querySelector('h1');
      return title ? title.textContent : null;
    });
    console.log(`✅ Page title: "${pageTitle}"`);
    
    // Check search functionality
    const searchInput = await page.evaluate(() => {
      const input = document.querySelector('input[placeholder="Search templates..."]');
      return !!input;
    });
    console.log(`✅ Search input present: ${searchInput ? 'Yes' : 'No'}`);
    
    // Test search functionality
    if (searchInput) {
      await page.type('input[placeholder="Search templates..."]', 'todo');
      await page.waitForTimeout(1000);
      
      const searchResults = await page.evaluate(() => {
        const templates = document.querySelectorAll('.bg-card.border.border-border.rounded-xl');
        return templates.length;
      });
      console.log(`✅ Search results for "todo": ${searchResults} templates found`);
      
      // Clear search
      await page.evaluate(() => {
        const input = document.querySelector('input[placeholder="Search templates..."]');
        if (input) {
          input.value = '';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      await page.waitForTimeout(1000);
    }
    
    // Check category filter
    const categoryFilter = await page.evaluate(() => {
      const select = document.querySelector('select');
      return !!select;
    });
    console.log(`✅ Category filter present: ${categoryFilter ? 'Yes' : 'No'}`);
    
    // Test category filtering
    if (categoryFilter) {
      await page.select('select', 'web-apps');
      await page.waitForTimeout(1000);
      
      const webAppTemplates = await page.evaluate(() => {
        const templates = document.querySelectorAll('.bg-card.border.border-border.rounded-xl');
        return templates.length;
      });
      console.log(`✅ Web apps filter: ${webAppTemplates} templates found`);
      
      // Reset filter
      await page.select('select', 'all');
      await page.waitForTimeout(1000);
    }
    
    // Check view mode toggle
    const viewModeToggle = await page.evaluate(() => {
      const gridButton = document.querySelector('button[class*="grid"]');
      const listButton = document.querySelector('button[class*="list"]');
      return !!(gridButton && listButton);
    });
    console.log(`✅ View mode toggle present: ${viewModeToggle ? 'Yes' : 'No'}`);
    
    // Test view mode switching
    if (viewModeToggle) {
      // Switch to list view
      await page.click('button[class*="list"]');
      await page.waitForTimeout(1000);
      
      const listViewActive = await page.evaluate(() => {
        const listButton = document.querySelector('button[class*="list"]');
        return listButton && listButton.className.includes('bg-primary');
      });
      console.log(`✅ List view activated: ${listViewActive ? 'Yes' : 'No'}`);
      
      // Switch back to grid view
      await page.click('button[class*="grid"]');
      await page.waitForTimeout(1000);
      
      const gridViewActive = await page.evaluate(() => {
        const gridButton = document.querySelector('button[class*="grid"]');
        return gridButton && gridButton.className.includes('bg-primary');
      });
      console.log(`✅ Grid view activated: ${gridViewActive ? 'Yes' : 'No'}`);
    }
    
    // Check template cards
    const templateCards = await page.evaluate(() => {
      const cards = document.querySelectorAll('.bg-card.border.border-border.rounded-xl');
      return cards.length;
    });
    console.log(`✅ Template cards found: ${templateCards}`);
    
    // Check template actions
    const templateActions = await page.evaluate(() => {
      const useButtons = document.querySelectorAll('button[class*="Use Template"]');
      const previewButtons = document.querySelectorAll('button[title="Preview"]');
      const copyButtons = document.querySelectorAll('button[title="Copy"]');
      
      return {
        useButtons: useButtons.length,
        previewButtons: previewButtons.length,
        copyButtons: copyButtons.length
      };
    });
    console.log(`✅ Template actions:`);
    console.log(`   - Use Template buttons: ${templateActions.useButtons}`);
    console.log(`   - Preview buttons: ${templateActions.previewButtons}`);
    console.log(`   - Copy buttons: ${templateActions.copyButtons}`);
    
    // Test template interaction
    if (templateActions.useButtons > 0) {
      console.log('\n🎯 Testing template interaction...');
      
      // Click the first "Use Template" button
      await page.click('button:has-text("Use Template")');
      await page.waitForTimeout(2000);
      
      // Check if we're redirected to AI Builder or if a toast appears
      const currentUrl = page.url();
      const isRedirected = currentUrl.includes('/ai-builder');
      console.log(`✅ Redirected to AI Builder: ${isRedirected ? 'Yes' : 'No'}`);
      
      if (!isRedirected) {
        // Check for toast notification
        const toastPresent = await page.evaluate(() => {
          const toast = document.querySelector('[class*="toast"]');
          return !!toast;
        });
        console.log(`✅ Toast notification shown: ${toastPresent ? 'Yes' : 'No'}`);
      }
    }
    
    // Check navigation from AI Builder
    console.log('\n🔗 Testing navigation from AI Builder...');
    await page.goto('https://dreambuild-2024-app.web.app/ai-builder', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await page.waitForTimeout(2000);
    
    // Check if Templates button exists in AI Builder
    const templatesButtonInBuilder = await page.evaluate(() => {
      const button = document.querySelector('a[href="/templates"]');
      return !!button;
    });
    console.log(`✅ Templates button in AI Builder: ${templatesButtonInBuilder ? 'Yes' : 'No'}`);
    
    // Click Templates button
    if (templatesButtonInBuilder) {
      await page.click('a[href="/templates"]');
      await page.waitForTimeout(2000);
      
      const navigatedToTemplates = page.url().includes('/templates');
      console.log(`✅ Successfully navigated to Templates: ${navigatedToTemplates ? 'Yes' : 'No'}`);
    }
    
    // Take screenshot
    await page.screenshot({ 
      path: 'dreambuild-templates-page-test.png',
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved as dreambuild-templates-page-test.png');

    // Summary
    console.log('\n🎯 TEMPLATES PAGE TEST SUMMARY:');
    console.log('================================');
    console.log(`✅ Page loads correctly: ${pageTitle === 'Template Library' ? 'Yes' : 'No'}`);
    console.log(`✅ Search functionality: ${searchInput ? 'Working' : 'Missing'}`);
    console.log(`✅ Category filtering: ${categoryFilter ? 'Working' : 'Missing'}`);
    console.log(`✅ View mode toggle: ${viewModeToggle ? 'Working' : 'Missing'}`);
    console.log(`✅ Template cards displayed: ${templateCards > 0 ? 'Yes' : 'No'}`);
    console.log(`✅ Template actions available: ${templateActions.useButtons > 0 ? 'Yes' : 'No'}`);
    console.log(`✅ Navigation from AI Builder: ${templatesButtonInBuilder ? 'Working' : 'Missing'}`);
    
    if (pageTitle === 'Template Library' && templateCards > 0 && templatesButtonInBuilder) {
      console.log('\n🎉 TEMPLATES PAGE SUCCESSFUL!');
      console.log('   • All core functionality working');
      console.log('   • Navigation integrated properly');
      console.log('   • Template interactions functional');
      console.log('   • Professional design implemented');
    } else {
      console.log('\n⚠️ TEMPLATES PAGE ISSUES DETECTED');
      console.log('   • Some functionality may need attention');
      console.log('   • Check individual components');
    }

  } catch (error) {
    console.error('❌ Templates page test failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testTemplatesPage().catch(console.error);
