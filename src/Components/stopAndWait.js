import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const StopAndWait = () => {
  return (
    <Container>
      <Row className="text-light h1 py-2 m-0 bg-info mt-5">
        <Col>** Stop And Wait **</Col>
      </Row>
      <Row xs={5} className="mt-5 justify-content-center">
        <NavLink to="/error-free">
          <Button className="w-100">Error Free</Button>
        </NavLink>
      </Row>
      <Row xs={5} className="mt-5 justify-content-center">
        <NavLink to="/lost-frame">
          <Button className="w-100">Lost Frame</Button>
        </NavLink>
      </Row>
      <Row xs={5} className="mt-5 justify-content-center">
        <NavLink to="/lost-ack">
          <Button className="w-100">Lost Ack</Button>
        </NavLink>
      </Row>
      <Row className="text-light h1 py-2 mt-5 m-0 bg-info">
        <Col>Alireza Khanamani 96405036</Col>
      </Row>
    </Container>
  );
};

export default StopAndWait;
