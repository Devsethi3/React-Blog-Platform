import React from 'react';
import BlogItem from './BlogItem/BlogItem';

const BlogList = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available</p>;
  }

  return (
    <div className="grid mt-[5rem] grid-cols-3 gap-[2rem]">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
