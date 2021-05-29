import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from 'react-helmet'
import { headData } from '../mock/data'
import Layout from '../components/Layout'

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
        <Helmet title={`Blog | ${headData.title}`} />
        <div className="container">
            <h1>My blog posts</h1>
            <br></br>
            {posts.map(post => (
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
    </ Layout>
  )
}

//  querying for all Markdown files using allMarkdownRemark from gatsby-transformer-remark

// gatsby-source-filesystem “scans” the directories we tell it to & creates nodes for each file in those directories. Then gatsby-markdown-remark comes, parses data inside the nodes, and adds extra fields to those node objects.

// Gatsby then concludes and comes up with a GraphQL schema for those nodes, based on their content.

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
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
`