import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
const CategoriesPage = ({ data }) => {
  const allCategories = data.allContentfulBlog.group

  return (
    <Layout>
      <SEO title="Categorias" />

      <Container>
        <h1>Categorias</h1>
        <div>
          {allCategories.map(tag => (
            <Link
              to={`/categoria/${kebabCase(tag.fieldValue)}/`}
              key={tag.fieldValue}
              css={tw`px-3 pt-1 my-3 mr-2 font-mono text-base font-thin leading-snug truncate bg-indigo-100 rounded hover:bg-indigo-200 hover:text-indigo-500`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`max-w-6xl min-h-screen px-2 pt-12 m-auto`}
  h1 {
    ${tw`mb-6 font-mono text-4xl`}
  }
`

export default CategoriesPage

export const pageQuery = graphql`
  query {
    allContentfulBlog(limit: 2000) {
      group(field: category) {
        fieldValue
        totalCount
      }
    }
  }
`
