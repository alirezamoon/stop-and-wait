import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const LostAck = () => {
  const [reciever, setReciever] = useState([]);
  //   let reciever = [1];
  const [msgSender, setMsgSender] = useState([]);
  const [msgReceiver, setMsgReciever] = useState([]);

  const [start, setStart] = useState(false);

  const frame1 = "frame1";
  const frame2 = "frame2";
  const frame3 = "frame3";
  const frame4 = "frame4";
  const frame5 = "frame5";

  const [bg1, setBg1] = useState("bg-light");
  const [bg2, setBg2] = useState("bg-light");
  const [bg3, setBg3] = useState("bg-light");
  const [bg4, setBg4] = useState("bg-light");
  const [bg5, setBg5] = useState("bg-light");

  useEffect(() => {
    let time = 0;
    if (start) {
      setTimeout(() => {
        setMsgSender((p) => [...p, "frame 1 sent"]);
        setBg1("bg-warning");
      }, (time += 2000));
      setTimeout(() => {
        setReciever((p) => [...p, frame1]);
        setMsgReciever((p) => [...p, "frame 1 recieved", "ack 2 sent"]);
      }, (time += 2000));
      setTimeout(() => {
        setMsgSender((p) => [...p, "ack 2 recieved"]);
        setBg1("bg-success");
      }, (time += 2000));

      setTimeout(() => {
        setMsgSender((p) => [...p, "frame 2 sent"]);
        setBg2("bg-warning");
      }, (time += 2000));
      setTimeout(() => {
        setReciever((p) => [...p, frame2]);
        setMsgReciever((p) => [...p, "frame 2 recieved", "ack 3 sent"]);
      }, (time += 2000));
      setTimeout(() => {
        setMsgSender((p) => [...p, "time out frame 2", "sent frame 2 again"]);
        //setBg2("bg-success");
      }, (time += 3000));
      setTimeout(() => {
        // setReciever((p) => [...p, frame2]);
        setMsgReciever((p) => [...p, "frame 2 has recieved", "ack 3 sent"]);
      }, (time += 2000));
      setTimeout(() => {
        setMsgSender((p) => [...p, "ack 3 recieved"]);
        setBg2("bg-success");
      }, (time += 3000));

      setTimeout(() => {
        setMsgSender((p) => [...p, "frame 3 sent"]);
        setBg3("bg-warning");
      }, (time += 2000));
      setTimeout(() => {
        setReciever((p) => [...p, frame3]);
        setMsgReciever((p) => [...p, "frame 3 recieved", "ack 4 sent"]);
      }, (time += 2000));
      setTimeout(() => {
        setMsgSender((p) => [...p, "ack 4 recieved"]);
        setBg3("bg-success");
      }, (time += 2000));

      setTimeout(() => {
        setMsgSender((p) => [...p, "frame 4 sent"]);
        setBg4("bg-warning");
      }, (time += 2000));
      setTimeout(() => {
        setReciever((p) => [...p, frame4]);
        setMsgReciever((p) => [...p, "frame 4 recieved", "ack 5 sent"]);
      }, (time += 2000));
      setTimeout(() => {
        setMsgSender((p) => [...p, "ack 5 recieved"]);
        setBg4("bg-success");
      }, (time += 2000));

      setTimeout(() => {
        setMsgSender((p) => [...p, "frame 5 sent"]);
        setBg5("bg-warning");
      }, (time += 2000));
      setTimeout(() => {
        setReciever((p) => [...p, frame5]);
        setMsgReciever((p) => [...p, "frame 5 recieved", "ack 6 sent"]);
      }, (time += 2000));
      setTimeout(() => {
        setMsgSender((p) => [...p, "ack 6 recieved"]);
        setBg5("bg-success");
      }, (time += 2000));
    }
  }, [start]);

  return (
    <>
      <Row className="text-light h3 py-1 m-0 bg-info">
        <Col>Lost Ack</Col>
      </Row>
      <Container>
        <Row className="mt-2">
          <Col>
            <Button
              className="px-5"
              variant="primary"
              onClick={() => setStart(true)}
            >
              شروع
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2 border text-light bg-danger mx-5 py-2 rounded ">
            فرستنده
          </Col>
          <Col className="mt-2 border text-light bg-danger mx-5 py-2 rounded ">
            گیرنده
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="d-flex flex-column justify-content-center mx-5">
            <Row
              className={`${bg1} ${
                bg1 === "bg-success" ? "text-white" : ""
              } mb-2 mx-5 justify-content-center py-2 rounded`}
            >
              {frame1}
            </Row>
            <Row
              className={`${bg2} ${
                bg2 === "bg-success" ? "text-white" : ""
              } mb-2 mx-5 justify-content-center py-2 rounded`}
            >
              {frame2}
            </Row>
            <Row
              className={`${bg3} ${
                bg3 === "bg-success" ? "text-white" : ""
              } mb-2 mx-5 justify-content-center py-2 rounded`}
            >
              {frame3}
            </Row>
            <Row
              className={`${bg4} ${
                bg4 === "bg-success" ? "text-white" : ""
              } mb-2 mx-5 justify-content-center py-2 rounded`}
            >
              {frame4}
            </Row>
            <Row
              className={`${bg5} ${
                bg5 === "bg-success" ? "text-white" : ""
              } mb-2 mx-5 justify-content-center py-2 rounded`}
            >
              {frame5}
            </Row>
          </Col>
          <Col className="mx-5">
            {reciever.map((frm) => {
              return (
                <Row className="bg-light mb-2 mx-5 justify-content-center text-center py-2 rounded">
                  {frm}
                </Row>
              );
            })}
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="mx-5">
            {msgSender.map((msg) => (
              <Row>
                <Col>{msg}</Col>
              </Row>
            ))}
          </Col>
          <Col className="mx-5">
            {msgReceiver.map((msg) => (
              <Row>
                <Col>{msg}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LostAck;
