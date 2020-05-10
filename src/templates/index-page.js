import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FlowerLogo from "../img/flower.svg";
import WriteUs from "../img/writeUs.svg";
import "../i18n";
import Encourage from "../components/Encourage";
import SplitBanner from "../components/SplitBanner";
import {useTranslatedData} from "../utils";
import WhoWeAre from "../components/WhoWeAre";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <SplitBanner />
    <WhoWeAre
      title={mainpitch.title}
      image={mainpitch.logo}
      description={mainpitch.description}
      link={mainpitch.link}
      label={mainpitch.label}
    />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
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
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                {/* <Features gridItems={intro.blurbs} /> */}
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  {/* <BlogRoll /> */}
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
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
        heading
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
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
