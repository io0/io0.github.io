import React from "react";
import { graphql, Link } from "gatsby";
import PostLink from "../components/PostLink";
const TitleLink = ({ post }) => (
  <div>
    <Link
      to={post.frontmatter.slug}
      style={{
        textDecoration: "none",
        paddingBottom: "1em",
        fontFamily: "EB Garamond",
      }}
    >
      {post.frontmatter.title}
      {/* <div className="post-date">{formattedDate(post.frontmatter.date)}</div> */}
      {/* <div className="post-time">{post.frontmatter.date.split(",")[1]}</div> */}
    </Link>
  </div>
);

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !edge.node.frontmatter.slug) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const NamedPosts = edges
    .filter((edge) => !!edge.node.frontmatter.slug) // You can filter your posts based on some criteria
    .map((edge) => <TitleLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <div className="blog-post">{NamedPosts}</div>
      {Posts}
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`;
