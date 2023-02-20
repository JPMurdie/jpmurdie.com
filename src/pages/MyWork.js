import React from "react";

// PageStyles
import { PageContainer, SIX_T1_B1N4 } from "../components/PageStyles";

const MyWork = () => {
  return (
    <PageContainer>
      <SIX_T1_B1N4>
        <div className="box box1">
          <h2 className = "logo">My Work</h2>
        </div>
        <div className="box box2">
          <div className="box2_1">
            <h2>Project 1</h2>
          </div>
          <div className="box2_2">
            <h2>Project 2</h2>
          </div>
          <div className="box2_3">
            <h2>Project 3</h2>
          </div>
          <div className="box2_4">
            <h2>Project 4</h2>
          </div>
        </div>
      </SIX_T1_B1N4>
    </PageContainer>
  );
};

export default MyWork;
