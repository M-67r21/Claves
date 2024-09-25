import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container
      style={{
        paddingTop:"5rem",
      }}
    >
        <Row
          style={{
            textAlign:"center",
            paddingBlock:"1rem",
          }}
        >
          <h1
            style={{
              color:"#ff914d",
            }}
          >Chat our Team</h1>
          <p
            style={{
              color:"#004aad",
            }}
          >
            Let us know how we can help</p>
        </Row>

        <Row
          style={{
            paddingBlock:"2rem",
            color:"#004aad",
            gap:"5rem",
            justifyContent:"center"
          }}
        >
          <Col md={3}
           style={{
            border:".15rem solid #ff914d",
            borderRadius:"5%",
            paddingInline:"2rem",
            paddingBlock:"1rem",
           }}
          >
            <h4
              style={{
                paddingBottom:"1rem",
              }}
            >Chat with Team</h4>
            <p
              style={{
                paddingBottom:"1rem",
              }}
            >
              Speak with our team
            </p>
            <Button
              style={{
                color:"#004aad",
                backgroundColor:"transparent",
                border:".1rem solid #ff914d",
                width:"90%"
              }}
            >Email</Button>
          </Col>

          <Col md={3}
           style={{
            border:".15rem solid #ff914d",
            borderRadius:"5%",
            paddingInline:"2rem",
            paddingBlock:"1rem",
           }}
          >
            <h4
              style={{
                paddingBottom:"1rem",
              }}
            >Visit Us</h4>
            <p
              style={{
                paddingBottom:"1rem",
              }}
            >
              Stop by our Head Quarters
            </p>
            <Button
              style={{
                color:"#004aad",
                backgroundColor:"transparent",
                border:".1rem solid #ff914d",
                width:"90%"
              }}
            >Our Location</Button>
          </Col>

          <Col md={3}
           style={{
            border:".15rem solid #ff914d",
            borderRadius:"5%",
            paddingInline:"2rem",
            paddingBlock:"1rem",
           }}
          >
            <h4
              style={{
                paddingBottom:"1rem",
              }}
            >Call Us</h4>
            <p
              style={{
                paddingBottom:"1rem",
              }}
            >
              We are glad to hear from you
            </p>
            <Button
              style={{
                color:"#004aad",
                backgroundColor:"transparent",
                border:".1rem solid #ff914d",
                width:"90%"
              }}
            >Email</Button>
          </Col>
        </Row>

        <Row
          style={{
            textAlign:"center",
            paddingBlock:"2rem",
          }}
        >
          <h1
            style={{
              color:"#ff914d",
            }}
          >
            Have a Specific Question?
          </h1>
          <h6
            style={{
              color:"#004aad",
            }}
          >
            Let us know how we can help
          </h6>

          <Row
            style={{
              paddingTop:"2rem",
            }}
          >
            <Form
              style={{
                textAlign:"start",
                color:"#004aad",
                fontWeight:"600",
                
              }}
            >
              <Row>

                <Col md={6} >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
                      style={{
                        width:"100%",
                      }}
                    >
                      <Form.Label>Enter your Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Full Name" required />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
                       style={{
                        width:"100%",
                      }}
                    >
                      <Form.Label>Your Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" required/>
                    </Form.Group>                
                </Col>
              </Row>

              <Row>            
                  <Col md={6}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
                         style={{
                          width:"100%",
                        }}
                      >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" required />
                      </Form.Group>              
                  </Col>

                  <Col md={6}>            
                      <Form.Group className="mb-3" controlId="formPhoneNumber"
                         style={{
                          width:"100%",
                        }}
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Number" 
                          required                          
                          onInput={(e) => {
                            // Ensure that only digits are entered and it doesn't exceed 10 digits
                            e.target.value = e.target.value.slice(0, 10).replace(/[^0-9]/g, '');
                          }}
                        />
                      </Form.Group>
                  </Col>
              </Row>

              <Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"
                   style={{
                    width:"100%",
                  }}
                >
                  <Form.Label>Enter Your Message</Form.Label>
                  <Form.Control as="textarea" rows={3} required />
                </Form.Group>
              </Row>


              <Row  className="d-flex justify-content-center">
                <Button type='submit'
                  style={{
                    paddingBlock: ".5rem",
                    paddingInline: ".8rem",
                    color: "#FFFFFB",
                    backgroundColor: "#ff914d",
                    border: "0",
                    width: "6rem",
                  }}
                >
                  Submit
                </Button>
              </Row>
            </Form>

            <p
              style={{
                color:"#004aad",
                paddingTop:"1rem",
              }}
            >We'll get back to you in 1-2 business days</p>
          </Row>

          
        </Row>
      </Container>
  )
}

export default Contact