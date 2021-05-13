import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Suggested from '../components/Suggested'
import SEO from '../components/SEO'
import Comment from '../components/Comment'
import Blurb from '../components/Blurb'
import config from '../utils/config'
import { slugify } from '../utils/helpers'

export default function PostTemplate({ data, pageContext }) {
  const { previous, next } = pageContext
  const { tags, thumbnail, title, description, date } = post.frontmatter
  const commentBox = React.createRef()

  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme =
      typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
        ? 'github-dark'
        : 'github-light'
  }, []) // eslint-disable-line

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <div className="container">
        <article>
          <header className="article-header">
            <div className="container">
              <div className="thumb">
                <div>
                  <h1>{title}</h1>
                  <div className="post-meta">
                    <div>
                      By <Link to="/me">Tania Rascia</Link> on{' '}
                      <time>{date}</time>
                    </div>
                  </div>
                </div>
                {thumbnail && (
                  <Img
                    fixed={thumbnail.childImageSharp.fixed}
                    className="post-thumbnail"
                  />
                )}
              </div>
            </div>
            {description && <p className="description">{description}</p>}
          </header>
          <div
            className="article-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
      <Blurb title="About the author">
        <p>
          Hey, I'm <Link to="/me">Tania</Link>, a software engineer, writer, and
          open-sourceror. I publish articles and tutorials about modern
          JavaScript, design, and programming.
        </p>
        <p>
          <a
            className="button"
            href="https://taniarascia.substack.com"
            target="_blank"
            rel="noreferrer"
          >
            Get the newsletter
          </a>
          <a
            className="button"
            href="https://ko-fi.com/taniarascia"
            target="_blank"
            rel="noreferrer"
          >
            Buy me a coffee
          </a>
        </p>
      </Blurb>
      <div className="container">
        <div id="comments">
          <h2>Comments</h2>
          <Comment commentBox={commentBox} />
        </div>

        <Suggested previous={previous} next={next} />
      </div>
    </Layout>
  )
}