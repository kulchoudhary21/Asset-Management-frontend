import React from "react";
import Header from "./Header";
import bgImage from "../img/slide-2.jpg";
import "../css/about.css";
function About() {
  return (
    <div className="imp">
      <Header></Header>
      <div className="row">
        <div className="col-10 rr">
          <div className="box1">
            <div className="box11">
              <h2 style={{}}>Asset Management</h2>
            </div>
            <div className="m-2 box12">
              <p className="pp1">
                When describing the founders of ToyFight, they are portrayed as
                deconstructed action figures. This text gives the page a
                lighthearted and silly feel. They're even given fun names such
                as “Beardless wonder” and “Napoleon complex” to make readers
                laugh
              </p>
            </div>
            <div className="col">
              <div className="row box13">
                <div className="col-6">
                  <p>
                    Asset management is a systematic approach to the governance
                    and realization of all value for which a group or entity is
                    responsible. It may apply both to tangible assets physical
                    objects such as complex process or manufacturing plants,
                    infrastructure, buildings or equipmen and to intangible
                    assets such as intellectual property, goodwill or financial
                    assets. Asset management is a systematic process of
                    developing, operating, maintaining, upgrading, and disposing
                    of assets in the most cost-effective manner including all
                    costs, risks, and performance attributes
                  </p>
                </div>
              </div>
              <div className="col-6">
                {/* <div className="cont">qscbqdjlc</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
