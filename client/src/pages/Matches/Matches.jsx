import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Matches.css';
import Aries from '../../components/Images/ZodiacImages/Aries.svg';
import Gemini from '../../components/Images/ZodiacImages/Gemini.svg';
import Taurus from '../../components/Images/ZodiacImages/Taurus.svg';
import Cancer from '../../components/Images/ZodiacImages/Cancer.svg';
import Leo from '../../components/Images/ZodiacImages/Leo.svg';
import Virgo from '../../components/Images/ZodiacImages/Virgo.svg';
import Libra from '../../components/Images/ZodiacImages/Libra.svg';
import Scorpio from '../../components/Images/ZodiacImages/Scorpio.svg';
import Capricorn from '../../components/Images/ZodiacImages/Capricorn.svg';
import Sagittarius from '../../components/Images/ZodiacImages/Sagittarius.svg';
import Aquarius from '../../components/Images/ZodiacImages/Aquarius.svg';
import Pisces from '../../components/Images/ZodiacImages/Pisces.svg';

const Matches = () => {
  const [match, setMatch] = useState('');

  useEffect(() => {
    axios
      .get(`/api/users/matches/`, { withCredentials: true })
      .then((response) => {
        setMatch(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getImageBySign = (sunSign) => {
    const sunSignMap = {
      Leo: Leo,
      Gemini: Gemini,
      Aries: Aries,
      Taurus: Taurus,
      Cancer: Cancer,
      Virgo: Virgo,
      Libra: Libra,
      Scorpio: Scorpio,
      Capricorn: Capricorn,
      Sagittarius: Sagittarius,
      Aquarius: Aquarius,
      Pisces: Pisces
    };
    return sunSignMap[sunSign];
  };

  return (
    <div className="background">
      <h1 className="intro">YOUR BEST MATCHES</h1>
      <div className="matchCard">
        {match &&
          match.map((match) => {
            return (
              <Link
                to={`/match/${match.match_id}`}
                className="linkToMatchProfile"
              >
                <div className="matchProfile">
                  <div className="dynamicPicture">
                    <img
                      src={match.avatar}
                      alt={match.name}
                      className="matchImage"
                    />
                    <span className="viewProfile">View Profile</span>
                  </div>
                  <div className="matchStats">
                    <div className="name">{match.firstName}</div>
                    <div className="age">AGE: {match.age}</div>

                    <div className="sunMoonAsc">
                      <div className="matchSign">
                        <img src={getImageBySign(match.sunSign)} />
                      </div>
                      <div className="matchSign">
                        <img src={getImageBySign(match.moonSign)} />
                      </div>
                      <div className="matchSign">
                        <img src={getImageBySign(match.ascSign)} />
                      </div>
                    </div>
                    <div className="percentageMatch">{match.score}% Match</div>
                    <div className="matchBio">{match.bio}</div>
                  </div>
                </div>
              </Link>
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
