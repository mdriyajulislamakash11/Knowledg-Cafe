import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, hanleBookark, handleReadingBook }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="mb-20">
            <img className="w-full" src={cover} alt={`cover picture titlle ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex my-7">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl mb-2">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button
                    onClick={() => hanleBookark(blog)}
                     className="ml-2 text-red-500 text-2xl">
                        <FaBookmark></FaBookmark></button>
                </div>
            </div>



            <h2 className="text-4xl">{title}</h2>

            <p className="my-4">
                {
                    hashtags.map((hash, idx) => <span key={idx}>< a href=""></a>#{hash}</span>)
                }
            </p>

            <button onClick={() => handleReadingBook(reading_time)}
             className="text-purple-800 font-bold underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hanleBookark: PropTypes.func,
    handleReadingBook: PropTypes.func
};

export default Blog;