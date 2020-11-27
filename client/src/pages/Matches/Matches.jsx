import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Matches.css';
//import pictures?//

const Matches = () => {
  const [match, setMatch] = useState();
  useEffect(() => {
    axios
      .get(`/api/users/matches/`)
      .then((response) => {
        setMatch(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="background">
      <h1 className="title">YOUR BEST MATCHES</h1>
      {match.map((match) => {
        return (
          <>
            <div className="matchProfile" id="linkToMatchProfile">
              <div className="dynamicPicture">
                <img src="" alt={match.name} className="matchImage" />
                <span className="viewProfile">View Profile</span>
                <img
                  src={match.ascendant}
                  alt={match.ascendant}
                  className="ascendant"
                />
                <img src={match.moon} alt={match.moon} className="moon" />
                <img
                  src={match.starsign}
                  alt={match.starsign}
                  className="starsign"
                />
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
                <div className="matchBio">
                  Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
                  amet, consectetur.Lorem ipsum dolor sit amet, consectetur.{' '}
                </div>
              </div>
              <div className="button">
                <span className="buttonText">Upgrade Membership</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Matches;
