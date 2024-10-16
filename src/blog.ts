type Blog = {
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
        image: "image0.jpg",
        imageAlt: "a beautiful picture of []",
        slug: "my-first-blog-post"
    },
    {
        title: "Adventures in TypeScript",
        date: "10/15/2024",
        description: "A few skills I've gained while learning TS",
        image: "image1.jpg",
        imageAlt: "a beautiful picture of []",
        slug: "adventures-in-typescript"

    }
]