import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import Bookmarks from "../bookmarks/Bookmarks";

const Blogs = () => {

    const [blogPost, setBlogPost] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogPost(data))
    }, [])

    const handleBookmarks = blog => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = time => {
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
    }

    return (
        <>
            <div className="flex gap-4">
                <div className="w-2/3">
                    {
                        blogPost.map((blog) => <Blog
                            key={blog.id}
                            blog={blog}
                            handleBookmarks={handleBookmarks}
                            handleMarkAsRead={handleMarkAsRead}
                        ></Blog>)
                    }
                </div>

                <div className="w-1/3">
                    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
                </div>
            </div>
        </>
    );
};

export default Blogs;