import React from "react";
import Feature from "../../components/feature/Feature";
import "./GPT3.css";

const GPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="gpt3">
      <div className="gpt3_whatgpt3_feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3_whatgpt3_heading">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3_whatgpt3_container">
        <div>
          <Feature
            title="ChatBots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div>
          {" "}
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
          />
        </div>

        <div>
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments "
          />
        </div>
      </div>
    </div>
  );
};

export default GPT3;
