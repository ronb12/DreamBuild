const puppeteer = require('puppeteer');

async function testVideoPlayerComprehensive() {
  console.log('🎬 Starting Comprehensive Video Player Test...');
  
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
    
    // Click first "Start Course" button
    console.log('🎯 Clicking first "Start Course" button...');
    const startCourseButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent.includes('Start Course'));
    });
    
    if (startCourseButton.asElement()) {
      await startCourseButton.asElement().click();
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Check if we're on course viewer page
    console.log('🎬 Checking course viewer page...');
    const pageTitle = await page.evaluate(() => {
      const title = document.querySelector('h1');
      return title ? title.textContent : null;
    });
    console.log('📖 Page title:', pageTitle);
    
    // Look for video player specifically
    console.log('🎥 Looking for video player...');
    const videoPlayerInfo = await page.evaluate(() => {
      const info = {
        videoContainers: 0,
        playButtons: 0,
        educationalVideo: false,
        videoPlayerSection: false,
        aspectVideo: false,
        blueBorder: false
      };
      
      // Check for aspect-video containers
      const aspectVideo = document.querySelectorAll('[class*="aspect-video"]');
      info.videoContainers = aspectVideo.length;
      info.aspectVideo = aspectVideo.length > 0;
      
      // Check for play buttons
      const playButtons = Array.from(document.querySelectorAll('button')).filter(btn => 
        btn.textContent.includes('Play') || 
        btn.querySelector('svg') ||
        btn.className.includes('play')
      );
      info.playButtons = playButtons.length;
      
      // Check for "Educational Video" text
      const educationalVideo = Array.from(document.querySelectorAll('*')).find(el => 
        el.textContent && el.textContent.includes('Educational Video')
      );
      info.educationalVideo = !!educationalVideo;
      
      // Check for video player section
      const videoPlayerSection = Array.from(document.querySelectorAll('*')).find(el => 
        el.textContent && el.textContent.includes('video')
      );
      info.videoPlayerSection = !!videoPlayerSection;
      
      // Check for blue border
      const blueBorder = Array.from(document.querySelectorAll('[class*="border-blue"]'));
      info.blueBorder = blueBorder.length > 0;
      
      return info;
    });
    console.log('🎬 Video player info:', videoPlayerInfo);
    
    // Check for specific video player elements
    console.log('🔍 Checking for specific elements...');
    const specificElements = await page.evaluate(() => {
      const elements = {
        gradientBackground: false,
        whitePlayButton: false,
        videoTitle: false,
        instructions: false
      };
      
      // Check for gradient background
      const gradient = document.querySelectorAll('[class*="gradient-to-br"]');
      elements.gradientBackground = gradient.length > 0;
      
      // Check for white play button
      const whiteButton = Array.from(document.querySelectorAll('button')).find(btn => 
        btn.className.includes('bg-white') && btn.querySelector('svg')
      );
      elements.whitePlayButton = !!whiteButton;
      
      // Check for video title
      const title = Array.from(document.querySelectorAll('*')).find(el => 
        el.textContent && el.textContent.includes('Educational Video')
      );
      elements.videoTitle = !!title;
      
      // Check for instructions
      const instructions = Array.from(document.querySelectorAll('*')).find(el => 
        el.textContent && el.textContent.includes('Click the play button')
      );
      elements.instructions = !!instructions;
      
      return elements;
    });
    console.log('🎯 Specific elements:', specificElements);
    
    // Try to click the play button
    console.log('🎮 Attempting to click play button...');
    const playButtonClicked = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const playButton = buttons.find(btn => 
        btn.textContent.includes('Play') || 
        btn.querySelector('svg') ||
        btn.className.includes('play')
      );
      
      if (playButton) {
        playButton.click();
        return true;
      }
      return false;
    });
    console.log('🎬 Play button clicked:', playButtonClicked);
    
    // Wait for any alerts or responses
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take final screenshot
    console.log('📸 Taking final screenshot...');
    await page.screenshot({ 
      path: 'video-player-comprehensive-test.png', 
      fullPage: true 
    });
    console.log('📸 Screenshot saved as video-player-comprehensive-test.png');
    
    // Summary
    console.log('\n📊 TEST SUMMARY:');
    console.log('✅ Course selection working:', videoPlayerInfo.playButtons > 0);
    console.log('✅ Course viewer loading:', pageTitle && pageTitle.includes('HTML'));
    console.log('✅ Video player rendering:', videoPlayerInfo.videoContainers > 0);
    console.log('✅ Educational content:', videoPlayerInfo.educationalVideo);
    console.log('✅ Play button functional:', playButtonClicked);
    console.log('✅ Professional styling:', specificElements.gradientBackground);
    
    console.log('\n✅ Comprehensive Video Player Test Completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

testVideoPlayerComprehensive().catch(console.error);

