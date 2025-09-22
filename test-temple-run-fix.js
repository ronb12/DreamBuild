#!/usr/bin/env node

/**
 * Test script to verify Temple Run game fix
 * This script tests the Preview component's createReactPreview function
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Temple Run game fix...');

// Read the Preview.jsx file
const previewPath = path.join(__dirname, 'src', 'components', 'Preview.jsx');
const previewContent = fs.readFileSync(previewPath, 'utf8');

// Check if the fixes are in place
const checks = [
  {
    name: 'isTempleRun variable interpolation',
    pattern: /if \(\$\{isTempleRun\}\)/,
    expected: true
  },
  {
    name: 'isCoinCollector variable interpolation', 
    pattern: /} else if \(\$\{isCoinCollector\}\)/,
    expected: true
  },
  {
    name: 'Default game fallback',
    pattern: /} else \{\s*\/\/ Default Game/,
    expected: true
  }
];

let allPassed = true;

checks.forEach(check => {
  const found = check.pattern.test(previewContent);
  const status = found === check.expected ? '✅' : '❌';
  console.log(`${status} ${check.name}: ${found ? 'Found' : 'Not found'}`);
  
  if (found !== check.expected) {
    allPassed = false;
  }
});

if (allPassed) {
  console.log('\n🎉 All Temple Run fixes are in place!');
  console.log('The ReferenceError: isTempleRun is not defined should be resolved.');
} else {
  console.log('\n❌ Some fixes are missing. Please check the Preview.jsx file.');
}

// Additional check for template string structure
const templateStringCheck = previewContent.includes('const reactHTML = `');
if (templateStringCheck) {
  console.log('✅ Template string structure is correct');
} else {
  console.log('❌ Template string structure issue detected');
  allPassed = false;
}

process.exit(allPassed ? 0 : 1);
