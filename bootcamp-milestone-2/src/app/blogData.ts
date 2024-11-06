// Blog Type and Data

export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const myBlogs: Blog[] = [
    {
        title: "My First Blog Post",
        date: "10/15/2024",
        description: "Brady's first ever blog post...",
        image: "brady-pic.jpg",
        imageAlt: "brady",
        slug: "my-first-blog-post"
    },
    {
        title: "Adventures in TypeScript",
        date: "10/15/2024",
        description: "A few skills I've gained while learning TS",
        image: "brady-pic.jpg",
        imageAlt: "brady",
        slug: "adventures-in-typescript"
    }
];

export default myBlogs;