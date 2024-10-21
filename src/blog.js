// Blog Type and Data
var myBlogs = [
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
// Get blog-container class from blog.html
var blogContainer = document.getElementById('blog-container');
myBlogs.forEach(function (blog) {
    var newBlogDiv = document.createElement("div");
    var blogHeader = document.createElement("h1");
    var headerLink = document.createElement("a");
    blogHeader.innerHTML = blog.title;
    headerLink.href = "blogs/".concat(blog.slug, ".html");
    headerLink.appendChild(blogHeader);
    newBlogDiv.append(headerLink);
    var blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    blogImg.style.width = "200px";
    newBlogDiv.append(blogImg);
    var blogDesc = document.createElement("p");
    blogDesc.innerHTML = blog.description;
    newBlogDiv.append(blogDesc);
    document.body.insertBefore(newBlogDiv, blogContainer);
});
