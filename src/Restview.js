import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Operatinghours from "./Operatinghours";
import Review from "./Review";



function Restview() {
  const [restList, setRest] = useState([]);

  // api to access data

  const getData = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => setRest(data.restaurants));
  };
  // object creation for useParams

  const params = useParams();
  console.log(params.id);

  const singleRest = restList.find((i) => i.id == params.id);
  console.log(singleRest);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    { 
    singleRest?
    ( <Row>
        <Col md={6} lg={6}>
          <img
            className="w-75 container p-2 mt-5 ms-5 me-3"
            style={{ height: "500px" }}
            src={singleRest.photograph}
          />
        </Col>
        <Col md={6} lg={6} className="mt-5 mb-2 fs-3 d-flex align-items-center justify-content-start">
          <ListGroup >
            <ListGroup.Item><h1 className="text-warning">{singleRest.name}</h1></ListGroup.Item>
            <ListGroup.Item>Address : <strong>{singleRest.address}</strong></ListGroup.Item>
            <ListGroup.Item>Neighbourhood : <b>{singleRest.neighborhood}</b></ListGroup.Item>
            <ListGroup.Item>Cusine Type : <b>{singleRest.cuisine_type}</b></ListGroup.Item>
            <ListGroup.Item>
             <Operatinghours workingTime={singleRest.operating_hours}/>
             <Review reviewList={singleRest.reviews}/>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>):''

      }

    </>
  );
}

export default Restview;
