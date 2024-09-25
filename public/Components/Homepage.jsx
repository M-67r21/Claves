import React from 'react'
import { Button, Col, Container, Row , } from 'react-bootstrap'
import Home from "../Images/Homepage.jpeg"
import { LinkContainer } from 'react-router-bootstrap'

const Homepage = () => {
  return (
    <>
      <Container 
        style={{
          paddingTop:"5.5rem",
        }}
      >
        {/* Introduction */}
        <Row>
          <Col md ={6}
            style={{
              paddingInline:"0",
              paddingBlock:"3rem",
            }}
          >
            <div 
              style={{
                fontSize:"4rem",
                fontWeight: "700"
              }}
            >
              <h2
                style={{
                  color:" #004aad",
                  fontSize:"3.5rem",
                  fontWeight: "700"
                }}
              >
                Innovative Technology 
              </h2>
              <h2
                style={{
                  color:" #ff914d",
                  fontSize:"3.5rem",
                  fontWeight: "700"
                }}
              >
                Solutions for Your 
              </h2>
              <h2
                style={{
                  color:" #004aad",
                  fontSize:"3.5rem",
                  fontWeight: "700"
                }}
              >
                Business
              </h2>   
            </div>

            <div
            style={{
              padding:"2.7rem",
              display: "flex",
              justifyContent:"space-evenly",
            }}
            >
              <LinkContainer to="/services">
                <Button
                  style={{
                    backgroundColor:"#041E42"
                  }}
                >View all Services</Button>
              </LinkContainer>
              <Button
                style={{
                  padding:".5rem",
                  color:"#FFFFFB",
                  backgroundColor:"#041E42",
                  border:"0"
                }}
              >View all Services</Button>
            </div>
          </Col>

          <Col md={6}
              style={{
                  paddingLeft: "1rem",
                  paddingBlock: "2rem",
                  alignContent:"center",
              }}
          >
              <img src={Home} alt="" className="img-fluid enlarge-image"
                  style={{
                      boxShadow: "2rem 2rem #ff914d",
                      width: "90%",
                  }} 
              />
          </Col>

        </Row>
          
        {/* Why Us */}
        <Row
          style={{
            textAlign:"center",
            paddingBlock:"2rem",
          }}
        >
          <h2
            style={{
              color:" #ff914d",
              fontSize:"3rem",
              fontWeight: "600",
              
            }}
          >Why Choose Us</h2>
          <p
             style={{
              color:" #004aad",
              fontSize:"1rem",
              fontWeight: "400",
              
            }}
          >Choose Clave Technologies for innovative, tailored solutions that drive your business forward. Our expert team delivers cutting-edge services with a customer-centric approach, ensuring that we meet your unique needs. With a proven track record across industries, we provide end-to-end support, from consultation to implementation, ensuring seamless integration and long-term success for your organization.</p>
        </Row>

        {/* Services */}
        <Row
            style={{
              textAlign: "center",
              paddingBottom: "2rem",
            }}
          >
            <h2
              style={{
                color: "#ff914d",
                fontSize: "3rem",
                fontWeight: "600",
                paddingBottom: "2rem",
              }}
            >
              Services
            </h2>

            {/* Using Bootstrap grid system to handle the alignment */}
              
              <Row
                style={{
                  gap:"6rem",
                  paddingBottom:"2rem",
                  color:"#004aad",
                  justifyContent: "center", 
                }}
              >
                <Col md={3}
                  style={{
                    border:".1rem solid #ff914d",
                    borderRadius:"2%",
                    padding:"2rem",
                  }}
                >
                  <h4>Web Development</h4>
                  <p style={{ textAlign: "left" }}>
                    Clave Technologies offers comprehensive website development, delivering responsive, SEO-optimized, and user-friendly sites. We use modern technologies to create fast, secure websites tailored to your business, ensuring long-term success and scalability.
                  </p>
                  <Button
                    style={{
                      paddingBlock: ".5rem",
                      paddingInline: "1rem",
                      color: "#FFFFFB",
                      backgroundColor: "#ff914d",
                      border: "0",
                    }}
                  >
                    Read More
                  </Button>
                </Col>

                <Col md={3}
                  style={{
                    border:".1rem solid #ff914d",
                    borderRadius:"2%",
                    padding:"2rem",
                  }}
                >
                  <h4>Web Development</h4>
                  <p style={{ textAlign: "left" }}>
                    Clave Technologies offers comprehensive website development, delivering responsive, SEO-optimized, and user-friendly sites. We use modern technologies to create fast, secure websites tailored to your business, ensuring long-term success and scalability.
                  </p>
                  <Button
                    style={{
                      paddingBlock: ".5rem",
                      paddingInline: "1rem",
                      color: "#FFFFFB",
                      backgroundColor: "#ff914d",
                      border: "0",
                    }}
                  >
                    Read More
                  </Button>
                </Col>
                
                <Col md={3}
                  style={{
                    border:".1rem solid #ff914d",
                    borderRadius:"2%",
                    padding:"2rem",
                  }}
                >
                  <h4>Web Development</h4>
                  <p style={{ textAlign: "left" }}>
                    Clave Technologies offers comprehensive website development, delivering responsive, SEO-optimized, and user-friendly sites. We use modern technologies to create fast, secure websites tailored to your business, ensuring long-term success and scalability.
                  </p>
                  <Button
                    style={{
                      paddingBlock: ".5rem",
                      paddingInline: "1rem",
                      color: "#FFFFFB",
                      backgroundColor: "#ff914d",
                      border: "0",
                    }}
                  >
                    Read More
                  </Button>
                </Col>
              </Row>
            

            <div
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <LinkContainer to="/services">
                <Button
                  style={{
                    paddingBlock: ".5rem",
                    paddingInline: ".8rem",
                    color: "#FFFFFB",
                    backgroundColor: "#ff914d",
                    border: "0",
                    width: "6rem",
                  }}
                >
                  View All
                </Button>
              </LinkContainer>
            </div>
        </Row>


        {/* Products */}
        <Row
            style={{
              textAlign: "center",
              paddingBottom: "2rem",
            }}
          >
            <h2
              style={{
                color: "#ff914d",
                fontSize: "3rem",
                fontWeight: "600",
                paddingBottom: "2rem",
              }}
            >
              Products
            </h2>
              <Row
                style={{
                  gap:"6rem",
                  justifyContent:"center",
                }}
              >
                <Col md={3}
                  style={{
                    color:"#004aad",
                    textAlign:"start",
                    
                  }}
                >
                  <img src={Home} alt="" />
                  <h4>Financial Reporting</h4>
                  <p>
                    Clave Technologies offers comprehensive website development, success and scalability.
                  </p>
                </Col>

                <Col md={3}
                  style={{
                    color:"#004aad",
                    textAlign:"start",
                  }}
                >
                  <img src={Home} alt="" />
                  <h4>Financial Reporting</h4>
                  <p>
                    Clave Technologies offers comprehensive website development, success and scalability.
                  </p>
                </Col>

                <Col md={3}
                  style={{
                    color:"#004aad",
                    textAlign:"start",
                  }}
                >
                  <img src={Home} alt="" />
                  <h4>Financial Reporting</h4>
                  <p>
                    Clave Technologies offers comprehensive website development, success and scalability.
                  </p>
                </Col>

                
              </Row>

                       

            <div 
              style={{
                padding: "1rem",
                textAlign: "right" // Aligns button to the right
              }}
            >
              <LinkContainer to="/products">
                <Button
                  style={{
                    paddingBlock: ".5rem",
                    paddingInline: ".8rem",
                    color: "#FFFFFB",
                    backgroundColor: "#CB6015",
                    border: "0",
                    width: "6rem",
                  }}
                >
                  View All
                </Button>
              </LinkContainer>
            </div>
        </Row>

        {/* What People say */}
        <Row
          style={{
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          	<h2
              style={{
                color: "#ff914d",
                fontSize: "3rem",
                fontWeight: "600",
                paddingBottom: "2rem",
              }}
            >
              What People Say
            </h2>
              
              <Row
                style={{
                  gap:"6rem",
                  justifyContent:"center"
                }}
              >
                <Col md={3}
                
                >
                  <img src={Home} alt="" height={150} width={150}
                    style={{
                      borderRadius:"50%",
                    }}
                  />
                  <p
                    style={{
                      color:"#004aad",
                      padding:".8rem",
                    }}
                  >
                    I loves their services so much
                    I loves their services so much
                    I loves their services so much
                    I loves their services so much
                    Thank you
                  </p>
                </Col>

                <Col md={3}>
                  <img src={Home} alt="" height={150} width={150}
                    style={{
                      borderRadius:"50%",
                    }}
                  />
                  <p
                    style={{
                      color:"#004aad",
                      padding:".8rem",
                    }}
                  >
                    I loves their services so much
                    I loves their services so much
                    I loves their services so much
                    I loves their services so much
                    Thank you
                  </p>
                </Col>
                
                <Col md={3}>
                  <img src={Home} alt="" height={150} width={150}
                    style={{
                      borderRadius:"50%",
                    }}
                  />
                  <p
                    style={{
                      color:"#004aad",
                      padding:".8rem",
                    }}
                  >
                    I loves their services so much
                    I loves their services so much
                    I loves their services so much
                    I loves their services so much
                    Thank you
                  </p>
                </Col>
              </Row>
              
        </Row>
      </Container>
    </>
  )
}

export default Homepage