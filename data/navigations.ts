import { images } from "@/constants";
interface Link {
    label: string;
    url: string;
}

interface Project {
    id: number;
    image: any;
    title: string;
    description: string;
}

interface HeroInformation {
    image: any;
    description: string;
    title: string;
}

interface Slider {
    image: any;
}

export interface PortfolioSliderInterface {
    title: string;
    description: string;
    content: string;
    images: any[];
    image: any;
    type: "Web" | "Mobile";
    technologies: {
        image: any;
        name: string;
    }[];
}

export const menu: Link[] = [
    {label: "Home", url: "/"},
    {label: "Projects", url: "/projects"},
    {label: "Contact", url: "/contact-me"},
    {label: "Ideas", url: "/ideas"}
]

export const social: Link[] = [
    {label: "LinkedIn", url: "/"},
    {label: "Instagram", url: "/"},
    {label: "GitHub", url: "/"},
    {label: "Meta", url: "/"},
    {label: "Murrizi", url: "/"}
]

export const projects: Project[] = [
    {id: 1, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 2, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 3, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 4, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 5, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 6, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 7, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 8, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
    {id: 9, title: "Lorem Ipsum", image: images.testimage, description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
]

export const heroInformations: HeroInformation[] = [
    {title: "Web Development", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", image: images.testimage},
    {title: "Mobile Development", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", image: images.testimage},
    {title: "Maintenance", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", image: images.testimage},
    {title: "SEO", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", image: images.testimage},
]

export const footer: Link[] = [

]

export const professionalSlider: Slider[] = [
    {image: images.docker},
    {image: images.figma},
    {image: images.jquery},
    {image: images.microsoftsql},
    {image: images.mongodb},
    {image: images.mysql},
    {image: images.nestjs},
    {image: images.net},
    {image: images.nextjs},
    {image: images.nodejsexpress},
    {image: images.php},
    {image: images.pinia},
    {image: images.postgresql},
    {image: images.react},
    {image: images.reactnative},
    {image: images.redis},
    {image: images.redux},
    {image: images.shopify},
    {image: images.seo},
    {image: images.tailwind},
    {image: images.vuejs},
    {image: images.wordpress},
]

export const PersonalPortfolioSlider: PortfolioSliderInterface[] = [
    {
        title: "Lorem ipsum1",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum2",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum3",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum4",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum5",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum6",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum7",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Web",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum8",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Mobile",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum9",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Mobile",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    },
    {
        title: "Lorem ipsum10",
        description: "Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ",
        image: images.testimage,
        images: [images.testimage, images.testimage, images.testimage, images.testimage, images.testimage, images.testimage],
        content: "Lorem imsum dolor imsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolorimsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor",
        type: "Mobile",
        technologies: [
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
            {
                image: images.testimage,
                name: "React"
            },
        ],
    }
]