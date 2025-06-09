export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Risk of Rain 2',
        desc:
            'Risk of Rain 2 is a cooperative third person shooter with roguelike elements. Players control a stranded survivor that must escape from a hostile alien planet. In the beginning of the game, players can choose between several survivors, each with a unique set of abilities which require different approaches to gameplay.',
        roll:"Unity Developer",
        subdesc:
            'Developed and maintained front-end features, implemented new gameplay mechanics and multiplayer gameplay, fixed critical bugs while maintaining a high level of quality.',
        platforms: "PC, Consoles(Xbox one, Xbox Series X, PS4, PS5, Switch)",
        href: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',
        texture: '/textures/project/ror2.mov',
        logo: '/assets/ror2-Icon.jpg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity-Logo.jpg',
            },
            {
                id: 2,
                name: 'CSharp',
                path: 'assets/csharp-Logo.png',
            },
            {
                id: 3,
                name: 'Git',
                path: '/assets/git-Logo.png',
            },
        ],
    },
    {
        title: 'Driver Survivor',
        desc: 'Driver Survivor is a endless Driver game, where you have to avoid obstacles and run over zombies while looking out for your health.',
        roll:"Unity Developer",
        subdesc:
            'Implemented core gameplay mechanics, like driving mechanics, zombie behavior and level design tools, developed responsive UI systems and helped integrating analytics while maintaining a high level of quality.',
        platforms: "Mobile(Android, IOS)",
        href: 'https://play.google.com/store/apps/details?id=com.amberstudio.driversurvivor&hl=en',
        texture: '/textures/project/driverSurvivor.mov',
        logo: '/assets/driverSurvivor-Icon.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity-Logo.jpg',
            },
            {
                id: 2,
                name: 'CSharp',
                path: 'assets/csharp-Logo.png',
            },
            {
                id: 3,
                name: 'Git',
                path: '/assets/git-Logo.png',
            },
            {
                id: 4,
                name: 'Firebase',
                path: '/assets/firebase-Logo.png',
            },
        ],
    },
    {
        title: 'JAPI Museum exhibits',
        desc: 'Worked on 2 different exhibits, the first was an agricultural based gamed where the main focus was to teach sustainable agriculture practices and the other was a virtual reality game that walked you through the different spices that you can find in the zone',
        roll:"Engineering Lead - Unity 3D",
        subdesc:
            'Designed and implemented the project\'s architecture, developed core gameplay mechanics and systems, was also responsible for managing the engineering team, project timelines and technical requirements.',
        platforms: "PC(Touch screen), VR(Oculus Quest 2)",
        href: 'https://japipaseointeractivo.mx/',
        texture: '/textures/project/japi.mov',
        logo: '/assets/japi-Icon.jpg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity-Logo.jpg',
            },
            {
                id: 2,
                name: 'CSharp',
                path: 'assets/csharp-Logo.png',
            },
            {
                id: 3,
                name: 'Git',
                path: '/assets/git-Logo.png',
            },
        ],
    },
    {
        title: 'Saw X: Survive the Obby',
        desc: 'Saw X: Survive the Obby was a limited time Obby game, that was part of the promotion for the movie Saw X and only was active for 2 months.',
        roll:"Engineering Lead - Roblox",
        subdesc:
            'Designed and implemented the project\'s architecture, player rewards system, developed core gameplay mechanics and systems, was also responsible for managing the engineering team, project timelines and technical requirements.',
        platforms: "PC, Mobile, Consoles",
        href: 'https://www.youtube.com/watch?v=frPyTJ2kqZA',
        texture: '/textures/project/sawX.mov',
        logo: '/assets/sawX-Icon.jpg',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Roblox',
                path: '/assets/roblox-Logo.png',
            },
            {
                id: 2,
                name: 'Lua',
                path: 'assets/lua-Logo.png',
            },
            {
                id: 3,
                name: 'Git',
                path: '/assets/git-Logo.png',
            },
        ],
    },
    {
        title: 'Secret Neighbor Roblox',
        desc: 'Secret Neighbor is a multiplayer spin-off of Hello Neighbor. The game involves a group of six children trying to break into the basement of the Neighbor\'s house. Unbeknownst to them, one of the kids is the Neighbor in disguise. The children have to collect up to 6 keys to unlock the basement door, while the Neighbor must lure and capture all of the children.',
        roll:"Engineering Lead - Roblox",
        subdesc:
            'Designed and implemented the project\'s architecture, developed core gameplay mechanics and systems like: character\'s animations and sound state machines, player save systems, was also responsible for managing the engineering team, project timelines and technical requirements.',
        platforms: "PC, Mobile, Consoles",
        href: 'https://www.roblox.com/games/13009187490/Portal-Update-Secret-Neighbor-BETA',
        texture: '/textures/project/secretNeighbor.mov',
        logo: '/assets/secretNeighbor-Icon.jpg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Roblox',
                path: '/assets/roblox-Logo.png',
            },
            {
                id: 2,
                name: 'Lua',
                path: 'assets/lua-Logo.png',
            },
            {
                id: 3,
                name: 'Git',
                path: '/assets/git-Logo.png',
            },
        ],
    },
    {
        title: 'Metazells',
        desc: 'Metazells is a RPG game based on a kids youtube series. Where you get to explore a world full of enemies, items and the game currency metazells, collecting metazells will help you upgrade your weapons and level up faster, to be able to reach un explored parts of the world. ',
        roll:"Engineering Lead - Roblox",
        subdesc:
            'Designed and implemented the project\'s architecture, developed core gameplay mechanics and systems like: npc\'s behavior state machines, weapons, player save systems, was also responsible for managing the engineering team, project timelines and technical requirements.',
        platforms: "PC, Mobile",
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/metazells.mov',
        logo: '/assets/metazells-Icon.jpg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Roblox',
                path: '/assets/roblox-Logo.png',
            },
            {
                id: 2,
                name: 'Lua',
                path: 'assets/lua-Logo.png',
            },
            {
                id: 3,
                name: 'Git',
                path: '/assets/git-Logo.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        arcadeMachineScale: isSmall? 0.05 : isMobile ? 0.055 : 0.06,
        arcadeMachinePosition: isSmall? [0, -10, 1] : isMobile ? [0, -9, 1] : [0, -8, 1],
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        unityLogoPosition: isSmall ? [3, -2, 0] : isMobile ? [5, -2, 0] : isTablet ? [5, 1, 0] : [9, 1, 0],
        robloxR6Position: isSmall ?[-13, -13, -10] : isMobile ? [-13, -13, -10] : isTablet ? [-13, -10, -10] : [-13, -10, -10],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-1, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];