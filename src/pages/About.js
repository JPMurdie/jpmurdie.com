import React from "react";
import styled from "styled-components";
//Images
import lensaImage from "../img/about-img.jpg";
//Chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const About = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Poll",
        data: [80, 20],
        backgroundColor: ["#5b8fb9", "#03001C"],
        borderColor: ["#b6eada", "#03001C"],
      },
    ],
  };

  const options = {};
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "#5b8fb9";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "HTML5",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <AboutContainer>
      <AboutContainerTop>
        <AboutImg>
          <img src={lensaImage} alt="" />
        </AboutImg>
        <AboutText>
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            repellat placeat dicta consectetur esse quod saepe accusamus rerum,
            at ex, cupiditate ducimus repudiandae id rem obcaecati quibusdam
            soluta, quidem maiores doloribus nam. Odio blanditiis ex voluptate
            ratione consequatur impedit doloremque laudantium eos iure quo! Quod
            quis culpa molestiae. Quaerat, mollitia.
          </p>
        </AboutText>
      </AboutContainerTop>
      <AboutContainerBottom>
        <SkillsText>
          <h3>My Skills:</h3>
        </SkillsText>

        <DoughnutContainer>
          <div>
            <Doughnut
              data={data}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
          <div>
            <Doughnut
              data={data}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
          <div>
            <Doughnut
              data={data}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
          <div>
            <Doughnut
              data={data}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
          <div>
            <Doughnut
              data={data}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
        </DoughnutContainer>
      </AboutContainerBottom>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 80vw;
  margin: auto;
`;

const AboutContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
`;

const AboutContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
`;

const AboutText = styled.div`
  position: relative;
  min-width: 60%;
  height: 100%;
  margin-top: 2rem;
  margin-left: 2rem;
  h3 {
    color: #b6eada;
  }
  p {
    color: #b6eada;
  }
`;

const AboutImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40%;
  margin-top: 2rem;
  padding: 2rem;
  img {
    border: solid 2px #b6eada;
    border-radius: 50%;
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`;

const SkillsText = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 10%;
  h3 {
    color: #b6eada;
  }
  p {
    color: #b6eada;
  }
`;

const DoughnutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default About;
