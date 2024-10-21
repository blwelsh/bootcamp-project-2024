// Blog Type and Data

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
        image: "brady-pic.jpg",
        imageAlt: "a beautiful picture of []",
        slug: "my-first-blog-post"
    },
    {
        title: "Adventures in TypeScript",
        date: "10/15/2024",
        description: "A few skills I've gained while learning TS",
        image: "brady-pic.jpg",
        imageAlt: "a beautiful picture of []",
        slug: "adventures-in-typescript"
    }
];

// Get blog-container class from blog.html

const blogContainer = document.getElementById('blog-container');

myBlogs.forEach(blog => {
    const newBlogDiv = document.createElement("div");
    
    const blogHeader = document.createElement("h1");
    const headerLink = document.createElement("a");
    blogHeader.innerHTML = blog.title;
    headerLink.href = `blogs/${blog.slug}.html`;
    headerLink.appendChild(blogHeader);
    newBlogDiv.append(headerLink);


    const blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    blogImg.style.width = "200px";
    newBlogDiv.append(blogImg);


    const blogDesc = document.createElement("p");
    blogDesc.innerHTML = blog.description;
    newBlogDiv.append(blogDesc);


    document.body.insertBefore(newBlogDiv, blogContainer);

});