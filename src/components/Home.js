import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import logo from '../image2/eb055966-6724-43f8-bbcc-d50648a8de36_200x200(1).png';


const items = [
  {
    src:'image/Vibrant_Girl.jpg',
    altText: 'Slide 1',
    caption: '',
    header: '@trevinho arts',
    key: '1'
  },
  {
    src:'image/ZarakiKenpachi.jpg',
    altText: 'Slide 2',
    caption: '',
    header: '@trevinho arts',
    key: '2'
  },
  {
    src:'image/kurosaki_ichigo.jpg',
    altText: 'Slide 3',
    caption: '',
    header: '@trevinho arts',
    key: '3'
  },
  {
    src:'image/madara_uchiha.jpg',
    altText: 'Slide 4',
    caption: '',
    header: '@trevinho arts',
    key: '4'
  },
 ,
  {
    src:'image/john_snow.jpg',
    altText: 'Slide 6',
    caption: '',
    header: '@trevinho arts',
    key: '6'
  }
]

class Home extends React.Component{

  render() {
    return(
      <div>
        <UncontrolledCarousel items={items}/>
        <br/>
        <div>
        <img className="title-logo" src={logo} alt=""/> 
        </div>
        <h2 align="center" className="Main-title">Welcome To Trevinho Arts</h2>
        <br/>
        <p align="center" className="text-2">
        I see art as a form or way to communicate thoughts and expressions to the world.
        My art work is based on the concept of pencil media as that was the type of art media that i saw fit
        and draws on various inspirations be it famous people , landscapes, animals, fictional characters, cultural media etc. 
        Most of my sketches are by reference from pictures that are gotten from the Internet upon which i attempt to draw exactly
        as what the picture depicts with successful attempts.
        </p> 
      </div>
  
    )
  }
}
 

export default Home;

   