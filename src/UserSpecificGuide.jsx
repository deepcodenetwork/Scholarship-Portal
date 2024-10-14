import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "./UserSpecificGuide.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserSpecificGuide = ({
  name,
  authority,
  eligibilityCriteria,
  benefits,
  documents,
}) => {
  return (
    <div className="mt-5 bg-blue-50">
      <div className=" border rounded d-flex p-3">
        <div className="flex-grow-1 text-center text-white me-3 p-3">
          <img
            src="./scholar.webp"
            alt="Scholarship IMG"
            className="mb-2"
            style={{ width: "100%", maxWidth: "600px" }}
          />
          <h2 className="bg-primary text-white p-2">{name}</h2>
          <h4 className="text-muted h6">by {authority}</h4>
        </div>
        <div className="flex-grow-1">
          <h5 className="bg-primary text-white highlight">Guidelines</h5>

          <h6 className="text-alert fw-bold">Benefits</h6>
          <ListGroup>
            {benefits.map((benefit, index) => (
              <ListGroup.Item key={index} className="list-item">
                {benefit}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <hr />

          <h6 className="text-alert fw-bold">Eligibility Criteria</h6>
          <ListGroup>
            {eligibilityCriteria.map((criteria, index) => (
              <ListGroup.Item key={index} className="list-item">
                {criteria}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      <div className=" border rounded p-3">
        <div className="bg-primary text-white p-2">
          <h5 className="mb-0">Documents Submitted</h5>
        </div>
        <ListGroup className="mt-2">
          {documents.map((doc, index) => (
            <ListGroup.Item key={index} className="list-item">
              {doc}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className=" text-center">
        <Button variant="info">Apply Now!</Button>
      </div>
      <div className=" mt-20"></div>
    </div>
  );
};

export default UserSpecificGuide;
