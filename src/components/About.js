import React from 'react';

const photo = require('../image2/IMG_20190222_000414_762.jpg')
const About = () => {
    return(
        <div>
          <h1 align="center">About Artist</h1>
          <br/>
          <br/>
          <br/>
          <img className="responsive-center" src={photo} alt=""/>
          <br/>
          <p align="center">My name is Trevor Richard Omondi. I was born on July 20th, 1999. I come from a humble background, second last born in a family of 4.
        I schooled at S.C.L.P Samaj School.Nairobi,Kenya from 2002 to 2016.My favorite subjects were Physics and Geography. I had a negative attitude in Mathematics 
        and that lead me to scoring poor grades in the subject. However, in time, i was able to change my attitude and therefore put into practice the concepts that 
        would be taught in class so i was able to score good marks in my final years of high  school. Having completed school in 2016, i then took up a course in Accounting at Oshwal College. Nairobi,kenya which was for 6 months. It did not turn out successfull as one would have hoped. 
        The following year i enrolled for a diploma course in Business IT at Strathmore University,Nairobi,Kenya which went on for two years. Along the way i got interested in a certain field 
        in IT which known as cyber security so that pushed me to put effort into my studies which yielded fruitful results as i was able to graduate towards the end of 2019.
          </p>
          <br/>
        <p align="center">
          My passions and hobbies lie in Art, Aviation, Music, Cycling, Swimming and adventure seeking. My main passions are art and aviation. I have been a die hard fan of everything aviation
          ever since childhood, I've always admired the engineering marvels that are aircrafts and it is my life long dream to be a pliot some day in the future. When it comes to art, i had 
          a friend who taught me how to draw even though art was being taught in school it never really gained my interest, not till later on as i got older neither would i take art seriously,
          but i began to gain interest whenever i would draw to pass time or whenever i would get bored and had nothing else to do. I found my talent in drawing using pencil media which is what
          my art works are heavily based on and in time having sought out advice from other artists is when the idea of having your hobbie become a way for one to earn some income came to mind
          and also serves as the reason i decided to learn the skills to create a website where i can showcase my talent to the world for people to see.
       </p>
        </div>
    )
}

export default About;