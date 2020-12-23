import { graphql } from "gatsby";
import React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

const ActivitiesPageTemplate = ({ title, subtitle, activities }) => {
  return (
    <>
      <Container>
        <div className="columns is-multiline">
          <div className="column is-12">
            <h1 className="principal-title-purple">{title}</h1>
          </div>
          <div className="column is-4">
            <h4 className="gc-pink">{subtitle}</h4>
          </div>
        </div>
      </Container>
      <Carousel className="clip-hero" length={activities.length}>
        {activities.map((item) => {
          return (
            <div className="carousel-content">
              <div className="carousel-img">
                <img src={item.image} alt={item.name} />
                <div className="separator-2" />
                <p className="gc-yellow">{item.imageTitle}</p>
              </div>
              <div className="carousel-text">
                <h1 className="gc-subtitle-small gc-white">{item.name}</h1>
                <div className="separator" />
                <p className="gc-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

const ActivitiesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ActivitiesPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        activities={frontmatter.activities}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "activities-page" } }) {
      frontmatter {
        title
        subtitle
        activities {
          image
          imageTitle
          name
          description
        }
      }
    }
  }
`;

export default ActivitiesPage;
