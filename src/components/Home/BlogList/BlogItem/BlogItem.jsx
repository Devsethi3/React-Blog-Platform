import React from "react";
import Chip from "../../../common/Chip/Chip";
import { Link } from "react-router-dom";

const BlogItem = ({
  id,
  title,
  category,
  subCategory,
  description,
  authorName,
  authorAvatar,
  createdAt,
  cover,
}) => {
  return (
    <div className="bg-[#ffffff0c] p-[1rem]">
      {cover && (
        <img
          src={cover}
          className="w-[30rem] h-[18rem] object-cover"
          alt="Cover Image"
        />
      )}
      <Chip label={category} />
      <h3 className="font-semibold text-2xl py-3">{title}</h3>
      <p className="text-[.9rem] text-justify">{description}</p>

      <footer className="flex mt-[1rem] justify-between">
        <div className="author flex items-center gap-[1rem]">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={authorAvatar}
            alt="Avatar"
          />
          <h6 className="font-semibold">{authorName}</h6>
          <span className="text-[.8rem]">{createdAt}</span>
        </div>
        <Link
          to={`/blog/${id}`}
          className="w-[50px] h-[40px] font-bold rounded-full bg-[#9f18dd] grid place-items-center"
        >
          →
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
