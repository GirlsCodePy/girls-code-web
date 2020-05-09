import React from "react"
import Layout from "../components/Layout"
import TeamMember from "../components/TeamMember"

const TeamPageTemplate = () => {
  const team = new Array(10).fill(0)

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns is-multiline">
              <div className="column is-12">
                <h1 className="principal-title-purple">Equipo</h1>
              </div>
              {team.map(teamMember => (
                <div className="column is-3">
                  <TeamMember
                    name="Gaby Gaona"
                    position="Directora y Co-founder"
                    imageSrc="img/blog-index.jpg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TeamPage = () => (
  <Layout>
    <TeamPageTemplate />
  </Layout>
)

export default TeamPage
