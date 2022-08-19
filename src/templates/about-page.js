import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslatedData } from '../utils';
import { AboutPageTemplate } from './templates-components';

const AboutPage = ({ data }) => {
  const { markdownRemark } = data;
  const frontmatter = useTranslatedData(markdownRemark.frontmatter);

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
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

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
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
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
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
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
                gatsbyImageData(width: 70, quality: 92, layout: CONSTRAINED)
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
      }
    }
  }
`;
