import React from 'react';
import axios from 'axios';
import './Matches.css';
import Scorpio from '../../components/Images/Vectors/Matches/Scorpio.png';
import Capricorn from '../../components/Images/Vectors/Matches/Scorpio.png';
import Pisces from '../../components/Images/Vectors/Matches/Scorpio.png';
import ManThree from '../../components/Images/Vectors/Matches/ManThree.svg';


const Matches = () => {
    useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

// let match = User.match;
// so when seeded, let match.(....) be what you've got down there

  return ( 
    <div className="background">

      <h1 className="title">YOUR BEST MATCHES</h1>

        <div className="matchProfile" id="linkToMatchProfile">

            <div className="dynamicPicture">
              <img src="" alt={ManThree} className="matchImage" />
                <span className="viewProfile">View Profile</span>
                <img src={Scorpio} alt="{ascendant}" className="ascendant" />
                <img src={Pisces} alt="{moon}" className="moon" />
                <img src={Capricorn} alt="{starsign}" className="starsign" />
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
