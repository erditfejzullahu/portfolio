import { company, financial, fleet, images, kapepunen, pbca, ren, sauce, shokufluturimit, studaflix, surveys, xkstartup } from "@/constants";
import amoremio from "@/constants/amoremio";
import awwards from "@/constants/awwards";
import newu from "@/constants/newu";
import nike from "@/constants/nike";
import sda from "@/constants/sda";
import shokumesimit from "@/constants/shokumesimit";
import university from "@/constants/university";
import type { StaticImageData } from "next/image";
import { AiOutlineOpenAI } from "react-icons/ai";
import type { IconType } from "react-icons";

export type ImageSource = string | StaticImageData;
interface Link {
    label: string;
    url: string;
}

interface Project {
    id: number;
    image: ImageSource;
    title: string;
    description: string;
}

interface HeroInformation {
    image: ImageSource;
    description: string;
    title: string;
}

type Slider =
    | { image: ImageSource; name: string }
    | { Icon: IconType; name: string };

export interface PortfolioSliderInterface {
    title: string;
    description: string;
    content: string;
    images: ImageSource[];
    image: ImageSource;
    type: "Web" | "Mobile";
    technologies: {
        image: ImageSource;
        name: string;
    }[];
}

export const menu: Link[] = [
    {label: "Home", url: "#hero"},
    {label: "About", url: "#about"},
    {label: "Projects", url: "#projects"},
    {label: "Contact", url: "#contact-me"}
]

export const social: Link[] = [
    {label: "LinkedIn", url: "https://www.linkedin.com/in/erdit-fejzullahu-210bab268"},
    {label: "GitHub", url: "https://github.com/erditfejzullahu"},
    {label: "Meta", url: "https://www.facebook.com/erditf"},
    {label: "Instagram", url: "https://www.instagram.com/erdit.fejzullahu/"},
    {label: "Murrizi", url: "https://murrizi.org"}
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
    {image: images.docker, name: "Docker"},
    {image: images.linux, name: "Linux"},
    {image: images.cloudflare, name: "Cloudflare"},
    {image: images.figma, name: "Figma"},
    {image: images.jquery, name: "jQuery"},
    {image: images.microsoftsql, name: "Microsoft SQL Server"},
    {image: images.mongodb, name: "MongoDB"},
    {image: images.mysql, name: "MySQL"},
    {image: images.nestjs, name: "NestJS"},
    {image: images.net, name: ".NET"},
    {image: images.nextjs, name: "Next.js"},
    {image: images.nodejsexpress, name: "Node.js"},
    {image: images.express, name: "Express.js"},
    {image: images.php, name: "PHP"},
    {image: images.pinia, name: "Pinia"},
    {image: images.postgresql, name: "PostgreSQL"},
    {image: images.react, name: "React"},
    {image: images.reactnative, name: "React Native"},
    {image: images.redis, name: "Redis"},
    {image: images.firebase, name: "Firebase"},
    {image: images.supabase, name: "Supabase"},
    {image: images.socketio, name: "Socket.IO"},
    {image: images.redux, name: "Redux"},
    {image: images.shopify, name: "Shopify"},
    {image: images.seo, name: "SEO"},
    {image: images.tailwind, name: "Tailwind CSS"},
    {image: images.vuejs, name: "Vue.js"},
    {image: images.wordpress, name: "WordPress"},
    {image: images.phpmyadmin, name: "phpMyAdmin"},
    {image: images.prisma, name: "Prisma"},
    {image: images.ajax, name: "AJAX"},
    {image: images.sanity, name: "Sanity"},
    {image: images.appwrite, name: "Appwrite"},
    {image: images.gsap, name: "GSAP"},
    {image: images.elementor, name: "Elementor"},
    {image: images.vanillajs, name: "JavaScript"},
    {image: images.typescript, name: "TypeScript"},
    {image: images.expo, name: "Expo"},
    {image: images.efcore, name: "Entity Framework Core"},
    {image: images.python, name: "Python"},
    {image: images.elasticsearch, name: "Elasticsearch"},
    {image: images.githubActions, name: "GitHub Actions"},
    {Icon: AiOutlineOpenAI, name: "OpenAI"}
]

export const PersonalPortfolioSlider: PortfolioSliderInterface[] = [
    {
        title: "ShokuMesimit – Advanced Learning & Social Platform",
        description: "ShokuMesimit is a powerful learning and social engagement platform designed to provide an immersive educational experience for users. Built using Expo (React Native) for mobile, Vue.js for CMS management, and .NET for backend",
        image: shokumesimit.shokumesimit1,
        images: [shokumesimit.shokumesimit1, shokumesimit.shokumesimit2, shokumesimit.shokumesimit3, shokumesimit.shokumesimit4, shokumesimit.shokumesimit5, shokumesimit.shokumesimit6, shokumesimit.shokumesimit7, shokumesimit.shokumesimit8, shokumesimit.shokumesimit9, shokumesimit.shokumesimit10, shokumesimit.shokumesimit11, shokumesimit.shokumesimit12, shokumesimit.shokumesimit13, shokumesimit.shokumesimit14, shokumesimit.shokumesimit15, shokumesimit.shokumesimit16, shokumesimit.shokumesimit17, shokumesimit.shokumesimit18, shokumesimit.shokumesimit19, shokumesimit.shokumesimit20, shokumesimit.shokumesimit21, shokumesimit.shokumesimit22, shokumesimit.shokumesimit23],
        content: `
            <h3>This platform integrates a variety of modern technologies, including:</h3>
            <ul>
        <li>🚀 <strong>Redis</strong> for caching and performance</li>
        <li>🗄 <strong>Microsoft SQL Server</strong> for data storage</li>
        <li>⚡ <strong>Entity Framework Core</strong> for database management</li>
        <li>🔐 <strong>JWT Authentication</strong> for secure user access</li>
        <li>⚛ <strong>Context API</strong> for state management</li>
        <li>🎨 <strong>Tailwind CSS</strong> for clean and modern UI design</li>
    </ul>
    
    <p>The app allows users to <strong>enroll in courses, complete lessons and quizzes, track their progress, engage with a community, and even create and share educational content.</strong></p>
    
    <h2>Key Features & Functionalities</h2>

    <h3>📌 User Accounts & Profile Management</h3>
    <ul>
        <li>🔐 <strong>Secure Authentication</strong> – Users can register, log in, and manage their accounts using JWT authentication.</li>
        <li>📊 <strong>User Details & Achievements</strong> – Profiles showcase <strong>completed courses, certifications, and professional progress.</strong></li>
        <li>🤝 <strong>Friends & Social Interaction</strong> – Add <strong>friends, close friends, and view achievements.</strong></li>
        <li>🔥 <strong>Commitment System</strong> – Earn <strong>commitment points</strong> for learning activities.</li>
    </ul>

    <h3>🎓 Courses, Lessons & Quizzes</h3>
    <ul>
        <li>📚 <strong>Enroll & Learn</strong> – Users can browse and enroll in courses from different <strong>categories.</strong></li>
        <li>📈 <strong>Track Progress</strong> – Monitor completed <strong>courses, lessons, and quizzes.</strong></li>
        <li>⭐ <strong>Favorite Courses & Lessons</strong> – Bookmark and access favorite learning materials.</li>
        <li>📺 <strong>Lesson Content</strong> – Each lesson includes:
            <ul>
                <li>🎬 <strong>Video Lectures</strong></li>
                <li>📝 <strong>Written Content</strong></li>
                <li>👍 <strong>Like, Comment & Share Options</strong></li>
            </ul>
        </li>
        <li>🏆 <strong>Quizzes</strong> – Users can:
            <ul>
                <li>Create, complete, delete, and track quizzes.</li>
                <li>Challenge friends.</li>
                <li>Monitor performance.</li>
            </ul>
        </li>
    </ul>

    <h3>🏅 Certificates & Achievements</h3>
    <ul>
        <li>📜 <strong>Certificates</strong> – Users receive <strong>official certificates</strong> upon finishing a course.</li>
        <li>🎖 <strong>Progress & Milestones</strong> – Achievements are displayed on profiles.</li>
    </ul>

    <h3>💬 Chat & Social Features</h3>
    <ul>
        <li>💬 <strong>Chat System</strong> – Users can:
            <ul>
                <li>Send messages, images, and documents.</li>
                <li>Share courses, lessons, and quizzes with friends.</li>
            </ul>
        </li>
        <li>🌐 <strong>Social Interaction</strong> – Users can engage with other learners' activities.</li>
    </ul>

    <h3>📰 Blogs & Content Sharing</h3>
    <ul>
        <li>✍ <strong>User-Generated Blogs</strong> – Users can write and publish blogs.</li>
        <li>🔒 <strong>Privacy Options</strong> – Blogs can be <strong>public, private, or friends-only.</strong></li>
        <li>🏷 <strong>Tagging System</strong> – Users can tag categories and interests.</li>
        <li>👍 <strong>Engagement</strong> – Like, comment, and share blogs.</li>
    </ul>

    <h3>🔍 Advanced Search & Sorting</h3>
    <ul>
        <li>🔎 <strong>Search System</strong> – Find:
            <ul>
                <li>👤 <strong>People</strong> (by name or interests).</li>
                <li>📚 <strong>Courses, lessons, quizzes, and blogs.</strong></li>
            </ul>
        </li>
        <li>📊 <strong>Sorting Options</strong> – Sort by:
            <ul>
                <li>🔤 Name</li>
                <li>👀 Popularity</li>
                <li>📆 Latest (by date)</li>
            </ul>
        </li>
    </ul>

    <h3>📊 Statistics & Insights</h3>
    <ul>
        <li>📈 <strong>User Dashboard</strong> – Displays completed courses and progress.</li>
        <li>👥 <strong>Engagement Stats</strong> – Users can see how many friends interacted with their content.</li>
    </ul>

    <h2>Tech Stack & Development Highlights</h2>
    
    <h3>🔹 Frontend (Mobile & CMS)</h3>
    <ul>
        <li>📱 <strong>Expo (React Native)</strong> for mobile experience.</li>
        <li>⚛ <strong>Context API</strong> for state management.</li>
        <li>🌐 <strong>Vue.js</strong> for admin CMS.</li>
        <li>🎨 <strong>Tailwind CSS</strong> for UI design.</li>
    </ul>

    <h3>🔹 Backend & Database</h3>
    <ul>
        <li>🖥 <strong>.NET Core</strong> for scalable backend.</li>
        <li>🗄 <strong>Microsoft SQL Server</strong> for structured data storage.</li>
        <li>⚡ <strong>Entity Framework Core</strong> for database interactions.</li>
        <li>🚀 <strong>Redis</strong> for caching and performance.</li>
    </ul>

    <h3>🔹 Security & Authentication</h3>
    <ul>
        <li>🔐 <strong>JWT Authentication</strong> for secure access.</li>
        <li>🛡 <strong>Role-based permissions</strong> for user and admin management.</li>
    </ul>

    <h2>Why ShokuMesimit Stands Out?</h2>
    <ul>
        <li>🚀 <strong>Feature-Rich</strong> – Combines <strong>education, social interaction, and content creation.</strong></li>
        <li>📈 <strong>Engagement-Driven</strong> – Users can track <strong>progress, earn certificates, and interact.</strong></li>
        <li>🔎 <strong>Smart Search & Filtering</strong> – Find relevant content quickly.</li>
        <li>🔒 <strong>Secure & Scalable</strong> – Built using modern backend technologies.</li>
        <li>🌍 <strong>Community-Based</strong> – Encourages users to <strong>learn, collaborate, and grow together.</strong></li>
    </ul>

    <h2>Final Thoughts</h2>
    <p><strong>ShokuMesimit</strong> is a <strong>next-level learning experience</strong>, designed to empower users to <strong>expand their knowledge, connect with peers, and showcase achievements.</strong></p>
        `,
        type: "Mobile",
        technologies: [
            {
                image: images.react,
                name: "ReactJS"
            },
            {
                image: images.reactnative,
                name: "React Native"
            },
            {
                image: images.expo,
                name: "Expo"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
            {
                image: images.net,
                name: ".NET"
            },
            {
                image: images.vuejs,
                name: "VueJS"
            },
            {
                image: images.efcore,
                name: "Entity Framework"
            },
            {
                image: images.redis,
                name: "Redis"
            },
            {
                image: images.microsoftsql,
                name: "Microsoft SQL Server"
            }
        ],
    },
    {
        title: "MarketPulse: A Custom-Built Market Research & Survey Platform",
        description: "MarketPulse is a fully customized web application designed for market research, survey creation, and data collection. Users can create multi-step surveys with various question types, distribute them via email or phone, and analyze collected responses in real-time. The platform allows businesses, researchers, and organizations to gather insights efficiently, making data-driven decisions easier.",
        image: surveys.survey1,
        images: [surveys.survey1,surveys.survey2,surveys.survey3,surveys.survey4,surveys.survey5,surveys.survey6,surveys.survey7,surveys.survey8,surveys.survey9,surveys.survey10,surveys.survey11,surveys.survey12,surveys.survey13,surveys.survey14,surveys.survey15,surveys.survey16,surveys.survey17],
        content: `
        <h2>Key Features</h2>
<ul>
  <li>✅ <strong>Custom Survey Creation:</strong> Users can design surveys with text fields, radio buttons, checkboxes, and dropdowns.</li>
  <li>✅ <strong>Multi-Step Surveys:</strong> Advanced survey flows for in-depth responses.</li>
  <li>✅ <strong>Targeted Distribution:</strong> Surveys are sent via email or phone based on demographic criteria.</li>
  <li>✅ <strong>Data Collection & Analytics:</strong> Buyers of survey panels can track responses in real-time.</li>
  <li>✅ <strong>Admin Dashboard:</strong> Full control over all surveys, users, and collected data.</li>
  <li>✅ <strong>User-Friendly Interface:</strong> Responsive and intuitive design for both survey creators and participants.</li>
</ul>

<h2>Tech Stack & Development Process</h2>

<h3>🔹 WordPress Custom Plugin Development</h3>
<ul>
  <li>Built a <strong>custom WordPress plugin</strong> to handle survey creation, data storage, and analytics.</li>
  <li>Implemented AJAX-based form submission for a seamless user experience.</li>
  <li>Created custom database tables to store surveys, responses, and user demographics.</li>
</ul>

<h3>🔹 WordPress Custom Theme Development</h3>
<ul>
  <li>Developed a <strong>fully custom WordPress theme</strong> tailored to MarketPulse’s requirements.</li>
  <li>Integrated frontend components with dynamic survey rendering using PHP and JavaScript.</li>
  <li>Implemented responsive design using <strong>TailwindCSS</strong> for a modern UI.</li>
</ul>

<h3>🔹 Frontend Development</h3>
<ul>
  <li><strong>Vue.js 3</strong> was used in some parts for dynamic survey interactions.</li>
  <li><strong>jQuery & AJAX</strong> for seamless form submissions and data fetching.</li>
</ul>

<h3>🔹 Backend & Database</h3>
<ul>
  <li><strong>PHP & MySQL</strong> for processing survey data, managing users, and storing responses.</li>
  <li><strong>Custom REST API endpoints</strong> were created for survey submissions and analytics.</li>
  <li><strong>User authentication & role management</strong> to distinguish between survey creators, respondents, and admins.</li>
</ul>

<h3>🔹 Email & Notification System</h3>
<ul>
  <li>Integrated <strong>WordPress SMTP & WP Mail functions</strong> for sending survey invites and responses.</li>
  <li>Implemented <strong>Twilio API (optional)</strong> for SMS-based survey distribution.</li>
</ul>

<h3>🔹 Security & Performance</h3>
<ul>
  <li>Used <strong>WordPress nonces</strong> to prevent CSRF attacks.</li>
  <li>Implemented <strong>input validation & sanitization</strong> for secure data handling.</li>
  <li>Optimized queries for <strong>faster survey loading & response submission</strong>.</li>
</ul>

<h2>Why It’s a Standout Project?</h2>
<ul>
  <li>🚀 <strong>Fully Custom-Built</strong> – Not just another plugin, but a tailored solution from scratch.</li>
  <li>📊 <strong>Data-Driven</strong> – Real-time analytics for tracking survey engagement.</li>
  <li>🔄 <strong>Scalable & Flexible</strong> – Easily expandable with new survey types and distribution methods.</li>
  <li>🔐 <strong>Secure & Optimized</strong> – Built with performance and security best practices.</li>
</ul>

<h2>Final Thoughts</h2>
<p>MarketPulse is a powerful tool that showcases my expertise in <strong>WordPress custom development, PHP, JavaScript, and API integrations</strong>. This project highlights my ability to <strong>build complex web applications from scratch</strong>, blending frontend and backend technologies to deliver a seamless user experience.</p>

<p>🚀 <strong>Want to see it in action? Let’s connect!</strong></p>

        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.jquery,
                name: "jQuery"
            },
            {
                image: images.ajax,
                name: "AJAX"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
            {
                image: images.php,
                name: "PHP"
            },
            {
                image: images.phpmyadmin,
                name: "phpMyAdmin"
            },
            {
                image: images.mysql,
                name: "MySQL"
            }
        ],
    },
    {
        title: "BookHive: A Full-Stack Online Library Platform",
        description: "BookHive is a modern online library system that enables users to explore books, borrow them, and manage their accounts seamlessly. It features secure authentication, personalized dashboards, and a powerful admin panel for managing books and users. With PostgreSQL and Prisma, the system ensures efficient data handling, while NextAuth.js and Redis rate limiting enhance security and performance.",
        image: university.university1,
        images: [university.university1, university.university2, university.university3, university.university4, university.university5, university.university6, university.university7, university.university8, university.university9, university.university10, university.university11, university.university12, university.university13],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Book Exploration & Borrowing:</strong> Users can browse a digital library and borrow books.</li>
    <li>✅ <strong>User Authentication & Profiles:</strong> Secure login and registration powered by <strong>NextAuth.js</strong>.</li>
    <li>✅ <strong>Personalized Dashboard:</strong> Users can track borrowed books and manage their accounts.</li>
    <li>✅ <strong>Admin Panel & Analytics:</strong> Manage books, users, and track real-time borrowing statistics.</li>
    <li>✅ <strong>Book & User Management:</strong> Add, remove, or edit books and users with role-based access.</li>
    <li>✅ <strong>Security & Performance:</strong> Implemented <strong>Redis rate limiting</strong> to prevent abuse in login/register requests.</li>
    <li>✅ <strong>Scalable Database Architecture:</strong> Utilized <strong>PostgreSQL with Prisma ORM</strong> for efficient data handling.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 Next.js Full-Stack Development</h4>
<ul>
    <li>Built using <strong>Next.js API routes</strong> for backend logic.</li>
    <li>Implemented <strong>Server-Side Rendering (SSR)</strong> and <strong>Static Site Generation (SSG)</strong> for optimal performance.</li>
    <li>Used <strong>React Context & Hooks</strong> for state management.</li>
</ul>

<h4>🔹 Authentication & Security</h4>
<ul>
    <li>Integrated <strong>NextAuth.js</strong> for secure authentication with multiple providers.</li>
    <li>Implemented <strong>Redis rate limiting</strong> for login, registration, and API security.</li>
    <li>Used <strong>bcrypt.js</strong> for password hashing and user data protection.</li>
</ul>

<h4>🔹 Database & ORM</h4>
<ul>
    <li><strong>PostgreSQL</strong> as the primary database for storing books, users, and transactions.</li>
    <li><strong>Prisma ORM</strong> for database interactions, migrations, and query optimizations.</li>
    <li>Efficient indexing and query optimization for fast data retrieval.</li>
</ul>

<h4>🔹 Frontend & UI/UX</h4>
<ul>
    <li>Styled using <strong>TailwindCSS</strong> for a responsive and modern interface.</li>
    <li>Developed reusable <strong>React components</strong> for smooth user interactions.</li>
</ul>

<h4>🔹 Admin Dashboard & Analytics</h4>
<ul>
    <li>Role-based access control for <strong>user and book management</strong>.</li>
    <li><strong>Analytics dashboard</strong> to track book borrowing trends and user activity.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Full-Stack Next.js Application</strong> – Seamless integration of frontend, backend, and database.</li>
    <li>📊 <strong>Real-Time Analytics</strong> – Admins can monitor book transactions and user engagement.</li>
    <li>🔄 <strong>Scalable & Secure</strong> – Powered by <strong>PostgreSQL + Prisma</strong>, with Redis for security optimizations.</li>
    <li>📚 <strong>Efficient User Experience</strong> – Fast, responsive, and user-friendly interface.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    BookHive is a robust full-stack application showcasing my expertise in <strong>Next.js, Prisma, PostgreSQL, and Redis</strong>. 
    It highlights my ability to build <strong>secure, scalable, and user-centric web applications</strong> with modern web technologies.
</p>

<p>🚀 <strong>Want to see it in action? Let’s connect!</strong></p>

        `,
        type: "Web",
        technologies: [
            {
                image: images.nextjs,
                name: "NextJS"
            },
            {
                image: images.react,
                name: "ReactJS"
            },
            {
                image: images.prisma,
                name: "Prisma"
            },
            {
                image: images.postgresql,
                name: "PostgreSQL"
            },
            {
                image: images.redis,
                name: "Redis"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
        ],
    },
    {
        title: "StartupPitch: A Collaborative Startup Pitching Platform",
        description: "tartupPitch is an interactive platform designed for entrepreneurs to showcase their startup ideas, receive feedback, and track engagement based on views and votes. Built with Next.js, Sanity CMS, and TailwindCSS, the platform offers a seamless experience for users to create, explore, and evaluate startup pitches. Authentication is powered by NextAuth.js with GitHub OAuth integration for secure access.",
        image: xkstartup.xkstartup1,
        images: [xkstartup.xkstartup1, xkstartup.xkstartup2, xkstartup.xkstartup3, xkstartup.xkstartup4, xkstartup.xkstartup5, xkstartup.xkstartup6],
        content: `
            <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Startup Pitch Creation:</strong> Users can create and submit startup pitches.</li>
    <li>✅ <strong>Voting & Engagement:</strong> Startups are ranked based on views and engagement.</li>
    <li>✅ <strong>User Authentication:</strong> Secure login with <strong>NextAuth.js</strong> and GitHub OAuth.</li>
    <li>✅ <strong>Personalized Dashboard:</strong> Users can track their submitted pitches and engagement metrics.</li>
    <li>✅ <strong>Startup Exploration:</strong> Browse and discover other startups.</li>
    <li>✅ <strong>Real-Time Updates:</strong> Dynamic content powered by <strong>Sanity CMS</strong>.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 Next.js Full-Stack Development</h4>
<ul>
    <li>Built with <strong>Next.js API routes</strong> for backend functionality.</li>
    <li>Utilized <strong>Server-Side Rendering (SSR)</strong> and <strong>Static Site Generation (SSG)</strong> for performance optimization.</li>
    <li>Implemented <strong>React Context & Hooks</strong> for state management.</li>
</ul>

<h4>🔹 Authentication & Security</h4>
<ul>
    <li>Integrated <strong>NextAuth.js</strong> with GitHub OAuth for secure login and authentication.</li>
    <li>Protected user data with <strong>session-based authentication</strong>.</li>
</ul>

<h4>🔹 Content Management & Database</h4>
<ul>
    <li><strong>Sanity CMS</strong> for dynamic content storage and management.</li>
    <li>Real-time updates and optimized content fetching via Sanity’s GraphQL API.</li>
</ul>

<h4>🔹 Frontend & UI/UX</h4>
<ul>
    <li>Designed with <strong>TailwindCSS</strong> for a modern, responsive, and fast UI.</li>
    <li>Created reusable <strong>React components</strong> for dynamic and interactive content.</li>
</ul>

<h4>🔹 Pitch Ranking System</h4>
<ul>
    <li>Pitches ranked based on views and user engagement.</li>
    <li>Real-time analytics for pitch popularity.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Full-Stack Next.js Application</strong> – Smooth integration of frontend, backend, and content management.</li>
    <li>📊 <strong>Real-Time Content Management</strong> – Sanity CMS ensures dynamic content updates.</li>
    <li>🔄 <strong>OAuth-Powered Authentication</strong> – Secure login with GitHub OAuth.</li>
    <li>📈 <strong>Engagement-Driven Ranking</strong> – Startups are ranked based on real-time user interactions.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    StartupPitch is a robust full-stack application showcasing my expertise in <strong>Next.js, Sanity, NextAuth, and TailwindCSS</strong>. 
    It demonstrates my ability to build secure, scalable, and user-centric platforms for startups and entrepreneurs.
</p>

<p>🚀 <strong>Want to see it in action? Let’s connect!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.react,
                name: "ReactJS"
            },
            {
                image: images.nextjs,
                name: "NextJS"
            },
            {
                image: images.sanity,
                name: "Sanity"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
        ],
    },
    {
        title: "MovieFinder: Search & Discover Trending Movies",
        description: "MovieFinder is a dynamic movie search platform that allows users to explore movies using The Movie Database (TMDb) API. It tracks the most searched movies and displays trending movies based on real-time search data. The app is built with React.js for the frontend, TailwindCSS for styling, and Appwrite for backend services, including database storage for trending movie analytics.",
        image: studaflix.studaflix1,
        images: [studaflix.studaflix1, studaflix.studaflix2, studaflix.studaflix3],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Movie Search:</strong> Instantly find movies using TMDb API.</li>
    <li>✅ <strong>Trending Movies:</strong> Displays the most searched movies based on stored analytics.</li>
    <li>✅ <strong>Real-Time Data Storage:</strong> Searches are stored in <strong>Appwrite</strong> to generate trending insights.</li>
    <li>✅ <strong>Modern UI/UX:</strong> Clean and responsive design using <strong>TailwindCSS</strong>.</li>
    <li>✅ <strong>Optimized Performance:</strong> React-based fast rendering and state management.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 Frontend Development</h4>
<ul>
    <li>Built with <strong>React.js</strong> for interactive and fast UI.</li>
    <li>State management using <strong>React Context API</strong>.</li>
    <li>Styled with <strong>TailwindCSS</strong> for a modern, responsive layout.</li>
</ul>

<h4>🔹 API Integration</h4>
<ul>
    <li>Fetched movie data from <strong>TMDb API</strong> for real-time movie search.</li>
    <li>Optimized API calls with caching to reduce unnecessary requests.</li>
</ul>

<h4>🔹 Backend & Data Storage</h4>
<ul>
    <li>Used <strong>Appwrite</strong> as a backend-as-a-service (BaaS) for data management.</li>
    <li>Stored search queries in Appwrite’s database to track trending movies.</li>
</ul>

<h4>🔹 Trending Movie Analytics</h4>
<ul>
    <li>Aggregated search data to display the most searched movies.</li>
    <li>Dynamically updated the trending section based on stored data.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Full-Stack React Application</strong> – Combining frontend UI and backend storage seamlessly.</li>
    <li>📊 <strong>Real-Time Movie Trends</strong> – Data-driven trending movies based on user searches.</li>
    <li>🔄 <strong>Efficient API Consumption</strong> – Optimized TMDb API usage for a smooth experience.</li>
    <li>⚡ <strong>Appwrite-Powered Backend</strong> – Fast, scalable, and serverless data storage.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    MovieFinder is a showcase of my expertise in <strong>React.js, TailwindCSS, and Appwrite</strong>, 
    demonstrating how to integrate third-party APIs while leveraging backend services for analytics. 
    The app provides a user-friendly way to explore movies while dynamically tracking trending searches.
</p>

<p>🎬 <strong>Let’s explore the world of movies together!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.react,
                name: "ReactJS"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
            {
                image: images.appwrite,
                name: "AppWrite"
            },
        ],
    },
    {
        title: "Awwwards-Like Animation Showcase: Stunning Motion Effects",
        description: "The GSAP Animation Showcase is an interactive web experience designed to demonstrate visually stunning animations using GreenSock Animation Platform (GSAP). This project leverages React.js for a dynamic UI, TailwindCSS for styling, and GSAP for smooth, high-performance animations that bring the web to life.",
        image: awwards.awwards1,
        images: [awwards.awwards1, awwards.awwards2, awwards.awwards3, awwards.awwards4, awwards.awwards5, awwards.awwards6, awwards.awwards7],
        content: `

        <a target="_blank" href="https://awwwards.hajt24.xyz/">Click here for better experience of animations</a>
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>GSAP-Powered Animations:</strong> Showcases advanced motion effects, transitions, and interactions.</li>
    <li>✅ <strong>Interactive Elements:</strong> Smooth hover, scroll-based, and click-triggered animations.</li>
    <li>✅ <strong>Modern UI:</strong> Clean and fully responsive design using <strong>TailwindCSS</strong>.</li>
    <li>✅ <strong>Optimized Performance:</strong> GSAP’s lightweight engine ensures seamless animations.</li>
    <li>✅ <strong>Custom Motion Effects:</strong> Unique entrance animations, text reveals, and parallax scrolling.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 Frontend Development</h4>
<ul>
    <li>Built with <strong>React.js</strong> for an interactive and smooth user experience.</li>
    <li>Used <strong>TailwindCSS</strong> for a stylish, responsive UI.</li>
</ul>

<h4>🔹 GSAP Animations</h4>
<ul>
    <li>Leveraged <strong>GSAP</strong> for high-performance animations.</li>
    <li>Implemented effects such as <strong>parallax scrolling, fade-ins, text reveals, and dynamic transitions.</strong></li>
    <li>Used GSAP’s <strong>ScrollTrigger</strong> for scroll-based animations.</li>
</ul>

<h4>🔹 Motion Design Features</h4>
<ul>
    <li>Created <strong>hover effects</strong> with GSAP’s timeline animations.</li>
    <li>Implemented <strong>page transitions</strong> for smooth navigation.</li>
    <li>Developed <strong>SVG animations</strong> for unique visual elements.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>GSAP-Powered Motion Graphics</strong> – Elevating web design with stunning animations.</li>
    <li>⚡ <strong>Ultra-Smooth Performance</strong> – Optimized for speed and seamless transitions.</li>
    <li>🎨 <strong>Modern, Interactive UI</strong> – Built with TailwindCSS for a sleek, mobile-friendly experience.</li>
    <li>🖥️ <strong>Dynamic Animations</strong> – Scroll-triggered and hover-based effects for engaging user interactions.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>GSAP Animation Showcase</strong> is a creative playground demonstrating advanced animation techniques in web development. 
    It highlights my expertise in <strong>React.js, TailwindCSS, and GSAP</strong>, showcasing how motion design can enhance user engagement.
</p>

<p>✨ <strong>Experience web animations like never before!</strong> ✨</p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.react,
                name: "ReactJS"
            },
            {
                image: images.gsap,
                name: "GSAP"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
        ],
    },
    {
        title: "Shoe Product Showcase: A Modern E-Commerce Template",
        description: "The Shoe Product Showcase is a stylish and modern e-commerce template built with React.js and TailwindCSS. It serves as a static product display for showcasing high-quality shoes, featuring product details, user reviews, and a clean, responsive design.",
        image: nike.nike1,
        images: [nike.nike1, nike.nike2, nike.nike3, nike.nike4, nike.nike5, nike.nike6],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Beautiful Product Display:</strong> Well-structured layout for showcasing shoes with images, details, and pricing.</li>
    <li>✅ <strong>Static Reviews & Ratings:</strong> Predefined customer feedback to enhance authenticity.</li>
    <li>✅ <strong>Modern UI Design:</strong> Sleek and responsive interface built with <strong>TailwindCSS</strong>.</li>
    <li>✅ <strong>Lightweight & Fast:</strong> Optimized for smooth browsing with a minimalistic and elegant feel.</li>
    <li>✅ <strong>Fully Responsive:</strong> Works seamlessly on mobile, tablet, and desktop devices.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 Frontend Development</h4>
<ul>
    <li>Built with <strong>React.js</strong> for a dynamic and reusable component structure.</li>
    <li>Used <strong>TailwindCSS</strong> for quick and efficient styling.</li>
</ul>

<h4>🔹 Product Showcase</h4>
<ul>
    <li>Designed a <strong>visually appealing layout</strong> for product displays.</li>
    <li>Included <strong>high-quality images</strong> and detailed descriptions.</li>
    <li>Added <strong>static customer reviews</strong> to enhance engagement.</li>
</ul>

<h4>🔹 UI & UX Enhancements</h4>
<ul>
    <li>Implemented a <strong>minimalist design</strong> with a clean and structured layout.</li>
    <li>Ensured <strong>mobile-first responsiveness</strong> for a seamless experience.</li>
    <li>Added hover effects and smooth transitions for better interactivity.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Modern & Aesthetic Design</strong> – Clean and elegant product showcase.</li>
    <li>⚡ <strong>Optimized for Speed</strong> – Lightweight and fast-loading pages.</li>
    <li>🎨 <strong>TailwindCSS Styling</strong> – Efficient and responsive UI framework.</li>
    <li>🖥️ <strong>Reusable Components</strong> – Easy to extend for real e-commerce integration.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Shoe Product Showcase</strong> template is perfect for displaying products in a visually 
    appealing way. Built with <strong>React.js and TailwindCSS</strong>, it demonstrates clean UI design, 
    structured product listings, and an optimized browsing experience.
</p>

<p>✨ <strong>Elevate product presentation with a sleek, modern template!</strong> ✨</p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.react,
                name: "ReactJS"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
        ],
    },
    {
        title: "Flight Compensation Claim System",
        description: "The Flight Compensation Claim System is a fully custom-built WordPress web application that helps passengers claim compensation for flight delays or cancellations. Users can submit claims, track their status, manage their profile, and add multiple passengers. The system also features an admin dashboard for managing claims, user data, and analytics.",
        image: shokufluturimit.shoku1,
        images: [shokufluturimit.shoku1, shokufluturimit.shoku2, shokufluturimit.shoku3, shokufluturimit.shoku4, shokufluturimit.shoku5, shokufluturimit.shoku6, shokufluturimit.shoku7, shokufluturimit.shoku8, shokufluturimit.shoku9, shokufluturimit.shoku10, shokufluturimit.shoku11, shokufluturimit.shoku12, shokufluturimit.shoku13, shokufluturimit.shoku14, shokufluturimit.shoku15, shokufluturimit.shoku16, shokufluturimit.shoku17, shokufluturimit.shoku18, shokufluturimit.shoku19, shokufluturimit.shoku20, ],
        content: `
        <a target="_blank" href="https://shokufluturimit.com">Click here to view the page in production</a>
            <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Claim Submission:</strong> Users can easily file a compensation claim for delayed or canceled flights.</li>
    <li>✅ <strong>Multi-Passenger Claims:</strong> Allows adding multiple passengers under one claim.</li>
    <li>✅ <strong>Claim Tracking:</strong> Users can track the progress of their claims in real-time.</li>
    <li>✅ <strong>User Dashboard:</strong> Users have a personalized dashboard to view and manage their claims.</li>
    <li>✅ <strong>Profile Management:</strong> Users can update their personal details and view claim history.</li>
    <li>✅ <strong>Document Upload:</strong> Securely upload and submit necessary documents for processing.</li>
    <li>✅ <strong>Email Notifications:</strong> Automated email system to update users on claim progress.</li>
    <li>✅ <strong>Admin Panel:</strong> Admins can manage all claims, users, and system settings.</li>
    <li>✅ <strong>Custom WordPress Plugins:</strong> Built-in plugins for handling claims, document management, and email automation.</li>
    <li>✅ <strong>Responsive UI:</strong> Developed with <strong>TailwindCSS</strong> for a clean and user-friendly experience.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress Customization</h4>
<ul>
    <li>Developed with a <strong>custom WordPress theme</strong> tailored to the project needs.</li>
    <li>Built <strong>custom plugins</strong> for claim processing, document handling, and email notifications.</li>
    <li>Optimized for <strong>performance and security</strong> with best WordPress practices.</li>
</ul>

<h4>🔹 User Dashboard & Profile Management</h4>
<ul>
    <li>Users can <strong>log in and access their personal dashboard</strong>.</li>
    <li>Displays <strong>all submitted claims</strong> with current status updates.</li>
    <li>Users can <strong>update their personal details</strong> and manage claim history.</li>
</ul>

<h4>🔹 Claim Processing System</h4>
<ul>
    <li>Multi-step claim submission form to <strong>gather necessary flight and passenger information</strong>.</li>
    <li>Secure <strong>document upload</strong> functionality for verification.</li>
    <li>System tracks claim progress and <strong>updates users at each step</strong>.</li>
</ul>

<h4>🔹 Automated Email Notifications</h4>
<ul>
    <li>Users receive <strong>real-time email updates</strong> about claim progress.</li>
    <li>Emails are triggered at different stages: claim submission, document verification, approval, or rejection.</li>
</ul>

<h4>🔹 Admin Management Panel</h4>
<ul>
    <li>Admins can <strong>view, process, and manage all claims</strong>.</li>
    <li>Manage <strong>user accounts and documents</strong>.</li>
    <li>Ability to <strong>approve, reject, or request additional information</strong> from users.</li>
</ul>

<h4>🔹 UI & UX Enhancements</h4>
<ul>
    <li>Designed with <strong>TailwindCSS</strong> for a modern, responsive interface.</li>
    <li>Mobile and desktop-friendly layout for a seamless user experience.</li>
    <li>Easy navigation for users to find their claims and track progress.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Custom WordPress Development</strong> – Fully custom-built theme and plugins.</li>
    <li>⚡ <strong>User-Friendly Claim Process</strong> – Simple and guided submission system.</li>
    <li>📩 <strong>Automated Email System</strong> – Keeps users updated at every stage.</li>
    <li>🎨 <strong>Modern UI with TailwindCSS</strong> – Clean and professional look.</li>
    <li>🛠️ <strong>Admin Dashboard</strong> – Full control over claims, users, and documents.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Flight Compensation Claim System</strong> streamlines the process of claiming compensation for flight delays and cancellations. 
    With a <strong>custom-built WordPress theme, advanced plugins, and a user-friendly dashboard</strong>, this system provides a seamless experience for both passengers and administrators.
</p>

<p>✨ <strong>Helping travelers get the compensation they deserve – fast and hassle-free!</strong> ✨</p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.php,
                name: "PHP"
            },
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
            {
                image: images.phpmyadmin,
                name: "phpMyAdmin"
            },
            {
                image: images.ajax,
                name: "AJAX"
            },
            {
                image: images.mysql,
                name: "MySQL"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Travel Booking System",
        description: "The Travel Booking System is a fully custom-built WordPress solution using WooCommerce and tailored to provide users with a comprehensive travel booking experience. Users can browse various travel packages, purchase tickets, and manage their orders seamlessly. The system includes custom functionalities for standard and exclusive packages, allowing for dynamic pricing based on the number of travelers and other custom parameters. The project also features a profile system where users can track their bookings and manage personal details.",
        image: fleet.fleet1,
        images: [fleet.fleet1, fleet.fleet2, fleet.fleet3, fleet.fleet4, fleet.fleet5, fleet.fleet6, fleet.fleet7, fleet.fleet8, fleet.fleet9, fleet.fleet10, fleet.fleet11, fleet.fleet12, fleet.fleet13, fleet.fleet14, fleet.fleet15, fleet.fleet16, fleet.fleet17, fleet.fleet18, fleet.fleet19, ],
        content: `
            <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Custom WooCommerce Integration:</strong> Tailored WooCommerce functionality for managing travel packages, pricing, and ticket purchases.</li>
    <li>✅ <strong>Package Customization:</strong> Users can select between standard and exclusive travel packages with dynamic pricing based on the number of people per package.</li>
    <li>✅ <strong>Travel Profile System:</strong> Users can create and manage profiles to track past bookings, orders, and payment details.</li>
    <li>✅ <strong>Custom Pricing Logic:</strong> Ability to set unique pricing for each person based on the travel destination, package type, and other parameters.</li>
    <li>✅ <strong>Additional Information per Destination:</strong> Add custom information for each travel location, providing users with insights on their journey.</li>
    <li>✅ <strong>Order Management:</strong> Users can view their booking history and keep track of their current orders and payments.</li>
    <li>✅ <strong>Responsive User Interface:</strong> Built with <strong>TailwindCSS</strong> for a modern, responsive design that adapts to any device.</li>
    <li>✅ <strong>WooCommerce Payment Integration:</strong> Seamless payment gateway integration for secure transactions.</li>
    <li>✅ <strong>Admin Dashboard:</strong> Admins have full control over package management, orders, and customer details.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & WooCommerce Customization</h4>
<ul>
    <li>Built on <strong>WordPress</strong> with extensive customization of <strong>WooCommerce</strong> to support unique pricing models and travel packages.</li>
    <li>Created custom <strong>WooCommerce product types</strong> for standard and exclusive travel packages with custom pricing logic.</li>
    <li>Optimized for performance and scalability to handle numerous transactions and customer data.</li>
</ul>

<h4>🔹 Package Customization & Pricing</h4>
<ul>
    <li>Custom logic to handle dynamic pricing based on the number of travelers and specific package type (standard or exclusive).</li>
    <li>Travel packages can be tailored for different user needs with custom attributes like destination, package type, and number of people.</li>
</ul>

<h4>🔹 User Profile Management</h4>
<ul>
    <li>Users can create personal accounts to track all their travel bookings and manage payment details.</li>
    <li>The system tracks all past orders, offering users easy access to their purchase history and status of ongoing bookings.</li>
</ul>

<h4>🔹 Admin Panel & Order Management</h4>
<ul>
    <li>Admins have full control to <strong>manage packages, prices, orders, and user accounts</strong> from the back end.</li>
    <li>Admins can <strong>add, edit, and remove travel packages</strong>, and track user activity, sales data, and payment processing.</li>
</ul>

<h4>🔹 Custom Fields for Travel Locations</h4>
<ul>
    <li>Each travel destination can include <strong>custom details</strong> like descriptions, images, amenities, and more.</li>
    <li>This extra information helps customers make informed decisions about their trips.</li>
</ul>

<h4>🔹 Responsive Design with TailwindCSS</h4>
<ul>
    <li>Built with <strong>TailwindCSS</strong> for a clean, responsive design that provides a smooth experience across devices.</li>
    <li>The interface is optimized for ease of use, making it simple for users to browse packages and make bookings.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🌍 <strong>Custom WooCommerce Features</strong> – Tailored specifically for booking travel packages with dynamic pricing.</li>
    <li>💸 <strong>Flexible Pricing Logic</strong> – Custom pricing per traveler, destination, and package.</li>
    <li>📅 <strong>User Profile & Order Tracking</strong> – Seamless tracking of past and current bookings through the user dashboard.</li>
    <li>🎯 <strong>Admin Control</strong> – Full control over packages, orders, and user management through the admin panel.</li>
    <li>📱 <strong>Mobile-Optimized</strong> – Responsive design using TailwindCSS for optimal mobile and desktop experiences.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Travel Booking System</strong> leverages <strong>WooCommerce</strong> with customizations that enable dynamic travel package pricing, providing a flexible and personalized booking experience for users. 
    With a custom <strong>profile system</strong> and comprehensive <strong>admin controls</strong>, this project showcases a robust, user-friendly, and scalable solution for the travel industry.
</p>

<p>✈️ <strong>Your journey begins here – easy, flexible, and seamless travel booking at your fingertips!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.php,
                name: "PHP"
            },
            {
                image: images.ajax,
                name: "AJAX"
            },
            {
                image: images.tailwind,
                name: "TailwindCSS"
            },
            {
                image: images.phpmyadmin,
                name: "phpMyAdmin"
            },
            {
                image: images.mysql,
                name: "MySQL"
            },
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Financial Institution Platform",
        description: "The Financial Institution Platform is a fully customized WordPress website built with Elementor to provide an intuitive and professional online presence for a financial institution. This platform showcases various financial services including loan offers, financial products, and other related services. The platform is designed to effectively communicate the institution’s offerings, build trust with clients, and simplify the process of applying for loans or financial products.",
        image: financial.financial1,
        images: [financial.financial1, financial.financial2, financial.financial3, financial.financial4, financial.financial5, financial.financial6, financial.financial7, financial.financial8, financial.financial9, financial.financial10 ],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Custom WordPress Design with Elementor:</strong> Built using <strong>Elementor</strong> for a visually appealing and responsive design that can be easily updated without coding.</li>
    <li>✅ <strong>Loan & Financial Offers Display:</strong> Customizable sections to display various loan offers, interest rates, eligibility criteria, and terms.</li>
    <li>✅ <strong>Interactive Loan Calculator:</strong> A dynamic loan calculator allowing users to calculate potential loan amounts, rates, and repayment schedules.</li>
    <li>✅ <strong>Service Page Customization:</strong> Dedicated pages for each financial service, including loans, investment products, and more, with detailed information and application processes.</li>
    <li>✅ <strong>User-Friendly Contact Forms:</strong> Integrated contact forms for inquiries, loan applications, and customer support, improving user interaction with the institution.</li>
    <li>✅ <strong>Responsive Design:</strong> Built with <strong>Elementor</strong> and optimized for mobile devices, ensuring the platform is accessible on any screen size.</li>
    <li>✅ <strong>SEO Optimized:</strong> Implemented SEO best practices to ensure the platform ranks well on search engines, increasing visibility and driving traffic.</li>
    <li>✅ <strong>Secure Payment Integration:</strong> Secure forms for users to submit loan applications and make payments, integrated with third-party payment systems.</li>
    <li>✅ <strong>Admin Dashboard:</strong> Easy-to-use dashboard for admins to update loan offers, manage client inquiries, and track applications.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Developed on <strong>WordPress</strong> with the <strong>Elementor</strong> page builder for creating custom pages, layouts, and sections that align with the institution’s branding and services.</li>
    <li>Designed using pre-built Elementor widgets, custom templates, and dynamic content to ensure flexibility and ease of content management.</li>
</ul>

<h4>🔹 Loan & Financial Offer Display</h4>
<ul>
    <li>Designed and customized dynamic sections to display loan offers, financial products, and their terms in an attractive and user-friendly way.</li>
    <li>Integrated with interactive elements like collapsible accordions and carousels to showcase loan features and eligibility criteria.</li>
</ul>

<h4>🔹 Interactive Loan Calculator</h4>
<ul>
    <li>Created a loan calculator to help users calculate loan amounts, interest rates, and repayment terms based on inputted data.</li>
    <li>The calculator was designed to update in real-time, providing users with instant results and enhancing user engagement.</li>
</ul>

<h4>🔹 Contact Forms & User Interaction</h4>
<ul>
    <li>Built intuitive contact forms to allow users to inquire about financial services, apply for loans, or request further information.</li>
    <li>Integrated form submissions with email notifications and CRM systems for streamlined customer support.</li>
</ul>

<h4>🔹 Admin Dashboard & Content Management</h4>
<ul>
    <li>Developed an easy-to-use admin dashboard for updating loan offers, managing inquiries, and reviewing customer applications.</li>
    <li>Ensured that admins have full control over content, enabling them to add, edit, or remove loan information as needed.</li>
</ul>

<h4>🔹 Responsive Design with Elementor</h4>
<ul>
    <li>The platform was built using <strong>Elementor</strong> to ensure that all pages are responsive and display properly on all devices, including mobile, tablet, and desktop.</li>
    <li>Tailored the design with custom breakpoints and optimization settings to ensure a seamless user experience.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>💼 <strong>Custom Financial Offers</strong> – The platform effectively displays a range of financial products, including loans and investment offers, with easy-to-navigate pages.</li>
    <li>🧮 <strong>Interactive Loan Calculator</strong> – Users can calculate their loan amounts, repayment plans, and interest rates dynamically, enhancing user engagement.</li>
    <li>📞 <strong>User-Friendly Contact Forms</strong> – Contact forms enable users to easily apply for loans and reach out for inquiries, enhancing lead conversion.</li>
    <li>📱 <strong>Responsive Design</strong> – A fully responsive design using <strong>Elementor</strong> ensures that the platform works seamlessly on all devices.</li>
    <li>🔍 <strong>SEO Optimized</strong> – Implemented SEO best practices to boost the platform’s search engine ranking and increase visibility.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Financial Institution Platform</strong> is an elegant and user-friendly solution designed to help financial institutions showcase their services and interact with potential clients. 
    Built with <strong>WordPress</strong> and <strong>Elementor</strong>, it offers a fully customizable, responsive, and interactive platform that enhances both user engagement and admin control.
</p>

<p>💰 <strong>Your trusted financial partner – guiding you to smarter financial decisions!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.phpmyadmin,
                name: "phpMyAdmin"
            },
            {
                image: images.mysql,
                name: "MySQL"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Software Development Company Platform",
        description: "The Software Development Company Platform is a fully customized WordPress website built using Elementor and custom plugins to showcase the company’s software development services and expertise. This platform serves as a comprehensive online presence for a software development company, enabling potential clients to learn about the services offered, view past projects, and easily get in touch through contact forms. The website is designed to communicate professionalism, technical expertise, and innovation in software development.",
        image: newu.newu1,
        images: [newu.newu1, newu.newu2, newu.newu3, newu.newu4, newu.newu5, newu.newu6, newu.newu7, newu.newu8, newu.newu9, newu.newu10, newu.newu11, newu.newu12, ],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Custom WordPress Design with Elementor:</strong> Developed with <strong>Elementor</strong> to create a visually appealing and user-friendly interface for the company's online presence.</li>
    <li>✅ <strong>Custom Plugin Development:</strong> Integrated custom-built plugins to extend the functionality of the platform and provide unique features tailored to the company's needs.</li>
    <li>✅ <strong>Showcase of Software Development Services:</strong> Highlighted various software development services including custom software development, mobile app development, web development, and more.</li>
    <li>✅ <strong>Client Testimonials:</strong> Added a section to display client reviews and testimonials, showcasing successful collaborations and building trust with potential clients.</li>
    <li>✅ <strong>Project Portfolio:</strong> Showcased completed projects with detailed case studies, featuring the technologies used and the results achieved for clients.</li>
    <li>✅ <strong>Contact Forms:</strong> Integrated multiple contact forms to collect data from potential clients, gather inquiries, and facilitate communication for quotes and consultations.</li>
    <li>✅ <strong>Lead Generation:</strong> Incorporated lead generation tools and contact forms to capture leads and assist the sales team in following up with potential clients.</li>
    <li>✅ <strong>SEO Optimized:</strong> Implemented SEO best practices to improve the platform's search engine ranking, ensuring visibility for prospective clients searching for software development services.</li>
    <li>✅ <strong>Responsive Design:</strong> Designed to be fully responsive across all devices, ensuring the platform is accessible on desktops, tablets, and smartphones.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Utilized <strong>WordPress</strong> and <strong>Elementor</strong> to design the website with a user-friendly drag-and-drop interface, making it easy for non-technical users to manage content.</li>
    <li>Customized Elementor templates for dynamic page layouts that align with the brand’s visual identity and business objectives.</li>
</ul>

<h4>🔹 Custom Plugin Development</h4>
<ul>
    <li>Developed custom plugins to enhance the functionality of the platform, such as advanced contact forms, lead generation tools, and custom post types for project portfolios.</li>
    <li>Ensured the custom plugins were optimized for performance, security, and seamless integration with WordPress.</li>
</ul>

<h4>🔹 Service Pages & Client Testimonials</h4>
<ul>
    <li>Created dedicated service pages for each software development offering, including web development, mobile app development, and more, with detailed descriptions of the company’s expertise.</li>
    <li>Added a client testimonials section to build credibility and trust with potential clients, featuring quotes and feedback from satisfied customers.</li>
</ul>

<h4>🔹 Project Portfolio</h4>
<ul>
    <li>Developed a project portfolio section to showcase previous software development projects with detailed case studies, highlighting the challenges, solutions, and results for each project.</li>
    <li>Integrated filters to allow users to search and view specific project types based on categories like technology used or service provided.</li>
</ul>

<h4>🔹 Contact Forms & Lead Generation</h4>
<ul>
    <li>Built and integrated custom contact forms to collect inquiries from prospective clients, allowing them to request consultations, quotes, and more.</li>
    <li>Designed forms to capture key information such as company details, project scope, and contact information to generate leads for the sales team.</li>
</ul>

<h4>🔹 SEO Optimization & Analytics</h4>
<ul>
    <li>Implemented on-page SEO best practices such as keyword optimization, meta descriptions, and title tags to improve search engine ranking.</li>
    <li>Integrated Google Analytics to track website traffic, user behavior, and conversion rates, helping the company measure the effectiveness of the platform.</li>
</ul>

<h4>🔹 Responsive Design</h4>
<ul>
    <li>Ensured the platform was fully responsive, providing a seamless experience for users across all screen sizes, from desktop to mobile.</li>
    <li>Optimized images and media content for faster load times on mobile devices to enhance user experience and retention.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>💻 <strong>Custom Software Solutions</strong> – The platform effectively showcases the company’s software development expertise, highlighting services, technologies, and completed projects.</li>
    <li>📈 <strong>Client Testimonials & Lead Generation</strong> – Added client feedback to build trust and integrated forms for capturing leads, ensuring a steady flow of prospective clients.</li>
    <li>📂 <strong>Project Portfolio</strong> – A detailed portfolio section to showcase the company’s best work and demonstrate its capabilities to potential clients.</li>
    <li>📱 <strong>Responsive Design</strong> – Built using <strong>Elementor</strong> and optimized for mobile, ensuring the platform looks great on all devices.</li>
    <li>🔍 <strong>SEO & Analytics</strong> – Implemented SEO practices to ensure high visibility on search engines, while integrating analytics to measure site performance.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Software Development Company Platform</strong> is a well-rounded, feature-rich solution that effectively represents the company’s expertise and services. 
    Built using <strong>WordPress</strong>, <strong>Elementor</strong>, and <strong>custom plugins</strong>, this platform is designed to engage potential clients, streamline communication, and generate leads, while also providing a user-friendly experience for the site’s administrators.
</p>

<p>🚀 <strong>Your trusted partner for innovative software solutions – creating the future of technology!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.ajax,
                name: "AJAX"
            },
            {
                image: images.php,
                name: "PHP"
            },
            {
                image: images.phpmyadmin,
                name: "phpMyAdmin"
            },
            {
                image: images.mysql,
                name: "MySQL"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Software Development Company Blog Platform",
        description: "The Software Development Company Blog Platform is a custom-built website designed to showcase the services of a software development company. Built using WordPress, Elementor, and custom plugins, this platform includes a blog system where the company can share insights, industry news, and showcase its expertise. It also features a contact form for potential clients to inquire about the company’s software development services.",
        image: ren.ren1,
        images: [ren.ren1, ren.ren2, ren.ren3, ren.ren4, ren.ren5, ren.ren6],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Custom WordPress Design with Elementor:</strong> Developed with <strong>Elementor</strong> for an engaging, responsive design that is easy to manage and customize.</li>
    <li>✅ <strong>Blog System:</strong> Integrated a fully functional blog system to share articles, industry updates, and company news, helping establish thought leadership in software development.</li>
    <li>✅ <strong>Contact Form for Services:</strong> A custom contact form for prospective clients to inquire about the company’s services, including custom software development, mobile applications, and consulting.</li>
    <li>✅ <strong>SEO Optimization:</strong> Implemented SEO best practices to improve the visibility of the blog and services on search engines, ensuring potential clients can find the company online.</li>
    <li>✅ <strong>Custom Post Types:</strong> Developed custom post types for blog articles, services, and testimonials, allowing for an organized and scalable content management system.</li>
    <li>✅ <strong>Responsive Design:</strong> The site is designed to be fully responsive, ensuring a smooth user experience across all devices.</li>
    <li>✅ <strong>Lead Generation:</strong> Integrated lead generation forms for capturing potential clients’ information and inquiries about software development services.</li>
    <li>✅ <strong>Client Testimonials:</strong> Included a section for client testimonials to highlight successful collaborations and build trust with potential customers.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Utilized <strong>WordPress</strong> and <strong>Elementor</strong> to create a dynamic, user-friendly interface for easy content management and page design.</li>
    <li>Custom-designed page templates using Elementor’s drag-and-drop interface to create visually appealing layouts that align with the company’s brand.</li>
</ul>

<h4>🔹 Blog System</h4>
<ul>
    <li>Developed a fully-featured blog system to allow the company to regularly share articles, project updates, and industry trends, establishing thought leadership.</li>
    <li>Created a system for categorizing blog posts by topic, making it easy for users to browse and find relevant content.</li>
    <li>Implemented an archive system to organize and display past articles for easy access.</li>
</ul>

<h4>🔹 Custom Post Types</h4>
<ul>
    <li>Developed custom post types for blog articles, services, and client testimonials, ensuring that each content type is easily manageable and categorized.</li>
    <li>Ensured custom post types are fully integrated with WordPress’s native management system for seamless content editing and updating.</li>
</ul>

<h4>🔹 Contact Form for Services</h4>
<ul>
    <li>Created a custom contact form to allow prospective clients to inquire about the company’s services, such as software development, mobile apps, and more.</li>
    <li>Integrated form submissions with an email notification system to alert the team about new inquiries and leads.</li>
</ul>

<h4>🔹 SEO Optimization</h4>
<ul>
    <li>Implemented on-page SEO best practices including optimized meta tags, keyword-rich titles, and alt text for images to improve search engine rankings.</li>
    <li>Optimized blog articles to rank for relevant industry keywords, increasing the company’s visibility to potential clients and driving organic traffic.</li>
</ul>

<h4>🔹 Client Testimonials</h4>
<ul>
    <li>Developed a section for displaying client testimonials, showcasing successful projects and customer satisfaction.</li>
    <li>Enabled easy updating and management of testimonials to keep content fresh and relevant.</li>
</ul>

<h4>🔹 Lead Generation & Analytics</h4>
<ul>
    <li>Implemented lead generation forms to capture potential clients’ contact details and service inquiries.</li>
    <li>Set up Google Analytics to track user engagement, blog views, and form submissions, providing valuable insights for marketing efforts.</li>
</ul>

<h4>🔹 Responsive Design</h4>
<ul>
    <li>Ensured the website was fully responsive, providing an optimal browsing experience across desktops, tablets, and smartphones.</li>
    <li>Optimized images and page layouts for mobile devices to enhance load speed and user experience.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>💻 <strong>Effective Blog System</strong> – The blog system allows the company to share valuable insights, attract organic traffic, and engage with potential clients.</li>
    <li>📈 <strong>Lead Generation</strong> – Integrated custom contact forms and lead capture tools to help the company generate new business opportunities.</li>
    <li>🔍 <strong>SEO Optimization</strong> – Implemented SEO strategies to enhance online visibility and drive organic traffic to the platform.</li>
    <li>📱 <strong>Responsive Design</strong> – The website is mobile-friendly, ensuring that users have an excellent experience across all devices.</li>
    <li>🌟 <strong>Client Testimonials</strong> – Showcased customer feedback and success stories to build trust with potential clients.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Software Development Company Blog Platform</strong> serves as an essential online presence for the company. 
    By combining a custom-designed blog system with lead generation forms and client testimonials, the platform helps build credibility, engage with potential clients, and showcase the company’s expertise. 
    Built using <strong>WordPress</strong>, <strong>Elementor</strong>, and custom plugins, it’s a robust, scalable solution for driving business growth.
</p>

<p>🚀 <strong>Your trusted partner in innovation, bringing your ideas to life!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.php,
                name: "PHP"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "College Website with Courses & Contact Forms",
        description: "The College Website with Courses & Contact Forms is a custom-built website designed for a college institution. Built using WordPress, Elementor, and custom functionalities, this platform showcases the college’s various courses, student information, and additional resources. It includes a user-friendly interface for prospective students to explore courses, apply via contact forms, and get more information about the institution's offerings.",
        image: pbca.pbca1,
        images: [pbca.pbca1, pbca.pbca2, pbca.pbca3, pbca.pbca4, pbca.pbca5, pbca.pbca6, pbca.pbca7, pbca.pbca8, pbca.pbca9, pbca.pbca10, pbca.pbca11, pbca.pbca12],
        content: `
            <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Course Catalog:</strong> A dynamic course catalog displaying detailed information about each program, course duration, and admission requirements.</li>
    <li>✅ <strong>Custom Contact Forms:</strong> Custom-built forms for prospective students to inquire about specific courses, submit applications, or ask for further information about the college.</li>
    <li>✅ <strong>Responsive Design:</strong> Fully optimized for desktop, tablet, and mobile devices, ensuring a seamless experience for all users.</li>
    <li>✅ <strong>Program Pages:</strong> Dedicated pages for each program offered by the college, including detailed course content, faculty information, and application processes.</li>
    <li>✅ <strong>Admin Dashboard:</strong> Provides administrators with the ability to manage course listings, student inquiries, and track form submissions from the contact system.</li>
    <li>✅ <strong>SEO Optimization:</strong> Implemented best practices to ensure high visibility on search engines, helping prospective students discover the college’s offerings.</li>
    <li>✅ <strong>Multiple Pages for College Information:</strong> Includes various informational pages such as the college history, faculty members, student services, and campus facilities.</li>
    <li>✅ <strong>News & Events:</strong> A section to display college news, upcoming events, seminars, and deadlines for prospective students.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Utilized <strong>WordPress</strong> and <strong>Elementor</strong> to design a visually appealing, responsive website that’s easy for both admins and visitors to navigate.</li>
    <li>Created custom page templates using Elementor’s drag-and-drop builder to ensure the college’s brand and identity were properly represented.</li>
</ul>

<h4>🔹 Course Catalog & Program Pages</h4>
<ul>
    <li>Developed a dynamic course catalog where each program and course has its own dedicated page with detailed information, including course content, duration, faculty, and more.</li>
    <li>Implemented an easy-to-use content management system for administrators to manage and update course listings in real-time.</li>
</ul>

<h4>🔹 Custom Contact Forms</h4>
<ul>
    <li>Created custom-built contact forms for prospective students to submit inquiries or apply for courses directly from the website.</li>
    <li>Integrated form submissions with email notifications to alert college staff of new applications or inquiries, ensuring timely responses.</li>
</ul>

<h4>🔹 Admin Dashboard</h4>
<ul>
    <li>Developed a comprehensive admin dashboard that enables college staff to easily manage the course catalog, view and respond to inquiries, and keep track of form submissions.</li>
    <li>Provided admins with full control over content, allowing them to add new courses, update course details, and manage student applications directly through the WordPress backend.</li>
</ul>

<h4>🔹 SEO Optimization</h4>
<ul>
    <li>Optimized the website’s on-page SEO elements, including meta descriptions, title tags, alt texts for images, and content structure to improve the website’s search engine visibility.</li>
    <li>Ensured all course and program pages are indexed for relevant search queries, helping prospective students find the right information about the college.</li>
</ul>

<h4>🔹 Multiple Pages for College Information</h4>
<ul>
    <li>Designed multiple pages to provide vital information about the college, such as the institution’s history, faculty members, student life, and campus facilities.</li>
    <li>Included easy navigation between pages to create a well-structured information flow for prospective students exploring the website.</li>
</ul>

<h4>🔹 News & Events</h4>
<ul>
    <li>Developed a section for college news and upcoming events to keep students and prospects informed about campus activities, deadlines, and seminars.</li>
    <li>Integrated dynamic content management for news and events, allowing the staff to easily update content as new announcements arise.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🎓 <strong>Course Catalog</strong> – A comprehensive catalog that makes it easy for prospective students to explore programs and courses with detailed information.</li>
    <li>📋 <strong>Custom Contact Forms</strong> – Easy-to-use forms for students to submit inquiries, applications, and requests for more information about courses and the college.</li>
    <li>🔄 <strong>Responsive Design</strong> – Fully optimized for all devices, ensuring a smooth browsing experience for users on desktops, tablets, and mobile phones.</li>
    <li>📈 <strong>Admin Dashboard</strong> – An intuitive admin dashboard that simplifies course management and tracks student inquiries in one place.</li>
    <li>🔍 <strong>SEO Optimization</strong> – Implemented strategies to boost the website’s visibility on search engines, driving organic traffic to the college’s programs and services.</li>
    <li>📰 <strong>News & Events Section</strong> – Keep students informed with the latest happenings, deadlines, and events at the college.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>College Website with Courses & Contact Forms</strong> is an essential platform for prospective students to explore academic programs, apply for courses, and stay updated on college news. 
    Built using <strong>WordPress</strong> and <strong>Elementor</strong>, this website provides a user-friendly interface for both students and administrators, with robust functionalities like course listings, custom contact forms, and SEO optimization. 
    It is a highly interactive and informative platform that helps streamline the application process while offering a seamless experience for future students.
</p>

<p>🎓 <strong>Your pathway to academic excellence begins here!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Financial Institution Website",
        description: "The Financial Institution Website is a professional and user-friendly platform designed for a company offering financial services, such as loans, investment opportunities, and financial consulting. Built using WordPress, Elementor, and Vanilla JavaScript, this website provides a seamless experience for visitors to explore various financial products and services.",
        image: financial.fin1,
        images: [financial.fin1, financial.fin2, financial.fin3, financial.fin4, financial.fin5, financial.fin6, financial.fin7, financial.fin8, financial.fin9],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Financial Services Showcase:</strong> A detailed listing of loan options, investment plans, and consulting services.</li>
    <li>✅ <strong>Custom Contact Forms:</strong> Integrated forms for users to inquire about financial services or apply for loans.</li>
    <li>✅ <strong>Loan Calculator:</strong> A dynamic JavaScript-powered loan calculator allowing users to estimate repayments.</li>
    <li>✅ <strong>Responsive Design:</strong> Fully optimized for desktop, tablet, and mobile devices.</li>
    <li>✅ <strong>SEO Optimization:</strong> Implemented best practices for better search engine rankings.</li>
    <li>✅ <strong>Blog Section:</strong> A dedicated blog for financial tips, news, and updates.</li>
    <li>✅ <strong>Security & Performance:</strong> Optimized for speed and secure transactions.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Utilized <strong>WordPress</strong> and <strong>Elementor</strong> to create a modern and professional design.</li>
    <li>Custom Elementor widgets were developed for interactive elements like service sections, FAQs, and user testimonials.</li>
</ul>

<h4>🔹 Financial Services Showcase</h4>
<ul>
    <li>Developed structured pages for loan options, investment plans, and financial consulting.</li>
    <li>Designed an intuitive layout to help users easily compare different financial products.</li>
</ul>

<h4>🔹 Custom Contact Forms</h4>
<ul>
    <li>Created interactive forms for users to request financial services or consultations.</li>
    <li>Integrated email notifications for instant responses from the financial institution.</li>
</ul>

<h4>🔹 Blog Section</h4>
<ul>
    <li>Added a financial blog with news, investment strategies, and tips.</li>
    <li>SEO-friendly article structure to drive organic traffic.</li>
</ul>

<h4>🔹 Security & Performance</h4>
<ul>
    <li>Implemented caching and minified assets for improved load times.</li>
    <li>Enhanced security measures to protect user data.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>💰 <strong>Financial Services Showcase</strong> – Clearly structured service pages for easy navigation.</li>
    <li>📊 <strong>Loan Calculator</strong> – A dynamic, JavaScript-powered tool for estimating repayment plans.</li>
    <li>📝 <strong>Blog Section</strong> – Engaging content to educate visitors on financial topics.</li>
    <li>📧 <strong>Custom Contact Forms</strong> – Easy access to inquiries and consultations.</li>
    <li>📱 <strong>Responsive & Fast</strong> – Optimized for all devices with high performance.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Financial Institution Website</strong> serves as a powerful tool for attracting clients and providing essential financial services. 
    With a sleek design, a functional loan calculator, and a well-structured service showcase, it ensures an excellent user experience while maintaining top performance and security.
</p>

<p>💼 <strong>Empowering financial decisions through a seamless digital experience!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Company Website",
        description: "The Company Website is a clean and professional platform designed to showcase the company's services, provide important links, and keep users engaged with a blog and contact system. Built using WordPress and Elementor, this website serves as a digital gateway for clients to explore the company’s offerings and stay connected.",
        image: company.company1,
        images: [company.company1, company.company2, company.company3, company.company4, company.company5],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Company Services Showcase:</strong> A structured layout displaying key services and relevant links.</li>
    <li>✅ <strong>Blog System:</strong> An integrated blog where the company can share news, updates, and insights.</li>
    <li>✅ <strong>Contact Form:</strong> A simple and effective form for users to reach out to the company.</li>
    <li>✅ <strong>Navigation & Links:</strong> Easy access to important resources and company-related pages.</li>
    <li>✅ <strong>SEO Optimization:</strong> Optimized structure to enhance search engine visibility.</li>
    <li>✅ <strong>Responsive Design:</strong> Works seamlessly on desktop, tablet, and mobile devices.</li>
    <li>✅ <strong>Security & Performance:</strong> Enhanced speed and security measures for smooth user experience.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Developed with <strong>WordPress</strong> and <strong>Elementor</strong> for flexible and professional design.</li>
    <li>Custom Elementor widgets were created to enhance content presentation.</li>
</ul>

<h4>🔹 Company Services & Links</h4>
<ul>
    <li>Structured layout to present key services and resources effectively.</li>
    <li>Easy-to-navigate interface for quick access to essential links.</li>
</ul>

<h4>🔹 Blog System</h4>
<ul>
    <li>Integrated a blog for company updates, industry news, and insights.</li>
    <li>SEO-friendly blog posts to increase visibility and engagement.</li>
</ul>

<h4>🔹 Contact Form</h4>
<ul>
    <li>Simple and effective contact form to allow users to get in touch easily.</li>
    <li>Integrated email notifications for instant response management.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Implemented best SEO practices for better ranking on search engines.</li>
    <li>Optimized page speed for a fast and smooth user experience.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🌐 <strong>Service Showcase</strong> – Clear, structured layout for company services and important links.</li>
    <li>📝 <strong>Blog System</strong> – Engaging content for visitors and improved SEO.</li>
    <li>📧 <strong>Contact Form</strong> – Easy way for users to connect with the company.</li>
    <li>📱 <strong>Responsive & Fast</strong> – Works flawlessly on all devices.</li>
    <li>🔒 <strong>Secure & Optimized</strong> – Enhanced security and performance for a smooth experience.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Company Website</strong> is a simple yet effective platform for businesses to showcase their services, engage with users through a blog, and provide an easy way for visitors to get in touch. 
    With a modern and responsive design, it ensures a seamless user experience and strong digital presence.
</p>

<p>💼 <strong>Helping businesses establish a strong online identity with a professional and engaging website!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Makeup E-Commerce Store",
        description: "The Makeup E-Commerce Store is an elegant and user-friendly online shop designed for selling a variety of makeup products. Developed using WordPress and Elementor, this e-commerce platform features a seamless shopping experience, a blog for beauty tips, and an integrated email system for order notifications and marketing.",
        image: amoremio.amore1,
        images: [amoremio.amore1, amoremio.amore2, amoremio.amore3, amoremio.amore4, amoremio.amore5, amoremio.amore6, amoremio.amore7, amoremio.amore8, amoremio.amore9, amoremio.amore10, amoremio.amore11, amoremio.amore12, amoremio.amore13 ],
        content: `
            <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Beautiful Product Showcase:</strong> A visually appealing display of makeup products with detailed descriptions and images.</li>
    <li>✅ <strong>Seamless Shopping Experience:</strong> Intuitive product browsing, filtering, and a smooth checkout process.</li>
    <li>✅ <strong>Order Tracking & User Profiles:</strong> Customers can view their order history and manage their profiles.</li>
    <li>✅ <strong>Integrated Email System:</strong> Automated emails for order confirmation, shipping updates, and promotions.</li>
    <li>✅ <strong>Blog System:</strong> A dedicated section for beauty tips, product recommendations, and makeup tutorials.</li>
    <li>✅ <strong>SEO Optimization:</strong> Structured for high visibility on search engines and improved organic reach.</li>
    <li>✅ <strong>Mobile-Friendly Design:</strong> Fully responsive, ensuring a smooth experience on all devices.</li>
    <li>✅ <strong>Secure Payment Gateway:</strong> Integration with trusted payment providers for secure transactions.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Built with <strong>WordPress</strong> and <strong>Elementor</strong> for easy customization and a modern design.</li>
    <li>Custom Elementor widgets were developed for product pages and promotional banners.</li>
</ul>

<h4>🔹 E-Commerce Functionality</h4>
<ul>
    <li>Implemented a smooth product browsing and checkout system.</li>
    <li>Custom pricing logic for discounts, promotions, and special offers.</li>
</ul>

<h4>🔹 Blog System</h4>
<ul>
    <li>Integrated a blog for beauty tips, product guides, and makeup tutorials.</li>
    <li>SEO-friendly articles to improve organic traffic and engage customers.</li>
</ul>

<h4>🔹 Email & Notification System</h4>
<ul>
    <li>Automated email notifications for order confirmations, shipping updates, and promotional campaigns.</li>
    <li>Custom email templates for a branded and professional experience.</li>
</ul>

<h4>🔹 Order Tracking & User Profiles</h4>
<ul>
    <li>Users can register, manage their profiles, and track their orders.</li>
    <li>Admin dashboard allows easy order management and customer interactions.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Implemented best SEO practices for better ranking on search engines.</li>
    <li>Optimized for fast load times and smooth navigation.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🛍️ <strong>Stunning Product Showcase</strong> – High-quality presentation of makeup products.</li>
    <li>📝 <strong>Engaging Blog System</strong> – Beauty tips, tutorials, and expert advice to attract visitors.</li>
    <li>📧 <strong>Email System</strong> – Automated order notifications and promotional emails.</li>
    <li>📱 <strong>Fully Responsive</strong> – Optimized for desktop, tablet, and mobile users.</li>
    <li>🔒 <strong>Secure & Reliable</strong> – Safe transactions with secure payment gateways.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Makeup E-Commerce Store</strong> is more than just an online shop—it's a complete beauty hub with a shopping experience that is smooth, engaging, and user-friendly.
    With a combination of <strong>e-commerce functionality, a blog system, and an integrated email marketing system</strong>, it helps businesses grow while offering customers an exceptional experience.
</p>

<p>💄 <strong>Helping beauty brands reach their audience with a powerful and elegant online store!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.seo,
                name: "SEO"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.phpmyadmin,
                name: "phpMyAdmin"
            },
            {
                image: images.mysql,
                name: "MySQL"
            },
            {
                image: images.ajax,
                name: "AJAX"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Software Development Company Website",
        description: "The Software Development Company Website is a modern and professional online presence for a company specializing in software development, digital solutions, and IT consulting. Built with WordPress and Elementor, the website effectively showcases the company's services, expertise, and portfolio while providing an intuitive way for potential clients to get in touch.",
        image: company.companyN1,
        images: [company.companyN1, company.companyN2, company.companyN3, company.companyN4, company.companyN5, company.companyN6, company.companyN7, company.companyN8, company.companyN9, company.companyN10, ],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Company Services Showcase:</strong> Detailed pages describing software development, IT consulting, and digital solutions.</li>
    <li>✅ <strong>Portfolio & Case Studies:</strong> A section highlighting completed projects, technologies used, and success stories.</li>
    <li>✅ <strong>Contact & Inquiry Forms:</strong> Integrated contact forms to capture leads and client inquiries.</li>
    <li>✅ <strong>Blog System:</strong> A content-rich section featuring industry news, development insights, and company updates.</li>
    <li>✅ <strong>SEO Optimization:</strong> Structured to enhance online visibility and search rankings.</li>
    <li>✅ <strong>Mobile-Friendly Design:</strong> Fully responsive and optimized for all devices.</li>
    <li>✅ <strong>Custom Elementor Components:</strong> Tailor-made sections for service descriptions, testimonials, and CTA elements.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Built with <strong>WordPress</strong> and <strong>Elementor</strong> for an easy-to-manage and visually appealing design.</li>
    <li>Custom Elementor widgets and layouts designed for service descriptions and testimonials.</li>
</ul>

<h4>🔹 Service Showcase</h4>
<ul>
    <li>Dedicated pages for software development, consulting, and digital transformation services.</li>
    <li>Case studies and project highlights to demonstrate expertise.</li>
</ul>

<h4>🔹 Blog System</h4>
<ul>
    <li>Industry insights, development tips, and company news updates.</li>
    <li>SEO-optimized content to drive traffic and increase engagement.</li>
</ul>

<h4>🔹 Contact & Lead Generation</h4>
<ul>
    <li>Interactive contact forms to capture client inquiries and business leads.</li>
    <li>Custom CTA sections to encourage consultation bookings.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Optimized for search engines with proper meta tags, structured data, and fast-loading pages.</li>
    <li>Designed for smooth navigation and a professional user experience.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>💡 <strong>Professional & Modern Design</strong> – Clean and structured UI tailored for a software company.</li>
    <li>📢 <strong>SEO & Blog Integration</strong> – Helps improve visibility and audience engagement.</li>
    <li>📞 <strong>Lead Capture Forms</strong> – Ensures potential clients can easily reach out.</li>
    <li>📱 <strong>Fully Responsive</strong> – Optimized for desktop, tablet, and mobile devices.</li>
    <li>🔍 <strong>Optimized for Search Engines</strong> – Structured content for better Google ranking.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Software Development Company Website</strong> serves as a powerful online presence for a tech-focused business, combining <strong>service showcases, a blog system, and lead generation tools</strong> to drive engagement and business growth.
</p>

<p>🚀 <strong>Helping software companies establish credibility and connect with their audience through a well-crafted online platform!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            },
        ],
    },
    {
        title: "Recipe & Sauce Product Website",
        description: "The Recipe & Sauce Product Website is a beautifully designed online platform that showcases a company’s delicious recipes and high-quality sauce products. Built with WordPress and Elementor, the website provides an engaging and visually appealing way for users to explore various recipes and learn about the brand’s products.",
        image: sauce.sauce1,
        images: [sauce.sauce1, sauce.sauce2, sauce.sauce3, sauce.sauce4, sauce.sauce5, sauce.sauce6, sauce.sauce7, sauce.sauce8 ],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Recipe Showcase:</strong> A collection of recipes featuring step-by-step instructions and ingredient lists.</li>
    <li>✅ <strong>Sauce Product Catalog:</strong> A detailed display of available sauces, including descriptions, ingredients, and usage tips.</li>
    <li>✅ <strong>Search & Filtering System:</strong> Easy navigation to find recipes based on ingredients, difficulty, or meal type.</li>
    <li>✅ <strong>Custom Elementor Components:</strong> Unique layouts for recipes, product pages, and promotional banners.</li>
    <li>✅ <strong>Mobile-Friendly Design:</strong> Fully responsive and optimized for all screen sizes.</li>
    <li>✅ <strong>Contact & Inquiry Forms:</strong> Allow users to reach out with questions or product inquiries.</li>
    <li>✅ <strong>SEO Optimization:</strong> Structured content to improve search engine ranking and discoverability.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Designed with <strong>Elementor</strong> to ensure easy content management and customization.</li>
    <li>Custom-built sections for recipes, product pages, and call-to-action banners.</li>
</ul>

<h4>🔹 Recipe & Product Showcase</h4>
<ul>
    <li>Detailed recipe pages with images, preparation steps, and suggested sauces.</li>
    <li>Well-structured product pages highlighting the ingredients and benefits of each sauce.</li>
</ul>

<h4>🔹 Search & Filtering System</h4>
<ul>
    <li>Users can browse recipes by category, ingredients, or preparation time.</li>
    <li>Seamless navigation to enhance user experience.</li>
</ul>

<h4>🔹 Contact & Lead Generation</h4>
<ul>
    <li>Integrated contact forms for customer inquiries and feedback.</li>
    <li>Newsletter subscription for updates and promotions.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Optimized images and content structure for better ranking on Google.</li>
    <li>Fast-loading pages to enhance user experience and engagement.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🍽️ <strong>Beautiful & Engaging Design</strong> – Visually rich layouts perfect for food and recipe content.</li>
    <li>🔍 <strong>Search & Filtering Features</strong> – Users can quickly find recipes and products.</li>
    <li>📞 <strong>Lead Capture & Contact Forms</strong> – Allows for direct customer interaction.</li>
    <li>📱 <strong>Fully Responsive</strong> – Works perfectly on mobile, tablet, and desktop.</li>
    <li>📢 <strong>SEO-Optimized</strong> – Ensures better search engine visibility.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Recipe & Sauce Product Website</strong> is a perfect blend of functionality and design, providing users with an immersive experience to explore recipes and discover premium sauce products. 
    With its intuitive navigation, mobile-friendly design, and SEO optimization, this website helps the brand effectively connect with its audience.
</p>

<p>🚀 <strong>Bringing recipes to life and showcasing the best sauces with a stunning online presence!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ],
    },
    {
        title: "Digital Agency Website",
        description: "The Digital Agency Website is a modern and sleek online platform designed to showcase the agency’s expertise in digital marketing, branding, and web development.Built with WordPress and Elementor, the website provides a seamless experience for clients looking to explore services, read industry insights, and get in touch with the agency.",
        image: sda.sda1,
        images: [sda.sda1, sda.sda2, sda.sda3, sda.sda4, sda.sda5, sda.sda6, sda.sda7, sda.sda8, sda.sda9, sda.sda10, sda.sda11, sda.sda12, sda.sda13, sda.sda14, sda.sda15],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Service Offerings:</strong> Dedicated pages for SEO, web design, branding, and digital marketing services.</li>
    <li>✅ <strong>Portfolio Showcase:</strong> A beautifully designed section displaying past projects and case studies.</li>
    <li>✅ <strong>Blog System:</strong> A regularly updated blog sharing digital marketing tips, trends, and insights.</li>
    <li>✅ <strong>Custom Elementor Components:</strong> Fully customized sections for unique layouts and dynamic content.</li>
    <li>✅ <strong>Contact & Inquiry Forms:</strong> Easy-to-use forms for potential clients to request services or consultations.</li>
    <li>✅ <strong>SEO-Optimized Content:</strong> Structured for better ranking on search engines.</li>
    <li>✅ <strong>Responsive & Fast:</strong> Fully optimized for mobile, tablet, and desktop devices.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Designed with <strong>Elementor</strong> for flexible and easy content management.</li>
    <li>Custom-built service pages, blog layouts, and contact sections.</li>
</ul>

<h4>🔹 Service & Portfolio Showcase</h4>
<ul>
    <li>Detailed pages for each service (SEO, branding, web development, social media marketing, etc.).</li>
    <li>Visually engaging portfolio with images, project descriptions, and results.</li>
</ul>

<h4>🔹 Blog System</h4>
<ul>
    <li>Integrated blog with categorized posts on digital marketing trends.</li>
    <li>SEO-friendly content with optimized keywords.</li>
</ul>

<h4>🔹 Contact & Lead Generation</h4>
<ul>
    <li>Custom-built contact forms for inquiries and service requests.</li>
    <li>Newsletter subscription feature for lead nurturing.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Optimized page speed and structured data implementation.</li>
    <li>Meta tags and schema markup for improved search visibility.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Modern & Professional Design</strong> – Represents the agency’s brand effectively.</li>
    <li>📢 <strong>SEO-Optimized Blog</strong> – Helps in organic search ranking and audience engagement.</li>
    <li>💡 <strong>Service & Portfolio Display</strong> – Showcases expertise and past projects effectively.</li>
    <li>📞 <strong>Lead Capture & Contact Forms</strong> – Encourages potential clients to get in touch.</li>
    <li>📱 <strong>Fully Responsive</strong> – Adapts perfectly to all screen sizes.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Digital Agency Website</strong> serves as a powerful online presence for the agency, highlighting its services, projects, and expertise. 
    With a strong focus on SEO, user experience, and lead generation, this project successfully bridges the gap between businesses and their digital transformation needs.
</p>

<p>🚀 <strong>Empowering digital agencies with a high-converting, visually engaging, and optimized website!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"    
            },
            {
                image:images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            },
            {
                image: images.seo,
                name: "SEO"
            }
        ]
    },
    {
        title: "Innovative Software Solutions – Company Website",
        description: "The Innovative Software Solutions website is a professional online presence for a cutting-edge software development company. Built with WordPress and Elementor, it provides a structured platform showcasing their technology services, expertise, and industry insights. With a sleek design and strategic content organization, this project serves as a key digital asset for the company.",
        image: company.company1N1,
        images: [company.company1N1, company.company1N2, company.company1N3, company.company1N4, company.company1N5, company.company1N6, company.company1N7, company.company1N8, company.company1N9, company.company1N10, company.company1N11, company.company1N12, company.company1N13, company.company1N14, company.company1N15, company.company1N16, company.company1N17],
        content: `
        <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Software Development Services:</strong> Comprehensive service pages detailing web development, mobile apps, AI solutions, and more.</li>
    <li>✅ <strong>Case Studies & Portfolio:</strong> Showcasing successful projects with real-world impact.</li>
    <li>✅ <strong>Blog System:</strong> Regular industry updates, tech trends, and company insights.</li>
    <li>✅ <strong>Custom Elementor Components:</strong> Unique layouts and interactive sections built with Elementor.</li>
    <li>✅ <strong>Contact & Inquiry Forms:</strong> User-friendly forms to streamline communication.</li>
    <li>✅ <strong>SEO & Performance Optimization:</strong> Enhanced for better search engine visibility and speed.</li>
    <li>✅ <strong>Client Testimonials:</strong> A dedicated section featuring customer feedback and reviews.</li>
    <li>✅ <strong>Responsive & Cross-Browser Compatible:</strong> Seamlessly adapts to all screen sizes and devices.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Designed using <strong>Elementor</strong> for flexible content management.</li>
    <li>Fully customized service pages and call-to-action sections.</li>
</ul>

<h4>🔹 Services & Expertise Showcase</h4>
<ul>
    <li>Well-structured pages detailing software development services.</li>
    <li>Industry-specific solutions for businesses of all sizes.</li>
</ul>

<h4>🔹 Blog System</h4>
<ul>
    <li>SEO-optimized articles on emerging tech trends.</li>
    <li>Content categorized for better user navigation.</li>
</ul>

<h4>🔹 Contact & Lead Generation</h4>
<ul>
    <li>Custom inquiry forms for service requests.</li>
    <li>Integrated contact page with direct email and phone options.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Fast-loading pages for better user experience.</li>
    <li>Structured meta tags and schema markup for SEO.</li>
</ul>

<hr>

<h3>Why It’s a Standout Project?</h3>
<ul>
    <li>🚀 <strong>Professional & Modern UI</strong> – Reflects the company's expertise.</li>
    <li>📢 <strong>SEO-Optimized Blog</strong> – Helps drive organic traffic.</li>
    <li>💡 <strong>Comprehensive Service Pages</strong> – Clearly explains the company's capabilities.</li>
    <li>📞 <strong>Lead Capture Forms</strong> – Converts visitors into potential clients.</li>
    <li>📱 <strong>Fully Responsive Design</strong> – Works flawlessly on all devices.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>Innovative Software Solutions</strong> website serves as a powerful online hub for the company, showcasing their expertise, services, and thought leadership.
    Designed to attract clients and demonstrate technical proficiency, it plays a crucial role in the company's digital presence.
</p>

<p>🚀 <strong>Empowering businesses with a sleek, high-performance, and conversion-focused website!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.ajax,
                name: "AJAX",
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            }
        ]
    },
    {
        title: "Murrizi Labs – Software Development Website",
        description: "The NextGen Tech Solutions website is a cutting-edge digital platform designed for a modern software development company. Built using WordPress and Elementor, this website effectively showcases their technology-driven services, innovative solutions, and expertise in the industry. With a clean and professional design, it serves as the perfect online hub for potential clients and partners.",
        image: company.company2N1,
        images: [company.company2N1, company.company2N2, company.company2N3, company.company2N4, company.company2N5, company.company2N6, company.company2N7, company.company2N8, company.company2N9, company.company2N10, company.company2N11, company.company2N12, company.company2N13, company.company2N14, company.company2N15],
        content: `
            <h3>Key Features</h3>
<ul>
    <li>✅ <strong>Comprehensive Service Pages:</strong> Covering web development, AI solutions, cloud computing, and more.</li>
    <li>✅ <strong>Interactive Portfolio:</strong> Displaying past projects with case studies and success stories.</li>
    <li>✅ <strong>Industry Blog:</strong> Regular insights on the latest tech trends and innovations.</li>
    <li>✅ <strong>Custom Elementor Components:</strong> Unique layouts for engaging content presentation.</li>
    <li>✅ <strong>Client Testimonials:</strong> Showcasing positive feedback and success stories.</li>
    <li>✅ <strong>Contact & Inquiry Forms:</strong> Easy communication for service requests and consultations.</li>
    <li>✅ <strong>SEO-Optimized & Fast Loading:</strong> Ensuring high performance and better search visibility.</li>
    <li>✅ <strong>Fully Responsive & Mobile-Friendly:</strong> Optimized for seamless viewing on all devices.</li>
</ul>

<hr>

<h3>Tech Stack & Development Process</h3>

<h4>🔹 WordPress & Elementor Customization</h4>
<ul>
    <li>Built using <strong>Elementor</strong> for maximum design flexibility.</li>
    <li>Custom sections and components tailored for the company's brand identity.</li>
</ul>

<h4>🔹 Services & Expertise Display</h4>
<ul>
    <li>Well-structured service pages explaining key offerings.</li>
    <li>Clear call-to-action buttons to guide potential clients.</li>
</ul>

<h4>🔹 Blog & Knowledge Hub</h4>
<ul>
    <li>SEO-optimized blog posts on software trends and best practices.</li>
    <li>Engaging and informative articles to attract organic traffic.</li>
</ul>

<h4>🔹 Lead Generation & Contact System</h4>
<ul>
    <li>Integrated forms for inquiries, quotes, and consultations.</li>
    <li>Direct email and phone contact options for easy communication.</li>
</ul>

<h4>🔹 SEO & Performance Optimization</h4>
<ul>
    <li>Fast-loading pages for better user engagement.</li>
    <li>Structured metadata and schema markup for improved search rankings.</li>
</ul>

<hr>

<h3>Why This Project Stands Out?</h3>
<ul>
    <li>🚀 <strong>Modern & Professional UI</strong> – Designed to impress and engage visitors.</li>
    <li>📈 <strong>SEO-Optimized Content</strong> – Helps drive traffic and increase visibility.</li>
    <li>💡 <strong>Comprehensive Service Descriptions</strong> – Clearly defines business offerings.</li>
    <li>📩 <strong>Effective Lead Capture Forms</strong> – Generates valuable client inquiries.</li>
    <li>📱 <strong>Fully Responsive & Mobile-Optimized</strong> – Works flawlessly across all devices.</li>
</ul>

<hr>

<h3>Final Thoughts</h3>
<p>
    The <strong>NextGen Tech Solutions</strong> website is a high-performance, conversion-focused platform that effectively represents the company's technical expertise and services.
    Designed with an intuitive user experience in mind, it serves as a valuable tool for attracting clients and showcasing innovation.
</p>

<p>🚀 <strong>Helping businesses establish a strong online presence with a sleek, optimized, and feature-rich website!</strong></p>
        `,
        type: "Web",
        technologies: [
            {
                image: images.wordpress,
                name: "WordPress"
            },
            {
                image: images.elementor,
                name: "Elementor"
            },
            {
                image: images.vanillajs,
                name: "Javascript"
            },
            {
                image: images.seo,
                name: "SEO"
            }
        ],
    },
    {
        title: "Multifunctional Job Portal – Seamless Job Hunting & Recruitment",
        description: "This Job Portal is a feature-rich, multilingual platform designed to connect job seekers with potential employers efficiently. Built using WordPress, Elementor, and various premium plugins, it offers a fully customizable experience with seamless UI and advanced functionalities.",
        image: kapepunen.kapepunen1,
        images: [kapepunen.kapepunen1, kapepunen.kapepunen2, kapepunen.kapepunen3, kapepunen.kapepunen4, kapepunen.kapepunen5, kapepunen.kapepunen6, kapepunen.kapepunen7, kapepunen.kapepunen8, kapepunen.kapepunen9, kapepunen.kapepunen10, kapepunen.kapepunen11, kapepunen.kapepunen12, kapepunen.kapepunen13, kapepunen.kapepunen14, kapepunen.kapepunen15, kapepunen.kapepunen16, kapepunen.kapepunen17 ],
        content: `
        <ul>
        <li>🚀 <strong>Built with WordPress</strong> – Ensuring flexibility and scalability.</li>
        <li>🎨 <strong>Elementor-powered</strong> – Custom design with a drag-and-drop interface.</li>
        <li>🔌 <strong>Extensive Plugin Integrations</strong> – Advanced features for job listing, applications, and user management.</li>
        <li>🌍 <strong>Multilingual Support</strong> – Accessible in multiple languages.</li>
    </ul>

    <p>The platform enables users to <strong>create profiles, browse job listings, apply for positions, and connect with employers</strong>, making it an all-in-one job recruitment solution.</p>

    <h2>Key Features & Functionalities</h2>

    <h3>👤 Job Seeker Features</h3>
    <ul>
        <li>📝 <strong>User Registration & Profiles</strong> – Candidates can create detailed profiles, upload resumes, and showcase skills.</li>
        <li>🔎 <strong>Advanced Job Search</strong> – Search by <strong>job title, category, location, salary, remote/hybrid options</strong>, and more.</li>
        <li>📄 <strong>Resume Upload</strong> – Support for various formats (PDF, DOCX, etc.).</li>
        <li>📩 <strong>Apply for Jobs</strong> – Apply directly with a click, via email, or by attaching a resume.</li>
        <li>⭐ <strong>Saved Jobs</strong> – Bookmark jobs for later review.</li>
        <li>📆 <strong>Job Alerts</strong> – Get notifications for new job postings.</li>
        <li>📝 <strong>Application Tracking</strong> – Monitor application status.</li>
    </ul>

    <h3>🏢 Employer & Company Features</h3>
    <ul>
        <li>🏢 <strong>Company Profiles</strong> – Employers can create a branded profile, showcasing company details, open positions, and team info.</li>
        <li>📢 <strong>Job Listings</strong> – Post detailed job descriptions, requirements, salaries, and application options.</li>
        <li>📑 <strong>Resume Database Access</strong> – Search and filter through candidate profiles and resumes.</li>
        <li>🔍 <strong>Candidate Filtering</strong> – Sort applicants by skills, experience, and location.</li>
        <li>💼 <strong>Direct Messaging</strong> – Communicate with applicants via integrated messaging.</li>
        <li>🎯 <strong>Featured Job Listings</strong> – Premium job posts for extra visibility.</li>
    </ul>

    <h3>💬 Social & Community Features</h3>
    <ul>
        <li>🌐 <strong>Multilingual Support</strong> – Users can switch between multiple languages.</li>
        <li>🤝 <strong>Networking & Connections</strong> – Connect job seekers and employers.</li>
        <li>📜 <strong>Blog & Career Advice</strong> – Articles, tips, and insights for job seekers and employers.</li>
        <li>🔔 <strong>Notifications System</strong> – Real-time alerts for job postings, applications, and messages.</li>
    </ul>

    <h3>📊 Advanced Search & Filtering</h3>
    <ul>
        <li>🔎 <strong>Smart Search System</strong> – Filter by:
            <ul>
                <li>💼 Job Type (Full-time, Part-time, Contract, Remote, Freelance).</li>
                <li>📍 Location (City, Country, Remote).</li>
                <li>📆 Date Posted.</li>
                <li>💰 Salary Range.</li>
                <li>📝 Skills & Experience.</li>
            </ul>
        </li>
        <li>📊 <strong>AI-Powered Recommendations</strong> – Matches candidates with relevant jobs.</li>
    </ul>

    <h3>💳 Monetization & Premium Features</h3>
    <ul>
        <li>💰 <strong>Paid Job Listings</strong> – Employers can boost visibility with featured listings.</li>
        <li>📢 <strong>Subscription Plans</strong> – Premium access for exclusive job postings.</li>
        <li>🎯 <strong>Resume Highlighting</strong> – Candidates can pay to feature their resume.</li>
        <li>💼 <strong>Company Branding</strong> – Employers can customize their company pages.</li>
    </ul>

    <h3>📊 Analytics & Insights</h3>
    <ul>
        <li>📈 <strong>User Dashboard</strong> – Tracks job applications, profile visits, and interactions.</li>
        <li>👥 <strong>Employer Analytics</strong> – View applicant stats and job performance.</li>
    </ul>

    <h2>Tech Stack & Development Highlights</h2>

    <h3>🔹 Core Platform</h3>
    <ul>
        <li>🔹 <strong>WordPress</strong> – Ensuring flexibility and scalability.</li>
        <li>📐 <strong>Elementor</strong> – Custom UI with a drag-and-drop interface.</li>
        <li>🔌 <strong>Premium Plugins</strong> – Extending functionality for job management, SEO, security, and performance.</li>
    </ul>

    <h3>🔹 Plugins & Integrations</h3>
    <ul>
        <li>📄 <strong>Job Board Plugin</strong> – Manages job postings, applications, and filtering.</li>
        <li>🌍 <strong>WPML</strong> – Multilingual support.</li>
        <li>📨 <strong>MailChimp / SMTP</strong> – Email notifications and job alerts.</li>
        <li>📊 <strong>Google Analytics</strong> – Job post performance tracking.</li>
        <li>⚡ <strong>SEO Optimized</strong> – Integrated with RankMath/Yoast for better search visibility.</li>
    </ul>

    <h3>🔹 Security & Performance</h3>
    <ul>
        <li>🔐 <strong>Secure User Authentication</strong> – Role-based access control.</li>
        <li>⚡ <strong>Performance Optimization</strong> – Caching and image compression for fast loading.</li>
        <li>🛡 <strong>SSL Encryption</strong> – Ensuring data security.</li>
    </ul>

    <h2>Why This Job Portal Stands Out?</h2>
    <ul>
        <li>🚀 <strong>All-in-One Platform</strong> – Designed for both <strong>job seekers and employers</strong>.</li>
        <li>📈 <strong>Optimized for Engagement</strong> – Advanced search, analytics, and notifications.</li>
        <li>🌍 <strong>Multilingual & Global</strong> – Supports multiple languages for worldwide accessibility.</li>
        <li>🔍 <strong>AI & Smart Recommendations</strong> – Matching candidates with the right jobs.</li>
        <li>💰 <strong>Revenue Streams</strong> – Monetization through premium job listings and subscriptions.</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>This <strong>Multifunctional Job Portal</strong> is a <strong>powerful, scalable, and feature-rich solution</strong> designed to revolutionize the job market. Whether you're a job seeker looking for the perfect opportunity or an employer searching for top talent, this platform ensures a seamless and efficient experience.</p>
        `,
        type: "Web",
        technologies: [
            {image: images.wordpress, name: "WordPress"},
            {image: images.ajax, name: "AJAX"},
            {image: images.php, name: "PHP"},
            {image: images.phpmyadmin, name: "phpMyAdmin"},
            {image: images.mysql, name: "MySQL"},
            {image: images.vanillajs, name: "Javascript"},
            {image: images.elementor, name: "Elementor"},
            {image: images.seo, name: "SEO"},
        ]
    },
    
]