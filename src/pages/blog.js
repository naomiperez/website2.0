import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { headData } from '../mock/data';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Blurb from '../components/Blurb';

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <Layout>
      <SEO title="Naomi's Blog" description="Naomi Perez's Blog Posts" />
      <Blurb title="My Blog Posts"></Blurb>
      <div className="container">
        <br></br>
          {posts.map((post) => (
            <article key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <small>
                {post.frontmatter.author}, {post.frontmatter.date}
              </small>
              <p>{post.excerpt}</p>
            </article>
          ))}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
