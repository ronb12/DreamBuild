class TutorialService {
  constructor() {
    this.tutorials = this.initializeTutorials()
    this.userProgress = this.loadUserProgress()
  }

  initializeTutorials() {
    return {
      'html-css-basics': {
        id: 'html-css-basics',
        title: 'HTML & CSS Fundamentals',
        description: 'Master the building blocks of web development',
        difficulty: 'Beginner',
        duration: '4 hours',
        language: 'HTML/CSS',
        steps: [
          {
            id: 1,
            title: 'Introduction to HTML',
            instructions: 'Create your first HTML document with basic structure',
            startingCode: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`,
            expectedOutput: 'My First Web Page',
            hints: [
              'Use the <h1> tag for the main heading',
              'Add a <p> tag for paragraphs',
              'Remember to close all tags properly'
            ],
            examples: `<h1>Welcome to My Website</h1>
<p>This is my first paragraph.</p>`
          },
          {
            id: 2,
            title: 'HTML Elements and Tags',
            instructions: 'Learn about different HTML elements and how to use them',
            startingCode: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Elements</title>
</head>
<body>
    <h1>Main Heading</h1>
    <!-- Add more elements here -->
</body>
</html>`,
            expectedOutput: 'HTML Elements',
            hints: [
              'Use <h2> for subheadings',
              'Add <ul> and <li> for lists',
              'Use <img> for images'
            ],
            examples: `<h2>Subheading</h2>
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>`
          },
          {
            id: 3,
            title: 'CSS Basics and Styling',
            instructions: 'Add CSS styles to make your HTML look better',
            startingCode: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Styling</title>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>Styled Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,
            expectedOutput: 'Styled Heading',
            hints: [
              'Use color property to change text color',
              'Use font-size to change text size',
              'Use background-color for background colors'
            ],
            examples: `h1 {
    color: blue;
    font-size: 24px;
}`
          },
          {
            id: 4,
            title: 'Layout with Flexbox',
            instructions: 'Learn how to create flexible layouts using CSS Flexbox',
            startingCode: `<!DOCTYPE html>
<html>
<head>
    <title>Flexbox Layout</title>
    <style>
        .container {
            /* Add flexbox properties here */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>`,
            expectedOutput: 'Item 1',
            hints: [
              'Use display: flex on the container',
              'Use justify-content to align items horizontally',
              'Use align-items to align items vertically'
            ],
            examples: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`
          },
          {
            id: 5,
            title: 'Responsive Design',
            instructions: 'Make your website work on different screen sizes',
            startingCode: `<!DOCTYPE html>
<html>
<head>
    <title>Responsive Design</title>
    <style>
        /* Add responsive styles here */
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Heading</h1>
        <p>This content should adapt to different screen sizes.</p>
    </div>
</body>
</html>`,
            expectedOutput: 'Responsive Heading',
            hints: [
              'Use media queries for different screen sizes',
              'Use max-width for containers',
              'Use relative units like % and em'
            ],
            examples: `@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
}`
          }
        ]
      },
      'javascript-essentials': {
        id: 'javascript-essentials',
        title: 'JavaScript Essentials',
        description: 'Learn JavaScript from basics to advanced concepts',
        difficulty: 'Intermediate',
        duration: '6 hours',
        language: 'JavaScript',
        steps: [
          {
            id: 1,
            title: 'Variables and Data Types',
            instructions: 'Learn about JavaScript variables and different data types',
            startingCode: `// Declare variables here
let name;
let age;
let isStudent;

// Assign values
name = "John";
age = 25;
isStudent = true;

`,
            expectedOutput: 'John',
            hints: [
              'Use let, const, or var to declare variables',
              'Strings go in quotes',
              'Numbers don\'t need quotes',
              'Booleans are true or false'
            ],
            examples: `const message = "Hello World";
let count = 0;
const isActive = true;`
          },
          {
            id: 2,
            title: 'Functions and Scope',
            instructions: 'Learn how to create and use functions in JavaScript',
            startingCode: `// Create a function here
function greet(name) {
    // Add function body
}

// Call the function
greet("Alice");`,
            expectedOutput: 'Hello Alice',
            hints: [
              'Use the function keyword to create functions',
              'Add parameters in parentheses',
              'Use return to send back values',
              'Call functions with parentheses'
            ],
            examples: `function add(a, b) {
    return a + b;
}

const result = add(5, 3);`
          },
          {
            id: 3,
            title: 'DOM Manipulation',
            instructions: 'Learn how to interact with HTML elements using JavaScript',
            startingCode: `<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Original Title</h1>
    <button onclick="changeTitle()">Change Title</button>
    
    <script>
        function changeTitle() {
            // Add your code here
        }
    </script>
</body>
</html>`,
            expectedOutput: 'New Title',
            hints: [
              'Use document.getElementById() to select elements',
              'Use .textContent to change text',
              'Use .style to change CSS properties'
            ],
            examples: `const element = document.getElementById('title');
element.textContent = 'New Title';
element.style.color = 'blue';`
          },
          {
            id: 4,
            title: 'Async Programming',
            instructions: 'Learn about asynchronous programming with promises and async/await',
            startingCode: `// Create an async function
async function fetchData() {
    // Add your code here
}

// Call the function
fetchData();`,
            expectedOutput: 'Data fetched successfully',
            hints: [
              'Use async keyword for async functions',
              'Use await to wait for promises',
              'Use try/catch for error handling'
            ],
            examples: `async function getData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}`
          },
          {
            id: 5,
            title: 'ES6+ Features',
            instructions: 'Learn about modern JavaScript features like arrow functions and destructuring',
            startingCode: `// Convert this to arrow function
function multiply(a, b) {
    return a * b;
}

// Use destructuring
const person = { name: 'John', age: 30 };
// Destructure here

`,
            expectedOutput: 'John',
            hints: [
              'Arrow functions use => syntax',
              'Destructuring uses curly braces',
              'Template literals use backticks'
            ],
            examples: `const multiply = (a, b) => a * b;

const { name, age } = person;

const message = \`Hello \${name}!\`;`
          }
        ]
      },
      'react-complete': {
        id: 'react-complete',
        title: 'React Complete Guide',
        description: 'Build modern web applications with React',
        difficulty: 'Intermediate',
        duration: '8 hours',
        language: 'React',
        steps: [
          {
            id: 1,
            title: 'React Components',
            instructions: 'Create your first React component',
            startingCode: `import React from 'react';

function Welcome() {
    // Add your component code here
    return (
        <div>
            {/* Add JSX here */}
        </div>
    );
}

export default Welcome;`,
            expectedOutput: 'Hello React',
            hints: [
              'Components are functions that return JSX',
              'Use PascalCase for component names',
              'JSX looks like HTML but is JavaScript'
            ],
            examples: `function Welcome() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>Welcome to React!</p>
        </div>
    );
}`
          },
          {
            id: 2,
            title: 'State and Props',
            instructions: 'Learn about React state and props',
            startingCode: `import React, { useState } from 'react';

function Counter() {
    // Add state here
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Counter;`,
            expectedOutput: 'Count: 1',
            hints: [
              'Use useState hook for state',
              'State is immutable - use setter functions',
              'Props are passed down from parent components'
            ],
            examples: `function UserCard({ name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}`
          },
          {
            id: 3,
            title: 'Hooks and Lifecycle',
            instructions: 'Learn about React hooks and component lifecycle',
            startingCode: `import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    // Add useEffect here
    useEffect(() => {
        // Add your effect code
    }, []);
    
    return (
        <div>
            <p>Timer: {seconds}s</p>
        </div>
    );
}

export default Timer;`,
            expectedOutput: 'Timer: 1s',
            hints: [
              'useEffect runs after render',
              'Empty dependency array means run once',
              'Return cleanup function if needed'
            ],
            examples: `useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
}, []);`
          },
          {
            id: 4,
            title: 'Routing and Navigation',
            instructions: 'Learn how to add routing to your React app',
            startingCode: `import React from 'react';
import { Link, useLocation, useNavigate } from '../utils/navigation';
function App() {
    return (
        <BrowserRouter>
            <nav>
                {/* Add navigation links */}
            </nav>
            <Routes>
                {/* Add routes here */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;`,
            expectedOutput: 'Home Page',
            hints: [
              'Use BrowserRouter to wrap your app',
              'Use Routes and Route for routing',
              'Use Link for navigation'
            ],
            examples: `<nav>
    <Link href='#/'>Home</Link>
    <Link href='#/about'>About</Link>
</nav>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>`
          },
          {
            id: 5,
            title: 'State Management',
            instructions: 'Learn about state management in React applications',
            startingCode: `import React, { createContext, useContext, useReducer } from 'react';

// Create context
const AppContext = createContext();

// Create reducer
function appReducer(state, action) {
    // Add reducer logic here
    return state;
}

function App() {
    const [state, dispatch] = useReducer(appReducer, { count: 0 });
    
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {/* Add your components */}
        </AppContext.Provider>
    );
}

export default App;`,
            expectedOutput: 'Count: 0',
            hints: [
              'useReducer for complex state',
              'Context for global state',
              'Dispatch actions to update state'
            ],
            examples: `function appReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}`
          }
        ]
      }
    }
  }

  loadUserProgress() {
    const saved = localStorage.getItem('tutorialProgress')
    return saved ? JSON.parse(saved) : {}
  }

  saveUserProgress() {
    localStorage.setItem('tutorialProgress', JSON.stringify(this.userProgress))
  }

  getTutorial(tutorialId) {
    return this.tutorials[tutorialId]
  }

  getAllTutorials() {
    return Object.values(this.tutorials)
  }

  getTutorialProgress(tutorialId) {
    return this.userProgress[tutorialId] || { completed: false, currentStep: 0, completedSteps: [] }
  }

  updateTutorialProgress(tutorialId, stepId, completed = true) {
    if (!this.userProgress[tutorialId]) {
      this.userProgress[tutorialId] = { completed: false, currentStep: 0, completedSteps: [] }
    }

    if (completed) {
      this.userProgress[tutorialId].completedSteps.push(stepId)
    }

    // Check if tutorial is completed
    const tutorial = this.getTutorial(tutorialId)
    if (tutorial && this.userProgress[tutorialId].completedSteps.length === tutorial.steps.length) {
      this.userProgress[tutorialId].completed = true
    }

    this.saveUserProgress()
  }

  getCompletedTutorials() {
    return Object.entries(this.userProgress)
      .filter(([_, progress]) => progress.completed)
      .map(([tutorialId, _]) => this.getTutorial(tutorialId))
  }

  getTutorialStats() {
    const totalTutorials = Object.keys(this.tutorials).length
    const completedTutorials = this.getCompletedTutorials().length
    const totalSteps = Object.values(this.tutorials).reduce((sum, tutorial) => sum + tutorial.steps.length, 0)
    const completedSteps = Object.values(this.userProgress).reduce((sum, progress) => sum + progress.completedSteps.length, 0)

    return {
      totalTutorials,
      completedTutorials,
      totalSteps,
      completedSteps,
      completionRate: totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0
    }
  }
}

export default new TutorialService()

