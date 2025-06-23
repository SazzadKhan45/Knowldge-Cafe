import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error));
    },[]);

    return (
        <div className="w-2/3">
            {
                blogs.map( blog => <Blog blog ={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;