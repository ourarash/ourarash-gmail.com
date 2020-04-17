data = {
  qas: [
    {
      question: "What we should NOT do during quarantine time?",

      answers: [
        "Wash hands",
        "Netflix binge watch",
        "Work on EE599 project",
        "Stay home"
      ],
      explanation: "One should not spend all of his/her quarantine time watching movies!",
      correctAnswer: 1
    },
    {
      question: "Who was a USC faculty member?",

      answers: [
        "Lester R. Ford",
        "Stephen Hawking",
        "Richard E. Bellman",
        "Robert W. Floyd"
      ],
      explanation: "Richard E. Bellman was a professor at the University of Southern California. In 1965, Bellman became Professor of Mathematics, Electrical Engineering, and Medicine at the University of Southern California.",
      correctAnswer: 2
    },
    {
      question: "Which one is the slowest sorting algorithm compared to others?",

      answers: [
        "Merge sort",
        "Bubble sort",
        "Selection sort",
        "Heap sort"
      ],
      explanation: "While both Selection and Bubble sort are O(n), bubble sort has much worse performance.",
      correctAnswer: 1
    },
    {
      question: "What’s the one thing highschool students in the US are most likely to forget to bring to class?",

      answers: [
        "Pen/Pencil",
        "Homework",
        "Book",
        "Calculator"
      ],
      explanation: "In a survey of 100 US high school students, 62 students answered Pen/Pencil.",
      correctAnswer: 0
    },
    {
      question: "What’s the most common excuse when students don’t do homework?",

      answers: [
        "No time/Too busy",
        "Work/Job",
        "What homework??",
        "Forgot",
      ],
      explanation: "In a survey of 100 US high school students, 39 students answered they forgot.",
      correctAnswer: 3
    }, {
      question: "If a student is distracted by their phone, what app are they most likely playing with?",

      answers: [
        "Instagram",
        "Snapchat",
        "YouTube",
        "Zoom"
      ],
      explanation: "In a survey of 100 US high school students, 68 students answered Snapchat.",
      correctAnswer: 1
    }, {
      question: "What are professors' drink of choice?",

      answers: [

        "Milk",
        "Tea",
        "Apple martini",
        "Coffee",

      ],
      explanation: "It's a very well known fact that professors cannot go on without coffee.",
      correctAnswer: 3
    },
    {
      question: "If a professor provides a hint for a question in the midterm, what does it mean?",
      answers: [

        "Hint is for stupid people. Ignore!",
        "The professor has too much extra time.",
        "We should use it!",
        "What hint?",

      ],
      explanation: "Just pay attention to hints guys.",
      correctAnswer: 2
    }]
}



data = {
  qas: [
    {
      question: "What is the best way of spending your time during quarantine?",
      img: "assets/quarantine.jpeg",
      answers: [
        "Binge watch Tiger King on Netflix",
        "Play beach volleyball",
        "Score toilet papers",
        "Watch TikTok video clips",
        "Work on the EE559 project"
      ],
      explanation: "What else did you expect?",
      correctAnswer: 4
    },
    {
      question: "Who is the first president of USC?",

      answers: [
        "Marion M. Bovard",
        "George F. Bovard",
        "Wanda M. Austin",
        "Carol Folt"
      ],
      explanation: "Marion M. Bovard was elected USC’s first president on September 3, 1880. He also served as chair of mental and moral science.",
      correctAnswer: 0
    },
    {
      question: "What error can this code generate?",
      img: "assets/bond.png",
      answers: [
        "Range out of bound",
        "Parameter out of bound",
        "Function out of bound",
        "Bond, James Bond"
      ],
      explanation: "We check for a's range, but not for b's.",
      correctAnswer: 0
    },

    {
      question: "What's the runtime of this algorithm?",
      img: "assets/bs.png",
      answers: [
        "O(n)",
        "O(n^2)",
        "O(Log n)",
        "O(n Log n)"
      ],
      explanation: "Binary search is O(Log n) because each time the problem size is divided into half.",
      correctAnswer: 2
    },
    {
      question: "What’s the most common excuse when students don’t do assignments?",

      answers: [
        "No time/Too busy",
        "Work/Job",
        "What homework??",
        "Forgot",
      ],
      explanation: "In a survey of 100 US high school students, 39 students answered they forgot.",
      correctAnswer: 3
    },
    {
      question: "What’s the most common excuse when TA's don’t do their assignments?",

      answers: [
        "Had exam/HW",
        "Forgot",
        "What assignment?",
        "Out of town",
      ],
      explanation: "Most TA's are busy with other courses and are busy with their hw/exams.",
      correctAnswer: 0
    },
    {
      question: "What’s the most common excuse when Professors don’t do their assignments?",

      answers: [
        "The grader/TA was late",
        "Had other classes",
        "Will talk about it next time",
        "All of the above",
      ],
      explanation: "Professors make all sort of excuses.",
      correctAnswer: 3
    },
    {
      question: "What is wrong with this code?",
      img: "assets/async.png",
      answers: [
        "It's an async function.",
        "It's not a function.",
        "Forgot promise keyword.",
        "Forgot async keyword."
      ],
      explanation: "An function that uses await should be defined as async.",
      correctAnswer: 3
    },
    {
      question: "Who is NOT a provost?",

      answers: [
        "The university’s chief academic officer.",
        "The university’s dean.",
        "Charles F. Zukoski",
        "The university’s second-ranking administrator"
      ],
      explanation: "Charles F. Zukoski is the current USC's provost who is the university’s chief academic officer and also the university’s second-ranking administrator.",
      correctAnswer: 1
    }, {
      question: "What is professors' drink of choice?",
      img: "assets/drink.jpg",
      answers: [
        "Milk",
        "Tea",
        "Apple martini",
        "Coffee",
      ],
      explanation: "It's a very well known fact that professors cannot go on without coffee.",
      correctAnswer: 3
    },
    {
      question: "Node.js is a __________ application.",
      img: "assets/node.png",
      answers: [
        "Single-threaded",
        "Multi-threaded",
        "Single-threaded with event loop",
        "Single-threaded without event loop",
      ],
      explanation: "NodeJS is single threaded but the event loop allows it to have access to system's thread pool.",
      correctAnswer: 2
    },
    {
      question: "If a professor provides a hint for a question in the midterm, what does it mean?",
      img: "assets/hint.png",
      answers: [

        "Hint is for stupid people. Ignore!",
        "The professor has too much extra time.",
        "We should use it!",
        "What hint?",

      ],
      explanation: "Just pay attention to hints guys.",
      correctAnswer: 2
    },
    {
      question: "What is the runtime complexity of push_back function in a vector?",
      img: "assets/amortize.png",
      answers: [

        "O(1)",
        "O(n)",
        "O(1), Amortized",
        "O(n/2)",

      ],
      explanation: "Run-time of push_back is on average O(1). In other words, the amortized run time is O(1).",
      correctAnswer: 2
    },
    {
      question: "What is the output of a hash function?",
      img: "assets/hash_function.png",
      answers: [

        "Index",
        "Key",
        "Value",
        "Hash table",

      ],
      explanation: "A hash function takes a key and returns an index in the hash table.",
      correctAnswer: 0
    },
    {
      question: "What is a middleware in NodeJS Express?",
      img: "assets/middleware.png",
      answers: [

        "What sits between software and hardware",
        "The OS",
        "Callback function",
        "A function that has access to the request object (req) and the response object (res).",

      ],
      explanation: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.",
      correctAnswer: 3
    }
  ]
}