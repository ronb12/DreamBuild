// src/services/htmlCssEnhancementService.js

const htmlCssTemplates = {
  landingPage: {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Landing Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <h1>DreamBuild Landing</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#features" class="nav-link">Features</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>Build Your Dreams with AI</h2>
                <p>Leverage the power of AI to generate stunning web applications instantly.</p>
                <button class="cta-button" onclick="alert('Get Started!')">Get Started</button>
            </div>
        </section>

        <section id="features" class="features">
            <div class="container">
                <h2>Powerful Features</h2>
                <div class="feature-grid">
                    <div class="feature-item">
                        <h3>AI Code Generation</h3>
                        <p>Generate code in multiple languages with intelligent AI models.</p>
                    </div>
                    <div class="feature-item">
                        <h3>Beautiful Templates</h3>
                        <p>Start with professionally designed templates for any project.</p>
                    </div>
                    <div class="feature-item">
                        <h3>One-Click Deployment</h3>
                        <p>Deploy your applications to various hosting providers effortlessly.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 DreamBuild. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`,
    'styles.css': `/* General Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
    color: #333;
    background-color: #f4f7f6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: fixed;
    width: 100%;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.nav-brand h1 {
    color: #667eea;
    font-size: 1.8rem;
    font-weight: 700;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #667eea;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 10rem 0 8rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.hero-content {
    max-width: 800px;
    margin-top: -5rem;
}

.hero h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
}

.cta-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-button:hover {
    background: #45a049;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* Features Section */
.features {
    padding: 5rem 0;
    background-color: #f8f9fa;
    text-align: center;
}

.features h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.feature-item {
    background: #fff;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.feature-item h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #444;
}

.feature-item p {
    font-size: 1rem;
    color: #666;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 2.5rem 0;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }

    .hero h2 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }
}
`
  },
  portfolio: {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <h1>John Doe</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about" class="about">
            <div class="container">
                <h2>About Me</h2>
                <p>Hello! I'm John Doe, a passionate web developer with expertise in modern web technologies.</p>
                <p>This portfolio is generated by DreamBuild, showcasing my skills and projects.</p>
            </div>
        </section>

        <section id="skills" class="skills">
            <div class="container">
                <h2>My Skills</h2>
                <div class="skills-grid">
                    <div class="skill-item">
                        <h3>React</h3>
                    </div>
                    <div class="skill-item">
                        <h3>JavaScript</h3>
                    </div>
                    <div class="skill-item">
                        <h3>Python</h3>
                    </div>
                    <div class="skill-item">
                        <h3>HTML5</h3>
                    </div>
                    <div class="skill-item">
                        <h3>CSS3</h3>
                    </div>
                    <div class="skill-item">
                        <h3>Node.js</h3>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`,
    'styles.css': `/* Portfolio Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
    color: #333;
    background-color: #f4f7f6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: fixed;
    width: 100%;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.nav-brand h1 {
    color: #3498db;
    font-size: 1.8rem;
    font-weight: 700;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #3498db;
}

/* About Section */
.about {
    background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
    color: white;
    text-align: center;
    padding: 10rem 0 8rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.about h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.about p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

/* Skills Section */
.skills {
    padding: 5rem 0;
    background-color: #f8f9fa;
    text-align: center;
}

.skills h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.skill-item {
    background: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.skill-item h3 {
    font-size: 1.2rem;
    color: #444;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 2.5rem 0;
    font-size: 0.9rem;
}
`
  }
};

class HtmlCssEnhancementService {
  getTemplate(templateName) {
    if (htmlCssTemplates[templateName]) {
      console.log(`🌐 Providing enhanced HTML/CSS template: ${templateName}`);
      return htmlCssTemplates[templateName];
    }
    console.warn(`⚠️ HTML/CSS template '${templateName}' not found.`);
    return null;
  }

  getAllTemplates() {
    return Object.keys(htmlCssTemplates);
  }
}

export default new HtmlCssEnhancementService();