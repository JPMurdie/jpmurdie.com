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
            <h5>Currently Studying</h5>
            <p>React Course from DevEd - Youtuber</p>
          </div>
          <div>
            <h5>Recent Non-Tech Qualification</h5>
            <p>Prince 2 Agile Practitioner</p>
          </div>
          <div>
            <h5>Recent Tech Qualification</h5>
            <p>Fullstack Diploma from the Code Institute</p>
          </div>
          <div>
            <h5>Current Role</h5>
            <p>Business Insight Analyst</p>
          </div>
          <div>
            <h5>Favourite Author</h5>
            <p>Brent Weeks</p>
          </div>
          <div>
            <h5>Favourite Movie</h5>
            <p>Lucky Number Slevin</p>
          </div>
          <div>
            <h5>Favourite Company</h5>
            <p>Neuralink</p>
          </div>
          <div>
            <h5>Chess.com Rating</h5>
            <p>625</p>
          </div>
        </div>
      </div>
      <div className="about-container box3">
        <div className="about-title">
          <h4 className="about-me">My Skills</h4>
        </div>
      </div>
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
      border: 5px solid var(--textColor);
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
      height: auto;
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
      width: 100%;
      height: 20%;
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
          color: var(--logo-text);
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
          font-size: 0.8rem;
          max-height: 50%;
          margin: 0.2rem 0 0.2rem 0;
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
        max-height: 8%;
        justify-content: center;
        align-items: center;
        height: auto;
        margin-bottom: 0.5rem;
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
