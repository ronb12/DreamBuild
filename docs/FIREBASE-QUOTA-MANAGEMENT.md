# 🔧 Firebase Quota Management Guide

**Product of Bradley Virtual Solutions, LLC**  
**Date:** October 2, 2025

---

## 📊 Current Situation

### Status:
- ⚠️ **19,789+ cached prompts** in Firebase
- ⚠️ **Daily write quota exceeded**
- ✅ **Local cache working** (0ms responses)
- ✅ **Code generation unaffected**

### Firebase Free Tier Limits:
```
Daily Limits:
- 50,000 document reads
- 20,000 document writes  ← We hit this
- 20,000 document deletes
- 1 GB stored data
```

---

## 🎯 Solutions to Get Under Quota

### **Option 1: Automated Cache Cleanup** ⭐ RECOMMENDED

Use our cleanup script to intelligently reduce cached entries:

```bash
# Step 1: Check current statistics
node scripts/cleanup-firebase-cache.cjs stats

# Step 2: Preview smart cleanup (dry run)
node scripts/cleanup-firebase-cache.cjs smart 10000

# Step 3: Execute cleanup
node scripts/cleanup-firebase-cache.cjs smart 10000 --execute
```

#### **Cleanup Strategies:**

**1. Smart Cleanup (Recommended)**
- Deletes never-used entries (usage = 0)
- Removes old single-use entries (> 7 days)
- Keeps most frequently used prompts
- Target: 10,000 high-value entries

```bash
# Reduce to 10,000 most valuable entries
node scripts/cleanup-firebase-cache.cjs smart 10000 --execute

# Expected savings: ~9,789 entries deleted
# Estimated time: 2-3 minutes
```

**2. Delete Low Usage**
- Removes entries used < 2 times
- Quick win for reducing quota

```bash
node scripts/cleanup-firebase-cache.cjs low-usage --execute
```

**3. Delete Old Entries**
- Removes entries older than X days
- Good for stale data cleanup

```bash
# Delete entries older than 60 days
node scripts/cleanup-firebase-cache.cjs old 60 --execute
```

**4. Keep Top N**
- Keeps only the most-used entries
- Aggressive but effective

```bash
# Keep only top 5,000 entries
node scripts/cleanup-firebase-cache.cjs top 5000 --execute
```

---

### **Option 2: Upgrade to Blaze Plan** 💰

**Benefits:**
- Unlimited writes (pay per use)
- First 50K reads FREE daily
- First 20K writes FREE daily
- Only pay for overages

**Cost Estimate:**
```
Monthly Usage:        Cost
────────────────────────────
1M writes            $1.80
10M reads            $6.00
Storage (1 GB)       $0.18
────────────────────────────
Total:               ~$8-10/month
```

**How to Upgrade:**
1. Go to: https://console.firebase.google.com/project/dreambuild-2024-app/usage
2. Click "Modify plan"
3. Select "Blaze (Pay as you go)"
4. Add billing info
5. Set budget alerts

**Recommended Budget Alert:**
```
Alert at: $10/month
Hard limit: $20/month (safety)
```

---

### **Option 3: Intelligent Caching Strategy** 🧠

Modify the caching behavior to be more selective:

#### **A. Cache Only Popular Prompts**

```javascript
// Update promptCacheService.js
async saveToCache(prompt, result) {
  // Only save to Firebase if:
  // 1. Prompt is used multiple times
  // 2. Response is valuable (not an error)
  
  const usageCount = this.getLocalUsageCount(prompt)
  
  if (usageCount >= 3) {
    // Popular prompt - worth caching in Firebase
    await this.firebaseSave(prompt, result)
  }
  
  // Always save to local cache (free, instant)
  this.localCache.set(prompt, result)
}
```

#### **B. Batch Writes**

```javascript
// Accumulate writes and batch them
let pendingWrites = []

async queueCacheWrite(prompt, result) {
  pendingWrites.push({ prompt, result })
  
  // Batch every 10 writes
  if (pendingWrites.length >= 10) {
    await this.batchWriteToFirebase(pendingWrites)
    pendingWrites = []
  }
}
```

#### **C. TTL (Time To Live)**

```javascript
// Add expiration to cached entries
async saveToCache(prompt, result) {
  const ttl = 30 * 24 * 60 * 60 * 1000 // 30 days
  const expiresAt = new Date(Date.now() + ttl)
  
  await firestore.collection('cached_prompts').add({
    prompt,
    result,
    expiresAt,
    // ... other fields
  })
}

// Auto-cleanup expired entries
async cleanupExpired() {
  const now = new Date()
  const snapshot = await firestore
    .collection('cached_prompts')
    .where('expiresAt', '<', now)
    .get()
  
  // Delete expired entries
}
```

---

### **Option 4: Reduce Cache Size Limit**

Currently set to 20,000 - reduce to 10,000:

```javascript
// Update promptCacheService.js
class PromptCacheService {
  constructor() {
    this.collectionName = 'cached_prompts'
    this.maxCacheSize = 10000  // Reduced from 20000
    // ...
  }
}
```

---

## 📋 Recommended Action Plan

### **Immediate (Today):**

1. **Run cleanup script:**
   ```bash
   # Preview what will be deleted
   node scripts/cleanup-firebase-cache.cjs stats
   node scripts/cleanup-firebase-cache.cjs smart 10000
   
   # Execute if satisfied
   node scripts/cleanup-firebase-cache.cjs smart 10000 --execute
   ```
   
   **Expected Result:**
   - Reduce from 19,789 to 10,000 entries
   - Delete ~9,789 low-value entries
   - Keep all high-usage prompts
   - Free up ~50% quota

2. **Update cache limit:**
   ```javascript
   // src/services/promptCacheService.js
   this.maxCacheSize = 10000  // Reduced from 20000
   ```

3. **Deploy update:**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### **Short-term (This Week):**

1. **Implement intelligent caching:**
   - Only cache prompts used 3+ times
   - Add TTL to entries (30 days)
   - Implement batch writes

2. **Monitor quota usage:**
   - Check Firebase console daily
   - Watch for quota warnings
   - Track cache hit rates

### **Long-term (This Month):**

1. **Consider Blaze Plan upgrade:**
   - Cost: $8-10/month
   - Unlimited scaling
   - No quota issues
   - Better for growth

2. **Implement auto-cleanup:**
   - Schedule weekly cleanup job
   - Remove entries > 60 days old
   - Keep only top 10,000 entries

---

## 🚀 Cleanup Script Usage

### **Prerequisites:**

1. Download Firebase Admin SDK key:
   ```
   1. Visit: https://console.firebase.google.com/project/dreambuild-2024-app/settings/serviceaccounts/adminsdk
   2. Click "Generate new private key"
   3. Save as: dreambuild-2024-app-firebase-adminsdk.json
   4. Place in project root
   ```

2. Install dependencies (if needed):
   ```bash
   npm install firebase-admin --save-dev
   ```

### **Commands:**

```bash
# View statistics
node scripts/cleanup-firebase-cache.cjs stats

# Smart cleanup (recommended)
node scripts/cleanup-firebase-cache.cjs smart 10000
node scripts/cleanup-firebase-cache.cjs smart 10000 --execute

# Delete low-usage entries
node scripts/cleanup-firebase-cache.cjs low-usage
node scripts/cleanup-firebase-cache.cjs low-usage --execute

# Delete old entries
node scripts/cleanup-firebase-cache.cjs old 60
node scripts/cleanup-firebase-cache.cjs old 60 --execute

# Keep only top N
node scripts/cleanup-firebase-cache.cjs top 5000
node scripts/cleanup-firebase-cache.cjs top 5000 --execute
```

### **Safety Features:**

- ✅ **Dry run by default** - preview before deleting
- ✅ **Batch processing** - handles large datasets
- ✅ **Progress tracking** - shows deletion progress
- ✅ **Smart prioritization** - keeps valuable entries

---

## 📊 Expected Results

### **After Smart Cleanup to 10,000:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total Entries | 19,789 | 10,000 | -49.5% |
| Daily Writes | ~2,000 | ~500 | -75% |
| Storage Used | ~200 MB | ~100 MB | -50% |
| Quota Usage | 100% | 25% | Under limit ✅ |

### **What Gets Deleted:**
- ❌ Never-used entries (usage = 0)
- ❌ Single-use entries > 7 days old
- ❌ Low-usage entries (< 5 uses)

### **What Gets Kept:**
- ✅ High-usage prompts (20+ uses)
- ✅ Recent popular prompts
- ✅ Medium-usage valuable prompts
- ✅ Top 10,000 most useful entries

---

## 🔍 Monitoring & Maintenance

### **Daily Checks:**
```bash
# Check quota status
node scripts/cleanup-firebase-cache.cjs stats
```

### **Weekly Maintenance:**
```bash
# Remove old low-usage entries
node scripts/cleanup-firebase-cache.cjs old 30 --execute
```

### **Monthly Review:**
```bash
# Optimize to top performers
node scripts/cleanup-firebase-cache.cjs top 8000 --execute
```

### **Firebase Console Monitoring:**
1. Visit: https://console.firebase.google.com/project/dreambuild-2024-app/usage
2. Check daily quota usage
3. Set up billing alerts (if using Blaze)
4. Review storage usage

---

## 💡 Best Practices

### **1. Dual-Layer Caching:**
```
Local Cache (100 entries):
- Instant (0ms)
- Free
- No quota

Firebase Cache (10,000 entries):
- Fast (100-500ms)
- Shared across sessions
- Quota-aware
```

### **2. Cache Prioritization:**
```
Priority 1: High-usage prompts (20+ uses)
Priority 2: Medium-usage prompts (5-19 uses)
Priority 3: Recent prompts (< 7 days)
Priority 4: Low-usage prompts (2-4 uses)
Delete: Never-used or single-use old prompts
```

### **3. Smart Saving:**
```javascript
// Save strategy
if (localCache.has(prompt)) {
  return localCache.get(prompt)  // 0ms
}

if (usageCount >= 3 && !firebaseCache.has(prompt)) {
  await firebaseCache.save(prompt, result)  // Only if popular
}

localCache.set(prompt, result)  // Always cache locally
```

---

## ✅ Success Criteria

After cleanup, you should see:

- ✅ **Firebase entries: ~10,000** (down from 19,789)
- ✅ **Daily writes: < 1,000** (under 20K limit)
- ✅ **Cache hit rate: 70-80%** (maintained)
- ✅ **Local cache: 0ms** (unchanged)
- ✅ **Firebase cache: 100-500ms** (unchanged)
- ✅ **No quota errors** in console

---

## 🆘 Troubleshooting

### **Issue: Script fails to connect**
```bash
# Solution: Check service account key
ls -la dreambuild-2024-app-firebase-adminsdk.json

# If missing, download from Firebase Console
```

### **Issue: Deletion too slow**
```bash
# Solution: Script uses batches of 500
# For 10,000 deletions: ~20 batches = 2-3 minutes
# This is normal and safe
```

### **Issue: Still hitting quota**
```bash
# Solution: Reduce target further
node scripts/cleanup-firebase-cache.cjs smart 5000 --execute

# Or upgrade to Blaze plan
```

---

## 📞 Support

**Firebase Console:**  
https://console.firebase.google.com/project/dreambuild-2024-app

**Firestore Usage:**  
https://console.firebase.google.com/project/dreambuild-2024-app/firestore/usage

**Billing (Blaze Plan):**  
https://console.firebase.google.com/project/dreambuild-2024-app/usage/details

---

**Product of Bradley Virtual Solutions, LLC**  
**Ready to optimize Firebase quota usage!** 🚀

