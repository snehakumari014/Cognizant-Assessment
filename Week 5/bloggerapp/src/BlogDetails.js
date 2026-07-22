function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "Learning React",
            author: "Sneha"
        },
        {
            id: 2,
            title: "Understanding JSX",
            author: "OpenAI"
        }
    ];

    return (
        <div>
            <h2>Blog Details</h2>

            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <b>{blog.title}</b> - {blog.author}
                    </li>
                ))}
            </ul>

            <hr />
        </div>
    );
}

export default BlogDetails;