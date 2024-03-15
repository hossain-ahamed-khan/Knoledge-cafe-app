import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    // const [reading_time] = bookmarks;

    return (
        <div className="my-4 py-6">
            <div className="bg-[#1111110D] my-3 p-3">
                <p>Spent time on read : {readingTime} min</p>
            </div>
            <div className="bg-[#1111110D] my-3 p-3">
                <div className="my-3">
                    <h3>Bookmarked Blogs : {bookmarks.length}</h3>
                </div>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}

export default Bookmarks;