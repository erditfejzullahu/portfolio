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

export const footer: Link[] = [

]