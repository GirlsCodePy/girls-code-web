import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import 'react-toastify/dist/ReactToastify.css';

import { useTranslatedData } from '../utils';
import { IndexPageTemplate } from './templates-components';

const IndexPage = ({ entry, data }) => {
  const { frontmatter } = data.markdownRemark;
  const mainpitch = useTranslatedData(frontmatter.mainpitch);
  const testimonies = useTranslatedData(frontmatter.testimonies);

  const testimoniesEntries = Object.keys(testimonies).reduce(
    (prev, testimonieKey) => {
      return [...prev, testimonies[testimonieKey]];
    },
    []
  );

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        testimonies={testimoniesEntries}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        mainpitch {
          title_en
          title_es
          description_en
          description_es
          logo
          link
          label
        }
        description
        testimonies {
          author_es
          author_en
          quote_es
          quote_en
        }
      }
    }
  }
`;
