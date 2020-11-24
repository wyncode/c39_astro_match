import React from 'react';
import './Matches.css';

const Matches = () => {
  // some sort of state that will capture the data retrieval 
  // const [matches, setMatches] = useState(null)

  // make a call to the backend to retrieve the users matches 
  // useEffect to the get users matches, and set the matches state variable to the response


  return ( 
    <div className="background">

      <h1 className="navLogo"><img src="../../components/Images/Vectors/LogoHorizontal.png" className="logo" />AstroDate</h1>
      <h1 className="title">YOUR BEST MATCHES</h1>

        <div className="matchProfile" id="linkToMatchProfile">

            <div className="dynamicPicture">
              <img src="./academic.png" alt="match img" className="matchImage" />
                <span className="viewProfile">View Profile</span>
                <img src="../../components/Images/Vectors/Scorpio-1.png" alt="{ascendant}" className="ascendant" />
                <img src="../../components/Images/Vectors/Scorpio-1.png" alt="{moon}" className="moon" />
                <img src="../../components/Images/Vectors/Capricorn.png" alt="{starsign}" className="starsign" />
            </div>

            <div className="matchStats">
              <div className="name">JOHN</div>
              <div className="age">AGE: 49</div>
              <div className="location">Falls Church, VA</div>
              <div className="percentageMatch">98% Match</div>
              <div className="matchBio">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur. </div>
            </div>

            <div className="button" ><span className="buttonText">Upgrade Membership</span></div>

        </div>
  
    </div> 
  )
};

export default Matches;
