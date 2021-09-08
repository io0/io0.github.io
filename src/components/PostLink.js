import React from "react";
import { Link } from "gatsby";

const formattedDate = (date) => {
  let str = date.split(",")[0];
  const [month, day, year] = str.split("/");
  // let day, month, year;

  // day = moment(date).format("DD");
  // month = moment(date).format("MM");
  // year = moment(date).format("YYYY");

  return <div>{`${year}-${month}-${day}`}</div>;
};

const PostLink = ({ post }) => (
  <div className="blog-post">
    <Link
      to={post.frontmatter.slug}
      style={{ textDecoration: "none", paddingBottom: "1em" }}
    >
      <div className="post-date">{formattedDate(post.frontmatter.date)}</div>
      {/* <div className="post-time">{post.frontmatter.date.split(",")[1]}</div> */}
    </Link>
    {/* <div>{post.excerpt}</div> */}
    {/* {post.html} */}

    <div className="preview" dangerouslySetInnerHTML={{ __html: post.html }} />
  </div>
);

export default PostLink;
