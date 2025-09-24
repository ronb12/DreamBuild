export const codingTutorials = [
  {
    id: 'javascript-basics-1',
    title: 'JavaScript Variables and Data Types',
    description: 'Learn the fundamentals of JavaScript variables and data types',
    difficulty: 'Beginner',
    duration: '15 minutes',
    language: 'javascript',
    instructions: 'Create a variable called "name" and assign it your name. Then create a variable called "age" and assign it your age. Finally, use console.log() to print both variables.',
    initialCode: '// Write your code here\n\n',
    expectedOutput: 'John\n25',
    hints: [
      'Use the "let" keyword to declare variables',
      'Assign values using the = operator',
      'Use console.log() to print values'
    ],
    solution: `let name = "John";
let age = 25;
console.log(name);
console.log(age);`,
    concepts: ['Variables', 'Data Types', 'Console Output']
  },
  {
    id: 'javascript-basics-2',
    title: 'Functions in JavaScript',
    description: 'Learn how to create and use functions in JavaScript',
    difficulty: 'Beginner',
    duration: '20 minutes',
    language: 'javascript',
    instructions: 'Create a function called "add" that takes two parameters (a and b) and returns their sum. Then call the function with the values 5 and 3.',
    initialCode: '// Create your function here\n\n',
    expectedOutput: '8',
    hints: [
      'Use the "function" keyword to create a function',
      'Functions can take parameters in parentheses',
      'Use "return" to send a value back',
      'Call the function with functionName(argument1, argument2)'
    ],
    solution: `function add(a, b) {
  return a + b;
}

console.log(add(5, 3));`,
    concepts: ['Functions', 'Parameters', 'Return Values']
  },
  {
    id: 'javascript-basics-3',
    title: 'Arrays and Loops',
    description: 'Learn how to work with arrays and loops in JavaScript',
    difficulty: 'Beginner',
    duration: '25 minutes',
    language: 'javascript',
    instructions: 'Create an array with the numbers 1, 2, 3, 4, 5. Use a for loop to print each number.',
    initialCode: '// Create your array and loop here\n\n',
    expectedOutput: '1\n2\n3\n4\n5',
    hints: [
      'Arrays are created with square brackets: []',
      'Use for loop: for(let i = 0; i < array.length; i++)',
      'Access array elements with array[index]',
      'Use console.log() inside the loop'
    ],
    solution: `let numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}`,
    concepts: ['Arrays', 'For Loops', 'Array Indexing']
  },
  {
    id: 'javascript-intermediate-1',
    title: 'Object-Oriented Programming',
    description: 'Learn about objects and classes in JavaScript',
    difficulty: 'Intermediate',
    duration: '30 minutes',
    language: 'javascript',
    instructions: 'Create a Person class with a constructor that takes name and age. Add a method called greet() that returns "Hello, my name is [name] and I am [age] years old."',
    initialCode: '// Create your class here\n\n',
    expectedOutput: 'Hello, my name is Alice and I am 30 years old.',
    hints: [
      'Use the "class" keyword to create a class',
      'Constructor is a special method called constructor()',
      'Methods are functions inside the class',
      'Use "this" to refer to the current instance'
    ],
    solution: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
}

let person = new Person("Alice", 30);
console.log(person.greet());`,
    concepts: ['Classes', 'Objects', 'Methods', 'Constructor']
  },
  {
    id: 'javascript-advanced-1',
    title: 'Async/Await and Promises',
    description: 'Learn asynchronous programming with async/await',
    difficulty: 'Advanced',
    duration: '35 minutes',
    language: 'javascript',
    instructions: 'Create an async function called fetchData that simulates fetching data. Use setTimeout to simulate a delay, then return "Data fetched successfully!".',
    initialCode: '// Create your async function here\n\n',
    expectedOutput: 'Data fetched successfully!',
    hints: [
      'Use "async" keyword before function',
      'Use "await" with setTimeout',
      'Return a Promise from setTimeout',
      'Call the function and await the result'
    ],
    solution: `async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "Data fetched successfully!";
}

fetchData().then(result => console.log(result));`,
    concepts: ['Async/Await', 'Promises', 'Asynchronous Programming']
  }
];

export const codingChallenges = [
  {
    id: 'challenge-1',
    title: 'Two Sum',
    description: 'Given an array of integers and a target sum, find two numbers that add up to the target.',
    difficulty: 'Easy',
    points: 10,
    language: 'javascript',
    instructions: 'Write a function that takes an array of numbers and a target sum. Return the indices of two numbers that add up to the target.',
    initialCode: 'function twoSum(nums, target) {\n  // Your code here\n}\n\n// Test your function\nconsole.log(twoSum([2, 7, 11, 15], 9)); // Should return [0, 1]',
    expectedOutput: '[0,1]',
    hints: [
      'Use nested loops to check all pairs',
      'Return the indices when you find a match',
      'Use array.indexOf() to find indices'
    ],
    solution: `function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));`,
    testCases: [
      { input: '[2, 7, 11, 15], 9', expected: '[0, 1]' },
      { input: '[3, 2, 4], 6', expected: '[1, 2]' },
      { input: '[3, 3], 6', expected: '[0, 1]' }
    ]
  },
  {
    id: 'challenge-2',
    title: 'Reverse String',
    description: 'Reverse a given string without using built-in reverse methods.',
    difficulty: 'Easy',
    points: 5,
    language: 'javascript',
    instructions: 'Write a function that takes a string and returns it reversed.',
    initialCode: 'function reverseString(str) {\n  // Your code here\n}\n\nconsole.log(reverseString("hello")); // Should return "olleh"',
    expectedOutput: 'olleh',
    hints: [
      'Use a loop to iterate through the string',
      'Build the reversed string character by character',
      'Start from the end of the string'
    ],
    solution: `function reverseString(str) {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));`,
    testCases: [
      { input: '"hello"', expected: '"olleh"' },
      { input: '"world"', expected: '"dlrow"' },
      { input: '"12345"', expected: '"54321"' }
    ]
  }
];

export const learningPaths = [
  {
    id: 'web-development',
    title: 'Web Development Path',
    description: 'Complete journey from HTML/CSS to full-stack development',
    duration: '6 months',
    difficulty: 'Beginner to Advanced',
    courses: [
      'HTML & CSS Fundamentals',
      'JavaScript Essentials',
      'React Development',
      'Node.js Backend',
      'Database Design',
      'Deployment & DevOps'
    ],
    tutorials: codingTutorials.filter(t => t.difficulty === 'Beginner'),
    challenges: codingChallenges.filter(c => c.difficulty === 'Easy')
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development Path',
    description: 'Learn to build mobile apps with React Native',
    duration: '4 months',
    difficulty: 'Intermediate',
    courses: [
      'React Native Basics',
      'Mobile UI Design',
      'State Management',
      'API Integration',
      'App Store Deployment'
    ],
    tutorials: codingTutorials.filter(t => t.difficulty === 'Intermediate'),
    challenges: codingChallenges.filter(c => c.difficulty === 'Easy')
  }
];
