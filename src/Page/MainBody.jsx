import React from 'react';
import '../CSS/MainBody.css';
import Cards from './Cards'

function MainBody() {
  return (
    <div className="MainBody">
      <div className="left">
        <div> Experts Info</div>
        <br />
        <Cards/>
      </div>

      <div className="Main">
        I am the Main Body!
      </div>
      
      <div className="right">
        <div> Experts</div>
        <br />
        <img src= { require('../images/expert_1.png')} alt='expert_1'/>
        <img src= { require('../images/expert_1.png')} alt='expert_2'/>
        <img src= { require('../images/expert_3.png')} alt='expert_3'/>
        <img src= { require('../images/expert_4.png')} alt='expert_4'/>
      </div>
    </div>
  );
}

export default MainBody;
