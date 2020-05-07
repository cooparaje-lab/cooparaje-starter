// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card/card"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allContentfulBlog
  const categoryHeader = `${totalCount} entrada${
    totalCount === 1 ? "" : "s"
  } con la categoría "${category}"`
  return (
    <Layout>
      <SEO title="Categorias" />
      <CategoriesContainer>
        <Header>
          <h1>{categoryHeader}</h1>
          <Link to="/categorias">Mostrar todas las categorias</Link>
        </Header>
        <CardContainer>
          {edges.map(({ node }) => {
            const { slug } = node

            return (
              <Item key={slug}>
                <Fade duration={1500}>
                  <Card card={node} />
                </Fade>
              </Item>
            )
          })}
        </CardContainer>
      </CategoriesContainer>
    </Layout>
  )
}

const CategoriesContainer = styled.div`
  ${tw`max-w-6xl min-h-screen px-2 pt-1 m-auto`}

  h1 {
    ${tw`font-mono text-4xl`}
  }
`

const Header = styled.header`
  ${tw`max-w-6xl pt-12 m-auto`}

  h1 {
    ${tw`font-mono text-4xl`}
  }
`

const CardContainer = styled.div`
  ${tw`flex flex-wrap justify-start max-w-6xl px-2 pt-6 m-auto`}
  min-height: 100vh;
`

const Item = styled.div`
  ${tw`px-3 my-3 overflow-hidden text-center lg:w-1/3 `}
`

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allContentfulBlog(
      limit: 2000
      sort: { fields: [id], order: DESC }
      filter: { category: { in: [$category] } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          slug
          category
          excerpt {
            excerpt
          }
          tags
          featuredImage {
            fixed(width: 400, height: 250) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
            fluid(maxWidth: 1500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
