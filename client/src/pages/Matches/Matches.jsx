import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Matches.css';
import Aquarius from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Aquarius.webp';
import Leo from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Leo.jpg';
//import pictures?//

const Matches = () => {
  const [match, setMatch] = useState('');
  useEffect(() => {
    axios
      .get(`/api/users/matches/`, { withCredentials: true })
      .then((response) => {
        setMatch(response.data);
        console.log(response.data);
        console.log(match);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match]);

  return (
    <div className="background">
      <h1 className="intro">YOUR BEST MATCHES</h1>
      <div className="matchCard">
        {match &&
          match.map((match) => {
            return (
              <div className="matchProfile" id="linkToMatchProfile">
                <div className="dynamicPicture">
                  <img src="" alt={match.name} className="matchImage" />
                  <span className="viewProfile">View Profile</span>
                  <img
                    src={Aquarius}
                    alt={match.ascendant}
                    className="ascendant"
                  />
                  <img
                    src="https://static.displate.com/280x392/displate/2019-07-10/72e319e39e308bb5d06cd81bef1e8c3a_220ce183c372ebef78410fe2e74bfdb2.jpg"
                    alt={match.moon}
                    className="moon"
                  />
                  <img src={Leo} alt={match.starsign} className="starsign" />
                </div>
                <div className="matchStats">
                  <div className="name">{match.firstName}</div>
                  <div className="age">AGE: {match.age}</div>
                  <div className="location">
                    {match.city}, {match.state}
                  </div>
                  <div className="sunMoonAscendant">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="percentageMatch">% Match</div>
                  <div className="matchBio">{match.bio}</div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="button">
        <span className="buttonText">Upgrade Membership</span>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Matches;
