import {Container, Row, Col} from 'react-bootstrap';
import heroPartImg from '../img/heroPartImg.jpg';

export const Banner= ()=>{
    return(
        <section className="banner-section" id='home'>
            <Container>
                <Row className="py-5">
                    <Col lg= {7} md={12} className="hero-text">
                        <div className='text-start'>
                            <p className='text-light title-box d-inline'>
                                Welcome to my portfolio
                            </p>
                            <p className='text-light sub-title mt-3 fs-1 fw-bold'>
                                Hi, myself Mezbah Uddin Maruf
                            </p>
                            <p className='text-light sub-title d-inline fs-6'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eius officiis dicta distinctio amet quia laboriosam maiores repudiandae perspiciatis nulla impedit cum fuga at id, rerum numquam voluptatum molestias suscipit?

                            
                            </p>
                        </div>
                    </Col>
                    <Col lg= {5} md={12} >
                        <div className='heroPartImg pt-5'>
                            <img src={heroPartImg} alt=" " className="hero-part-img img-fluid"/>
                        </div>
                    </Col>

                
                </Row>
            </Container>
        </section>

    )
}