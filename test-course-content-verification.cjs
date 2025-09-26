const puppeteer = require('puppeteer');

async function testCourseContentVerification() {
  console.log('🎓 Starting Course Content Verification Test...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to education page
    console.log('📚 Navigating to education page...');
    await page.goto('https://dreambuild-2024-app.web.app/education', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Click "Start Learning" button
    console.log('🎯 Clicking "Start Learning" button...');
    const startLearningButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent.includes('Start Learning'));
    });
    
    if (startLearningButton.asElement()) {
      await startLearningButton.asElement().click();
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Get all course cards and their information
    console.log('📋 Analyzing course cards...');
    const courseCards = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.course-card, [class*="course"]'));
      return cards.map(card => {
        const title = card.querySelector('h3, h2, [class*="title"]')?.textContent?.trim() || 'No title';
        const description = card.querySelector('p, [class*="description"]')?.textContent?.trim() || 'No description';
        const category = card.querySelector('[class*="category"]')?.textContent?.trim() || 'No category';
        const difficulty = card.querySelector('[class*="difficulty"]')?.textContent?.trim() || 'No difficulty';
        const duration = card.querySelector('[class*="duration"]')?.textContent?.trim() || 'No duration';
        
        return {
          title,
          description,
          category,
          difficulty,
          duration,
          hasStartButton: !!card.querySelector('button')
        };
      });
    });
    
    console.log('📊 Course Cards Found:', courseCards.length);
    courseCards.forEach((card, index) => {
      console.log(`📚 Course ${index + 1}:`, {
        title: card.title,
        category: card.category,
        difficulty: card.difficulty,
        hasStartButton: card.hasStartButton
      });
    });
    
    // Click on first course
    console.log('🎯 Clicking first course...');
    const firstCourseButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent.includes('Start Course'));
    });
    
    if (firstCourseButton.asElement()) {
      await firstCourseButton.asElement().click();
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Check course viewer content
    console.log('🎬 Checking course viewer content...');
    const courseViewerInfo = await page.evaluate(() => {
      const info = {
        pageTitle: document.title,
        courseTitle: null,
        lessonTitle: null,
        videoPlayer: null,
        videoUrl: null,
        courseContent: null
      };
      
      // Get course title
      const courseTitle = document.querySelector('h1, h2, [class*="course-title"]');
      if (courseTitle) info.courseTitle = courseTitle.textContent.trim();
      
      // Get lesson title
      const lessonTitle = document.querySelector('[class*="lesson"], [class*="current"]');
      if (lessonTitle) info.lessonTitle = lessonTitle.textContent.trim();
      
      // Check for video player
      const videoPlayer = document.querySelector('iframe, video');
      if (videoPlayer) {
        info.videoPlayer = {
          tagName: videoPlayer.tagName,
          src: videoPlayer.src || videoPlayer.getAttribute('src'),
          className: videoPlayer.className
        };
      }
      
      // Check for course content
      const contentElements = document.querySelectorAll('[class*="content"], [class*="lesson"], [class*="module"]');
      info.courseContent = Array.from(contentElements).map(el => ({
        text: el.textContent.trim().substring(0, 100),
        className: el.className
      }));
      
      return info;
    });
    
    console.log('📖 Course Viewer Info:', courseViewerInfo);
    
    // Check if video is playing
    console.log('🎥 Checking video player status...');
    const videoStatus = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        return {
          hasIframe: true,
          src: iframe.src,
          isYouTube: iframe.src.includes('youtube.com'),
          title: iframe.title
        };
      }
      return { hasIframe: false };
    });
    
    console.log('🎬 Video Status:', videoStatus);
    
    // Check for any console errors
    console.log('🔍 Checking for console errors...');
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (consoleErrors.length > 0) {
      console.log('❌ Console Errors Found:', consoleErrors);
    } else {
      console.log('✅ No console errors detected');
    }
    
    // Take screenshot
    console.log('📸 Taking screenshot...');
    await page.screenshot({ 
      path: 'course-content-verification.png', 
      fullPage: true 
    });
    
    // Summary
    console.log('\n📊 TEST SUMMARY:');
    console.log('✅ Course cards found:', courseCards.length);
    console.log('✅ Course viewer loaded:', !!courseViewerInfo.courseTitle);
    console.log('✅ Video player present:', !!courseViewerInfo.videoPlayer);
    console.log('✅ Video URL valid:', !!videoStatus.src);
    console.log('✅ YouTube video:', videoStatus.isYouTube);
    console.log('✅ Console errors:', consoleErrors.length);
    
    console.log('\n🎯 CONTENT VERIFICATION:');
    console.log('📚 Course Title:', courseViewerInfo.courseTitle);
    console.log('🎬 Video Source:', videoStatus.src);
    console.log('📖 Content Elements:', courseViewerInfo.courseContent.length);
    
    console.log('\n✅ Course Content Verification Test Completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

testCourseContentVerification().catch(console.error);

