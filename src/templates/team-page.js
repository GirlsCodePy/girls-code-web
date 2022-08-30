import React from "react"
import Layout from "../components/Layout"
import TeamMember from "../components/TeamMember"
import Container from "../components/Container"
import CustomNavbar from "../components/CustomNavbar"
import { graphql } from "gatsby"
import { useTranslatedData } from '../utils';

export const TeamPageTemplate = ({ title, members }) => (
  <Container>
    <CustomNavbar/> 
    
    <div className="columns is-multiline">
      <div className="column is-12">
        <h1 className="principal-title-purple">{title}</h1>
      </div>
      {members.map(({ name, position, image }) => (
        <div className="column is-3">
          <TeamMember name={name} position={position} imageSrc={image} />
        </div>
      ))}
    </div>
  </Container>
)

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
          image
        }
      }
    }
  }
`
