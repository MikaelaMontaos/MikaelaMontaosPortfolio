// Check if website loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully");
});

// For the dialogue and options
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('optionButtons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    }
    )
}

// Show option if there is a required state or none
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}
// If a state changed
function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
// Open a link to a new window
function isALink(option) {
    if (option.requiredState(state)) {
        button.onclick = () => window.open(option.link, "_blank")
    }
}
// Text and options
const textNodes = [
    {
        id: 1,
        text: 'You found Mikaela\'s desk. What would you like to do?',
        options: [
            {
                text: 'Learn more about Mikaela',
                setState: { isLink: true },
                nextText: 2
            },
            {
                text: 'View Mikaela\'s portfolio',
                nextText: 3
            },
        ]
    },
    {
        id: 2,
        text: 'I love bringing ideas to life while utilizing both my art and technology skills. Whether it\'s computer science, game design, graphic design, or digital art, I\'m all about making things that are both beautiful and functional.',
        options: [
            {
                text: 'Github (code)',
                link: 'https://github.com/MikaelaMontaos',
                requiredState: (currentState) => currentState.isLink
            },
            {
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/in/mmontaos/',
                requiredState: (currentState) => currentState.isLink
            },
            {
                text: 'Instagram (art)',
                link: 'https://www.instagram.com/mika.otome/',
                requiredState: (currentState) => currentState.isLink
            },
            {
                text: 'Resume',
                link: 'Mikaela_Montaos_Resume.pdf',
                requiredState: (currentState) => currentState.isLink
            },
            {
                text: 'Back',
                setState: { isLink: false },
                nextText: 1
            }
        ]
    },
    {
        id: 3,
        text: 'Check out these games I worked on. Some projects I worked solo and some I worked as part of a team.',
        options: [
            {
                text: 'Back',
                nextText: 1
            }
        ]
    }
]

// Copy email
function copyEmail() {
    const email = "mvamontaos@ymail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard");
    }).catch(err => {
        console.error("Error copying email: ", err);
    });
}

startGame()