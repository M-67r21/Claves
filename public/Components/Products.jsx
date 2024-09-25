import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import one from '../Images/Homepage.jpeg'

const Products = () => {
  return (
    <Container
      style={{
        paddingTop:"5rem",
      }}
    >
      <Row
          style={{
            color:"#ff914d",
            textAlign:"center",
            paddingBlock:"1rem",
            
          }}
      >
        <h1
          style={{
            padding:"5rem",
            backgroundImage: `url("../Images/Miss.png")`,  // Add the path to your image here
            backgroundSize: "cover", // This ensures the image covers the entire area of the Row
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
          }}
        >
          Products
        </h1>
      </Row>    

      <Row
        style={{
          paddingBottom:"4rem",
          gap:"6rem",
          justifyContent:"center"
        }}
      >
        <Col md={3}
          style={{
            color:"#004aad",
          }}
        >
          <img src={one} alt=""  className="img-fluid enlarge-image"/>
          <h3>Financial Reporting</h3>
          <p>Clave Technologies offers comprehensive website development, success and scalability.</p>
        </Col>

        <Col md={3}
          style={{
            color:"#004aad",
          }}
        >
          <img src={one} alt="" className="img-fluid enlarge-image" />
          <h3>Financial Reporting</h3>
          <p>Clave Technologies offers comprehensive website development, success and scalability.</p>
        </Col>

        <Col md={3}
          style={{
            color:"#004aad",
          }}
        >
          <img src={one} alt="" className="img-fluid enlarge-image" />
          <h3>Financial Reporting</h3>
          <p>Clave Technologies offers comprehensive website development, success and scalability.</p>
        </Col>
      </Row>

      <Row
        style={{
          paddingBottom:"4rem",
          gap:"6rem",
          justifyContent:"center"
        }}
      >
        <Col md={3}
          style={{
            color:"#004aad",
          }}
        >
          <img src={one} alt="" className="img-fluid enlarge-image" />
          <h3>Financial Reporting</h3>
          <p>Clave Technologies offers comprehensive website development, success and scalability.</p>
        </Col>

        <Col md={3}
          style={{
            color:"#004aad",
          }}
        >
          <img src={one} alt="" className="img-fluid enlarge-image" />
          <h3>Financial Reporting</h3>
          <p>Clave Technologies offers comprehensive website development, success and scalability.</p>
        </Col>

        <Col md={3}
          style={{
            color:"#004aad",
          }}
        >
          <img src={one} alt="" className="img-fluid enlarge-image" />
          <h3>Financial Reporting</h3>
          <p>Clave Technologies offers comprehensive website development, success and scalability.</p>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Products