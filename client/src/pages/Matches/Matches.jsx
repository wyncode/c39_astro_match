import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Matches.css';
import { Aries } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Aries.jpg';
import { Gemini } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Gemini.jpg';
import { Taurus } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Taurus.jpg';
import { Cancer } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Cancer.jpg';
import { Leo } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Leo.jpg';
import { Virgo } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Virgo.webp';
import { Libra } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Libra.webp';
import { Scorpio } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Scorpio.webp';
import { Capricorn } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Capricorn.webp';
import { Sagittarius } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Sagittarius.webp';
import { Aquarius } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Aquarius.webp';
import { Pisces } from '../../components/Images/Vectors/Matches/ZodiacSymbols/Signs/Glow/Pisces.webp';
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
  }, []);

  return (
    <div className="background">
      <h1 className="intro">YOUR BEST MATCHES</h1>
      <div className="matchCard">
        {match &&
          match.map((match) => {
            return (
              <div className="matchProfile" id="linkToMatchProfile">
                <div className="dynamicPicture">
                  <img
                    src={match.avatar}
                    alt={match.name}
                    className="matchImage"
                  />
                  <span className="viewProfile">View Profile</span>
                  <img
                    src={`${match.sunSign}`}
                    alt={match.sunSign}
                    className="ascendant"
                  />
                  <img
                    src={`${match.moonSign}`}
                    alt={match.moonSign}
                    className="moon"
                  />
                  <img
                    src={`${match.ascSign}`}
                    alt={match.ascSign}
                    className="starsign"
                  />
                </div>
                <div className="matchStats">
                  <div className="name">{match.firstName}</div>
                  <div className="age">AGE: {match.age}</div>

                  <div className="sunMoonAsc">
                    <div className="matchSign">
                      <img src={match.sunSign} /> {match.sunSign}
                    </div>
                    <div className="matchSign">
                      <img src={match.moonSign} /> {match.moonSign}
                    </div>
                    <div className="matchSign">
                      <img src={match.ascSign} /> {match.ascSign}
                    </div>
                  </div>

                  <div className="percentageMatch">{match.score}% Match</div>
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
