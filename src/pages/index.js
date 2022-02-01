import React from "react";
import { graphql, Link } from "gatsby";
import PostLink from "../components/PostLink";
import moment from "moment";
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

const getDate = (datestr) => {
  return moment(datestr, "YYYY-MM-DD HH:mm");
};
const formattedDate = (datestr) => {
  const d = getDate(datestr).format("YYYY-MM-DD");
  // const date = new Date(datestr);
  // let day, month, year;
  // day = moment(date).format("DD");
  // month = moment(date).format("MM");
  // year = moment(date).format("YYYY");

  return <div>{d}</div>;
};

const DailyPosts = ({ post }) => {
  const blocks = post.html.split("<hr>\n");
  return (
    <>
      {blocks
        .sort((a, b) => {
          const da = getDate(a.split(/\n/)[0].replace(/(<([^>]+)>)/gi, ""));
          const db = getDate(b.split(/\n/)[0].replace(/(<([^>]+)>)/gi, ""));
          return db - da;
        })
        .map((block) => {
          const lines = block.split(/\n/);
          const date = lines[0].replace(/(<([^>]+)>)/gi, "");
          const body = lines.slice(1, lines.length).join("\r\n");
          return (
            <div className="blog-post">
              <Link style={{ textDecoration: "none", paddingBottom: "1em" }}>
                <div className="post-date">{formattedDate(date)}</div>
              </Link>
              <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          );
        })}
    </>
  );
};

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(
      (edge) =>
        !edge.node.frontmatter.slug &&
        !edge.node.frontmatter.tags &&
        edge.node.frontmatter.date
    ) // You can filter your posts based on some criteria
    .sort(
      (a, b) =>
        Date.parse(b.node.frontmatter.date) -
        Date.parse(a.node.frontmatter.date)
    )
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  const Daily = edges
    .filter((edge) => edge.node.frontmatter?.tags == "daily") // You can filter your posts based on some criteria
    // .sort((a, b) => Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date))
    .map((edge) => <DailyPosts key={edge.node.id} post={edge.node} />);

  const NamedPosts = edges
    .filter(
      (edge) => !!edge.node.frontmatter.slug && !edge.node.frontmatter.tags
    ) // You can filter your posts based on some criteria
    .map((edge) => <TitleLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      {/* <div className="blog-post">{NamedPosts}</div> */}
      {Daily}
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
            tags
          }
        }
      }
    }
  }
`;
