import {Container, Row, Col} from 'react-bootstrap';
import contactImg from '../img/contactImg.jpg';


export const Contact = ()=>{
    return(
        <section className='contact-section'>
            <Container>
                <div className="section-title">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusantium at, vel in laborum sapiente. Beatae ratione veniam numquam architecto reprehenderit mollitia iure dolorum accusantium?</p>
                </div>

                <Row>
                    <Col lg={6} mt={5} className="d-flex align-items-stretch">
                    <img src={contactImg} alt=" " className="contact-img img-fluid"/>
                    </Col>

                    <Col lg={6} mt={5} className="d-flex align-items-stretch">
                        <form action="forms" method="post" role="form" className="email-form">
                            <div className="form-row">
                                <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" name="name" className="form-control d-block" placeholder="Your Name" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                <label for="name">Your Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Your Email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="name">Subject</label>
                                <input type="text" className="form-control" name="subject" placeholder="Subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <label for="name">Message</label>
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" data-rule="required" data-msg="Please write something for us"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}