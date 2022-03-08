import React from "react";
import "./PageTwo.css";

function PageTwo(props) {
  return (
    <div className="pagetwo_cont">
      <h1 className="p2_title">What makes us different?</h1>
      <p className="p2_subtitle">
        Reimagining and <br></br>rewiring self-care
      </p>

      <p>You care about conscious consumption, and so do we.</p>
      <p>
        When it comes to your health, “good enough” is not good enough. We’re
        here to flip the script on that narrative because you deserve the best
      </p>
      <p>We collaborate with researchers and doctors to</p>
      <ul>
        <li>
          Help you get granular about your health and self-care with
          personalized insights, and
        </li>
        <li>
          Equip you with simple, sustainable products that get the job done
        </li>
      </ul>
      <p>No to-the-moon-and-back claims in this neck of the woods.</p>
      <p className="last_line">
        We’re just solving real problems for real people here.
      </p>
    </div>
  );
}

export default PageTwo;
