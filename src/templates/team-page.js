import React from "react"
import Layout from "../components/Layout"
import { TeamPageTemplate } from "./templates-components";
import { graphql } from "gatsby"
import { useTranslatedData } from '../utils';

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {title , members} = useTranslatedData(frontmatter)

  return (
    <Layout>
      <TeamPageTemplate
        title={title}
        members={members}
      />
    </Layout>
  )
}

export default TeamPage

export const teamPageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
        title_es
        title_en
        members {
          name
          position_es
          position_en
          image {
            childImageSharp {
              gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
        }
      }
    }
  }
`
