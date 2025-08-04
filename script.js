// Check if website loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully");
});

// For text and options
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
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    })
}

function selectOption(option) {
    // If option has link then open in new tab then return
    if (option.link) {
        window.open(option.link, '_blank')
        return
    }
    // Else, update state and text node
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
    // Preload images
    if (option.backgroundImages) {
        option.backgroundImages.forEach(image => {
            const img = new Image();
            img.src = image;
        });

        const body = document.body;
        let index = 0;
        const interval = setInterval(() => {
            body.style.backgroundImage = `url(${option.backgroundImages[index]})`;
            index++;
            if (index >= option.backgroundImages.length) {
                clearInterval(interval);
            }
        }, 100); // Change image every 100ms
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
                nextText: 2,
                backgroundImages: ['', '', '']
            },
            {
                text: 'View Mikaela\'s portfolio',
                nextText: 3,
                backgroundImages: ['', '', '']
            },
        ]
    },
    {
        id: 2,
        text: 'I love bringing ideas to life while utilizing both my art and technology skills. Whether it\'s computer science, game design, graphic design, or digital art, I\'m all about making things that are both beautiful and functional.',
        options: [
            {
                text: 'Github (code)',
                link: 'https://github.com/MikaelaMontaos'
            },
            {
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/in/mmontaos/'
            },
            {
                text: 'Instagram (art)',
                link: 'https://www.instagram.com/mika.otome/'
            },
            {
                text: 'Resume',
                link: 'Mikaela_Montaos_Resume.pdf'
            },
            {
                text: 'Back',
                nextText: 1,
                backgroundImages: ['', '', '']
            }
        ]
    },
    {
        id: 3,
        text: 'Check out these games I worked on. Some projects I worked solo and some I worked as part of a team.',
        options: [
            {
                text: 'Oublivious on Steam',
                link: 'https://store.steampowered.com/app/3388360/Oublivious/'
            },
            {
                text: 'Oublivious on itch.io',
                link: 'https://oubliviousteam.itch.io/oublivious'
            },
            {
                text: 'Coconut Cascade on itch.io',
                link: 'https://mikaela-m-09.itch.io/coconut-cascade'
            },
            {
                text: 'Back',
                nextText: 1,
                backgroundImages: ['', '', '']
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