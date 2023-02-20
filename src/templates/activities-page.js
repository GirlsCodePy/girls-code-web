import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { ActivitiesPageTemplate } from './templates-components';
import { useTranslatedData } from '../utils';

const ActivitiesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, subtitle, workshops, courses, mentoring } =
    useTranslatedData(frontmatter);
  return (
    <Layout>
      <ActivitiesPageTemplate
        title={title}
        subtitle={subtitle}
        workshops={workshops}
        courses={courses}
        mentoring={mentoring}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "activities-page" } }) {
      frontmatter {
        title_es
        title_en
        subtitle_es
        subtitle_en
        workshops {
          image
          imageTitle_es
          name_es
          description_es
          imageTitle_en
          name_en
          description_en
        }
        courses {
          image
          imageTitle_es
          name_es
          description_es
          imageTitle_en
          name_en
          description_en
        }
        mentoring {
          image
          imageTitle_es
          name_es
          description_es
          imageTitle_en
          name_en
          description_en
        }
      }
    }
  }
`;

export default ActivitiesPage;
