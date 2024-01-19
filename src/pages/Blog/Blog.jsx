import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip/Chip";
import EmptyList from "../../components/common/EmptyList/EmptyList";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <>
      <Link
        className="w-[50px] h-[40px] font-bold rounded-full bg-[#9f18dd] grid place-items-center"
        to="/"
      >
        &#8592;
      </Link>
      {blog ? (
        <div className="blog">
          <header className="flex items-center justify-between">
            <p>Published {blog.createdAt}</p>
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="flex items-center gap-[1rem]">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </p>
          </header>
          <img
            className="w-full h-[30rem] object-cover my-[2rem]"
            src={blog.cover}
            alt="cover"
          />
          <p className="text-[1.2rem]">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
