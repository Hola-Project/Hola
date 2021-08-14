import React from "react";
import "../assets/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";

const BorderedAvatar = styled(Avatar)`
border: 3px solid lightseagreen;
`;


export class Header extends React.Component {

  render() {


    return (
      <Container >
        <Row>
          <Col>
            <IconButton>
              <BorderedAvatar style={{ marginRight: "14px" }} alt="n1" src="" />
            </IconButton>

          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2" src="" />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar alt="name2"   src=""  />
            </IconButton>
          </Col>
          <Col>
            <IconButton>
              <BorderedAvatar  alt="name2" src=""  />
            </IconButton>
          </Col>
        </Row>
      </Container>


    );
  }
}


export default Header;
