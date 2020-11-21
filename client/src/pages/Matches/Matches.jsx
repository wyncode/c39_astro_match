import React from 'react';
import './Matches.css';
import { Container } from '@material-ui/core';

const Matches = () => {
  // some sort of state that will capture the data retrieval 
  // const [matches, setMatches] = useState(null)

  // make a call to the backend to retrieve the users matches 
  // useEffect to the get users matches, and set the matches state variable to the response


  return ( 
    <>
      <div className="try">
    <h1 className="headerToCome">AstroDate</h1>
    <h1 className="title">YOUR BEST MATCHES</h1>
      <div className="matchProfile" id="linkToMatchProfile">
        <div className="leftPanel">
          <div className="dynamicPicture">
            <img src="./academic.png" alt="match img" className="matchImage" />
               <img src="./twitterheart.jpg" alt="{ascendant}" className="ascendant" />
               <img src="./twitterheart.jpg" alt="{moon}" className="moon" />
               <img src="./twitterheart.jpg" alt="{starsign}" className="starsign" />
          </div>
        </div>
         <div className="matchStats">
           <ul>
             <li className="name">JOHN</li>
             <li className="age">AGE: 49</li>
             <li className="location">Falls Church, VA</li>
             <li className="percentageMatch">98% Match</li>
           </ul>
         <div className="matchBio"></div>
      </div>
      </div>
      </div>  
      </> 
  )
};

export default Matches;
