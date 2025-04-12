
export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  image: string;
  duration: string;
  lessons: Lesson[];
  isFeatured?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
}

const coursesData: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Jennifer Lee',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more. This comprehensive course takes you from beginner to professional web developer with hands-on projects and assignments.',
    price: 99.99,
    discountPrice: 49.99,
    rating: 4.8,
    reviewCount: 4253,
    level: 'beginner',
    category: 'Web Development',
    image: '/placeholder.svg',
    duration: '42h 30m',
    isFeatured: true,
    lessons: [
      { id: '1-1', title: 'Introduction to HTML', duration: '45m', content: 'HTML is the standard markup language for web pages. In this lesson, we will cover the basics of HTML structure, tags, attributes, and how to create your first web page.' },
      { id: '1-2', title: 'CSS Fundamentals', duration: '1h 15m', content: 'Learn how to style your HTML documents with CSS. This lesson covers selectors, properties, values, the box model, positioning, and responsive design principles.' },
      { id: '1-3', title: 'JavaScript Basics', duration: '2h', content: 'Introduction to JavaScript programming. We\'ll cover variables, data types, functions, loops, conditionals, and DOM manipulation.' },
    ]
  },
  {
    id: '2',
    title: 'Advanced React and Redux',
    instructor: 'Michael Thompson',
    description: 'Take your React skills to the next level with advanced patterns, hooks, context API, and Redux for state management. Build complex applications with clean architecture.',
    price: 129.99,
    discountPrice: 79.99,
    rating: 4.9,
    reviewCount: 2187,
    level: 'advanced',
    category: 'Web Development',
    image: '/placeholder.svg',
    duration: '28h 15m',
    isFeatured: true,
    lessons: [
      { id: '2-1', title: 'Advanced React Hooks', duration: '1h 30m', content: 'Deep dive into React hooks like useEffect, useContext, useReducer, and creating custom hooks for reusable logic.' },
      { id: '2-2', title: 'Redux Architecture', duration: '2h', content: 'Learn how to implement Redux for state management in React applications. Topics include actions, reducers, store, and middleware.' },
      { id: '2-3', title: 'Performance Optimization', duration: '1h 45m', content: 'Techniques for optimizing React applications including memoization, code splitting, virtualization, and profiling tools.' },
    ]
  },
  {
    id: '3',
    title: 'Data Science Fundamentals with Python',
    instructor: 'Sarah Johnson',
    description: 'Learn the core concepts of data science using Python. This course covers data manipulation, visualization, statistical analysis, and machine learning basics.',
    price: 89.99,
    discountPrice: 59.99,
    rating: 4.7,
    reviewCount: 1856,
    level: 'intermediate',
    category: 'Data Science',
    image: '/placeholder.svg',
    duration: '36h 45m',
    lessons: [
      { id: '3-1', title: 'Python for Data Science', duration: '2h', content: 'Introduction to Python programming for data science. Learn about NumPy, Pandas, and basic data manipulation techniques.' },
      { id: '3-2', title: 'Data Visualization', duration: '1h 30m', content: 'Create stunning data visualizations using Matplotlib and Seaborn. Learn how to choose the right visualization for your data.' },
      { id: '3-3', title: 'Introduction to Machine Learning', duration: '3h', content: 'Learn the fundamentals of machine learning including supervised and unsupervised learning, model evaluation, and basic algorithms.' },
    ]
  },
  {
    id: '4',
    title: 'Mobile App Development with Flutter',
    instructor: 'David Chen',
    description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with Flutter and Dart.',
    price: 79.99,
    rating: 4.6,
    reviewCount: 1245,
    level: 'intermediate',
    category: 'Mobile Development',
    image: '/placeholder.svg',
    duration: '32h 20m',
    lessons: [
      { id: '4-1', title: 'Dart Programming Basics', duration: '1h 45m', content: 'Introduction to the Dart programming language including syntax, data types, functions, and object-oriented programming concepts.' },
      { id: '4-2', title: 'Flutter Widgets', duration: '2h 30m', content: 'Learn about Flutter widgets, which are the building blocks of Flutter applications. Cover stateless and stateful widgets.' },
      { id: '4-3', title: 'Building Your First App', duration: '3h 15m', content: 'Step-by-step guide to building your first Flutter application from scratch, deploying it to iOS and Android.' },
    ]
  },
  {
    id: '5',
    title: 'AWS Certified Solutions Architect',
    instructor: 'Robert Wilson',
    description: 'Prepare for the AWS Certified Solutions Architect Associate exam. Learn to design available, cost-efficient, fault-tolerant systems on AWS.',
    price: 149.99,
    discountPrice: 99.99,
    rating: 4.9,
    reviewCount: 3578,
    level: 'advanced',
    category: 'Cloud Computing',
    image: '/placeholder.svg',
    duration: '45h 30m',
    isFeatured: true,
    lessons: [
      { id: '5-1', title: 'AWS Fundamentals', duration: '2h', content: 'Introduction to AWS services and the cloud computing model. Overview of regions, availability zones, and global infrastructure.' },
      { id: '5-2', title: 'EC2 and Virtual Networking', duration: '3h', content: 'Deep dive into Amazon EC2 instances, VPC, subnets, security groups, and network ACLs. Learn to design secure network architectures.' },
      { id: '5-3', title: 'Storage Solutions', duration: '2h 30m', content: 'Comprehensive coverage of AWS storage options including S3, EBS, EFS, and Glacier. Learn when to use each storage solution.' },
    ]
  },
  {
    id: '6',
    title: 'UX/UI Design Principles',
    instructor: 'Emily Parker',
    description: 'Learn the fundamental principles of user experience and interface design. Create wireframes, prototypes, and design systems that users love.',
    price: 69.99,
    rating: 4.5,
    reviewCount: 982,
    level: 'beginner',
    category: 'Design',
    image: '/placeholder.svg',
    duration: '24h 10m',
    lessons: [
      { id: '6-1', title: 'Design Thinking Process', duration: '1h 30m', content: 'Introduction to the design thinking methodology including empathize, define, ideate, prototype, and test phases.' },
      { id: '6-2', title: 'Wireframing and Prototyping', duration: '2h', content: 'Learn to create wireframes and interactive prototypes using tools like Figma and Adobe XD.' },
      { id: '6-3', title: 'Usability Testing', duration: '1h 45m', content: 'Methods and best practices for conducting usability tests to validate your designs and gather user feedback.' },
    ]
  },
  {
    id: '7',
    title: 'DevOps and CI/CD Pipeline Implementation',
    instructor: 'Alex Martinez',
    description: 'Master DevOps practices and implement continuous integration and deployment pipelines using Git, Jenkins, Docker, and Kubernetes.',
    price: 119.99,
    discountPrice: 89.99,
    rating: 4.8,
    reviewCount: 1456,
    level: 'advanced',
    category: 'DevOps',
    image: '/placeholder.svg',
    duration: '38h 45m',
    lessons: [
      { id: '7-1', title: 'Introduction to DevOps', duration: '1h', content: 'Overview of DevOps culture, principles, and practices. Learn how DevOps bridges the gap between development and operations.' },
      { id: '7-2', title: 'Docker Containers', duration: '2h 30m', content: 'Learn to containerize applications with Docker. Topics include images, containers, Dockerfiles, and Docker Compose.' },
      { id: '7-3', title: 'CI/CD with Jenkins', duration: '3h', content: 'Implement continuous integration and continuous deployment pipelines using Jenkins. Automate testing and deployment processes.' },
    ]
  },
  {
    id: '8',
    title: 'Blockchain Development with Ethereum',
    instructor: 'Jason Miller',
    description: 'Learn to develop decentralized applications (DApps) on the Ethereum blockchain using Solidity, Web3.js, and Truffle.',
    price: 139.99,
    discountPrice: 99.99,
    rating: 4.7,
    reviewCount: 876,
    level: 'intermediate',
    category: 'Blockchain',
    image: '/placeholder.svg',
    duration: '30h 20m',
    lessons: [
      { id: '8-1', title: 'Blockchain Fundamentals', duration: '2h', content: 'Introduction to blockchain technology, including distributed ledgers, consensus mechanisms, and cryptographic principles.' },
      { id: '8-2', title: 'Smart Contracts with Solidity', duration: '3h 15m', content: 'Learn to write smart contracts using Solidity programming language for the Ethereum blockchain.' },
      { id: '8-3', title: 'Building DApps', duration: '2h 45m', content: 'Develop decentralized applications that interact with the Ethereum blockchain using Web3.js and frontend frameworks.' },
    ]
  },
  {
    id: '9',
    title: 'Python for Machine Learning',
    instructor: 'Jennifer Adams',
    description: 'Master Python libraries and frameworks for machine learning. Build models for classification, regression, clustering, and reinforcement learning.',
    price: 129.99,
    discountPrice: 89.99,
    rating: 4.8,
    reviewCount: 2156,
    level: 'intermediate',
    category: 'Data Science',
    image: '/placeholder.svg',
    duration: '38h 15m',
    lessons: [
      { id: '9-1', title: 'Scikit-Learn Fundamentals', duration: '2h 30m', content: 'Learn to use Scikit-Learn for implementing machine learning algorithms with Python.' },
      { id: '9-2', title: 'Neural Networks with TensorFlow', duration: '3h 15m', content: 'Build and train neural networks using TensorFlow and Keras for complex machine learning tasks.' },
    ]
  },
  {
    id: '10',
    title: 'Advanced JavaScript Patterns',
    instructor: 'Daniel Wilson',
    description: 'Deep dive into advanced JavaScript patterns and techniques used by professional developers to build scalable applications.',
    price: 99.99,
    discountPrice: 79.99,
    rating: 4.6,
    reviewCount: 1583,
    level: 'advanced',
    category: 'JavaScript',
    image: '/placeholder.svg',
    duration: '26h 40m',
    lessons: [
      { id: '10-1', title: 'Closure and Scope', duration: '1h 45m', content: 'Understanding JavaScript closures, lexical scope, and the module pattern.' },
      { id: '10-2', title: 'Functional Programming', duration: '2h 30m', content: 'Apply functional programming concepts in JavaScript including pure functions, immutability, and higher-order functions.' },
    ]
  },
  {
    id: '11',
    title: 'iOS Development with Swift',
    instructor: 'Laura Johnson',
    description: 'Learn to build beautiful iOS applications using Swift and SwiftUI. Master Apple\'s design guidelines and development processes.',
    price: 119.99,
    rating: 4.7,
    reviewCount: 1245,
    level: 'intermediate',
    category: 'Mobile Development',
    image: '/placeholder.svg',
    duration: '34h 20m',
    lessons: [
      { id: '11-1', title: 'Swift Programming Basics', duration: '2h 15m', content: 'Introduction to Swift programming language including syntax, types, functions, and object-oriented programming concepts.' },
      { id: '11-2', title: 'UIKit Fundamentals', duration: '3h', content: 'Learn to build user interfaces with UIKit, handling navigation, user input, and displaying data.' },
    ]
  },
  {
    id: '12',
    title: 'Android Development with Kotlin',
    instructor: 'Mark Chen',
    description: 'Build modern Android applications using Kotlin. Master Android architecture components, Material Design, and best practices.',
    price: 109.99,
    discountPrice: 79.99,
    rating: 4.5,
    reviewCount: 986,
    level: 'intermediate',
    category: 'Mobile Development',
    image: '/placeholder.svg',
    duration: '32h 45m',
    lessons: [
      { id: '12-1', title: 'Kotlin for Android', duration: '2h', content: 'Learn Kotlin programming language features specifically useful for Android development.' },
      { id: '12-2', title: 'Android Architecture Components', duration: '2h 30m', content: 'Implement MVVM architecture using LiveData, ViewModel, Room, and other Android Architecture Components.' },
    ]
  },
  {
    id: '13',
    title: 'Full-Stack Development with MERN',
    instructor: 'Sarah Thompson',
    description: 'Build complete web applications using MongoDB, Express, React, and Node.js. Master the entire development stack from database to UI.',
    price: 149.99,
    discountPrice: 99.99,
    rating: 4.9,
    reviewCount: 2376,
    level: 'intermediate',
    category: 'Web Development',
    image: '/placeholder.svg',
    duration: '45h 30m',
    lessons: [
      { id: '13-1', title: 'Backend Development with Node.js', duration: '3h 15m', content: 'Build RESTful APIs using Node.js and Express. Learn routing, middleware, authentication, and error handling.' },
      { id: '13-2', title: 'Database Design with MongoDB', duration: '2h 45m', content: 'Design and implement NoSQL databases with MongoDB. Learn data modeling, indexing, and performance optimization.' },
    ]
  },
  {
    id: '14',
    title: 'Cybersecurity Fundamentals',
    instructor: 'Robert Harris',
    description: 'Learn the core principles of cybersecurity. Understand threats, vulnerabilities, and methods to protect systems and data from attacks.',
    price: 129.99,
    rating: 4.7,
    reviewCount: 1583,
    level: 'beginner',
    category: 'Cybersecurity',
    image: '/placeholder.svg',
    duration: '38h 15m',
    lessons: [
      { id: '14-1', title: 'Security Fundamentals', duration: '2h', content: 'Introduction to core security concepts including CIA triad, authentication, authorization, and security controls.' },
      { id: '14-2', title: 'Network Security', duration: '3h', content: 'Learn how to secure networks, implement firewalls, detect intrusions, and protect against common network attacks.' },
    ]
  },
  {
    id: '15',
    title: 'Ethical Hacking',
    instructor: 'James Wilson',
    description: 'Master ethical hacking techniques to identify and fix security vulnerabilities. Learn penetration testing methodologies and tools.',
    price: 149.99,
    discountPrice: 119.99,
    rating: 4.8,
    reviewCount: 2143,
    level: 'advanced',
    category: 'Cybersecurity',
    image: '/placeholder.svg',
    duration: '42h 30m',
    lessons: [
      { id: '15-1', title: 'Reconnaissance Techniques', duration: '2h 30m', content: 'Learn information gathering techniques to identify potential targets and vulnerabilities in systems.' },
      { id: '15-2', title: 'Vulnerability Assessment', duration: '3h 15m', content: 'Use tools and methodologies to identify, classify, and prioritize vulnerabilities in systems and networks.' },
    ]
  },
  {
    id: '16',
    title: 'Game Development with Unity',
    instructor: 'Emily Chen',
    description: 'Learn to create 2D and 3D games using Unity game engine. Master game design, physics, animations, and C# programming.',
    price: 119.99,
    discountPrice: 89.99,
    rating: 4.6,
    reviewCount: 1345,
    level: 'beginner',
    category: 'Game Development',
    image: '/placeholder.svg',
    duration: '36h 20m',
    lessons: [
      { id: '16-1', title: 'Unity Fundamentals', duration: '2h 15m', content: 'Introduction to Unity interface, game objects, components, and the scene hierarchy.' },
      { id: '16-2', title: 'C# for Game Development', duration: '2h 45m', content: 'Learn C# programming specifically for game development in Unity.' },
    ]
  },
  {
    id: '17',
    title: 'Advanced Game Development',
    instructor: 'Michael Johnson',
    description: 'Take your game development skills to the next level. Learn advanced techniques for AI, shaders, multiplayer, and optimization.',
    price: 139.99,
    rating: 4.7,
    reviewCount: 983,
    level: 'advanced',
    category: 'Game Development',
    image: '/placeholder.svg',
    duration: '40h 15m',
    lessons: [
      { id: '17-1', title: 'Game AI Systems', duration: '3h', content: 'Implement artificial intelligence for non-player characters including pathfinding, decision making, and behavior trees.' },
      { id: '17-2', title: 'Multiplayer Game Architecture', duration: '3h 30m', content: 'Design and implement multiplayer game systems using various networking approaches.' },
    ]
  },
  {
    id: '18',
    title: 'Data Visualization with D3.js',
    instructor: 'Sarah Miller',
    description: 'Master the art of data visualization using D3.js. Create interactive charts, graphs, and maps for web applications.',
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.5,
    reviewCount: 876,
    level: 'intermediate',
    category: 'Data Science',
    image: '/placeholder.svg',
    duration: '28h 30m',
    lessons: [
      { id: '18-1', title: 'D3.js Fundamentals', duration: '2h', content: 'Introduction to D3.js library for manipulating documents based on data.' },
      { id: '18-2', title: 'Interactive Visualizations', duration: '2h 45m', content: 'Create interactive charts and graphs with animations, transitions, and user interactions.' },
    ]
  },
  {
    id: '19',
    title: 'Product Management Essentials',
    instructor: 'Jennifer Lopez',
    description: 'Learn the fundamentals of product management. Develop skills in research, strategy, roadmapping, and prioritization.',
    price: 99.99,
    rating: 4.8,
    reviewCount: 1432,
    level: 'beginner',
    category: 'Business',
    image: '/placeholder.svg',
    duration: '24h 15m',
    lessons: [
      { id: '19-1', title: 'Product Strategy', duration: '1h 45m', content: 'Learn how to define product vision, strategy, and roadmap based on business goals and user needs.' },
      { id: '19-2', title: 'User Research Methods', duration: '2h', content: 'Techniques for understanding user needs through interviews, surveys, usability testing, and analytics.' },
    ]
  },
  {
    id: '20',
    title: 'Digital Marketing Masterclass',
    instructor: 'Michael Smith',
    description: 'Comprehensive guide to digital marketing including SEO, social media, email marketing, and analytics. Learn to create effective marketing campaigns.',
    price: 109.99,
    discountPrice: 79.99,
    rating: 4.6,
    reviewCount: 1876,
    level: 'intermediate',
    category: 'Marketing',
    image: '/placeholder.svg',
    duration: '32h 45m',
    lessons: [
      { id: '20-1', title: 'SEO Fundamentals', duration: '2h 30m', content: 'Learn search engine optimization techniques to improve website visibility and organic traffic.' },
      { id: '20-2', title: 'Social Media Marketing', duration: '2h 15m', content: 'Strategies for effective marketing on various social media platforms including content planning and audience engagement.' },
    ]
  },
  {
    id: '21',
    title: 'Photography Fundamentals',
    instructor: 'Emily Wilson',
    description: 'Learn the basics of photography including camera settings, composition, lighting, and editing. Start taking professional-quality photos.',
    price: 79.99,
    discountPrice: 59.99,
    rating: 4.7,
    reviewCount: 1543,
    level: 'beginner',
    category: 'Photography',
    image: '/placeholder.svg',
    duration: '22h 30m',
    lessons: [
      { id: '21-1', title: 'Camera Basics', duration: '1h 45m', content: 'Understanding camera types, settings, exposure triangle, and basic equipment.' },
      { id: '21-2', title: 'Composition Techniques', duration: '2h', content: 'Learn rules of composition including rule of thirds, leading lines, symmetry, and framing.' },
    ]
  },
  {
    id: '22',
    title: 'Advanced Photography',
    instructor: 'Robert Chen',
    description: 'Take your photography to the professional level. Master advanced lighting, studio techniques, and post-processing workflows.',
    price: 99.99,
    rating: 4.8,
    reviewCount: 986,
    level: 'advanced',
    category: 'Photography',
    image: '/placeholder.svg',
    duration: '28h 15m',
    lessons: [
      { id: '22-1', title: 'Advanced Lighting', duration: '2h 30m', content: 'Master complex lighting setups using multiple light sources, modifiers, and advanced techniques.' },
      { id: '22-2', title: 'Professional Post-Processing', duration: '3h', content: 'Learn advanced photo editing techniques in Lightroom and Photoshop for professional results.' },
    ]
  },
  {
    id: '23',
    title: 'Graphic Design Principles',
    instructor: 'Laura Martinez',
    description: 'Learn the fundamental principles of graphic design including typography, color theory, layout, and visual hierarchy.',
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.6,
    reviewCount: 1243,
    level: 'beginner',
    category: 'Design',
    image: '/placeholder.svg',
    duration: '26h 45m',
    lessons: [
      { id: '23-1', title: 'Typography Basics', duration: '1h 45m', content: 'Understanding font types, pairing, hierarchy, and effective use of typography in design.' },
      { id: '23-2', title: 'Color Theory', duration: '2h', content: 'Learn color psychology, schemes, harmonies, and how to effectively use color in design projects.' },
    ]
  },
  {
    id: '24',
    title: 'Motion Graphics with After Effects',
    instructor: 'Daniel Miller',
    description: 'Create stunning motion graphics and visual effects using Adobe After Effects. Master animation principles and techniques.',
    price: 119.99,
    rating: 4.7,
    reviewCount: 876,
    level: 'intermediate',
    category: 'Design',
    image: '/placeholder.svg',
    duration: '32h 30m',
    lessons: [
      { id: '24-1', title: 'After Effects Fundamentals', duration: '2h 15m', content: 'Introduction to After Effects interface, tools, and basic workflows.' },
      { id: '24-2', title: 'Animation Principles', duration: '2h 30m', content: 'Learn core animation principles including timing, spacing, anticipation, and follow-through.' },
    ]
  },
  {
    id: '25',
    title: 'SEO and Content Marketing',
    instructor: 'Jennifer Harris',
    description: 'Master search engine optimization and content marketing strategies to drive organic traffic and engage audiences.',
    price: 99.99,
    discountPrice: 79.99,
    rating: 4.5,
    reviewCount: 1432,
    level: 'intermediate',
    category: 'Marketing',
    image: '/placeholder.svg',
    duration: '28h 15m',
    lessons: [
      { id: '25-1', title: 'Technical SEO', duration: '2h', content: 'Learn to optimize website structure, speed, mobile-friendliness, and indexability for search engines.' },
      { id: '25-2', title: 'Content Strategy', duration: '2h 30m', content: 'Develop effective content strategies that align with business goals and user needs.' },
    ]
  },
  {
    id: '26',
    title: 'Project Management Professional (PMP)',
    instructor: 'Robert Johnson',
    description: 'Comprehensive preparation for the PMP certification exam. Master project management methodologies, tools, and best practices.',
    price: 149.99,
    discountPrice: 119.99,
    rating: 4.9,
    reviewCount: 2345,
    level: 'advanced',
    category: 'Business',
    image: '/placeholder.svg',
    duration: '48h 30m',
    lessons: [
      { id: '26-1', title: 'Project Integration Management', duration: '3h', content: 'Learn to develop project charters, management plans, and coordinate all project work.' },
      { id: '26-2', title: 'Project Scope Management', duration: '2h 45m', content: 'Techniques for collecting requirements, defining scope, creating WBS, and controlling scope changes.' },
    ]
  },
  {
    id: '27',
    title: 'Financial Accounting',
    instructor: 'Sarah Thompson',
    description: 'Learn the fundamentals of financial accounting including bookkeeping, financial statements, and accounting principles.',
    price: 89.99,
    rating: 4.6,
    reviewCount: 1143,
    level: 'beginner',
    category: 'Finance',
    image: '/placeholder.svg',
    duration: '26h 15m',
    lessons: [
      { id: '27-1', title: 'Accounting Basics', duration: '2h', content: 'Introduction to accounting concepts, double-entry bookkeeping, and the accounting equation.' },
      { id: '27-2', title: 'Financial Statements', duration: '2h 30m', content: 'Learn to prepare and interpret income statements, balance sheets, and cash flow statements.' },
    ]
  },
  {
    id: '28',
    title: 'Investment Strategies',
    instructor: 'Michael Chen',
    description: 'Master investment principles and strategies for stocks, bonds, real estate, and alternative investments. Build a diversified portfolio.',
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.7,
    reviewCount: 1576,
    level: 'intermediate',
    category: 'Finance',
    image: '/placeholder.svg',
    duration: '34h 45m',
    lessons: [
      { id: '28-1', title: 'Asset Allocation', duration: '2h 15m', content: 'Learn strategies for diversifying investments across different asset classes based on risk tolerance and goals.' },
      { id: '28-2', title: 'Stock Analysis', duration: '3h', content: 'Techniques for fundamental and technical analysis of stocks to make informed investment decisions.' },
    ]
  },
  {
    id: '29',
    title: 'Spanish for Beginners',
    instructor: 'Elena Rodriguez',
    description: 'Learn Spanish from scratch. Master basic vocabulary, grammar, and conversation skills for everyday situations.',
    price: 69.99,
    discountPrice: 49.99,
    rating: 4.8,
    reviewCount: 2143,
    level: 'beginner',
    category: 'Language',
    image: '/placeholder.svg',
    duration: '30h 15m',
    lessons: [
      { id: '29-1', title: 'Basic Vocabulary', duration: '2h', content: 'Learn essential Spanish vocabulary for everyday situations including greetings, numbers, and common objects.' },
      { id: '29-2', title: 'Grammar Fundamentals', duration: '2h 30m', content: 'Introduction to Spanish grammar including verb conjugation, gender agreement, and sentence structure.' },
    ]
  },
  {
    id: '30',
    title: 'Mandarin Chinese Intermediate',
    instructor: 'Li Wei',
    description: 'Build on your basic Mandarin skills. Expand vocabulary, improve pronunciation, and develop more complex conversation abilities.',
    price: 99.99,
    rating: 4.7,
    reviewCount: 1243,
    level: 'intermediate',
    category: 'Language',
    image: '/placeholder.svg',
    duration: '36h 30m',
    lessons: [
      { id: '30-1', title: 'Intermediate Conversation', duration: '2h 45m', content: 'Practice more complex conversation patterns for various social and professional situations.' },
      { id: '30-2', title: 'Reading and Writing', duration: '3h', content: 'Develop skills to read and write common Chinese characters and understand authentic materials.' },
    ]
  }
];

export default coursesData;
