// Generated for project: dream-game-app
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game App</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <h1 class="app-title">Game App</h1>
        <nav class="app-nav">
          <!-- Navigation items -->
        </nav>
      </div>
    </header>
    
    <main class="app-main">
      <div class="container">
        <div id="content-area">
          
        <div id="game" class="app-section">
          <!-- Game component will be rendered here -->
        </div>
          <div class="loading-state">
            <div class="spinner"></div>
            <p>Loading application...</p>
          </div>
        </div>
      </div>
    </main>
    
    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2024 Game App. Built with DreamBuild AI.</p>
      </div>
    </footer>
  </div>
  
  <script src="script.js"></script>
  <script>
    // Initialize app when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof initializeApp === 'function') {
        initializeApp()
      }
    })
  </script>
</body>
</html>