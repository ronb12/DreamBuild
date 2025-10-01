# DreamBuild Tests
**Product of Bradley Virtual Solutions, LLC**

Organized test files and outputs for DreamBuild.

## 📁 Structure

- **scripts/** - All test scripts (.cjs, .js)
- **screenshots/** - Test result screenshots (.png)
- **logs/** - Test execution logs (.log)
- **reports/** - Test result reports (.json)
- **generated-apps/** - Sample apps created during testing

## 🧪 Key Tests

### Game Testing
- `test-50-games.cjs` - Comprehensive 50-game test
- `test-failed-games-only.cjs` - Retry failed games
- `test-all-unique-games.cjs` - Test unique implementations

### App Testing
- `test-30-apps.cjs` - 30 non-game apps test
- `verify-30-app-types.cjs` - App type verification
- `test-comprehensive-dreambuild.cjs` - Full capability test

### Feature Testing
- `test-live-preview.cjs` - Preview functionality
- `test-incremental-todo.cjs` - Incremental development

## ⚠️ Note

Test outputs (logs, reports, screenshots) are gitignored to keep the repo clean.
Only test scripts are version controlled.
