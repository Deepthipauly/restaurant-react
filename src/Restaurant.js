import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Restaurant.css'
import { Link } from "react-router-dom";


function Restaurant() {
  const [restList, setRest] = useState([]);

  // api to access data
  const getData = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => setRest(data.restaurants));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Row className="ms-4 mb-2">
      {restList.map((rest) => (
        <Col id="c1" className="p-2" md={6} lg={4}>
          <Link id="link" to={`/viewRest/${rest.id}`}>
            <Card className="ms-4 mt-5" style={{ width: "18rem", height: '450px'}}>
              <Card.Img variant="top" style={{height:'300px'}} src={rest.photograph} />
              <Card.Body>
                <Card.Title>{rest.name}</Card.Title>
                <Card.Text style={{color:"white"}}>
                  {rest.address}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}


export default Restaurant;

