import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {

    const { title, cover_img, author_name, author_img, post_date, reading_time, hashtags } = blog;

    return (
        <div className="my-4 py-6">
            <img className="w-full" src={cover_img} alt="" />
            <div className="flex justify-between my-6">
                <div className="flex">
                    <img src={author_img} alt="" />

                    <div>
                        <h3>{author_name}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmarks(blog)}><FaBookmark /></button>
                </div>

            </div>

            <h1 className="my-3">{title}</h1>

            <p className="my-3">
                {
                    hashtags.map((tag, idx) => <span key={idx}><a href="">#{tag} </a></span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 underline'>Mark as Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.number.isRequired
}

export default Blog;