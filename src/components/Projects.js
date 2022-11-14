import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Container, Row} from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import {Cards} from './Cards';
import img1 from '../img/portfolio-1.jpg';
import img2 from '../img/portfolio-2.jpg';
import img3 from '../img/portfolio-3.jpg';
import img4 from '../img/portfolio-4.jpg';
import img5 from '../img/portfolio-5.jpg';
import img6 from '../img/portfolio-6.jpg';

export const Projects= () => {

  const projects = [
    {
      title:'Website',
      descrption:'Web design',
      img: img1,
    },
    {
      title:'Website',
      descrption:'Web design',
      img: img2,
    },
    {
      title:'Website',
      descrption:'Web design',
      img: img3,
    },
    {
      title:'Website',
      descrption:'Web design',
      img: img4,
    },
    {
      title:'Website',
      descrption:'Web design',
      img: img5,
    },
    {
      title:'Website',
      descrption:'Web design',
      img: img6,
    },

  ]

  return(
    <section className='projects-section' id='projects'>
      <Container>

        <div className='projects-details px-lg-5 pb-4'>
          <h3>
            Projects
          </h3>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis assumenda, molestiae eaque aut eum mollitia qui praesentium quia iure odio eius laudantium totam suscipit. Et recusandae ab reiciendis suscipit!
          </p>
        </div>
      <Tabs>
        <TabList className='d-flex react-tabs__tab-list'>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <Row>
              {projects.map((projects, index) => {
                return <Cards key={index} {...projects} />;
              })}
            </Row>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  );
}