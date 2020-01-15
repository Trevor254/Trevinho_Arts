import React from 'react';

const photo = require('../image2/IMG_20190222_000414_762.jpg')

const About = () => {
    return(
      <div className="row">
       <div className="col-10 mx-auto col-md-6 my-5">
          <img className="responsive-center" src={photo} alt=""/>
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h3 className="header3">About Artist</h3>
        <p className="text-light">
        My name is Trevor Richard Omondi. I was born on July 20th, 1999. I come from a humble background, second last born in a family of 4.
         I schooled at S.C.L.P Samaj School.Nairobi,Kenya from 2002 to 2016.My favorite subjects were Physics and Geography. I had a negative attitude in Mathematics 
        and that lead me to scoring poor grades in the subject .However, in time, i was able to change my attitude and therefore put into practice the concepts that 
        would be taught in class so i was able to score good marks in my final years of high  school. Having completed school in 2016, i then took up a course in Accounting at Oshwal College. Nairobi,kenya which was for 6 months. It did not turn out successfull as one would have hoped. 
        The following year i enrolled for a diploma course in Business IT at Strathmore University,Nairobi,Kenya which went on for two years. Along the way i got interested in a certain field 
        in IT which known as cyber security so that pushed me to put effort into my studies which yielded fruitful results as i was able to graduate towards the end of 2019.
        </p>
        </div>
      </div>

    )
}


export default About;

