import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  let bookComponent;

  if (showBooks) {
    bookComponent = <BookDetails />;
  }

  return (

    <div style={{ padding: "20px" }}>

      <h1>Blogger App</h1>

      {bookComponent}

      {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      {showCourses && <CourseDetails />}

    </div>

  );
}

export default App;