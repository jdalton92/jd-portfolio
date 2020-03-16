import React from "react";

const Skillset = () => {
  return (
    <>
      <div className="about-block">
        <h4 className="about-subheader">SKILL SET</h4>
        <h5 className="about-subheader-2">
          1 star (beginner) to 5 star (expert)
        </h5>
        <div className="about-block about-table">
          <table className="about-table-left">
            <tbody>
              <tr>
                <td>HTML</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>jQuery</td>
                <td className="about-stars">★★☆☆☆</td>
              </tr>
              <tr>
                <td>React</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>Node</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>Python (Flask)</td>
                <td className="about-stars">★★☆☆☆</td>
              </tr>
              <tr>
                <td>Python (Django)</td>
                <td className="about-stars">★★☆☆☆</td>
              </tr>
            </tbody>
          </table>
          <table className="about-table-right">
            <tbody>
              <tr>
                <td>C</td>
                <td className="about-stars">★☆☆☆☆</td>
              </tr>
              <tr>
                <td>C++</td>
                <td className="about-stars">★☆☆☆☆</td>
              </tr>
              <tr>
                <td>VBA</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>SQL</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td className="about-stars">★★★☆☆</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Skillset;
