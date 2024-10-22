import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({hanleBookark, handleReadingBook}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
           {
            blogs.map( blog => <Blog 
                key={blog.id} 
                blog={blog}
                hanleBookark={hanleBookark}
                handleReadingBook={handleReadingBook}
                ></Blog>)
           }
        </div>
    );
};

Blogs.propTypes = {
    hanleBookark: PropTypes.func,
    handleReadingBook: PropTypes.number
}

export default Blogs;