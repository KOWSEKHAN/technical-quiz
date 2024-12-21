const questions = {
    cs: [
        {
            "question": "What does RAM stand for?",
            "options": ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Remote Access Memory"],
            "correct": 0,
            "explanation": "RAM stands for Random Access Memory, which is used to store data temporarily."
        },
        {
            "question": "What is the main function of an operating system?",
            "options": ["Manage hardware", "Store data", "Compile programs", "Connect to the internet"],
            "correct": 0,
            "explanation": "The operating system manages hardware and software resources in a computer."
        },
        {
            "question": "Which number system is used by computers?",
            "options": ["Binary", "Decimal", "Hexadecimal", "Octal"],
            "correct": 0,
            "explanation": "Computers use the binary number system, which consists of 0s and 1s."
        },
        {
            "question": "What is the smallest unit of data in a computer?",
            "options": ["Bit", "Byte", "Nibble", "Word"],
            "correct": 0,
            "explanation": "A bit is the smallest unit of data and can hold a value of 0 or 1."
        },
        {
            "question": "Which device is considered an input device?",
            "options": ["Printer", "Monitor", "Mouse", "Speaker"],
            "correct": 2,
            "explanation": "A mouse is an input device used to provide data to a computer."
        },
        {
            "question": "What does URL stand for?",
            "options": ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Link", "Unique Resource Locator"],
            "correct": 0,
            "explanation": "URL is the address used to access resources on the web."
        },
        {
            "question": "What is the purpose of a compiler?",
            "options": ["Execute programs", "Translate code to machine language", "Debug code", "Store data"],
            "correct": 1,
            "explanation": "A compiler translates high-level code into machine-readable format."
        },
        {
            "question": "What is an algorithm?",
            "options": ["A step-by-step procedure", "A type of software", "A programming language", "A storage system"],
            "correct": 0,
            "explanation": "An algorithm is a set of instructions designed to solve a problem."
        },
        {
            "question": "Which of these is a secondary storage device?",
            "options": ["RAM", "Hard Drive", "Cache", "Register"],
            "correct": 1,
            "explanation": "A hard drive is a secondary storage device used to store data long-term."
        },
        {
            "question": "What does GUI stand for?",
            "options": ["Graphical User Interface", "General User Input", "Graphical Utility Interface", "Generated User Interaction"],
            "correct": 0,
            "explanation": "GUI refers to the graphical interface that allows users to interact with computers visually."
        },
        {
            "question": "What is a network?",
            "options": ["Collection of interconnected devices", "A single computer", "A database system", "A software application"],
            "correct": 0,
            "explanation": "A network connects multiple devices to share resources and data."
        },
        {
            "question": "Which protocol is used for secure data transmission?",
            "options": ["HTTP", "FTP", "SSH", "HTTPS"],
            "correct": 3,
            "explanation": "HTTPS encrypts data for secure communication over the web."
        },
        {
            "question": "What does 'IoT' stand for?",
            "options": ["Internet of Things", "Interconnected Online Tools", "Input Output Technology", "Internet of Technology"],
            "correct": 0,
            "explanation": "IoT refers to the interconnected devices that can communicate over the internet."
        },
        {
            "question": "Which of these is a volatile memory?",
            "options": ["Hard Drive", "SSD", "RAM", "DVD"],
            "correct": 2,
            "explanation": "RAM is volatile memory, meaning it loses data when power is lost."
        },
        {
            "question": "What is the purpose of a database?",
            "options": ["Store and manage data", "Compile code", "Design web pages", "Connect networks"],
            "correct": 0,
            "explanation": "A database is used to store, organize, and manage data efficiently."
        }
    ],
    c: [
        {
            "question": "What is the return type of the 'main()' function in C?",
            "options": ["int", "void", "float", "char"],
            "correct": 0,
            "explanation": "The main() function typically returns an integer to indicate program success or failure."
        },
        {
            "question": "Which header file is essential to use the 'printf()' function?",
            "options": ["stdlib.h", "stdio.h", "string.h", "math.h"],
            "correct": 1,
            "explanation": "The 'stdio.h' header file contains declarations for input/output functions like printf()."
        },
        {
            "question": "Which operator is used to access memory addresses in C?",
            "options": ["*", "&", "#", "%"],
            "correct": 1,
            "explanation": "The '&' operator is used to retrieve the memory address of a variable."
        },
        {
            "question": "What is the size of an integer on a 32-bit system?",
            "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            "correct": 1,
            "explanation": "An integer typically occupies 4 bytes on a 32-bit system."
        },
        {
            "question": "How do you declare a constant in C?",
            "options": ["#define", "const", "constant", "immutable"],
            "correct": 1,
            "explanation": "The 'const' keyword is used to declare a constant variable in C."
        },
        {
            "question": "Which loop is entry-controlled in C?",
            "options": ["for", "while", "do-while", "Both for and while"],
            "correct": 3,
            "explanation": "The 'for' and 'while' loops are entry-controlled, meaning the condition is checked before execution."
        },
        {
            "question": "What does the 'break' keyword do in C?",
            "options": ["Stops a loop", "Skips an iteration", "Ends the program", "None of these"],
            "correct": 0,
            "explanation": "The 'break' statement exits a loop or switch case prematurely."
        },
        {
            "question": "Which operator is used for pointer dereferencing?",
            "options": ["*", "&", "%", "$"],
            "correct": 0,
            "explanation": "The '*' operator is used to dereference a pointer, accessing the value it points to."
        },
        {
            "question": "What does 'sizeof' operator do?",
            "options": ["Checks the size of data types or variables", "Allocates memory", "Deallocates memory", "Performs arithmetic"],
            "correct": 0,
            "explanation": "The 'sizeof' operator returns the memory size of a data type or variable."
        },
        {
            "question": "What is a segmentation fault?",
            "options": ["Memory overflow", "Invalid memory access", "Compiler error", "Linker error"],
            "correct": 1,
            "explanation": "A segmentation fault occurs when a program tries to access restricted memory."
        },
        {
            "question": "Which keyword is used to include a library in C?",
            "options": ["import", "include", "#include", "library"],
            "correct": 2,
            "explanation": "The '#include' directive is used to include standard or user-defined libraries."
        },
        {
            "question": "What is the syntax for single-line comments in C?",
            "options": ["//", "/*...*/", "#", "<!-- -->"],
            "correct": 0,
            "explanation": "Single-line comments in C start with '//'."
        },
        {
            "question": "What does the 'return' statement do in C?",
            "options": ["Terminates a function", "Exits the program", "Repeats a loop", "Continues a loop"],
            "correct": 0,
            "explanation": "The 'return' statement is used to exit a function and optionally return a value."
        },
        {
            "question": "Which keyword is used to declare dynamic memory in C?",
            "options": ["malloc", "allocate", "dynamic", "pointer"],
            "correct": 0,
            "explanation": "The 'malloc' function is used for dynamic memory allocation."
        },
        {
            "question": "Which function is used to read a string in C?",
            "options": ["scanf()", "gets()", "fgets()", "Both gets() and fgets()"],
            "correct": 3,
            "explanation": "Both 'gets()' and 'fgets()' can be used to read strings, but 'fgets()' is safer."
        }
    ],
    python: [
        {
            "question": "What is the correct file extension for Python scripts?",
            "options": [".python", ".py", ".pyt", ".pyth"],
            "correct": 1,
            "explanation": "Python script files typically have the '.py' extension."
        },
        {
            "question": "What keyword is used to define a function in Python?",
            "options": ["def", "function", "fun", "define"],
            "correct": 0,
            "explanation": "In Python, functions are defined using the 'def' keyword."
        },
        {
            "question": "What is the output of `print(2**3)`?",
            "options": ["6", "8", "9", "Error"],
            "correct": 1,
            "explanation": "The '**' operator in Python performs exponentiation; 2**3 equals 8."
        },
        {
            "question": "Which of the following is an immutable data type in Python?",
            "options": ["list", "tuple", "set", "dictionary"],
            "correct": 1,
            "explanation": "Tuples are immutable, meaning their contents cannot be changed."
        },
        {
            "question": "How do you write a single-line comment in Python?",
            "options": ["#", "//", "<!-- -->", "/* */"],
            "correct": 0,
            "explanation": "Single-line comments in Python start with '#'."
        },
        {
            "question": "What is the output of `type(10)` in Python?",
            "options": ["int", "float", "str", "list"],
            "correct": 0,
            "explanation": "The 'type()' function returns the data type of a value; 10 is an integer."
        },
        {
            "question": "Which operator is used for integer division in Python?",
            "options": ["/", "//", "%", "**"],
            "correct": 1,
            "explanation": "The '//' operator performs floor division, returning an integer result."
        },
        {
            "question": "What does the 'is' operator check in Python?",
            "options": ["Values", "IDs", "Types", "Memory size"],
            "correct": 1,
            "explanation": "The 'is' operator checks whether two variables refer to the same object in memory."
        },
        {
            "question": "Which function is used to get input from the user in Python?",
            "options": ["input()", "raw_input()", "scanf()", "read()"],
            "correct": 0,
            "explanation": "The 'input()' function reads input from the user as a string."
        },
        {
            "question": "Which of these is not a Python keyword?",
            "options": ["class", "try", "main", "def"],
            "correct": 2,
            "explanation": "'main' is not a keyword in Python, but it is commonly used as a function name."
        },
        {
            "question": "What is the purpose of the 'len()' function in Python?",
            "options": ["Calculate length", "Concatenate strings", "Find max value", "Sort data"],
            "correct": 0,
            "explanation": "The 'len()' function returns the length of an object such as a string, list, or dictionary."
        },
        {
            "question": "What is the result of `bool('False')` in Python?",
            "options": ["False", "True", "Error", "None"],
            "correct": 1,
            "explanation": "In Python, non-empty strings evaluate to True, regardless of their content."
        },
        {
            "question": "Which Python module is used to generate random numbers?",
            "options": ["math", "random", "numbers", "os"],
            "correct": 1,
            "explanation": "The 'random' module provides functions for generating random numbers."
        },
        {
            "question": "How do you create a dictionary in Python?",
            "options": ["[]", "()", "{}", "<>"],
            "correct": 2,
            "explanation": "Dictionaries in Python are created using curly braces {}."
        },
        {
            "question": "What does 'PEP' stand for in Python?",
            "options": ["Python Easy Programming", "Python Enhancement Proposal", "Python Extended Plan", "Program Execution Protocol"],
            "correct": 1,
            "explanation": "'PEP' stands for Python Enhancement Proposal, which is a document that describes new features or improvements."
        }
    ],
    java: [
        {
            "question": "What is the default value of a boolean variable in Java?",
            "options": ["true", "false", "0", "null"],
            "correct": 1,
            "explanation": "In Java, the default value of a boolean is 'false'."
        },
        {
            "question": "What is the size of an int in Java?",
            "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            "correct": 1,
            "explanation": "In Java, an int is 4 bytes (32 bits) in size."
        },
        {
            "question": "Which of the following is used to declare a constant in Java?",
            "options": ["constant", "final", "immutable", "const"],
            "correct": 1,
            "explanation": "In Java, the 'final' keyword is used to declare a constant."
        },
        {
            "question": "Which of these is a method signature in Java?",
            "options": ["void method()", "method void()", "void method[]", "method() void"],
            "correct": 0,
            "explanation": "A method signature in Java consists of the return type, method name, and parameters."
        },
        {
            "question": "What is the purpose of the 'super' keyword in Java?",
            "options": ["Access a superclass method", "Create a new object", "End a loop", "Allocate memory"],
            "correct": 0,
            "explanation": "'super' is used to refer to the superclass or invoke its constructor or methods."
        },
        {
            "question": "Which of these is the correct way to create an array in Java?",
            "options": ["int[] arr = new int[5];", "int arr[] = new int[];", "array int[5];", "int arr = new int[];"],
            "correct": 0,
            "explanation": "The correct syntax to declare an array in Java is 'int[] arr = new int[5];'."
        },
        {
            "question": "Which method is used to find the length of an array in Java?",
            "options": ["length()", "getLength()", "size()", "length"],
            "correct": 3,
            "explanation": "In Java, arrays have a property called 'length' to find their size."
        },
        {
            "question": "What is the output of the following Java code? `System.out.println(3 + 4 + 'A');`",
            "options": ["51", "54", "61", "Error"],
            "correct": 2,
            "explanation": "In Java, the character 'A' is implicitly converted to its ASCII value (65), resulting in '3 + 4 + 65 = 72'."
        },
        {
            "question": "Which of the following is true about constructors in Java?",
            "options": ["Constructors are optional", "Constructors cannot have a return type", "Constructors must be explicitly defined", "Constructors cannot take parameters"],
            "correct": 1,
            "explanation": "In Java, constructors cannot have a return type, not even 'void'."
        },
        {
            "question": "Which of the following is not a valid access modifier in Java?",
            "options": ["public", "private", "protected", "package"],
            "correct": 3,
            "explanation": "'package' is not an access modifier in Java; the valid ones are public, private, and protected."
        },
        {
            "question": "What does the 'this' keyword refer to in Java?",
            "options": ["Current class object", "Parent class object", "Main method", "None of these"],
            "correct": 0,
            "explanation": "The 'this' keyword refers to the current object of the class."
        },
        {
            "question": "What is the default value of a reference type variable in Java?",
            "options": ["0", "null", "false", "empty string"],
            "correct": 1,
            "explanation": "The default value of a reference type variable (like an object) is 'null'."
        },
        {
            "question": "Which of these is an example of a valid method overloading in Java?",
            "options": ["int add(int a, int b)", "int add(int a, float b)", "void add(int a, int b)", "All of the above"],
            "correct": 3,
            "explanation": "Method overloading in Java is the ability to define multiple methods with the same name but different parameter types."
        },
        {
            "question": "Which of these is true about interfaces in Java?",
            "options": ["An interface can have implementation", "An interface can be instantiated", "An interface can only have abstract methods", "An interface is not allowed to have fields"],
            "correct": 2,
            "explanation": "An interface in Java can only have abstract methods and constants (fields)."
        },
        {
            "question": "What is the correct syntax to start a switch statement in Java?",
            "options": ["switch { expression }", "switch (expression) { }", "switch (expression):", "switch: { expression }"],
            "correct": 1,
            "explanation": "The correct syntax is 'switch (expression) { }'."
        }
    ],
    webdev: [
        {
            "question": "What does HTML stand for?",
            "options": ["HyperText Markup Language", "Hyperlinks Text Markup Language", "HighText Machine Language", "Hyperlinking and Text Management Language"],
            "correct": 0,
            "explanation": "HTML stands for HyperText Markup Language, used to create web pages."
        },
        {
            "question": "Which tag is used to insert an image in HTML?",
            "options": ["<img>", "<image>", "<pic>", "<src>"],
            "correct": 0,
            "explanation": "The <img> tag is used to embed images in an HTML document."
        },
        {
            "question": "What does CSS stand for?",
            "options": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
            "correct": 0,
            "explanation": "CSS stands for Cascading Style Sheets, which are used to style web pages."
        },
        {
            "question": "Which property is used to change the background color in CSS?",
            "options": ["color", "background-color", "bgcolor", "background"],
            "correct": 1,
            "explanation": "The 'background-color' property in CSS is used to set the background color."
        },
        {
            "question": "What does the DOM stand for?",
            "options": ["Document Object Model", "Data Object Model", "Document Oriented Model", "Dynamic Object Mapping"],
            "correct": 0,
            "explanation": "The DOM is a programming interface for HTML and XML documents."
        },
        {
            "question": "Which HTML tag is used to define a hyperlink?",
            "options": ["<link>", "<a>", "<href>", "<anchor>"],
            "correct": 1,
            "explanation": "The <a> tag is used to define a hyperlink."
        },
        {
            "question": "What is the purpose of JavaScript in web development?",
            "options": ["Structure web pages", "Style web pages", "Add interactivity", "Optimize images"],
            "correct": 2,
            "explanation": "JavaScript is used to make web pages interactive, such as handling events and animations."
        },
        {
            "question": "Which method is used to find an element by its ID in JavaScript?",
            "options": ["getElementByClass", "querySelector", "getElementById", "getElementsByTag"],
            "correct": 2,
            "explanation": "The 'getElementById()' method is used to retrieve an element by its ID."
        },
        {
            "question": "What is the correct format for adding an external CSS file?",
            "options": ["<link href='style.css'>", "<stylesheet href='style.css'>", "<css src='style.css'>", "<style url='style.css'>"],
            "correct": 0,
            "explanation": "The <link> tag with 'href' is used to include external CSS files."
        },
        {
            "question": "What is the difference between 'id' and 'class' in HTML?",
            "options": ["'id' is unique; 'class' is reusable", "'id' is reusable; 'class' is unique", "Both are unique", "Both are reusable"],
            "correct": 0,
            "explanation": "'id' must be unique for each element, whereas 'class' can be applied to multiple elements."
        },
        {
            "question": "What does the <canvas> element in HTML do?",
            "options": ["Create a drawing area", "Play audio", "Embed a video", "Add a form"],
            "correct": 0,
            "explanation": "The <canvas> element is used to draw graphics using JavaScript."
        },
        {
            "question": "What is Bootstrap used for in web development?",
            "options": ["Build responsive websites", "Style web pages", "Optimize web images", "Create animations"],
            "correct": 0,
            "explanation": "Bootstrap is a framework for building responsive and mobile-first web pages."
        },
        {
            "question": "Which HTML element is used to embed videos?",
            "options": ["<media>", "<embed>", "<video>", "<play>"],
            "correct": 2,
            "explanation": "The <video> tag is used to embed video files in an HTML document."
        },
        {
            "question": "What is the role of the 'alt' attribute in an <img> tag?",
            "options": ["Defines image size", "Provides alternative text", "Specifies the file type", "Links to external resources"],
            "correct": 1,
            "explanation": "The 'alt' attribute provides alternative text for an image, displayed if the image fails to load."
        },
        {
            "question": "What is the use of media queries in CSS?",
            "options": ["Apply styles for specific devices", "Validate code", "Test performance", "Optimize images"],
            "correct": 0,
            "explanation": "Media queries in CSS are used to apply styles based on device screen sizes and other properties."
        }
    ]
};
let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let highScores = JSON.parse(localStorage.getItem("highScores")) || {};
let wrongAnswers = [];
const domains = ["cs", "c", "python", "java", "webdev"];
domains.forEach(domain => {
    if (!highScores[domain]) highScores[domain] = [];
});
function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    const randomizedQuestions = [...questions[currentTopic]].sort(() => 0.5 - Math.random()).slice(0, 15);
    questions[currentTopic] = randomizedQuestions;
    document.body.innerHTML = `
        <div class="scoreboard">Score: 0</div>
        <div class="timer">Time Left: 15s</div>
        <div id="quiz-container"></div>
    `;
    displayQuestion();
}

function displayQuestion() {
    if (timer) clearInterval(timer);
    let timeLeft = 15;
    timer = setInterval(() => {
        document.querySelector(".timer").innerText = `Time Left: ${timeLeft}s`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            checkAnswer(-1); // No answer selected
        }
    }, 1000);
    const question = questions[currentTopic][currentQuestionIndex];
    const quizContainer = document.querySelector("#quiz-container");
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options
            .map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`)
            .join('')}
    `;
}

function checkAnswer(selected) {
    clearInterval(timer);
    const question = questions[currentTopic][currentQuestionIndex];
    if (selected !== question.correct) {
        wrongAnswers.push(question);
    } else {
        score++;
        document.querySelector(".scoreboard").innerText = `Score: ${score}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);
    const quizContainer = document.querySelector("#quiz-container");
    const feedback = wrongAnswers.map(
        (q, index) => `<p style="margin-left: 20px;">${index + 1}. ${q.question} - Ans: ${q.options[q.correct]}</p>`
    ).join('');
    const attemptTime = new Date().toLocaleString();
    highScores[currentTopic].push({ time: attemptTime, score });
    highScores[currentTopic] = highScores[currentTopic].sort((a, b) => b.score - a.score).slice(0, 5); // Top 5 scores
    localStorage.setItem("highScores", JSON.stringify(highScores));
    const previousAttempts = highScores[currentTopic].map(
        s => `<tr><td style="border: 1px solid black; padding: 8px;">${s.time}</td><td style="border: 1px solid black; padding: 8px;">${s.score}</td></tr>`
    ).join('');
    quizContainer.innerHTML = `
        <h2>Your Score: ${score}</h2>
        <h3>Also Learn:</h3>
        <div>${feedback}</div>
        <h3>${currentTopic.toUpperCase()} High Scores:</h3>
        <table style="margin: auto; border-collapse: collapse; width: 50%;">
            <tr>
                <th style="border: 1px solid black; padding: 8px;">Attempt Time</th>
                <th style="border: 1px solid black; padding: 8px;">Score</th>
            </tr>
            ${previousAttempts}
        </table>
    `;
}

