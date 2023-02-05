import React from "react";
import styled from "styled-components";
//Images
import lensaImage from "../img/about-img.jpg";

const About = () => {
  return (
    <AboutContainer>
      <div className="about-container box1">
        <img src={lensaImage} alt="" />
      </div>
      <div className="about-container box2">
        <div className="about-title">
          <h4 className="about-me">About Me</h4>
        </div>
        <div className="about-list">
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="about-container box3"></div>
    </AboutContainer>
  );
};

//Standard Style Component
const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  margin-top: 2rem;
  padding: 0 1rem;
  .about-container {
    height: 50px;
    display: flex;
    padding: 1rem;
  }
  .box1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 30%;
    height: 50%;
    img {
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
    }
  }
  .box2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    min-height: 50%;
    .about-me {
      font-family: "Lobster", cursive;
      font-size: 3rem;
      color: var(--logo-text);
      -webkit-text-stroke: 1px var(--textColor);
    }
    .about-title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20%;
      width: 100%;
      h3 {
        position: relative;
        color: var(--textColor);
      }
    }
    .about-list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-height: 80%;
      width: 100%;
      div {
        border: 1px solid var(--textColor);
        position: relative;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-right: 10px;
        flex-wrap: wrap;
        width: 45%;
        color: var(--textColor);
        max-height: 25%;
        h5 {
          padding: 0.5rem;
          background-color: var(--feature-background);
          max-height: 50%;
          margin: 0 0 0.1rem 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        p {
          font-size: 1rem;
          max-height: 50%;
          margin: 0;
          padding: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: var(--textColor);
        }
      }
    }
  }
  .box3 {
    width: 100%;
    height: 50%;
  }
  //Reponsive Elements
  @media only screen and (max-width: 1023px) {
    min-height: 90vh;
    overflow-y: scroll;

    .box1 {
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 30vh;
      img {
        width: auto;
        height: auto;
        overflow: hidden;
        object-fit: cover;
      }
    }
    .box2 {
      min-height: 100%;
      align-items: center;
      justify-content: center;
      width: 100%;
      .about-me {
        font-size: 2rem;
      }
      .about-title {
        justify-content: center;
        align-items: center;
        height: auto;
      }
      .about-list {
        justify-content: center;
        height: auto;
        div {
          margin-right: 0;
          margin-bottom: 10px;
          flex-direction: column;
          width: 100%;
          p {
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;

export default About;
