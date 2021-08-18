import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import vedio from './assets/video/video.mp4';

function message() {
  return (
    <>
      <video src={vedio} autoPlay loop muted />
      <Container fluid>
        <Row>
          <div className='app'>
            <div className='app__body'>
              <Sidebar />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default message;
