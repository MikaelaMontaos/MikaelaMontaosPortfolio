// Text and options
const textNodes = [
    {
        id: 1,
        text: 'You found Mikaela\'s desk. What would you like to do?',
        staticBackground: 'images/0001.png',
        options: [
            {
                text: 'Learn more about Mikaela',
                nextText: 2,
                backgroundImages: [
                    'images/0024.png', 'images/0025.png', 'images/0026.png', 'images/0027.png',
                    'images/0028.png', 'images/0029.png', 'images/0030.png', 'images/0031.png',
                    'images/0032.png', 'images/0033.png', 'images/0034.png', 'images/0035.png',
                    'images/0036.png', 'images/0037.png', 'images/0038.png', 'images/0039.png',
                    'images/0040.png', 'images/0041.png', 'images/0042.png', 'images/0043.png',
                    'images/0044.png', 'images/0045.png', 'images/0046.png', 'images/0047.png',
                    'images/0048.png', 'images/0049.png', 'images/0050.png', 'images/0051.png',
                    'images/0052.png', 'images/0053.png', 'images/0054.png', 'images/0055.png',
                    'images/0056.png', 'images/0057.png', 'images/0058.png', 'images/0059.png',
                    'images/0060.png', 'images/0061.png', 'images/0062.png', 'images/0063.png',
                    'images/0064.png', 'images/0122.png'
                ]
            },
            {
                text: 'View Mikaela\'s portfolio',
                nextText: 3,
                backgroundImages: [
                    'images/0024.png', 'images/0025.png', 'images/0026.png', 'images/0027.png',
                    'images/0028.png', 'images/0029.png', 'images/0030.png', 'images/0031.png',
                    'images/0032.png', 'images/0033.png', 'images/0034.png', 'images/0035.png',
                    'images/0036.png', 'images/0037.png', 'images/0038.png', 'images/0039.png',
                    'images/0040.png', 'images/0041.png', 'images/0042.png', 'images/0043.png',
                    'images/0044.png', 'images/0045.png', 'images/0046.png', 'images/0047.png',
                    'images/0048.png', 'images/0049.png', 'images/0050.png', 'images/0051.png',
                    'images/0052.png', 'images/0053.png', 'images/0054.png', 'images/0055.png',
                    'images/0056.png', 'images/0057.png', 'images/0058.png', 'images/0059.png',
                    'images/0060.png', 'images/0061.png', 'images/0062.png', 'images/0063.png',
                    'images/0064.png', 'images/0122.png',
                    'images/0154.png', 'images/0155.png', 'images/0156.png', 'images/0157.png',
                    'images/0158.png', 'images/0159.png', 'images/0160.png', 'images/0161.png',
                    'images/0162.png', 'images/0163.png', 'images/0164.png', 'images/0165.png',
                    'images/0166.png', 'images/0167.png', 'images/0168.png', 'images/0169.png',
                    'images/0170.png', 'images/0171.png', 'images/0172.png', 'images/0173.png',
                    'images/0174.png'
                ]
            },
        ]
    },
    {
        id: 2,
        text: 'I love bringing ideas to life while utilizing both my art and technology skills. Whether it\'s computer science, game design, graphic design, or digital art, I\'m all about making things that are both beautiful and functional.',
        staticBackground: 'images/0122.png',
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
                backgroundImages: [
                    'images/0064.png', 'images/0063.png', 'images/0062.png', 'images/0061.png',
                    'images/0060.png', 'images/0059.png', 'images/0058.png', 'images/0057.png',
                    'images/0056.png', 'images/0055.png', 'images/0054.png', 'images/0053.png',
                    'images/0052.png', 'images/0051.png', 'images/0050.png', 'images/0049.png',
                    'images/0048.png', 'images/0047.png', 'images/0046.png', 'images/0045.png',
                    'images/0044.png', 'images/0043.png', 'images/0042.png', 'images/0041.png',
                    'images/0040.png', 'images/0039.png', 'images/0038.png', 'images/0037.png',
                    'images/0036.png', 'images/0035.png', 'images/0034.png', 'images/0033.png',
                    'images/0032.png', 'images/0031.png', 'images/0030.png', 'images/0029.png',
                    'images/0028.png', 'images/0027.png', 'images/0026.png', 'images/0025.png',
                    'images/0024.png', 'images/0001.png'
                ]
            }
        ]
    },
    {
        id: 3,
        text: 'Check out these games I worked on. Some projects I worked solo and some I worked as part of a team.',
        staticBackground: 'images/0174.png',
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
                backgroundImages: [
                    'images/0174.png', 'images/0173.png', 'images/0172.png', 'images/0171.png',
                    'images/0170.png', 'images/0169.png', 'images/0168.png', 'images/0167.png',
                    'images/0166.png', 'images/0165.png', 'images/0164.png', 'images/0163.png',
                    'images/0162.png', 'images/0161.png', 'images/0160.png', 'images/0159.png',
                    'images/0158.png', 'images/0157.png', 'images/0156.png', 'images/0155.png',
                    'images/0154.png', 'images/0122.png',
                    'images/0064.png', 'images/0063.png', 'images/0062.png', 'images/0061.png',
                    'images/0060.png', 'images/0059.png', 'images/0058.png', 'images/0057.png',
                    'images/0056.png', 'images/0055.png', 'images/0054.png', 'images/0053.png',
                    'images/0052.png', 'images/0051.png', 'images/0050.png', 'images/0049.png',
                    'images/0048.png', 'images/0047.png', 'images/0046.png', 'images/0045.png',
                    'images/0044.png', 'images/0043.png', 'images/0042.png', 'images/0041.png',
                    'images/0040.png', 'images/0039.png', 'images/0038.png', 'images/0037.png',
                    'images/0036.png', 'images/0035.png', 'images/0034.png', 'images/0033.png',
                    'images/0032.png', 'images/0031.png', 'images/0030.png', 'images/0029.png',
                    'images/0028.png', 'images/0027.png', 'images/0026.png', 'images/0025.png',
                    'images/0024.png', 'images/0001.png'
                ]
            }
        ]
    }
]

// For text and options
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('optionButtons');

let state = {}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully");

    startGame();
})

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

    if (!textNode) {
        console.error(`Text node with id ${textNodeIndex} not found`);
        console.log(`Showing text node ${textNodeIndex}`);
        return;
    }

    textElement.innerHTML = `<p>${textNode.text}</p>`;

    // Set static background if available 
    if (textNode.staticBackground) {
        document.body.style.backgroundImage = `url('${textNode.staticBackground}')`;
    } else {
        document.body.style.backgroundImage = "";
    }

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
}

function selectOption(option) {
    // If option has link then open in new tab then return
    if (option.link) {
        window.open(option.link, '_blank');
        return;
    }
    // Else, update state and text node
    const nextTextNodeId = option.nextText;
    state = Object.assign(state, option.setState);

    // Show static background immediately if provided 
    if (option.staticBackground) {
        document.body.style.backgroundImage = `url('${option.staticBackground}')`;
    }

    showTextNode(nextTextNodeId);

    // Animate background images after user clicks option 
    if (option.backgroundImages && option.backgroundImages.length > 0) {
        const body = document.body;
        let index = 0;

        if (window.bgAnimationInterval) clearInterval(window.bgAnimationInterval);

        option.backgroundImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        window.bgAnimationInterval = setInterval(() => {
            body.style.backgroundImage = `url('${option.backgroundImages[index]}')`;
            console.log(`Animating: ${option.backgroundImages[index]}`);
            index++;
            if (index >= option.backgroundImages.length) {
                clearInterval(window.bgAnimationInterval);

                // Hold the last frame for a moment
                setTimeout(() => {
                    document.body.style.backgroundImage = `url('${option.backgroundImages[option.backgroundImages.length - 1]}')`;
                }, 200);
            }
        }, 200);
    }
}

// Copy email
function copyEmail() {
    const email = "mvamontaos@ymail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard");
    }).catch(err => {
        console.error("Error copying email: ", err);
    });
}