import React from "react";
import PropTypes from "prop-types";
import {graphql } from "gatsby";

import Layout from "../components/Layout";
import FlowerLogo from "../img/flower.svg";
import WriteUs from "../img/writeUs.svg";
import Encourage from "../components/Encourage";
import SplitBanner from "../components/SplitBanner";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Partner from "../components/Partner";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {useTranslatedData} from "../utils";

export const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
}) => (
  <div>
    <ToastContainer/>
    <SplitBanner />
    <WhoWeAre
      title={mainpitch.title}
      image={mainpitch.logo}
      description={mainpitch.description}
      link={mainpitch.link}
      label={mainpitch.label}
    />
    <WhatWeDo />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="content">
                <Partner />
                <Encourage
                  image={FlowerLogo}
                  title="wantCollaborate"
                  subtitle="supportUs"
                  buttonLabel="donate"
                  buttonLink="https://www.patreon.com/"
                />
                <Encourage
                  image={WriteUs}
                  title="bePart"
                  subtitle="sendMessage"
                  buttonLabel="writeUs"
                  buttonLink="/contact"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const mainpitch = useTranslatedData(frontmatter.mainpitch)
  console.log(mainpitch);
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
      }
    }
  }
`;
