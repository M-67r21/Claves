import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clave from "../Images/Claves 1.jpg"
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container-fluid'
                style={{
                    backgroundColor:"#004aad",
                    width:"100%",
                    cursor:"pointer",
                }}
            >
                <Container>
                    <Row 
                        style={{
                            paddingTop:"1.5rem",
                            paddingBottom:"0",
                            margin:"0",
                            color:"#FFFFFB",
                        }}
                    >
                        <Col md={4} className='px-'>
                            <LinkContainer to="/">
                                <img src={clave} alt="" height={200}
                                />
                            </LinkContainer>
                        </Col>
                        <Col className='bg- text-white text-start py-1 px-5'>
                            <LinkContainer to="/about">
                                <p>About Us</p>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <p>Services</p>
                            </LinkContainer>
                            <LinkContainer to="/products">
                                <p>Products</p>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <p>Contact Us</p>
                            </LinkContainer>
                        </Col>
                        <Col className='bg- text-white text-start py-1 px-5'>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>TikTok</p>
                            <p>X</p>
                        </Col>
                        <hr className="container-fluid" 
                            style={{ 
                                border: ".1rem solid white", 
                                width:"100%" ,
                                marginTop:"2rem"
                            }} 
                        />
                    </Row>
                
                    <Row 
                        className="container-fluid"
                        style={{
                            backgroundColor:"#004aad",
                            padding:"1.5rem",
                            paddingTop:"0",
                            margin:"0",
                            color:"#FFFFFB",
                            width:"100%"
                        }}
                    >
                        <Col className='bg- text-white text-center py-2'>Copyright &copy; @2024 Claves Technologies. All rights reserved </Col>
                    </Row>
                </Container>
            </div>
           
        </footer>
       
    </>
  )
}

export default Footer