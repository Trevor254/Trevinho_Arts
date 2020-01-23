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
  {
    src:'image/john_snow.jpg',
    altText: 'Slide 5',
    caption: '',
    header: '@trevinho arts',
    key: '5'
  }
]

class Home extends React.Component{

  render() {
    return(
      <div>
        <UncontrolledCarousel items={items}/>
        <div>
        <img className="title-logo" src={logo} alt=""/> 
        </div>
        <h2 align="center" className="Main-title">Welcome To Trevinho's Pencil Arts</h2>
      </div>
  
    )
  }
}
 

export default Home;

   