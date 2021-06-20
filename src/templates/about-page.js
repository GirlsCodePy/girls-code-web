import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from "../components/Container";
import ShowMore from "../components/ShowMore";
import {useTranslatedData} from "../utils";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import CustomNavbar from "../components/CustomNavbar"

export const AboutPageTemplate = ({ title, vision, mission, subtitle, values }) => {
  return (
    <div className="is-yellow-cream">
      <section className="section section--gradient clip-about-values">
          <Container>
            <CustomNavbar/> 
            <div className="columns is-multiline">
              <div className="column is-12">
                <h1 className="principal-title-purple mb-6">{title}</h1>
              </div>
            </div>
            <div className="columns is-flex-direction-column margin-circled-area">
              <div className="column is-6 is-align-self-flex-start">
                <div className="is-justify-content-flex-start mb-5">
                  <div className="mb-5">
                    <PreviewCompatibleImage imageInfo={vision.imageInfo} />
                  </div>
                  <h2 className="gc-subtitle mb-3">{vision.title}</h2>
                  <p className="title-content" >{vision.description}</p>
                </div>
              </div>
              <div className="column is-6 is-align-self-flex-end">
                <div className="has-text-right">
                  <div className="mb-5">
                    <PreviewCompatibleImage imageInfo={mission.imageInfo} />
                  </div>
                  <h4 className="gc-subtitle mb-3">{mission.title}</h4>
                  <p className="title-content mb-5" >{mission.description}</p>
                  <ShowMore
                      link={mission.showMore.link}
                      label={mission.showMore.label}
                  />
                </div>
              </div>
            </div>
          </Container>
      </section>
      <section className="section section--gradient">
        <Container>
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1 className="principal-title-purple mb-6">{subtitle}</h1>
            </div>
          </div>
          <div className="columns is-flex-direction-row is-multiline is-mobile">
            {values.map((item) => {
              const {image, alt} = item.imageInfo;
              return (
                <div className="column is-4">
                  <div className="is-fixed-column">
                    <div className="mb-5">
                      <img src={image.childImageSharp ? image.childImageSharp.fluid.src : image} alt={alt} />
                    </div>
                    <h2 className="gc-subtitle mb-3">{item.title}</h2>
                    <p className="title-content-purple mb-5" >{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  const frontmatter = useTranslatedData(markdownRemark.frontmatter)

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        vision={frontmatter.vision}
        mission={frontmatter.mission}
        subtitle={frontmatter.subtitle}
        values={frontmatter.values}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title_en
        title_es
        vision {
          imageInfo {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
          title_en
          title_es
          description_en
          description_es
        }
        mission {
          imageInfo {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
          title_en
          title_es
          description_en
          description_es
          showMore {
            label_en
            label_es
            link
          }
        }
        subtitle_en
        subtitle_es
        values {
          imageInfo {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 70, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title_en
          title_es
          description_en
          description_es
        }
      }
    }
  }
`;
