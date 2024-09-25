import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import miss from '../Images/Miss.png'

const About = () => {
  return (
    <Container
      style={{
        paddingTop:"4rem",
      }}
      >

        <Row
          style={{
            paddingTop:"2rem",
            justifyContent:"center",
          }}
        >
          <h2
            style={{
              color:"#ff914d",
              textAlign:"center",
            }}
          >About Us</h2>
          <p
            style={{
              color:"#004aad",
              textAlign:"center",
              width:"70%",
              paddingTop:"1rem",
            }}
          >
            We believe in the power of teamwork and collaboration. Our diverse experts work tirelessly to deliver innovative solutions tailored to our clients' needs.
          </p>
        </Row>
        
        <hr className="" 
         style={{ 
             border: ".1rem solid #ff914d", 
             width:"100%" ,
            marginTop:"2rem"
         }} />

      <Row
        style={{
          paddingBlock:"3rem",
          color:"#004aad",
          // gap:".1rem",
        }}
      >
        <Col md={6} 
          style={{
            padding:"2rem",
            // paddingLeft:"0rem",
          }}
        >
          <img src={miss} alt="" className="img-fluid enlarge-image"
            style={{
              width: "90%",
              boxShadow: "1rem 1rem #ff914d",
          }}
          />
        </Col>
        <Col md={6}
          style={{
            padding:"2rem",
            alignContent:"center",
          }}
        >
          <p>
            Clave Technologies offers comprehensive website development, delivering responsive, SEO-optimized, and user-friendly sites. We use modern technologies to create fast, secure websites tailored to your business, ensuring long-term success and scalability.
          </p>
        </Col>
      </Row>

      <Row
        style={{
          paddingBlock:"3rem",
          color:"#004aad",
          // gap:".1rem",
        }}
      >
        
        <Col md={6}
          style={{
            padding:"2rem",
            alignContent:"center",
            // border:".1rem solid #ff914d",
            // borderRadius:"2%",
          }}
        >
          <p>
            Clave Technologies offers comprehensive website development, delivering responsive, SEO-optimized, and user-friendly sites. We use modern technologies to create fast, secure websites tailored to your business, ensuring long-term success and scalability.
          </p>
        </Col>

        <Col md={6} 
          style={{
            padding:"2rem",
            // paddingLeft:"0rem",
          }}
        >
          <img src={miss} alt="" className="img-fluid enlarge-image"
            style={{
              width: "90%",
              boxShadow: "1rem 1rem #ff914d",
          }}
          />
        </Col>

      </Row>

      <Row
        style={{
          paddingBlock:"3rem",
          color:"#004aad",
          // gap:".1rem",
        }}
      >
        <Col md={6} 
          style={{
            padding:"2rem",
            // paddingLeft:"0rem",
          }}
        >
          <img src={miss} alt="" className="img-fluid enlarge-image"
            style={{
              width: "90%",
              boxShadow: "1rem 1rem #ff914d",
          }}
          />
        </Col>
        <Col md={6}
          style={{
            padding:"2rem",
            alignContent:"center",
          }}
        >
          <p>
            Clave Technologies offers comprehensive website development, delivering responsive, SEO-optimized, and user-friendly sites. We use modern technologies to create fast, secure websites tailored to your business, ensuring long-term success and scalability.
          </p>
        </Col>
      </Row>
      
  </Container>
  )
}

export default About