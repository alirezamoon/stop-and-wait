import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const StopAndWait = () => {
  return (
    <Container>
      <Row className=" text-secondary h3 py-2 m-0 mt-5">
        <Col xs={12}>تمرین پیاده سازی</Col>
        <Col xs={12}>درس انتقال داد ها - دکتر عابدی</Col>
        <Col xs={12} className='rounded text-dark py-2 mt-5 bg-info'>** Stop And Wait **</Col>
      </Row>
      <Row xs={5} className="mt-5 justify-content-center">
        <NavLink to="/error-free">
          <Button variant='warning' className="w-100">Error Free</Button>
        </NavLink>
      </Row>
      <Row xs={5} className="mt-5 justify-content-center">
        <NavLink to="/lost-frame">
          <Button variant='warning' className="w-100">Lost Frame</Button>
        </NavLink>
      </Row>
      <Row xs={5} className="mt-5 justify-content-center">
        <NavLink to="/lost-ack">
          <Button variant='warning' className="w-100">Lost Ack</Button>
        </NavLink>
      </Row>
      <Row className="rounded text-dark h3 py-2 mt-5 m-0 bg-info">
        <Col>Alireza Khanamani 96405036</Col>
      </Row>
    </Container>
  );
};

export default StopAndWait;
