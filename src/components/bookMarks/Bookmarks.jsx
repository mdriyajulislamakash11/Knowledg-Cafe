import PropTypes from "prop-types";
import Bookmark from './../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingBook}) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3 bg-gray-300 ml-4 pt-4">
            <div className="text-3xl text-center bg-blue-300 py-6 mb-4">
                <h2>Book Reading Time: {readingBook}</h2>
            </div>
            <h2 className="text-3xl text-center bg-gray-300 ">Bookmarked Blogs: {bookmarks.length}</h2>

            {
               bookmarks.map(bookmark => <Bookmark key={Bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.object,
    readingBook: PropTypes.number
}

export default Bookmarks;