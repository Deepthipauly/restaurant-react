import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Review({ reviewList }) {
  return (
    <div>
      <Accordion defaultActiveKey="0" className="mt-3 mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>
              <b>Reviews</b>
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            {reviewList.map((i) => (

              <>
                  <div>
                    <h3>{i.name}</h3>
                    <p>{i.date}</p>
                    <h4>{i.rating}</h4>
                    <p>{i.comments}</p>
                  </div>
                  <hr />
              </>

            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Review;
