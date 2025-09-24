export const courseModules = {
  'html-css-basics': {
    id: 'html-css-basics',
    title: 'HTML & CSS Fundamentals',
    description: 'Master the building blocks of web development',
    duration: '4 hours',
    difficulty: 'Beginner',
    rating: 4.8,
    students: 12500,
    instructor: 'Sarah Johnson',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to HTML',
        duration: '30 minutes',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'What is HTML?',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/html-intro',
              transcript: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages. In this lesson, we will explore the fundamental concepts of HTML, including its structure, elements, and how it forms the backbone of every website you visit.',
              objectives: [
                'Understand what HTML is and its purpose',
                'Learn the basic structure of an HTML document',
                'Identify key HTML elements'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'HTML Document Structure',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'Every HTML document has a basic structure that includes the DOCTYPE declaration, html, head, and body elements...',
              objectives: [
                'Learn the DOCTYPE declaration',
                'Understand the html, head, and body elements',
                'Create your first HTML document'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-1-3',
            title: 'HTML Elements and Tags',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Create an HTML document with a heading, paragraph, and list',
              objectives: [
                'Learn about HTML tags and elements',
                'Practice using common HTML elements',
                'Understand tag structure and attributes'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'CSS Basics and Styling',
        duration: '45 minutes',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Introduction to CSS',
            duration: '15 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/css-intro',
              transcript: 'CSS stands for Cascading Style Sheets. It is used to style and layout web pages...',
              objectives: [
                'Understand what CSS is and its purpose',
                'Learn how CSS works with HTML',
                'Understand the cascade and specificity'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-2-2',
            title: 'CSS Selectors and Properties',
            duration: '20 minutes',
            type: 'reading',
            content: {
              text: 'CSS selectors are patterns used to select elements for styling. Common selectors include element, class, and ID selectors...',
              objectives: [
                'Learn different types of CSS selectors',
                'Understand CSS properties and values',
                'Practice writing CSS rules'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-2-3',
            title: 'Colors, Fonts, and Text Styling',
            duration: '25 minutes',
            type: 'interactive',
            content: {
              instructions: 'Style a webpage with colors, fonts, and text formatting',
              objectives: [
                'Learn about color values in CSS',
                'Understand font properties',
                'Practice text styling techniques'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-3',
        title: 'Layout with Flexbox',
        duration: '35 minutes',
        lessons: [
          {
            id: 'lesson-3-1',
            title: 'Understanding Flexbox',
            duration: '15 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/flexbox-intro',
              transcript: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns...',
              objectives: [
                'Understand the flexbox model',
                'Learn flex container and item properties',
                'Practice basic flexbox layouts'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-3-2',
            title: 'Flexbox Properties',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Create a responsive layout using flexbox properties',
              objectives: [
                'Master flex-direction and flex-wrap',
                'Learn justify-content and align-items',
                'Practice creating flexible layouts'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-4',
        title: 'Responsive Design',
        duration: '50 minutes',
        lessons: [
          {
            id: 'lesson-4-1',
            title: 'Introduction to Responsive Design',
            duration: '15 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/responsive-intro',
              transcript: 'Responsive design ensures that web pages look good on all devices and screen sizes...',
              objectives: [
                'Understand the importance of responsive design',
                'Learn about viewport and media queries',
                'Identify responsive design principles'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-4-2',
            title: 'Media Queries',
            duration: '20 minutes',
            type: 'reading',
            content: {
              text: 'Media queries allow you to apply CSS styles based on device characteristics like screen size...',
              objectives: [
                'Learn media query syntax',
                'Understand breakpoints',
                'Practice responsive design techniques'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-4-3',
            title: 'Building Responsive Layouts',
            duration: '25 minutes',
            type: 'interactive',
            content: {
              instructions: 'Create a responsive website that works on mobile, tablet, and desktop',
              objectives: [
                'Apply responsive design principles',
                'Use media queries effectively',
                'Test layouts on different screen sizes'
              ]
            },
            completed: false
          }
        ]
      }
    ]
  },
  'javascript-essentials': {
    id: 'javascript-essentials',
    title: 'JavaScript Essentials',
    description: 'Learn JavaScript from basics to advanced concepts',
    duration: '6 hours',
    difficulty: 'Intermediate',
    rating: 4.9,
    students: 18900,
    instructor: 'Mike Chen',
    modules: [
      {
        id: 'module-1',
        title: 'JavaScript Fundamentals',
        duration: '60 minutes',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Variables and Data Types',
            duration: '20 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/js-variables',
              transcript: 'JavaScript variables are containers for storing data values. We use let, const, and var to declare variables...',
              objectives: [
                'Understand JavaScript variables',
                'Learn about data types',
                'Practice variable declaration'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Functions and Scope',
            duration: '25 minutes',
            type: 'interactive',
            content: {
              instructions: 'Create functions and understand scope in JavaScript',
              objectives: [
                'Learn function declaration and expression',
                'Understand scope and hoisting',
                'Practice writing functions'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-1-3',
            title: 'Arrays and Objects',
            duration: '30 minutes',
            type: 'reading',
            content: {
              text: 'Arrays and objects are fundamental data structures in JavaScript. Arrays store ordered collections, while objects store key-value pairs...',
              objectives: [
                'Master array methods and manipulation',
                'Understand object properties and methods',
                'Practice working with complex data structures'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'DOM Manipulation',
        duration: '75 minutes',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Understanding the DOM',
            duration: '20 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/dom-intro',
              transcript: 'The Document Object Model (DOM) is a programming interface for HTML and XML documents...',
              objectives: [
                'Understand what the DOM is',
                'Learn how to access DOM elements',
                'Practice DOM traversal'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-2-2',
            title: 'Selecting and Modifying Elements',
            duration: '30 minutes',
            type: 'interactive',
            content: {
              instructions: 'Select and modify HTML elements using JavaScript',
              objectives: [
                'Master getElementById, querySelector, and other selection methods',
                'Learn to modify element content and attributes',
                'Practice event handling'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-2-3',
            title: 'Event Handling',
            duration: '25 minutes',
            type: 'interactive',
            content: {
              instructions: 'Add event listeners and handle user interactions',
              objectives: [
                'Understand event types and handling',
                'Learn addEventListener and event delegation',
                'Practice creating interactive web pages'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-3',
        title: 'Async JavaScript',
        duration: '90 minutes',
        lessons: [
          {
            id: 'lesson-3-1',
            title: 'Callbacks and Promises',
            duration: '30 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/async-js',
              transcript: 'Asynchronous JavaScript allows you to perform operations without blocking the main thread...',
              objectives: [
                'Understand asynchronous programming',
                'Learn about callbacks and callback hell',
                'Master promises and promise chaining'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-3-2',
            title: 'Async/Await',
            duration: '35 minutes',
            type: 'interactive',
            content: {
              instructions: 'Use async/await to handle asynchronous operations',
              objectives: [
                'Learn async/await syntax',
                'Handle errors in async functions',
                'Practice with real-world examples'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-3-3',
            title: 'Fetch API and HTTP Requests',
            duration: '25 minutes',
            type: 'interactive',
            content: {
              instructions: 'Make HTTP requests using the Fetch API',
              objectives: [
                'Learn the Fetch API',
                'Handle HTTP responses and errors',
                'Practice making API calls'
              ]
            },
            completed: false
          }
        ]
      }
    ]
  },
  'react-development': {
    id: 'react-development',
    title: 'React Development',
    description: 'Build modern web applications with React',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 15200,
    instructor: 'Alex Rodriguez',
    modules: [
      {
        id: 'module-1',
        title: 'React Fundamentals',
        duration: '90 minutes',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Introduction to React',
            duration: '25 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/react-intro',
              transcript: 'React is a JavaScript library for building user interfaces, especially for web applications...',
              objectives: [
                'Understand what React is and why to use it',
                'Learn about components and JSX',
                'Set up a React development environment'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Components and JSX',
            duration: '35 minutes',
            type: 'interactive',
            content: {
              instructions: 'Create your first React components using JSX',
              objectives: [
                'Learn to write JSX syntax',
                'Create functional components',
                'Understand component structure'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-1-3',
            title: 'Props and Component Communication',
            duration: '30 minutes',
            type: 'interactive',
            content: {
              instructions: 'Pass data between components using props',
              objectives: [
                'Understand props and prop types',
                'Learn component communication patterns',
                'Practice building reusable components'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'State Management',
        duration: '120 minutes',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'useState Hook',
            duration: '40 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/usestate-hook',
              transcript: 'The useState hook allows you to add state to functional components...',
              objectives: [
                'Understand React state and its importance',
                'Learn the useState hook',
                'Practice managing component state'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-2-2',
            title: 'useEffect Hook',
            duration: '40 minutes',
            type: 'interactive',
            content: {
              instructions: 'Use useEffect to handle side effects in React components',
              objectives: [
                'Learn about side effects in React',
                'Master the useEffect hook',
                'Practice lifecycle management'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-2-3',
            title: 'Context API',
            duration: '40 minutes',
            type: 'interactive',
            content: {
              instructions: 'Use React Context to share state across components',
              objectives: [
                'Understand prop drilling problems',
                'Learn React Context API',
                'Practice global state management'
              ]
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-3',
        title: 'Advanced React Patterns',
        duration: '90 minutes',
        lessons: [
          {
            id: 'lesson-3-1',
            title: 'Custom Hooks',
            duration: '30 minutes',
            type: 'video',
            content: {
              videoUrl: 'https://example.com/custom-hooks',
              transcript: 'Custom hooks allow you to extract component logic into reusable functions...',
              objectives: [
                'Understand custom hook patterns',
                'Learn to create reusable logic',
                'Practice hook composition'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-3-2',
            title: 'Performance Optimization',
            duration: '30 minutes',
            type: 'reading',
            content: {
              text: 'React provides several tools for optimizing performance, including memo, useMemo, and useCallback...',
              objectives: [
                'Learn React performance optimization techniques',
                'Understand when to use memoization',
                'Practice performance profiling'
              ]
            },
            completed: false
          },
          {
            id: 'lesson-3-3',
            title: 'Testing React Components',
            duration: '30 minutes',
            type: 'interactive',
            content: {
              instructions: 'Write tests for React components using Jest and React Testing Library',
              objectives: [
                'Learn testing fundamentals for React',
                'Practice component testing',
                'Understand testing best practices'
              ]
            },
            completed: false
          }
        ]
      }
    ]
  }
};

export const courseProgress = {
  'html-css-basics': {
    completedModules: [],
    completedLessons: [],
    currentModule: 'module-1',
    currentLesson: 'lesson-1-1',
    progress: 0,
    timeSpent: 0,
    lastAccessed: null
  },
  'javascript-essentials': {
    completedModules: [],
    completedLessons: [],
    currentModule: 'module-1',
    currentLesson: 'lesson-1-1',
    progress: 0,
    timeSpent: 0,
    lastAccessed: null
  },
  'react-development': {
    completedModules: [],
    completedLessons: [],
    currentModule: 'module-1',
    currentLesson: 'lesson-1-1',
    progress: 0,
    timeSpent: 0,
    lastAccessed: null
  }
};
