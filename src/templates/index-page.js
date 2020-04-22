import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ToolsLogo from "../components/ToolsLogo";
import GirlsCodeLogo from "../components/GirlsCodeLogo";

const VERTICAL_OFFSET = 63;
const NAV_ELEMENTS_HEIGHT = 50;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "linear-gradient(132.97deg, #E42EE4 0.19%, #5D0F85 100%)",
          position: "relative",
          bottom: VERTICAL_OFFSET,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "90px",
            paddingRight: "90px",
            position: "relative",
            top: `${VERTICAL_OFFSET / 2}px`,
          }}
        >
          <div
            style={{
              height: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: `${NAV_ELEMENTS_HEIGHT + VERTICAL_OFFSET / 2}px`,
                alignSelf: "flex-start",
              }}
            >
              <GirlsCodeLogo />
            </div>
            <h1
              style={{
                fontFamily: "Geomanist",
                fontStyle: "normal",
                fontWeight: 900,
                fontSize: 60,
                color: "#FFFFFF",
                alignSelf: "flex-start",
              }}
            >
              Nosotras creemos
            </h1>
            <h1
              style={{
                fontFamily: "Geomanist",
                fontStyle: "normal",
                fontWeight: 900,
                fontSize: 60,
                color: "rgb(221, 221, 55)",
                alignSelf: "flex-start",
              }}
            >
              Ellas hacen
            </h1>
          </div>
        </div>
        <div
          style={{
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "0px 90px 100vh 0",
            borderColor: "transparent rgb(221, 221, 55)",
            position: "absolute",
            right: 0,
          }}
        ></div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          background: "#DDDD37",
          boxShadow: "0px 1px 9px rgba(169, 169, 169, 0.5)",
          borderBottomLeftRadius: "63px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${NAV_ELEMENTS_HEIGHT}px`,
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3
            style={{
              marginRight: "60px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Sobre
          </h3>
          <h3
            style={{
              marginRight: "60px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Programas
          </h3>
          <h3
            style={{
              marginRight: "60px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Tienda
          </h3>
          <h3
            style={{
              marginRight: "60px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Contacto
          </h3>
        </div>
        <div style={{ paddingLeft: "10px", paddingRight: "90px" }}>
          <ToolsLogo />
        </div>
      </div>
    </div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
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
                  <BlogRoll />
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
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
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
        subheading
        mainpitch {
          title
          description
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
