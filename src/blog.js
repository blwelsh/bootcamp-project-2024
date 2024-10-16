// Blog Type and Data
var myBlogs = [
    {
        title: "My First Blog Post",
        date: "10/15/2024",
        description: "Brady's first ever blog post...",
        image: "bootcamp-project-2024/brady-pic.jpg",
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
];
// Get blog-container class from blog.html
var blogContainer = document.getElementById('blog-container');
myBlogs.forEach(function (blog) {
    var newBlogDiv = document.createElement("div");
    var blogHeader = document.createElement("h1");
    blogHeader.innerHTML = blog.title;
    newBlogDiv.append(blogHeader);
    var blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    newBlogDiv.append(blogImg);
    var blogDesc = document.createElement("p");
    blogDesc.innerHTML = blog.description;
    newBlogDiv.append(blogDesc);
    document.body.insertBefore(newBlogDiv, blogContainer);
});
