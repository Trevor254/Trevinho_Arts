import React from 'react';

const photo = require('../images/IMG_20190222_000414_762.jpg')
const About = () => {
    return(
        <div>
          <h2 align="center">About Artist</h2>
          <br/>
          <br/>
          <br/>
          <img className="responsive-center" src={photo} alt=""/>
          <br/>
          <p align="center">My name is Trevor Richard Omondi. I was born on July 20th, 1999. I come from a humble background, second last born in a family of 4.
        I schooled at S.C.L.P Samaj School.Nairobi,Kenya from 2002 to 2016 so i was in one school throughout. Some might think being in one school that long must
        have been really boring but not for me it wasn't.The friends i made along the way made it worth while, we had lots of adventures together and drama as well.
        My favorite subjects were Physics and Geography. Math was my kryptonite. I'd perform quite poorly in math mostly because of the attitude i had towards it. Fortunately for me,
        my attitude changed and so did my grades for math. Having completed school in 2016, i then took up a course in Accounting at Oshwal College. Nairobi,kenya which was 6 months. Long story short 
        i came to discover accounting wasn't for me either so i left oshwal the same way i came in, with nothing. After that i tried my luck in Business Information Technology, a one
        year course offered at Strathmore University. Nairobi,Kenya . Along the way i got interested in a certain field in IT which known as cyber security so that pushed me to put effort into my studies a
        nd successfully managed to graduate with a diploma in Business IT. I am pursuing to learn cyber security so as to become a cyber security expert
          </p>
        </div>
    )
}

export default About;