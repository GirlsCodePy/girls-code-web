import React from "react";
import PropTypes from 'prop-types';
import Container from "../../components/Container";
import Carousel from "../../components/Carousel";
import CustomNavbar from "../../components/CustomNavbar"
import Encourage from '../../components/Encourage';
import WriteUs from '../../img/writeUs.svg';

const ActivitiesPageTemplate = ({ title, subtitle, workshops, courses, mentoring }) => {
  return (
    <>
      <Container>
        <CustomNavbar/> 
        <div className="columns is-multiline">
          <div className="column is-12">
            <h1 className="gc-page-title">{title}</h1>
          </div>
          <div className="column is-4">
            <h4 className="gc-page-subtitle">{subtitle}</h4>
          </div>
        </div>
      </Container>
      <Carousel 
        className="clip-hero-workshops" 
        carouselContainerClassName="carousel-container-workshops" 
        dotClassName="carousel-dot-workshops"
        length={workshops.length}>
        {workshops.map((item) => {
          return (
            <div className="carousel-content">
              <div className="carousel-img">
                <img src={item.image} alt={item.name} />
                <div className="separator-2" />
                <p className="gc-yellow">{item.imageTitle}</p>
              </div>
              <div className="carousel-text">
                <h1 className="gc-subtitle gc-white">{item.name}</h1>
                <div className="separator" />
                <p className="gc-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      <Carousel
        right
        className="clip-hero-courses" 
        carouselContainerClassName="carousel-container-courses"
        dotClassName="carousel-dot-courses" 
        length={courses.length}>
        {courses.map((item) => {
          return (
            <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="gc-subtitle gc-white">{item.name}</h1>
                <div className="separator" />
                <p className="gc-text">{item.description}</p>
              </div>
              <div className="carousel-img">
                <img src={item.image} alt={item.name} />
                <div className="separator-2" />
                <p className="gc-yellow right">{item.imageTitle}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    <Carousel 
      className="clip-hero-mentoring"  
      carouselContainerClassName="carousel-container-mentoring"
      dotClassName="carousel-dot-mentoring"
      length={mentoring.length}>
        {mentoring.map((item) => {
          return (
            <div className="carousel-content">
              <div className="carousel-img">
                <img src={item.image} alt={item.name} />
                <div className="separator-2" />
                <p className="gc-purple-invert">{item.imageTitle}</p>
              </div>
              <div className="carousel-text">
                <h1 className="gc-subtitle gc-purple">{item.name}</h1>
                <div className="separator" />
                <p className="gc-text gc-purple">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="clip-encourage">
        <div className="encourage-container">
          <Encourage
            image={WriteUs}
            title="bePart"
            subtitle="sendMessage"
            buttonLabel="writeUs"
            buttonLink="/contact"
          />
        </div>
      </div>
    </>
  );
};

ActivitiesPageTemplate.propTypes = { 
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired, 
    workshops:PropTypes.array.isRequired,
    courses:PropTypes.array.isRequired, 
    mentoring:PropTypes.array.isRequired,
};

export default ActivitiesPageTemplate;
