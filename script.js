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
                backgroundVideo: 'videos/Morning-Afternoon.mp4'
            },
            {
                text: 'View Mikaela\'s portfolio',
                nextText: 3,
                backgroundVideo: 'videos/Morning-Night.mp4'
            },
        ]
    },
    {
        id: 2,
        text: 'I love bringing ideas to life while utilizing both my art and technology skills. Whether it\'s computer science, game design, graphic design, or digital art, I\'m all about making things that are both beautiful and functional.',
        staticBackground: 'images/0001.png',
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
                backgroundVideo: 'videos/Afternoon-Morning.mp4'
            }
        ]
    },
    {
        id: 3,
        text: 'Check out these games I worked on. Some projects I worked solo and some I worked as part of a team.',
        staticBackground: 'images/0001.png',
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
                text: 'The Way Home downloadable for Windows',
                link: 'https://1drv.ms/u/c/dee0b8ea014b5989/IQCJWUsB6rjgIIDeB4ACAAAAAam8jCsJfDIrO5OzgEfXVv4?e=ezm1lx'
            },
            {
                text: 'Art portfolio',
                link: 'https://1drv.ms/f/c/dee0b8ea014b5989/IgDlXPplWhhTS6EuJxFWzNobAZfLQBnL4nyJ9D5FJDe9utE?e=xhIraa'
            },
            {
                text: 'Back',
                nextText: 1,
                backgroundVideo: 'videos/Night-Morning.mp4'
            }
        ]
    }
]

// const
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('optionButtons');
const staticBg = document.getElementById('staticBackground');
const video = document.getElementById('backgroundVideo');

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully");

    startGame();
})

function startGame() {
    state = {};
    showTextNode(1);
}

function setBackground(imageUrl) {
    const bg = document.getElementById('backgroundLayer');
    bg.style.opacity = '0';

    setTimeout(() => {
        bg.style.backgroundImage = `url('${imageUrl}')`;
        bg.style.opacity = '1';
    }, 50);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

    if (!textNode) {
        console.error(`Text node with id ${textNodeIndex} not found`);
        console.log(`Showing text node ${textNodeIndex}`);
        return;
    }

    textElement.innerHTML = `<p>${textNode.text}</p>`;

    // Set static background if available 
    /* if (textNode.staticBackground) {
        document.body.style.backgroundImage = `url('${textNode.staticBackground}')`;
        video.pause();
        video.style.display = 'none';
    } else {
        document.body.style.backgroundImage = '';
    } */

    // ✅ Set static background immediately on load
    if (textNode.staticBackground) {
        staticBg.style.backgroundImage = `url('${textNode.staticBackground}')`;
        staticBg.style.opacity = '1';
        video.style.opacity = '0';
        video.pause();
    }

    // Clear and render options
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

function playBackgroundVideo(src, fallbackImage) {
    // Show static background immediately
    staticBg.style.backgroundImage = `url('${fallbackImage}')`;
    staticBg.style.opacity = '1';
    video.style.opacity = '0';

    // Reset and load new video
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.src = src;
    video.load();

    video.oncanplay = () => {
        video.play().catch(err => console.error('Video play failed:', err));
        video.style.opacity = '1';

        // Fade out static background after video is visible
        setTimeout(() => {
            staticBg.style.opacity = '0';
        }, 100); // slight delay ensures video is visible before fade
    };
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

    // Video background
    if (option.backgroundVideo) {
        const nextNode = textNodes.find(node => node.id === option.nextText);
        const fallbackImage = nextNode?.staticBackground || '';
        playBackgroundVideo(option.backgroundVideo, fallbackImage);
    } else {
        video.pause();
        video.style.opacity = '0';
        staticBg.style.opacity = '1';

        const nextNode = textNodes.find(node => node.id === option.nextText);
        if (nextNode?.staticBackground) {
            staticBg.style.backgroundImage = `url('${nextNode.staticBackground}')`;
        } else {
            staticBg.style.backgroundImage = '';
        }
    }

    showTextNode(nextTextNodeId); // this must run after video logic
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