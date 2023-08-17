import React from "react"
import PropTypes from 'prop-types';
import TeamMember from "../../components/TeamMember"
import Container from "../../components/Container"
import CustomNavbar from "../../components/CustomNavbar"

const TeamPageTemplate = ({ title, members }) => (
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

TeamPageTemplate.propTypes = {
    title: PropTypes.string,
    members: PropTypes.array,
};

export default TeamPageTemplate;