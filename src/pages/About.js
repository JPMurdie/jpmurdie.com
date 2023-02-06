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
        <div className="skills">
          <li>
            <h4>HTML5</h4>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h4>CSS3 / Bootstrap</h4>
            <span className="bar">
              <span className="css3"></span>
            </span>
          </li>
          <li>
            <h4>JS</h4>
            <span className="bar">
              <span className="js"></span>
            </span>
          </li>
          <li>
            <h4>React</h4>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
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
    .skills {
      width: 100%;
      margin: 60px auto;
      color: var(--textColor);
      padding: 20px;
      li {
        width: 50%;
        list-style-type: none;
        margin: 20px 0px;
        padding: 10px;
      }
      .bar {
        background: #353b48;
        display: block;
        height: 20px;
        border: 1px solid black;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 1px 3px var(--feature-background),
          0 1px 2px var(--feature-background);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        :hover{
          box-shadow: 0 14px 28px var(--feature-background),
          0 1px 2px var(--feature-background);
        }
        span{
          height: 20px;
          float: left;
          background: linear-gradient(135deg, rgba(236,0,140,1)0%, rgba(252,103,103,1)100%);
        }
        .html{
          width: 90%;
          animation: html 3s;
        }
        .css3{
          width: 90%;
          animation: css 3s;
        }
        .js {
          width: 80%;
          animation: js 3s;
        }
        .react{
          width: 90%;
          animation: react 3s;
        }
    }
    h4 {
      margin: 5px;
      color: var(--textColor);
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
      }
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
