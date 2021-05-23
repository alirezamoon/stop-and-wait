import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const StopAndWait = () => {
  const [reciever, setReciever] = useState([]);
  //   let reciever = [1];
  const [msgSender, setMsgSender] = useState([]);
  const [msgReceiver, setMsgReciever] = useState([]);

    const [start, setStart] = useState(false)

  const frame1 = 'frame1';
  const frame2 = 'frame2';
  const frame3 = 'frame3';
  const frame4 = 'frame4';
  const frame5 = 'frame5';

  const [bg1, setBg1] = useState("bg-light");
  const [bg2, setBg2] = useState("bg-light");
  const [bg3, setBg3] = useState("bg-light");
  const [bg4, setBg4] = useState("bg-light");
  const [bg5, setBg5] = useState("bg-light");



  useEffect(() => {
      if(start){
    setTimeout(() => {
      setMsgSender((p) => [...p, "frame1 sent"]);
      setBg1("bg-warning");
    }, 2000);
    setTimeout(() => {
      setReciever((p) => [...p, frame1]);
      setMsgReciever((p) => [...p, "frame1 recieved and ack1 sent"]);
    }, 4000);
    setTimeout(() => {
      setMsgSender((p) => [...p, "ack1 recieved"]);
      setBg1("bg-success");
    }, 6000);

    setTimeout(() => {
      setMsgSender((p) => [...p, "frame2 sent"]);
      setBg2("bg-warning");
    }, 8000);
    setTimeout(() => {
      setReciever((p) => [...p, frame2]);
      setMsgReciever((p) => [...p, "frame2 recieved and ack2 sent"]);
    }, 10000);
    setTimeout(() => {
      setMsgSender((p) => [...p, "ack2 recieved"]);
      setBg2("bg-success");
    }, 12000);

    setTimeout(() => {
      setMsgSender((p) => [...p, "frame3 sent"]);
      setBg3("bg-warning");
    }, 14000);
    setTimeout(() => {
      setReciever((p) => [...p, frame3]);
      setMsgReciever((p) => [...p, "frame3 recieved and ack3 sent"]);
    }, 16000);
    setTimeout(() => {
      setMsgSender((p) => [...p, "ack3 recieved"]);
      setBg3("bg-success");
    }, 18000);

    setTimeout(() => {
      setMsgSender((p) => [...p, "frame4 sent"]);
      setBg4("bg-warning");
    }, 20000);
    setTimeout(() => {
      setReciever((p) => [...p, frame4]);
      setMsgReciever((p) => [...p, "frame4 recieved and ack4 sent"]);
    }, 22000);
    setTimeout(() => {
      setMsgSender((p) => [...p, "ack4 recieved"]);
      setBg4("bg-success");
    }, 24000);

    setTimeout(() => {
      setMsgSender((p) => [...p, "frame5 sent"]);
      setBg5("bg-warning");
    }, 26000);
    setTimeout(() => {
      setReciever((p) => [...p, frame5]);
      setMsgReciever((p) => [...p, "frame5 recieved and ack5 sent"]);
    }, 28000);
    setTimeout(() => {
      setMsgSender((p) => [...p, "ack5 recieved"]);
      setBg5("bg-success");
    }, 30000);}
  }, [start]);

  return (
      <>
        <Row className='text-danger h1 py-2 m-0'><Col>** Stop And Wait **</Col></Row>
    <Container>
        <Row className='mt-2'><Col><Button className='px-5' variant='primary' onClick={()=>setStart(true)}>شروع</Button></Col></Row>
        <Row>
            <Col className='mt-5 border text-light bg-danger mx-5 py-2 rounded '>Sender</Col>
            <Col className='mt-5 border text-light bg-danger mx-5 py-2 rounded '>Receiver</Col>
        </Row>
      <Row className="my-5">
        <Col className='d-flex flex-column justify-content-center mx-5'>
          <Row className={`${bg1} ${bg1 === 'bg-success' ? 'text-white' : ''} mb-2 mx-5 justify-content-center py-2 rounded`}>{frame1}</Row>
          <Row className={`${bg2} ${bg2 === 'bg-success' ? 'text-white' : ''} mb-2 mx-5 justify-content-center py-2 rounded`}>{frame2}</Row>
          <Row className={`${bg3} ${bg3 === 'bg-success' ? 'text-white' : ''} mb-2 mx-5 justify-content-center py-2 rounded`}>{frame3}</Row>
          <Row className={`${bg4} ${bg4 === 'bg-success' ? 'text-white' : ''} mb-2 mx-5 justify-content-center py-2 rounded`}>{frame4}</Row>
          <Row className={`${bg5} ${bg5 === 'bg-success' ? 'text-white' : ''} mb-2 mx-5 justify-content-center py-2 rounded`}>{frame5}</Row>
        </Col>
        <Col className='mx-5'>
          {reciever.map((frm) => {
            return <Row className="bg-info mb-2 mx-5 justify-content-center text-center py-2 rounded">{frm}</Row>;
          })} 
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col className='mx-5'>
          {msgSender.map((msg) => (
            <Row><Col>{msg}</Col></Row>
          ))}
        </Col>
        <Col  className='mx-5' >
          {msgReceiver.map((msg) => (
            <Row><Col>{msg}</Col></Row>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default StopAndWait;
