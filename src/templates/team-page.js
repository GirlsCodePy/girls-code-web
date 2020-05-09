import React from "react"
import Layout from "../components/Layout"
import TeamMember from "../components/TeamMember"

const TeamPageTemplate = ({ title, members }) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
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
        </div>
      </div>
    </div>
  </section>
)

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        members={frontmatter.members}
      />
    </Layout>
  )
}

export default TeamPage

export const teamPageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
        title
        members {
          name
          position
          image
        }
      }
    }
  }
`
