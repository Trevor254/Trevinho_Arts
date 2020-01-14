import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import logo from '../image2/logo.png'
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
  }
]
const Home = () => {
    return(
      <div>
        <div>
        <img className="title-logo" src={logo} alt=""/> 
        </div>
        <br/>
        <UncontrolledCarousel items={items}/>
        <br/>
        <h2 align="center" className="Main-title">Welcome To Trevinho Arts</h2>
        <br/>
        <br/>
        <p align="center" className="text-1">
        The common pencil derived from the latin pronounciation ' peniculus ' meaning brush, 
         used by draughtsmen around the world, is the most immediate and sensitive of the drawing 
         media being as capable of producing a quick sketch or a finely worked drawing. 
         Pencil drawing, drawing executed with an instrument composed of graphite enclosed in a 
         wood casing and intended either as a sketch for a more elaborate work in another medium, 
         an exercise in visual expression, or a finished work. The cylindrical graphite pencil, 
         because of its usefulness in easily producing linear gray-black strokes, became the successor 
         of the older, metallic drawing stylus, with which late medieval and Renaissance artists and 
         tradesmen sketched or wrote on paper, parchment, or wood.
        </p>
        <br/>
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

export default Home;

