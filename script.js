// Array of emoji objects with decimal references
const emojiArray = [
    { emoji: '😀', code: '128512' },
    { emoji: '😁', code: '128513' },
    { emoji: '😂', code: '128514' },
    { emoji: '😃', code: '128515' },
    { emoji: '😄', code: '128516' },
    { emoji: '😅', code: '128517' },
    { emoji: '😆', code: '128518' },
    { emoji: '😇', code: '128519' },
    { emoji: '😈', code: '128520' },
    { emoji: '😉', code: '128521' },
    { emoji: '😊', code: '128522' },
    { emoji: '😋', code: '128523' }
];

// Select the section where emojis will be added
const gallerySection = document.getElementById('emoji-gallery');

// Loop through the emoji array and add each emoji and its code to the gallery
emojiArray.forEach(item => {
    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emoji-item');
    
    emojiDiv.innerHTML = `
        <span>${item.emoji}</span>
        <span class="emoji-code">${item.code}</span>
    `;
    
    gallerySection.appendChild(emojiDiv);
});

