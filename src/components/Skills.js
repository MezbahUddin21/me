import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills= ()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const percentage1 = 90;
      const percentage2 = 85;
      const percentage3 = 90;
      const percentage4 = 80;
      const percentage5 = 80;
      const percentage6 = 86;
      const percentage7 = 70;
      const percentage8 = 80;
      const percentage9 = 60;


    return(
        <section className="skills-section text-center text-light skills-section" id='skills'>
            <Container className='skills-container'>
                <Row>
                    <Col>
                        <h3>Skills</h3>
                        <p className='px-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <Carousel responsive={responsive} infinite="true" autoPlay="true">
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage1} text={`${percentage1}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>HTML</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage2} text={`${percentage2}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>CSS</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage3} text={`${percentage3}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>SASS</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage4} text={`${percentage4}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>Bootstrap</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage5} text={`${percentage5}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>JavaScript</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage6} text={`${percentage6}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>jQuery</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage7} text={`${percentage7}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>React Js</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage8} text={`${percentage8}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>Next Js</h4>
                                </div>
                            </div>
                            <div className='circle-progressbar-box'>
                                <CircularProgressbar value={percentage9} text={`${percentage9}%`} className="circle-progressbar-item" />
                                <div>
                                    <h4 className='fs-5 mt-2'>Wordpress</h4>
                                </div>
                            </div>
                        </Carousel>

                    </Col>
                </Row>
            </Container>
        </section>

    )
}