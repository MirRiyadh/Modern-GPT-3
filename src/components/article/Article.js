import React from "react";
import "./article.css";

const Article = ({ blog_image, date, text }) => {
  return (
    <div className="gtp3_blog_container_article">
      <div className="gtp3_blog_container_article-image">
        <img src={blog_image} alt="blog image" />
      </div>
      <div className="gpt3_blog_container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
