#!/bin/bash
echo "🔍 Monitoring 30 Apps Test Progress..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

while true; do
  clear
  echo "📊 LIVE TEST PROGRESS"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  
  if [ -f "30-apps-test-output.log" ]; then
    # Count completed tests
    COMPLETED=$(grep -c "Test [0-9]*/30:" 30-apps-test-output.log 2>/dev/null || echo "0")
    PASSED=$(grep -c "✅ PASS:" 30-apps-test-output.log 2>/dev/null || echo "0")
    FAILED=$(grep -c "❌ FAIL:" 30-apps-test-output.log 2>/dev/null || echo "0")
    
    echo "Tests Completed: $COMPLETED/30"
    echo "✅ Passed: $PASSED"
    echo "❌ Failed: $FAILED"
    echo ""
    
    # Show last few test results
    echo "Recent Results:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    tail -15 30-apps-test-output.log | grep -E "Test [0-9]|✅ PASS|❌ FAIL" | tail -10
    
    # Check if complete
    if grep -q "30 APPS TEST RESULTS" 30-apps-test-output.log 2>/dev/null; then
      echo ""
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo "✅ TEST COMPLETE!"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      tail -20 30-apps-test-output.log | grep -A 20 "APPS TEST RESULTS"
      break
    fi
  else
    echo "⏳ Waiting for test to start..."
  fi
  
  echo ""
  echo "Press Ctrl+C to stop monitoring"
  sleep 5
done
