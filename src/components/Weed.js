import React from "react";
import { Container, Row, Col } from 'reactstrap';

const Weed = (props) => {
    return (
      <>
        <Container>
          <Row>
          <div>
              {props.weed.map(weed => (
              <Col>
                  <div key={weed.id}>
                    {console.log(weed.flavor[0])}
                    {console.log(weed.strain[0])}
                      <h2>{weed.strain[0]}</h2>
                      <p>{weed.description[0]}</p>
                  </div>
              </Col>
              ))}
          </div>
          </Row>
        </Container>
      </>
    );
};

export default Weed