import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import web from "../Images/Web.png"

const Services = () => {
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
          > Services</h1>
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
              border:".1rem solid #ff914d",
              borderRadius:"2%",
              padding:"1rem",
              boxShadow: "1rem 1rem #ff914d",
            }}
          >
            <img src={web} alt="" className="img-fluid enlarge-image"/>
            <h5>Web Designing</h5>
            <p>Web designing is the process of creating visually appealing and functional websites that provide an optimal user experience. It  user interface (UI) design. </p>
            
            <div
              style={{
                textAlign:"right",
              }}
            >

              <Button
                style={{
                  backgroundColor:"transparent",
                  color:"#ff914d",
                  border:"none",
                }}
              >
                Read More
              </Button>
            </div>
          </Col>

          <Col md={3}
            style={{
              color:"#004aad",
              border:".1rem solid #ff914d",
              borderRadius:"2%",
              padding:"1rem",
              boxShadow: "1rem 1rem #ff914d",
            }}
          >
            <img src={web} alt="" className="img-fluid enlarge-image"/>
            <h5>Web Designing</h5>
            <p>Web designing is the process of creating visually appealing and functional websites that provide an optimal user experience. It  user interface (UI) design. </p>
            
            <div
              style={{
                textAlign:"right",
              }}
            >

              <Button
                style={{
                  backgroundColor:"transparent",
                  color:"#ff914d",
                  border:"none",
                }}
              >
                Read More
              </Button>
            </div>
          </Col>

          <Col md={3}
            style={{
              color:"#004aad",
              border:".1rem solid #ff914d",
              borderRadius:"2%",
              padding:"1rem",
              boxShadow: "1rem 1rem #ff914d",
            }}
          >
            <img src={web} alt="" className="img-fluid enlarge-image"/>
            <h5>Web Designing</h5>
            <p>Web designing is the process of creating visually appealing and functional websites that provide an optimal user experience. It  user interface (UI) design. </p>
            
            <div
              style={{
                textAlign:"right",
              }}
            >

              <Button
                style={{
                  backgroundColor:"transparent",
                  color:"#ff914d",
                  border:"none",
                }}
              >
                Read More
              </Button>
            </div>
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
              border:".1rem solid #ff914d",
              borderRadius:"2%",
              padding:"1rem",
              boxShadow: "1rem 1rem #ff914d",
            }}
          >
            <img src={web} alt="" className="img-fluid enlarge-image"/>
            <h5>Web Designing</h5>
            <p>Web designing is the process of creating visually appealing and functional websites that provide an optimal user experience. It  user interface (UI) design. </p>
            
            <div
              style={{
                textAlign:"right",
              }}
            >

              <Button
                style={{
                  backgroundColor:"transparent",
                  color:"#ff914d",
                  border:"none",
                }}
              >
                Read More
              </Button>
            </div>
          </Col>

          <Col md={3}
            style={{
              color:"#004aad",
              border:".1rem solid #ff914d",
              borderRadius:"2%",
              padding:"1rem",
              boxShadow: "1rem 1rem #ff914d",
            }}
          >
            <img src={web} alt="" className="img-fluid enlarge-image"/>
            <h5>Web Designing</h5>
            <p>Web designing is the process of creating visually appealing and functional websites that provide an optimal user experience. It  user interface (UI) design. </p>
            
            <div
              style={{
                textAlign:"right",
              }}
            >

              <Button
                style={{
                  backgroundColor:"transparent",
                  color:"#ff914d",
                  border:"none",
                }}
              >
                Read More
              </Button>
            </div>
          </Col>

          <Col md={3}
            style={{
              color:"#004aad",
              border:".1rem solid #ff914d",
              borderRadius:"2%",
              padding:"1rem",
              boxShadow: "1rem 1rem #ff914d",
            }}
          >
            <img src={web} alt="" className="img-fluid enlarge-image"/>
            <h5>Web Designing</h5>
            <p>Web designing is the process of creating visually appealing and functional websites that provide an optimal user experience. It  user interface (UI) design. </p>
            
            <div
              style={{
                textAlign:"right",
              }}
            >

              <Button
                style={{
                  backgroundColor:"transparent",
                  color:"#ff914d",
                  border:"none",
                }}
              >
                Read More
              </Button>
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default Services