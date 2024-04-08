document.getElementById('luckyButton').addEventListener('click', imFeelingLucky);

function imFeelingLucky(e) {
	e.preventDefault(); // Prevent the form from submitting the normal way
	const query = document.getElementById('query').value;
	window.location.href = `https://www.google.com/search?q=${query}&btnI=I`; // Redirect to Google's "I'm Feeling Lucky" URL
}



document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.getElementById('query');
	const suggestionsBox = document.getElementById('searchSuggestions');

	// Predefined list of popular search terms
	const popularSearchTerms = [
	"Scratch programming basics",
    "Computational thinking in Scratch",
    "Scratch loops and events",
    "Problem-solving with Scratch",
    "Scratch functions and variables",
    "C programming fundamentals",
    "Compiler and machine code in C",
    "Understanding C syntax",
    "Memory management in C",
    "C language conditionals and loops",
    "C programming arrays",
    "String manipulation in C",
    "Basics of cryptography",
    "Debugging in C programming",
    "Understanding command-line arguments in C"​,
    "Linear and binary search algorithms",
    "Sorting algorithms in computer science",
    "Bubble, selection, and merge sort",
    "Recursion in algorithms",
    "Asymptotic notation understanding",
,   "Understanding pointers in C",
    "Dynamic memory allocation",
    "C programming and buffer overflow",
    "File I/O operations in C",
    "Memory segmentation faults",
    "Data structures in computer science",
    "Implementing queues and stacks",
    "Linked lists and binary trees",
    "Hash tables and their applications",
    "Tries data structure in programming",
    "Python programming for beginners",
    "Functions and modules in Python",
    "Conditional statements in Python",
    "Loops and control flow in Python",
    "Understanding Python packages",
	"Understanding Python data types",
	"Understanding Python strings",
	"Understanding Python lists",
	"Understanding Python dictionaries",
	"Understanding Python sets",
    "SQL database management",
    "Creating tables and indexes in SQL",
    "SQL injection attacks and prevention",
    "SQL transactions and constraints",
    "SQL statements and functions"​,
	"Understanding HTTP and URLs",
	"CSS properties and selectors",
	"JavaScript programming basics",
	"Creating dynamic web pages with JavaScript",
	"Web development with Flask",
	"Understanding Flask routes",
	"Creating web applications with Flask",
	"Handling requests and responses in Flask",
	"Session management in Flask",
	"Understanding Flask templates",
	"Understanding Flask forms",
	"Understanding Flask sessions",
	"Understanding Flask sessions",
	"Scratch programming basics",
    "C language fundamentals",
    "Arrays and strings in C",
    "Linear and binary search algorithms",
    "Sorting techniques in computer science",
    "Memory management in C programming",
    "Pointers and dynamic memory allocation",
    "Python programming essentials",
    "SQL database management and security",
    "HTML and CSS for web design",
    "JavaScript for interactive web pages",
    "Flask framework for web applications",
    "Understanding TCP/IP and DNS",
    "File I/O operations in programming",
    "Data structures like queues and stacks",
    "Implementing linked lists and trees",
    "Hash tables and tries in programming",
    "Asymptotic notation in algorithms",
    "Web development with Flask and Python",
    "HTTP protocols and web servers",
	];

	searchInput.addEventListener('input', function () {
		const query = searchInput.value.trim().toLowerCase();
		suggestionsBox.innerHTML = ''; // Clear previous suggestions

		if (query.length > 0) {
			const filteredSuggestions = popularSearchTerms.filter(term =>
				term.toLowerCase().startsWith(query)
			);

			// Create suggestions elements and append them to suggestionsBox
			filteredSuggestions.forEach(term => {
				const suggestionElement = document.createElement('div');
				suggestionElement.textContent = term;
				suggestionElement.onclick = function () {
					searchInput.value = term; // Set search input to the selected term
					suggestionsBox.innerHTML = ''; // Clear suggestions
				};
				suggestionsBox.appendChild(suggestionElement);
			});
		}
	});
});
