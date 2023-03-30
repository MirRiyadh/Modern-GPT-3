import React from "react";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
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
          <Article
            blog_image={blog1}
            date="1 April, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gtp3_blog_container_gropuB">
          <Article
            blog_image={blog2}
            date="1 April, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            blog_image={blog3}
            date="1 April, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            blog_image={blog4}
            date="1 April, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            blog_image={blog5}
            date="1 April, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
