#!/bin/bash

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║                                                                      ║"
echo "║   🚀 DreamBuild LLM Training - AUTO LAUNCHER                        ║"
echo "║   Product of Bradley Virtual Solutions, LLC                         ║"
echo "║                                                                      ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""
echo "🎯 Preparing everything for you..."
echo ""

# Copy training code to clipboard
echo "📋 Copying training code to clipboard..."
cat colab-notebook-complete.py | pbcopy
echo "✅ Code copied! (Ready to paste with Cmd+V)"
echo ""

# Open training data folder
echo "📁 Opening training data folder..."
open .
echo "✅ Folder opened! (You'll see dreambuild-training-10k.jsonl)"
echo ""

# Open Google Colab
echo "🌐 Opening Google Colab..."
open "https://colab.research.google.com"
echo "✅ Colab opened in browser!"
echo ""

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║                                                                      ║"
echo "║   ✅ READY! Now Do This in Colab (2 minutes):                      ║"
echo "║                                                                      ║"
echo "║   1. Click '+ New Notebook'                                         ║"
echo "║   2. Runtime → Change runtime type → T4 GPU → Save                 ║"
echo "║   3. Paste code (Cmd+V) - Already in clipboard! ✅                 ║"
echo "║   4. Runtime → Run All                                              ║"
echo "║   5. Upload dreambuild-training-10k.jsonl when prompted            ║"
echo "║      (It's in the folder I just opened for you!)                   ║"
echo "║                                                                      ║"
echo "║   🎉 DONE! Training runs for 3-6 hours automatically!              ║"
echo "║                                                                      ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""
echo "💡 Tips:"
echo "   • Training code is already copied to clipboard"
echo "   • Training file is in the folder I opened"
echo "   • Just follow the 5 steps above in Colab"
echo "   • You can close your laptop after step 5!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Product of Bradley Virtual Solutions, LLC"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
