import React from "react";
import { Article } from "../../components";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="gtp3_blog section_padding" id="blog">
      <div className="gtp3_blog_heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gtp3_blog_container">
        <div className="gtp3_blog_container_gropuA">
          <Article />
        </div>
        <div className="gtp3_blog_container_gropuB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
};

export default Blog;
