import React from 'react';

import logo from '../images/6e0f361a-81df-443a-a042-f35ecaeeb9df_200x200.png'
const Home = () => {
    return(
      <div>
        <div>
            <img className="title-logo" src={logo} alt=""/>
        </div>
        <div className="text-container">
	       <h3>Welcome To Trevinho Arts</h3>
         <p className="paragraph-1">
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
         <p className="paragraph-2">
         My art work is based on the concept of pencil media and draws on various inspirations be it 
         famous people , landscapes, animals, fictional characters, cultural media, imagination from 
         the mind, i see it as a way to express or communicate my thoughts to the world.

         </p>
        </div>
        <footer>

        </footer>
      </div>
  
    )
}

export default Home;