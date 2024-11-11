// Sample questions data
const questions = {
    background: [
        {
            id: 1,
            text: "Please tell me why you would be a good fit for this role."
        },
        {
            id: 2,
            text: "Can you please tell me a bit about yourself?"
        },
        {
            id: 3,
            text: "Please tell me about some of your strengths and weaknesses."
        }
    ],
    situational: [
        {
            id: 1,
            text: "Tell me about a time when you delivered results despite a challenging environment or context. What was the situation, what was your goal, and what were the results?"
        },
        {
            id: 2,
            text: "Tell me about a time when you had to develop a new skill. How did you approach the learning process?"
        },
        {
            id: 3,
            text: "Describe a situation when you disagreed with someone at work. What did you do, and what was the result?"
        }
    ]
};

// Initialize the app
function initApp() {
    loadQuestions('background');
    loadQuestions('situational');
}

// Load questions into the DOM
function loadQuestions(category) {
    const container = document.getElementById(category);
    container.innerHTML = ''; // Clear existing content
    
    questions[category].forEach(question => {
        const card = createQuestionCard(question);
        container.appendChild(card);
    });
}

// Create a question card element
function createQuestionCard(question) {
    const div = document.createElement('div');
    div.className = 'question-card';
    div.innerHTML = `
        <p class="question-text">${question.text}</p>
        <button class="practice-button" onclick="toggleAnswer(this)">Practice Answer</button>
    `;
    return div;
}

// Show selected tab
function showTab(clickedTab, tabName) {
    // Update tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Toggle answer state
function toggleAnswer(button) {
    const card = button.closest('.question-card');
    card.classList.toggle('answered');
    button.textContent = card.classList.contains('answered') ? 'Practice Again' : 'Practice Answer';
}

// Initialize when page loads
window.onload = initApp;
