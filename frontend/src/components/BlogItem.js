import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BlogItem = ({ blog, handleBlogDelete }) => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const username = loggedInUser ? JSON.parse(loggedInUser).username : null;

  return (
    <tr className="blog">
      <td>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </td>
      <td> {blog.author} </td>
      <td>
        {username === blog.user.username && (
          <Button
            className="delete-button"
            onClick={() => handleBlogDelete(blog)}
          >
            Delete Blog
          </Button>
        )}
      </td>
    </tr>
  );
};

export default BlogItem;
