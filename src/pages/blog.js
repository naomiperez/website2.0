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
            <h1>My blog (varying content)</h1>
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

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
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