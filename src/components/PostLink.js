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
  <div>
    <Link to={post.frontmatter.slug}>
      {formattedDate(post.frontmatter.date)}
    </Link>
    {/* <div>{post.excerpt}</div> */}
    {/* {post.html} */}

    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </div>
);

export default PostLink;
