// DreamBuild Mobile App Service
// Generates iOS and Android apps using modern frameworks

class MobileAppService {
  constructor() {
    this.supportedFrameworks = {
      'react-native': {
        name: 'React Native',
        description: 'Cross-platform mobile apps with JavaScript',
        platforms: ['ios', 'android'],
        languages: ['javascript', 'typescript'],
        features: ['native-performance', 'hot-reload', 'large-community']
      },
      'flutter': {
        name: 'Flutter',
        description: 'Cross-platform apps with Dart',
        platforms: ['ios', 'android', 'web'],
        languages: ['dart'],
        features: ['fast-development', 'beautiful-ui', 'google-backed']
      },
      'ionic': {
        name: 'Ionic',
        description: 'Cross-platform apps with web technologies',
        platforms: ['ios', 'android', 'web'],
        languages: ['javascript', 'typescript'],
        features: ['web-based', 'easy-deployment', 'pwa-ready']
      },
      'pwa': {
        name: 'Progressive Web App',
        description: 'Web apps that work like native apps',
        platforms: ['ios', 'android', 'web'],
        languages: ['javascript', 'html', 'css'],
        features: ['no-app-store', 'instant-updates', 'cross-platform']
      },
      'capacitor': {
        name: 'Capacitor',
        description: 'Native apps from web technologies',
        platforms: ['ios', 'android', 'web'],
        languages: ['javascript', 'typescript'],
        features: ['web-to-native', 'plugin-system', 'ionic-integration']
      }
    }
  }

  // Generate mobile app based on user requirements
  async generateMobileApp(prompt, config = {}) {
    const framework = this.detectFramework(prompt, config)
    const platform = this.detectPlatform(prompt, config)
    
    console.log(`📱 Generating ${framework.name} app for ${platform}...`)
    
    switch (framework.id) {
      case 'react-native':
        return this.generateReactNativeApp(prompt, config, platform)
      case 'flutter':
        return this.generateFlutterApp(prompt, config, platform)
      case 'ionic':
        return this.generateIonicApp(prompt, config, platform)
      case 'pwa':
        return this.generatePWAApp(prompt, config, platform)
      case 'capacitor':
        return this.generateCapacitorApp(prompt, config, platform)
      default:
        return this.generatePWAApp(prompt, config, platform) // Default to PWA
    }
  }

  // Detect best framework for the app
  detectFramework(prompt, config) {
    const lowerPrompt = prompt.toLowerCase()
    const configFramework = config.framework || config.mobileFramework
    
    // Check for specific framework mentions
    if (lowerPrompt.includes('react native') || lowerPrompt.includes('react-native')) {
      return this.supportedFrameworks['react-native']
    }
    if (lowerPrompt.includes('flutter')) {
      return this.supportedFrameworks['flutter']
    }
    if (lowerPrompt.includes('ionic')) {
      return this.supportedFrameworks['ionic']
    }
    if (lowerPrompt.includes('capacitor')) {
      return this.supportedFrameworks['capacitor']
    }
    if (lowerPrompt.includes('pwa') || lowerPrompt.includes('progressive web app')) {
      return this.supportedFrameworks['pwa']
    }
    
    // Check config preference
    if (configFramework && this.supportedFrameworks[configFramework]) {
      return this.supportedFrameworks[configFramework]
    }
    
    // Default based on app type
    if (lowerPrompt.includes('game') || lowerPrompt.includes('performance')) {
      return this.supportedFrameworks['react-native']
    }
    if (lowerPrompt.includes('ui') || lowerPrompt.includes('design') || lowerPrompt.includes('beautiful')) {
      return this.supportedFrameworks['flutter']
    }
    if (lowerPrompt.includes('web') || lowerPrompt.includes('website') || lowerPrompt.includes('simple')) {
      return this.supportedFrameworks['pwa']
    }
    
    // Default to PWA for simplicity
    return this.supportedFrameworks['pwa']
  }

  // Detect target platform
  detectPlatform(prompt, config) {
    const lowerPrompt = prompt.toLowerCase()
    const configPlatform = config.platform || config.mobilePlatform
    
    if (configPlatform) {
      return configPlatform
    }
    
    if (lowerPrompt.includes('ios') || lowerPrompt.includes('iphone') || lowerPrompt.includes('apple')) {
      return 'ios'
    }
    if (lowerPrompt.includes('android') || lowerPrompt.includes('google play')) {
      return 'android'
    }
    
    return 'cross-platform' // Default to cross-platform
  }

  // Generate React Native app
  generateReactNativeApp(prompt, config, platform) {
    const appName = config.projectName || 'DreamBuildApp'
    const packageName = appName.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    return {
      'package.json': this.generateReactNativePackageJSON(appName, config),
      'App.js': this.generateReactNativeAppJS(appName, prompt, config),
      'App.json': this.generateReactNativeAppJSON(appName, config),
      'metro.config.js': this.generateMetroConfig(),
      'babel.config.js': this.generateBabelConfig(),
      'android/app/build.gradle': this.generateAndroidBuildGradle(appName, packageName),
      'android/app/src/main/AndroidManifest.xml': this.generateAndroidManifest(appName, packageName),
      'ios/Info.plist': this.generateIOSInfoPlist(appName, packageName),
      'README.md': this.generateReactNativeREADME(appName, prompt, config),
      'app.json': this.generateExpoConfig(appName, config)
    }
  }

  // Generate Flutter app
  generateFlutterApp(prompt, config, platform) {
    const appName = config.projectName || 'dreambuild_app'
    const packageName = appName.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    return {
      'pubspec.yaml': this.generateFlutterPubspec(appName, config),
      'lib/main.dart': this.generateFlutterMain(appName, prompt, config),
      'android/app/build.gradle': this.generateFlutterAndroidBuildGradle(appName, packageName),
      'android/app/src/main/AndroidManifest.xml': this.generateFlutterAndroidManifest(appName, packageName),
      'ios/Runner/Info.plist': this.generateFlutterIOSInfoPlist(appName, packageName),
      'README.md': this.generateFlutterREADME(appName, prompt, config)
    }
  }

  // Generate Ionic app
  generateIonicApp(prompt, config, platform) {
    const appName = config.projectName || 'DreamBuildApp'
    const packageName = appName.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    return {
      'package.json': this.generateIonicPackageJSON(appName, config),
      'ionic.config.json': this.generateIonicConfig(appName, config),
      'src/app/app.component.ts': this.generateIonicAppComponent(appName, prompt, config),
      'src/app/app.module.ts': this.generateIonicAppModule(appName, config),
      'src/index.html': this.generateIonicIndexHTML(appName, config),
      'capacitor.config.json': this.generateCapacitorConfig(appName, config),
      'android/app/build.gradle': this.generateCapacitorAndroidBuildGradle(appName, packageName),
      'ios/App/App/Info.plist': this.generateCapacitorIOSInfoPlist(appName, packageName),
      'README.md': this.generateIonicREADME(appName, prompt, config)
    }
  }

  // Generate PWA app
  generatePWAApp(prompt, config, platform) {
    const appName = config.projectName || 'DreamBuild App'
    
    return {
      'index.html': this.generatePWAHTML(appName, prompt, config),
      'manifest.json': this.generatePWAManifest(appName, config),
      'sw.js': this.generatePWAServiceWorker(appName, config),
      'style.css': this.generatePWACSS(appName, config),
      'script.js': this.generatePWAJavaScript(appName, prompt, config),
      'package.json': this.generatePWAPackageJSON(appName, config),
      'README.md': this.generatePWAREADME(appName, prompt, config)
    }
  }

  // Generate Capacitor app
  generateCapacitorApp(prompt, config, platform) {
    const appName = config.projectName || 'DreamBuildApp'
    const packageName = appName.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    return {
      'package.json': this.generateCapacitorPackageJSON(appName, config),
      'capacitor.config.json': this.generateCapacitorConfig(appName, config),
      'src/index.html': this.generateCapacitorIndexHTML(appName, config),
      'src/main.ts': this.generateCapacitorMain(appName, prompt, config),
      'src/app/app.component.ts': this.generateCapacitorAppComponent(appName, prompt, config),
      'android/app/build.gradle': this.generateCapacitorAndroidBuildGradle(appName, packageName),
      'ios/App/App/Info.plist': this.generateCapacitorIOSInfoPlist(appName, packageName),
      'README.md': this.generateCapacitorREADME(appName, prompt, config)
    }
  }

  // React Native generators
  generateReactNativePackageJSON(appName, config) {
    return JSON.stringify({
      "name": appName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      "version": "1.0.0",
      "description": `Built with DreamBuild - ${appName}`,
      "main": "node_modules/expo/AppEntry.js",
      "scripts": {
        "start": "expo start",
        "android": "expo start --android",
        "ios": "expo start --ios",
        "web": "expo start --web",
        "build:android": "eas build --platform android",
        "build:ios": "eas build --platform ios"
      },
      "dependencies": {
        "expo": "~50.0.0",
        "react": "18.2.0",
        "react-native": "0.73.0",
        "@expo/vector-icons": "^14.0.0",
        "react-native-safe-area-context": "4.8.2",
        "react-native-screens": "~3.29.0",
        "@react-navigation/native": "^6.1.9",
        "@react-navigation/stack": "^6.3.20"
      },
      "devDependencies": {
        "@babel/core": "^7.20.0"
      },
      "keywords": ["react-native", "expo", "mobile", "dreambuild"],
      "author": "DreamBuild AI",
      "license": "MIT"
    }, null, 2)
  }

  generateReactNativeAppJS(appName, prompt, config) {
    return `import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🚀 ${appName}</Text>
          <Text style={styles.subtitle}>Built with DreamBuild</Text>
        </View>
        
        <View style={styles.features}>
          <Text style={styles.featureTitle}>Features:</Text>
          <Text style={styles.feature}>✅ Cross-platform (iOS & Android)</Text>
          <Text style={styles.feature}>✅ React Native + Expo</Text>
          <Text style={styles.feature}>✅ Native performance</Text>
          <Text style={styles.feature}>✅ Hot reload development</Text>
        </View>
        
        <View style={styles.info}>
          <Text style={styles.infoText}>
            This is a React Native app generated by DreamBuild AI.
            Edit App.js to customize your app.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  features: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  feature: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 8,
  },
  info: {
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  infoText: {
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
});
`
  }

  generateReactNativeAppJSON(appName, config) {
    return JSON.stringify({
      "expo": {
        "name": appName,
        "slug": appName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
          "image": "./assets/splash.png",
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": ["**/*"],
        "ios": {
          "supportsTablet": true,
          "bundleIdentifier": `com.dreambuild.${appName.toLowerCase().replace(/[^a-z0-9]/g, '')}`
        },
        "android": {
          "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#ffffff"
          },
          "package": `com.dreambuild.${appName.toLowerCase().replace(/[^a-z0-9]/g, '')}`
        },
        "web": {
          "favicon": "./assets/favicon.png"
        }
      }
    }, null, 2)
  }

  // Flutter generators
  generateFlutterPubspec(appName, config) {
    return `name: ${appName.toLowerCase().replace(/[^a-z0-9]/g, '_')}
description: Built with DreamBuild - ${appName}
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'
  flutter: ">=3.10.0"

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  http: ^1.1.0
  shared_preferences: ^2.2.2

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/images/
`
  }

  generateFlutterMain(appName, prompt, config) {
    return `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '${appName}',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: '${appName}'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Icon(
              Icons.rocket_launch,
              size: 80,
              color: Colors.blue,
            ),
            const SizedBox(height: 20),
            Text(
              '🚀 ${appName}',
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              'Built with DreamBuild',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: Colors.grey[600],
              ),
            ),
            const SizedBox(height: 40),
            Card(
              margin: const EdgeInsets.all(20),
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Features:',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 10),
                    const FeatureItem(icon: Icons.check_circle, text: 'Cross-platform (iOS & Android)'),
                    const FeatureItem(icon: Icons.check_circle, text: 'Flutter framework'),
                    const FeatureItem(icon: Icons.check_circle, text: 'Material Design 3'),
                    const FeatureItem(icon: Icons.check_circle, text: 'Hot reload development'),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class FeatureItem extends StatelessWidget {
  final IconData icon;
  final String text;

  const FeatureItem({
    super.key,
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        children: [
          Icon(icon, color: Colors.green, size: 20),
          const SizedBox(width: 8),
          Text(text),
        ],
      ),
    );
  }
}
`
  }

  // PWA generators
  generatePWAHTML(appName, prompt, config) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
    <meta name="description" content="Built with DreamBuild - ${appName}">
    <meta name="theme-color" content="#2563eb">
    <link rel="manifest" href="manifest.json">
    <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
    <link rel="apple-touch-icon" href="icon-192.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="${appName}">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app">
        <header class="app-header">
            <h1>🚀 ${appName}</h1>
            <p>Built with DreamBuild</p>
        </header>
        
        <main class="app-main">
            <div class="feature-card">
                <h2>Mobile App Features</h2>
                <ul class="feature-list">
                    <li>✅ Progressive Web App (PWA)</li>
                    <li>✅ Installable on iOS & Android</li>
                    <li>✅ Offline functionality</li>
                    <li>✅ Push notifications</li>
                    <li>✅ App-like experience</li>
                </ul>
            </div>
            
            <div class="info-card">
                <h3>Install Instructions</h3>
                <div class="install-steps">
                    <div class="step">
                        <strong>iOS:</strong> Tap Share → Add to Home Screen
                    </div>
                    <div class="step">
                        <strong>Android:</strong> Tap menu → Add to Home Screen
                    </div>
                </div>
            </div>
        </main>
        
        <footer class="app-footer">
            <p>Powered by <strong>DreamBuild AI</strong></p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`
  }

  generatePWAManifest(appName, config) {
    return JSON.stringify({
      "name": appName,
      "short_name": appName.split(' ')[0],
      "description": `Built with DreamBuild - ${appName}`,
      "start_url": "/",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#2563eb",
      "orientation": "portrait-primary",
      "icons": [
        {
          "src": "icon-192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "icon-512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ],
      "categories": ["productivity", "utilities"],
      "screenshots": [
        {
          "src": "screenshot-mobile.png",
          "sizes": "390x844",
          "type": "image/png",
          "form_factor": "narrow"
        }
      ]
    }, null, 2)
  }

  generatePWAServiceWorker(appName, config) {
    return `// DreamBuild PWA Service Worker
const CACHE_NAME = 'dreambuild-${appName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});`
  }

  generatePWACSS(appName, config) {
    return `/* DreamBuild PWA Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 40px 20px;
  color: white;
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.app-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.app-main {
  flex: 1;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.feature-card, .info-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.feature-card h2, .info-card h3 {
  color: #1e293b;
  margin-bottom: 16px;
  font-size: 1.5rem;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  padding: 8px 0;
  font-size: 1.1rem;
  color: #475569;
}

.install-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step {
  padding: 12px;
  background: #f1f5f9;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #334155;
}

.app-footer {
  text-align: center;
  padding: 20px;
  color: white;
  opacity: 0.8;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  
  .feature-card, .info-card {
    margin: 10px;
    padding: 20px;
  }
}

/* PWA specific styles */
@media (display-mode: standalone) {
  body {
    user-select: none;
    -webkit-user-select: none;
  }
}`
  }

  generatePWAJavaScript(appName, prompt, config) {
    return `// DreamBuild PWA JavaScript
console.log('🚀 ${appName} PWA loaded!');

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// PWA install prompt
let deferredPrompt;
const installButton = document.createElement('button');
installButton.textContent = 'Install App';
installButton.className = 'install-button';
installButton.style.cssText = \`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  z-index: 1000;
\`;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.body.appendChild(installButton);
});

installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('User choice:', outcome);
    deferredPrompt = null;
    installButton.remove();
  }
});

// App functionality
document.addEventListener('DOMContentLoaded', () => {
  console.log('📱 ${appName} PWA ready!');
  
  // Add some interactive features
  const featureItems = document.querySelectorAll('.feature-list li');
  featureItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.style.transform = 'scale(1.05)';
      setTimeout(() => {
        item.style.transform = 'scale(1)';
      }, 200);
    });
  });
});

// Handle app updates
window.addEventListener('appinstalled', () => {
  console.log('🎉 ${appName} installed successfully!');
});

// Network status
window.addEventListener('online', () => {
  console.log('📶 App is online');
});

window.addEventListener('offline', () => {
  console.log('📵 App is offline');
});`
  }

  // Helper methods for other frameworks
  generateMetroConfig() {
    return `module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};`
  }

  generateBabelConfig() {
    return `module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};`
  }

  generateAndroidBuildGradle(appName, packageName) {
    return `android {
    compileSdkVersion rootProject.ext.compileSdkVersion

    defaultConfig {
        applicationId "${packageName}"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}`
  }

  generateAndroidManifest(appName, packageName) {
    return `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="${packageName}">

    <application
        android:name=".MainApplication"
        android:label="${appName}"
        android:icon="@mipmap/ic_launcher"
        android:allowBackup="false"
        android:theme="@style/AppTheme">
        <activity
            android:name=".MainActivity"
            android:label="${appName}"
            android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
            android:launchMode="singleTask"
            android:windowSoftInputMode="adjustResize"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>`
  }

  generateIOSInfoPlist(appName, packageName) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleDisplayName</key>
    <string>${appName}</string>
    <key>CFBundleIdentifier</key>
    <string>${packageName}</string>
    <key>CFBundleName</key>
    <string>${appName}</string>
    <key>CFBundleVersion</key>
    <string>1.0.0</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0.0</string>
</dict>
</plist>`
  }

  // README generators
  generateReactNativeREADME(appName, prompt, config) {
    return `# ${appName}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 📱 React Native App

This is a React Native mobile application built with Expo.

### 🚀 Features

- **Cross-platform**: iOS and Android
- **Framework**: React Native with Expo
- **Performance**: Native performance
- **Development**: Hot reload and fast refresh

### 🛠️ Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start the development server:**
   \`\`\`bash
   npm start
   \`\`\`

3. **Run on device/simulator:**
   \`\`\`bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   \`\`\`

### 📦 Building for Production

1. **Build for Android:**
   \`\`\`bash
   npm run build:android
   \`\`\`

2. **Build for iOS:**
   \`\`\`bash
   npm run build:ios
   \`\`\`

### 📱 App Features

- Modern React Native architecture
- Expo SDK integration
- Cross-platform compatibility
- Native performance
- Easy deployment

### 🤖 Built with DreamBuild

Created using DreamBuild's AI-powered development platform. Visit [dreambuild-2024-app.web.app](https://dreambuild-2024-app.web.app) to build your own apps!

---

*Generated on ${new Date().toLocaleDateString()} by DreamBuild AI*
`
  }

  generateFlutterREADME(appName, prompt, config) {
    return `# ${appName}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 📱 Flutter App

This is a Flutter mobile application built with Dart.

### 🚀 Features

- **Cross-platform**: iOS and Android
- **Framework**: Flutter with Dart
- **UI**: Material Design 3
- **Performance**: Native performance

### 🛠️ Getting Started

1. **Install Flutter:** Follow the [official guide](https://flutter.dev/docs/get-started/install)

2. **Install dependencies:**
   \`\`\`bash
   flutter pub get
   \`\`\`

3. **Run the app:**
   \`\`\`bash
   flutter run
   \`\`\`

### 📦 Building for Production

1. **Build APK for Android:**
   \`\`\`bash
   flutter build apk
   \`\`\`

2. **Build iOS app:**
   \`\`\`bash
   flutter build ios
   \`\`\`

### 📱 App Features

- Flutter framework
- Material Design 3
- Cross-platform compatibility
- Hot reload development
- Native performance

### 🤖 Built with DreamBuild

Created using DreamBuild's AI-powered development platform. Visit [dreambuild-2024-app.web.app](https://dreambuild-2024-app.web.app) to build your own apps!

---

*Generated on ${new Date().toLocaleDateString()} by DreamBuild AI*
`
  }

  generatePWAREADME(appName, prompt, config) {
    return `# ${appName}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 📱 Progressive Web App (PWA)

This is a Progressive Web App that works on iOS, Android, and desktop browsers.

### 🚀 Features

- **Cross-platform**: iOS, Android, Desktop
- **Installable**: Add to home screen
- **Offline**: Works without internet
- **Native-like**: App-like experience

### 📱 Installation

#### iOS (iPhone/iPad)
1. Open in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Tap "Add"

#### Android
1. Open in Chrome
2. Tap the menu (three dots)
3. Select "Add to Home Screen"
4. Tap "Add"

### 🛠️ Development

1. **Local development:**
   \`\`\`bash
   # Serve locally
   npx serve .
   
   # Or use any static server
   python -m http.server 8000
   \`\`\`

2. **Test PWA features:**
   - Use Chrome DevTools → Application tab
   - Test offline functionality
   - Check manifest and service worker

### 📱 PWA Features

- Service Worker for offline functionality
- Web App Manifest for installation
- Responsive design for all devices
- Push notification support
- App-like navigation

### 🌐 Deployment

Deploy to any static hosting service:
- Firebase Hosting
- GitHub Pages
- Netlify
- Vercel

### 🤖 Built with DreamBuild

Created using DreamBuild's AI-powered development platform. Visit [dreambuild-2024-app.web.app](https://dreambuild-2024-app.web.app) to build your own apps!

---

*Generated on ${new Date().toLocaleDateString()} by DreamBuild AI*
`
  }

  // Additional helper methods for other frameworks would go here...
  generateIonicPackageJSON(appName, config) {
    return JSON.stringify({
      "name": appName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      "version": "1.0.0",
      "description": `Built with DreamBuild - ${appName}`,
      "main": "index.js",
      "scripts": {
        "build": "ionic build",
        "serve": "ionic serve",
        "ios": "ionic capacitor run ios",
        "android": "ionic capacitor run android"
      },
      "dependencies": {
        "@ionic/core": "^7.0.0",
        "@ionic/react": "^7.0.0",
        "@capacitor/core": "^5.0.0",
        "@capacitor/ios": "^5.0.0",
        "@capacitor/android": "^5.0.0"
      },
      "devDependencies": {
        "@ionic/cli": "^7.0.0"
      },
      "keywords": ["ionic", "capacitor", "mobile", "dreambuild"],
      "author": "DreamBuild AI",
      "license": "MIT"
    }, null, 2)
  }

  generateCapacitorConfig(appName, config) {
    return JSON.stringify({
      "appId": `com.dreambuild.${appName.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
      "appName": appName,
      "webDir": "dist",
      "server": {
        "androidScheme": "https"
      }
    }, null, 2)
  }

  // More helper methods...
  generateExpoConfig(appName, config) {
    return JSON.stringify({
      "expo": {
        "name": appName,
        "slug": appName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        "version": "1.0.0",
        "platforms": ["ios", "android", "web"],
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "splash": {
          "image": "./assets/splash.png",
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      }
    }, null, 2)
  }

  generatePWAPackageJSON(appName, config) {
    return JSON.stringify({
      "name": appName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      "version": "1.0.0",
      "description": `Built with DreamBuild - ${appName}`,
      "main": "index.html",
      "scripts": {
        "start": "npx serve .",
        "build": "echo 'PWA - no build required'",
        "deploy": "echo 'Deploy using DreamBuild deployment system'"
      },
      "keywords": ["pwa", "progressive-web-app", "mobile", "dreambuild"],
      "author": "DreamBuild AI",
      "license": "MIT",
      "dependencies": {},
      "devDependencies": {
        "serve": "^14.0.0"
      }
    }, null, 2)
  }

  // Additional framework-specific generators would continue here...
}

export default new MobileAppService()
