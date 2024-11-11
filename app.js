let flashcards = [];

// Load flashcards from localStorage
function loadFlashcards() {
    const saved = localStorage.getItem('interviewFlashcards');
    if (saved) {
        flashcards = JSON.parse(saved);
        displayFlashcards();
    }
}

// Save flashcards to localStorage
function saveFlashcards() {
    localStorage.setItem('interviewFlashcards', JSON.stringify(flashcards));
}

function addFlashcard() {
    const question = document.getElementById('question').value.trim();
    const answer = document.getElementById('answer').value.trim();
    
    if (question && answer) {
        flashcards.push({ question, answer });
        saveFlashcards();
        displayFlashcards();
        
        // Clear inputs
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
    }
}

function displayFlashcards() {
    const container = document.getElementById('flashcards');
    container.innerHTML = '';
    
    flashcards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = 'flashcard';
        div.innerHTML = `
            <div class="flashcard-question">${card.question}</div>
            <div class="flashcard-answer">${card.answer}</div>
            <button onclick="deleteFlashcard(${index})" class="button" style="margin-top: 10px;">Delete</button>
        `;
        div.onclick = function(e) {
            if (e.target.tagName !== 'BUTTON') {
                this.classList.toggle('flipped');
            }
        };
        container.appendChild(div);
    });
}

function deleteFlashcard(index) {
    flashcards.splice(index, 1);
    saveFlashcards();
    displayFlashcards();
}

function showAll() {
    document.querySelectorAll('.flashcard').forEach(card => {
        card.classList.add('flipped');
    });
}

function hideAll() {
    document.querySelectorAll('.flashcard').forEach(card => {
        card.classList.remove('flipped');
    });
}

// Load flashcards when page loads
window.onload = loadFlashcards;
