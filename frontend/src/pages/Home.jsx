import React from 'react'
import '../styles/home.css'
import { Container, Row, Col,  } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'


import Subtitle from './../shared/subtitle'
//import SearchBar from './../shared/SearchBar'
//import ServiceList from '../services/ServiceList'


const Home = () => {
   return <>
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <h1>Traveling opens the door to creating <span className='hightlight'> memories</span></h1>
                     <p>
                     Traveling is not just about seeing new places but also about immersing yourself in different cultures and creating lifelong memories. With the right preparation and mindset, your journey will be a rewarding and enriching experience. Safe travels!
                     </p>
                  </div>
               </Col>

               <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
  
     
   </>
}

export default Home