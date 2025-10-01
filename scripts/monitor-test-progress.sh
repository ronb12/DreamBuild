#!/bin/bash
# Monitor 50 Games Test Progress
# Product of Bradley Virtual Solutions, LLC

clear
echo "🎮 50 GAMES TEST PROGRESS MONITOR"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Check if log file exists
if [ ! -f "50-games-test-output.log" ]; then
  echo "⏳ Test not started yet or log file not created..."
  exit 0
fi

# Count tests completed
TOTAL_TESTS=$(grep -c "🎮 Test" 50-games-test-output.log 2>/dev/null || echo "0")
PASSED=$(grep -c "✅ PASS:" 50-games-test-output.log 2>/dev/null || echo "0")
FAILED=$(grep -c "❌ FAIL:" 50-games-test-output.log 2>/dev/null || echo "0")
ERRORS=$(grep -c "❌ ERROR:" 50-games-test-output.log 2>/dev/null || echo "0")

# Calculate percentage
if [ "$TOTAL_TESTS" -gt 0 ]; then
  PERCENT=$(echo "scale=1; $TOTAL_TESTS * 100 / 50" | bc)
else
  PERCENT="0.0"
fi

# Calculate pass rate
if [ "$TOTAL_TESTS" -gt 0 ]; then
  PASS_RATE=$(echo "scale=1; $PASSED * 100 / $TOTAL_TESTS" | bc)
else
  PASS_RATE="0.0"
fi

# Progress bar
PROGRESS_BARS=$(printf '█%.0s' $(seq 1 $((TOTAL_TESTS / 2))))
REMAINING_BARS=$(printf '░%.0s' $(seq 1 $((25 - TOTAL_TESTS / 2))))

echo "Progress: [$PROGRESS_BARS$REMAINING_BARS] $TOTAL_TESTS/50 ($PERCENT%)"
echo ""
echo "📊 Current Results:"
echo "   ✅ Passed: $PASSED"
echo "   ❌ Failed: $FAILED"
echo "   ⚠️  Errors: $ERRORS"
echo "   📈 Pass Rate: $PASS_RATE%"
echo ""

# Show last game tested
LAST_GAME=$(grep "🎮 Test" 50-games-test-output.log | tail -1)
if [ ! -z "$LAST_GAME" ]; then
  echo "🎯 Current: $LAST_GAME"
fi

# Show last few results
echo ""
echo "📋 Recent Results:"
tail -20 50-games-test-output.log | grep -E "(✅ PASS|❌ FAIL)" | tail -5

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "💡 Run this script again to see updated progress"
echo "   ./monitor-test-progress.sh"
echo ""

