export const courseModules = {
  // Web Development Fundamentals (1-10)
  'html-css-basics': {
    id: 'html-css-basics',
    title: 'HTML & CSS Fundamentals',
    description: 'Master the building blocks of web development',
    duration: '4 hours',
    difficulty: 'Beginner',
    rating: 4.8,
    students: 12500,
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    topics: ['HTML', 'CSS', 'Web Design', 'Responsive Design'],
    prerequisites: ['None'],
    outcomes: ['Build responsive websites', 'Understand web standards', 'Create modern layouts'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
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
    category: 'Web Development',
    topics: ['JavaScript', 'ES6+', 'DOM Manipulation', 'Async Programming'],
    prerequisites: ['HTML & CSS Basics'],
    outcomes: ['Master JavaScript fundamentals', 'Build interactive websites', 'Handle asynchronous operations'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
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
    category: 'Web Development',
    topics: ['React', 'JSX', 'Hooks', 'State Management'],
    prerequisites: ['JavaScript Essentials'],
    outcomes: ['Build React applications', 'Master component architecture', 'Implement state management'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'vue-js-fundamentals': {
    id: 'vue-js-fundamentals',
    title: 'Vue.js Fundamentals',
    description: 'Learn Vue.js for building user interfaces',
    duration: '5 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 8900,
    instructor: 'Emma Wilson',
    category: 'Web Development',
    topics: ['Vue.js', 'Components', 'Directives', 'Vuex'],
    prerequisites: ['JavaScript Essentials'],
    outcomes: ['Build Vue.js applications', 'Master Vue ecosystem', 'Implement reactive data binding'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'angular-complete': {
    id: 'angular-complete',
    title: 'Angular Complete Guide',
    description: 'Master Angular for enterprise applications',
    duration: '12 hours',
    difficulty: 'Advanced',
    rating: 4.5,
    students: 11200,
    instructor: 'David Kim',
    category: 'Web Development',
    topics: ['Angular', 'TypeScript', 'Services', 'Routing'],
    prerequisites: ['JavaScript Essentials', 'TypeScript Basics'],
    outcomes: ['Build enterprise Angular apps', 'Master TypeScript integration', 'Implement complex routing'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'svelte-development': {
    id: 'svelte-development',
    title: 'Svelte Development',
    description: 'Build fast web applications with Svelte',
    duration: '4 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 6800,
    instructor: 'Rich Harris',
    category: 'Web Development',
    topics: ['Svelte', 'Components', 'Reactivity', 'Performance'],
    prerequisites: ['JavaScript Essentials'],
    outcomes: ['Build Svelte applications', 'Master reactive programming', 'Optimize performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'next-js-fullstack': {
    id: 'next-js-fullstack',
    title: 'Next.js Full-Stack Development',
    description: 'Full-stack React applications with Next.js',
    duration: '7 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 13400,
    instructor: 'Vercel Team',
    category: 'Web Development',
    topics: ['Next.js', 'SSR', 'SSG', 'API Routes'],
    prerequisites: ['React Development'],
    outcomes: ['Build full-stack apps', 'Master SSR/SSG', 'Deploy to production'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'nuxt-js-development': {
    id: 'nuxt-js-development',
    title: 'Nuxt.js Development',
    description: 'Universal Vue.js applications with Nuxt.js',
    duration: '6 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 7600,
    instructor: 'Nuxt Team',
    category: 'Web Development',
    topics: ['Nuxt.js', 'SSR', 'Static Generation', 'Modules'],
    prerequisites: ['Vue.js Fundamentals'],
    outcomes: ['Build universal apps', 'Master SSR', 'Optimize performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'gatsby-static-sites': {
    id: 'gatsby-static-sites',
    title: 'Gatsby Static Site Generation',
    description: 'Build blazing-fast static sites with Gatsby',
    duration: '5 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 9200,
    instructor: 'Gatsby Team',
    category: 'Web Development',
    topics: ['Gatsby', 'GraphQL', 'Static Generation', 'Plugins'],
    prerequisites: ['React Development'],
    outcomes: ['Build static sites', 'Master GraphQL', 'Optimize for speed'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'webpack-bundling': {
    id: 'webpack-bundling',
    title: 'Webpack Module Bundling',
    description: 'Master modern JavaScript bundling with Webpack',
    duration: '4 hours',
    difficulty: 'Advanced',
    rating: 4.5,
    students: 5800,
    instructor: 'Webpack Team',
    category: 'Web Development',
    topics: ['Webpack', 'Loaders', 'Plugins', 'Optimization'],
    prerequisites: ['JavaScript Essentials'],
    outcomes: ['Master bundling', 'Optimize builds', 'Configure complex setups'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  // Backend Development (11-20)
  'node-js-backend': {
    id: 'node-js-backend',
    title: 'Node.js Backend Development',
    description: 'Build server-side applications with Node.js',
    duration: '7 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 16800,
    instructor: 'Lisa Park',
    category: 'Backend Development',
    topics: ['Node.js', 'Express', 'APIs', 'Database Integration'],
    prerequisites: ['JavaScript Essentials'],
    outcomes: ['Build RESTful APIs', 'Handle server-side logic', 'Integrate with databases'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'python-django': {
    id: 'python-django',
    title: 'Python Django Web Framework',
    description: 'Build web applications with Django',
    duration: '9 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 13400,
    instructor: 'Carlos Mendez',
    category: 'Backend Development',
    topics: ['Python', 'Django', 'ORM', 'Authentication'],
    prerequisites: ['Python Basics'],
    outcomes: ['Build Django applications', 'Master Django ORM', 'Implement user authentication'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'python-flask': {
    id: 'python-flask',
    title: 'Python Flask Web Development',
    description: 'Lightweight web development with Flask',
    duration: '6 hours',
    difficulty: 'Beginner',
    rating: 4.6,
    students: 9800,
    instructor: 'Anna Thompson',
    category: 'Backend Development',
    topics: ['Python', 'Flask', 'REST APIs', 'Templates'],
    prerequisites: ['Python Basics'],
    outcomes: ['Build Flask applications', 'Create REST APIs', 'Implement templating'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'php-laravel': {
    id: 'php-laravel',
    title: 'PHP Laravel Framework',
    description: 'Modern PHP development with Laravel',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.5,
    students: 10200,
    instructor: 'Roberto Silva',
    category: 'Backend Development',
    topics: ['PHP', 'Laravel', 'Eloquent ORM', 'Blade Templates'],
    prerequisites: ['PHP Basics'],
    outcomes: ['Build Laravel applications', 'Master Eloquent ORM', 'Implement MVC architecture'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'java-spring-boot': {
    id: 'java-spring-boot',
    title: 'Java Spring Boot',
    description: 'Enterprise Java development with Spring Boot',
    duration: '10 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 15600,
    instructor: 'Jennifer Lee',
    category: 'Backend Development',
    topics: ['Java', 'Spring Boot', 'Microservices', 'Security'],
    prerequisites: ['Java Fundamentals'],
    outcomes: ['Build Spring Boot applications', 'Implement microservices', 'Master enterprise patterns'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'ruby-rails': {
    id: 'ruby-rails',
    title: 'Ruby on Rails',
    description: 'Rapid web development with Ruby on Rails',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 11200,
    instructor: 'DHH',
    category: 'Backend Development',
    topics: ['Ruby', 'Rails', 'MVC', 'ActiveRecord'],
    prerequisites: ['Ruby Programming'],
    outcomes: ['Build Rails applications', 'Master MVC pattern', 'Implement rapid development'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'go-web-development': {
    id: 'go-web-development',
    title: 'Go Web Development',
    description: 'High-performance web services with Go',
    duration: '6 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 8400,
    instructor: 'Go Team',
    category: 'Backend Development',
    topics: ['Go', 'Gin', 'Goroutines', 'Microservices'],
    prerequisites: ['Go Programming'],
    outcomes: ['Build Go web services', 'Master concurrency', 'Implement microservices'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'rust-web-development': {
    id: 'rust-web-development',
    title: 'Rust Web Development',
    description: 'Memory-safe web development with Rust',
    duration: '7 hours',
    difficulty: 'Advanced',
    rating: 4.8,
    students: 6200,
    instructor: 'Rust Team',
    category: 'Backend Development',
    topics: ['Rust', 'Actix-web', 'Tokio', 'Performance'],
    prerequisites: ['Rust Programming'],
    outcomes: ['Build Rust web services', 'Master memory safety', 'Achieve high performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'elixir-phoenix': {
    id: 'elixir-phoenix',
    title: 'Elixir Phoenix Framework',
    description: 'Real-time web applications with Phoenix',
    duration: '8 hours',
    difficulty: 'Advanced',
    rating: 4.6,
    students: 4800,
    instructor: 'Phoenix Team',
    category: 'Backend Development',
    topics: ['Elixir', 'Phoenix', 'LiveView', 'WebSockets'],
    prerequisites: ['Elixir Programming'],
    outcomes: ['Build real-time apps', 'Master actor model', 'Implement LiveView'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'c-sharp-aspnet': {
    id: 'c-sharp-aspnet',
    title: 'C# ASP.NET Core',
    description: 'Modern web development with ASP.NET Core',
    duration: '9 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 12800,
    instructor: 'Microsoft Team',
    category: 'Backend Development',
    topics: ['C#', 'ASP.NET Core', 'Entity Framework', 'Identity'],
    prerequisites: ['C# Programming'],
    outcomes: ['Build ASP.NET apps', 'Master Entity Framework', 'Implement authentication'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  // Mobile Development (21-25)
  'react-native-mobile': {
    id: 'react-native-mobile',
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile apps',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 12800,
    instructor: 'Marcus Johnson',
    category: 'Mobile Development',
    topics: ['React Native', 'Mobile UI', 'Navigation', 'APIs'],
    prerequisites: ['React Development'],
    outcomes: ['Build mobile applications', 'Deploy to app stores', 'Handle mobile-specific features'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'flutter-development': {
    id: 'flutter-development',
    title: 'Flutter Mobile Development',
    description: 'Cross-platform apps with Flutter',
    duration: '9 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 14200,
    instructor: 'Priya Patel',
    category: 'Mobile Development',
    topics: ['Flutter', 'Dart', 'Widgets', 'State Management'],
    prerequisites: ['Dart Basics'],
    outcomes: ['Build Flutter applications', 'Master widget system', 'Implement state management'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'swift-ios': {
    id: 'swift-ios',
    title: 'Swift iOS Development',
    description: 'Native iOS app development with Swift',
    duration: '10 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 11800,
    instructor: 'Taylor Swift',
    category: 'Mobile Development',
    topics: ['Swift', 'iOS', 'UIKit', 'SwiftUI'],
    prerequisites: ['macOS Development Environment'],
    outcomes: ['Build iOS applications', 'Master Swift language', 'Implement iOS design patterns'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'kotlin-android': {
    id: 'kotlin-android',
    title: 'Kotlin Android Development',
    description: 'Modern Android development with Kotlin',
    duration: '9 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 13600,
    instructor: 'Ahmed Hassan',
    category: 'Mobile Development',
    topics: ['Kotlin', 'Android', 'Jetpack', 'Material Design'],
    prerequisites: ['Java Basics'],
    outcomes: ['Build Android applications', 'Master Kotlin language', 'Implement modern Android patterns'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'xamarin-cross-platform': {
    id: 'xamarin-cross-platform',
    title: 'Xamarin Cross-Platform Development',
    description: 'Native mobile apps with Xamarin',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.4,
    students: 7200,
    instructor: 'Microsoft Team',
    category: 'Mobile Development',
    topics: ['Xamarin', 'C#', 'Xamarin.Forms', 'Native APIs'],
    prerequisites: ['C# Programming'],
    outcomes: ['Build cross-platform apps', 'Share code between platforms', 'Access native features'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  // Data Science & Analytics (26-35)
  'python-data-science': {
    id: 'python-data-science',
    title: 'Python Data Science',
    description: 'Data analysis and visualization with Python',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 19200,
    instructor: 'Dr. Maria Rodriguez',
    category: 'Data Science',
    topics: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    prerequisites: ['Python Basics'],
    outcomes: ['Analyze datasets', 'Create visualizations', 'Perform statistical analysis'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'machine-learning-basics': {
    id: 'machine-learning-basics',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts',
    duration: '10 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 16800,
    instructor: 'Dr. James Wilson',
    category: 'Data Science',
    topics: ['Machine Learning', 'Scikit-learn', 'Algorithms', 'Model Evaluation'],
    prerequisites: ['Python Data Science'],
    outcomes: ['Build ML models', 'Understand algorithms', 'Evaluate model performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'deep-learning-tensorflow': {
    id: 'deep-learning-tensorflow',
    title: 'Deep Learning with TensorFlow',
    description: 'Neural networks and deep learning',
    duration: '12 hours',
    difficulty: 'Advanced',
    rating: 4.9,
    students: 12400,
    instructor: 'Dr. Alex Chen',
    category: 'Data Science',
    topics: ['TensorFlow', 'Neural Networks', 'Deep Learning', 'Computer Vision'],
    prerequisites: ['Machine Learning Basics'],
    outcomes: ['Build neural networks', 'Implement deep learning models', 'Work with TensorFlow'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'r-data-analysis': {
    id: 'r-data-analysis',
    title: 'R for Data Analysis',
    description: 'Statistical analysis with R programming',
    duration: '7 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 9800,
    instructor: 'Dr. Sarah Kim',
    category: 'Data Science',
    topics: ['R Programming', 'Statistics', 'Data Visualization', 'Regression'],
    prerequisites: ['Statistics Basics'],
    outcomes: ['Perform statistical analysis', 'Create R visualizations', 'Build predictive models'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'sql-database-design': {
    id: 'sql-database-design',
    title: 'SQL & Database Design',
    description: 'Master database design and SQL queries',
    duration: '6 hours',
    difficulty: 'Beginner',
    rating: 4.7,
    students: 15200,
    instructor: 'Tom Anderson',
    category: 'Database',
    topics: ['SQL', 'Database Design', 'Normalization', 'Indexing'],
    prerequisites: ['None'],
    outcomes: ['Design databases', 'Write complex queries', 'Optimize database performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'mongodb-nosql': {
    id: 'mongodb-nosql',
    title: 'MongoDB NoSQL Database',
    description: 'Document-based database with MongoDB',
    duration: '5 hours',
    difficulty: 'Intermediate',
    rating: 4.5,
    students: 11200,
    instructor: 'Rachel Green',
    category: 'Database',
    topics: ['MongoDB', 'NoSQL', 'Document Design', 'Aggregation'],
    prerequisites: ['Database Concepts'],
    outcomes: ['Design document databases', 'Write MongoDB queries', 'Implement aggregation pipelines'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'postgresql-advanced': {
    id: 'postgresql-advanced',
    title: 'PostgreSQL Advanced',
    description: 'Advanced PostgreSQL database management',
    duration: '7 hours',
    difficulty: 'Advanced',
    rating: 4.8,
    students: 8400,
    instructor: 'PostgreSQL Expert',
    category: 'Database',
    topics: ['PostgreSQL', 'Advanced Queries', 'Performance Tuning', 'Extensions'],
    prerequisites: ['SQL Database Design'],
    outcomes: ['Master PostgreSQL', 'Optimize performance', 'Use advanced features'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'redis-caching': {
    id: 'redis-caching',
    title: 'Redis Caching & Data Structures',
    description: 'In-memory data store with Redis',
    duration: '4 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 6800,
    instructor: 'Redis Expert',
    category: 'Database',
    topics: ['Redis', 'Caching', 'Data Structures', 'Pub/Sub'],
    prerequisites: ['Database Concepts'],
    outcomes: ['Implement caching', 'Use Redis data structures', 'Build real-time features'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'elasticsearch-search': {
    id: 'elasticsearch-search',
    title: 'Elasticsearch Search Engine',
    description: 'Full-text search with Elasticsearch',
    duration: '6 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 5600,
    instructor: 'Elasticsearch Expert',
    category: 'Database',
    topics: ['Elasticsearch', 'Search', 'Analytics', 'Kibana'],
    prerequisites: ['Database Concepts'],
    outcomes: ['Implement search', 'Build analytics', 'Optimize search performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'apache-kafka-streaming': {
    id: 'apache-kafka-streaming',
    title: 'Apache Kafka Streaming',
    description: 'Real-time data streaming with Kafka',
    duration: '8 hours',
    difficulty: 'Advanced',
    rating: 4.8,
    students: 7200,
    instructor: 'Kafka Expert',
    category: 'Data Science',
    topics: ['Kafka', 'Streaming', 'Event Sourcing', 'Microservices'],
    prerequisites: ['Distributed Systems'],
    outcomes: ['Build streaming pipelines', 'Implement event sourcing', 'Handle real-time data'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  // DevOps & Cloud (36-45)
  'docker-containerization': {
    id: 'docker-containerization',
    title: 'Docker Containerization',
    description: 'Containerize applications with Docker',
    duration: '4 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 14600,
    instructor: 'Kevin Docker',
    category: 'DevOps',
    topics: ['Docker', 'Containers', 'Images', 'Orchestration'],
    prerequisites: ['Linux Basics'],
    outcomes: ['Containerize applications', 'Manage Docker containers', 'Implement CI/CD'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'kubernetes-orchestration': {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Orchestration',
    description: 'Container orchestration with Kubernetes',
    duration: '8 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 9800,
    instructor: 'Captain Kube',
    category: 'DevOps',
    topics: ['Kubernetes', 'Pods', 'Services', 'Deployments'],
    prerequisites: ['Docker Containerization'],
    outcomes: ['Deploy to Kubernetes', 'Manage clusters', 'Scale applications'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'aws-cloud-fundamentals': {
    id: 'aws-cloud-fundamentals',
    title: 'AWS Cloud Fundamentals',
    description: 'Cloud computing with Amazon Web Services',
    duration: '10 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 18200,
    instructor: 'Cloud Master',
    category: 'Cloud Computing',
    topics: ['AWS', 'EC2', 'S3', 'RDS'],
    prerequisites: ['Linux Basics'],
    outcomes: ['Deploy to AWS', 'Manage cloud resources', 'Implement security best practices'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'azure-cloud-platform': {
    id: 'azure-cloud-platform',
    title: 'Microsoft Azure Platform',
    description: 'Cloud solutions with Microsoft Azure',
    duration: '9 hours',
    difficulty: 'Intermediate',
    rating: 4.5,
    students: 13400,
    instructor: 'Azure Expert',
    category: 'Cloud Computing',
    topics: ['Azure', 'Virtual Machines', 'Storage', 'Networking'],
    prerequisites: ['Cloud Concepts'],
    outcomes: ['Deploy to Azure', 'Manage cloud services', 'Implement hybrid solutions'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'google-cloud-platform': {
    id: 'google-cloud-platform',
    title: 'Google Cloud Platform',
    description: 'Cloud computing with Google Cloud',
    duration: '8 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 12800,
    instructor: 'GCP Specialist',
    category: 'Cloud Computing',
    topics: ['GCP', 'Compute Engine', 'Cloud Storage', 'BigQuery'],
    prerequisites: ['Cloud Concepts'],
    outcomes: ['Deploy to GCP', 'Use Google Cloud services', 'Implement data solutions'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'terraform-infrastructure': {
    id: 'terraform-infrastructure',
    title: 'Terraform Infrastructure as Code',
    description: 'Manage infrastructure with Terraform',
    duration: '6 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 8400,
    instructor: 'Terraform Expert',
    category: 'DevOps',
    topics: ['Terraform', 'Infrastructure as Code', 'State Management', 'Modules'],
    prerequisites: ['Cloud Computing'],
    outcomes: ['Manage infrastructure', 'Implement IaC', 'Automate deployments'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'ansible-automation': {
    id: 'ansible-automation',
    title: 'Ansible Automation',
    description: 'Configuration management with Ansible',
    duration: '5 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 7200,
    instructor: 'Ansible Expert',
    category: 'DevOps',
    topics: ['Ansible', 'Playbooks', 'Roles', 'Automation'],
    prerequisites: ['Linux Administration'],
    outcomes: ['Automate configurations', 'Manage servers', 'Implement CI/CD'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'jenkins-cicd': {
    id: 'jenkins-cicd',
    title: 'Jenkins CI/CD',
    description: 'Continuous integration and deployment with Jenkins',
    duration: '7 hours',
    difficulty: 'Intermediate',
    rating: 4.5,
    students: 9600,
    instructor: 'Jenkins Expert',
    category: 'DevOps',
    topics: ['Jenkins', 'CI/CD', 'Pipelines', 'Automation'],
    prerequisites: ['Docker Containerization'],
    outcomes: ['Implement CI/CD', 'Automate builds', 'Deploy applications'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'gitlab-devops': {
    id: 'gitlab-devops',
    title: 'GitLab DevOps',
    description: 'Complete DevOps platform with GitLab',
    duration: '6 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 6800,
    instructor: 'GitLab Expert',
    category: 'DevOps',
    topics: ['GitLab', 'CI/CD', 'Container Registry', 'DevOps'],
    prerequisites: ['Git Basics'],
    outcomes: ['Master GitLab', 'Implement DevOps', 'Manage projects'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'monitoring-observability': {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability',
    description: 'Application monitoring and observability',
    duration: '5 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    students: 7600,
    instructor: 'Monitoring Expert',
    category: 'DevOps',
    topics: ['Monitoring', 'Logging', 'Metrics', 'Alerting'],
    prerequisites: ['System Administration'],
    outcomes: ['Implement monitoring', 'Set up alerting', 'Analyze performance'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  // Cybersecurity (46-50)
  'cybersecurity-fundamentals': {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    description: 'Essential cybersecurity concepts and practices',
    duration: '6 hours',
    difficulty: 'Beginner',
    rating: 4.8,
    students: 16800,
    instructor: 'Security Expert',
    category: 'Cybersecurity',
    topics: ['Security Basics', 'Threats', 'Vulnerabilities', 'Risk Management'],
    prerequisites: ['IT Fundamentals'],
    outcomes: ['Understand security threats', 'Implement security measures', 'Assess risks'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'ethical-hacking': {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Learn ethical hacking techniques',
    duration: '12 hours',
    difficulty: 'Advanced',
    rating: 4.9,
    students: 9800,
    instructor: 'White Hat Hacker',
    category: 'Cybersecurity',
    topics: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Security'],
    prerequisites: ['Cybersecurity Fundamentals'],
    outcomes: ['Perform penetration tests', 'Identify vulnerabilities', 'Secure systems'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'network-security': {
    id: 'network-security',
    title: 'Network Security',
    description: 'Secure network infrastructure and protocols',
    duration: '7 hours',
    difficulty: 'Intermediate',
    rating: 4.6,
    students: 11200,
    instructor: 'Network Guardian',
    category: 'Cybersecurity',
    topics: ['Network Protocols', 'Firewalls', 'VPNs', 'Intrusion Detection'],
    prerequisites: ['Networking Basics'],
    outcomes: ['Secure network infrastructure', 'Implement firewalls', 'Monitor network traffic'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'web-application-security': {
    id: 'web-application-security',
    title: 'Web Application Security',
    description: 'Secure web applications and APIs',
    duration: '8 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 8400,
    instructor: 'Web Security Expert',
    category: 'Cybersecurity',
    topics: ['OWASP', 'Authentication', 'Authorization', 'Input Validation'],
    prerequisites: ['Web Development'],
    outcomes: ['Secure web applications', 'Implement security best practices', 'Prevent common vulnerabilities'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
            },
            completed: false
          }
        ]
      }
    ]
  },

  'incident-response': {
    id: 'incident-response',
    title: 'Incident Response & Forensics',
    description: 'Handle security incidents and digital forensics',
    duration: '9 hours',
    difficulty: 'Advanced',
    rating: 4.8,
    students: 6200,
    instructor: 'Forensics Expert',
    category: 'Cybersecurity',
    topics: ['Incident Response', 'Digital Forensics', 'Evidence Collection', 'Recovery'],
    prerequisites: ['Cybersecurity Fundamentals'],
    outcomes: ['Handle security incidents', 'Perform digital forensics', 'Implement recovery procedures'],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Getting Started',
            duration: '10 minutes',
            type: 'video',
            content: {
              videoUrl: 'educational-content',
              transcript: 'Welcome to this course. In this lesson, we will cover the fundamentals.',
              objectives: ['Understand the basics', 'Set up your environment']
            },
            completed: false
          },
          {
            id: 'lesson-1-2',
            title: 'Key Concepts',
            duration: '15 minutes',
            type: 'reading',
            content: {
              text: 'This lesson covers the key concepts you need to understand.',
              objectives: ['Learn key concepts', 'Apply knowledge']
            },
            completed: false
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Core Topics',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Deep Dive',
            duration: '20 minutes',
            type: 'interactive',
            content: {
              instructions: 'Complete this interactive exercise to practice what you\'ve learned.',
              objectives: ['Practice skills', 'Apply knowledge']
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
  // Add progress tracking for all 50 courses...
};
