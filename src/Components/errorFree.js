import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const ErrorFree = () => {
  const [reciever, setReciever] = useState([]);
  const [msgSender, setMsgSender] = useState([]);
  const [msgReceiver, setMsgReciever] = useState([]);

  const [start, setStart] = useState(false);

  const [frames, setFrames] = useState( [
    ["1","bg-light"],
    ["2","bg-light"],
    ["3","bg-light"],
    ["4","bg-light"],
    ["5","bg-light"],
  ]);

  const timeDev = () => {
    let time = 0;
    let newFrames = [...frames]
    newFrames.map((frame) => {
      setTimeout(() => {
        frame[1]= 'bg-warning'
        setFrames(newFrames)
        setMsgSender((p) => [...p, `frame ${frame[0]} sent`]);
      }, (time += 2000));
      setTimeout(() => {
        setReciever((p) => [...p, frame[0]]);
        setMsgReciever((p) => [...p, `frame ${frame[0]} recieved`, `ack ${1+(+frame[0])} sent`]);
      }, (time += 2000));
      setTimeout(() => {
        frame[1]= 'bg-success'
        setFrames(newFrames)
        setMsgSender((p) => [...p, `ack ${1+(+frame[0])} received`]);
      }, (time += 2000));
    });
  };

  useEffect(() => {
    if (start) {
      timeDev();
    }
  }, [start]);

  return (
    <>
          <Row className="text-light h3 py-1 m-0 bg-info">
        <Col>Error Free</Col>
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
            {frames.map((frame) => {
              return (
                <Row className={`${frame[1]} mb-2 mx-5 justify-content-center text-center py-2 rounded`}>
                  <Col>frame {frame[0]}</Col>
                </Row>
              );
            })}
          </Col>
          <Col className="mx-5">
            {reciever.map((frm) => {
              return (
                <Row className="bg-light mb-2 mx-5 justify-content-center text-center py-2 rounded">
                  frame {frm}
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

export default ErrorFree;
