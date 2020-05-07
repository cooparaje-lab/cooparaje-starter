import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { AiTwotoneTag } from "react-icons/ai"

const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlog.group

  return (
    <Layout>
      <SEO title="Etiquetas" />

      <Container>
        <h1 className="font-mono text-4xl">Etiquetas</h1>

        {allTags.map(tag => (
          <Link
            key={tag.fieldValue}
            to={`/etiquetas/${kebabCase(tag.fieldValue)}/`}
          >
            <AiTwotoneTag css={tw`inline-block mr-2`} />
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`max-w-6xl min-h-screen px-2 pt-24 m-auto`}
  h1 {
    ${tw`font-mono text-4xl text-gray-900 `}
  }
  a {
    ${tw`inline-block px-5 py-2 my-2 mr-2 font-mono text-lg font-bold text-white bg-indigo-700 border-b-4 border-indigo-800 rounded hover:bg-indigo-800 hover:border-indigo-900`}
  }
`

export default TagsPage

export const pageQuery = graphql`
  query {
    allContentfulBlog(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
