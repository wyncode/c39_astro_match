// import React from 'react';
// import axios from 'axios';
// import { AppContext } from '../../context/AppContext';
// import './Matches.css';
// //import pictures?//

// const Matches = () => {
//   const { setCurrentUser } = useContext(AppContext);

//     useEffect(() => {
//     axios
//       .get(`/api/users/match/${id}`);
//       .then((response) => {
//         setCurrentUser(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   return (
//     <div className="background">

//       <h1 className="title">YOUR BEST MATCHES</h1>
//       {currentUser.matches.map((match) => {
//              return(
//         <div className="matchProfile" id="linkToMatchProfile">

//             <div className="dynamicPicture">
//              <img src="" alt={match.name} className="matchImage" />

//                 <span className="viewProfile">View Profile</span>
//                 <img src={match.ascendant} alt={match.ascendant} className="ascendant" />
//                 <img src={match.moon} alt={match.moon} className="moon" />
//                 <img src={match.starsign} alt={match.starsign} className="starsign" />
//             </div>

//             <div className="matchStats">
//               <div className="name">{match.firstName}</div>
//               <div className="age">AGE: {match.age}</div>
//               <div className="location">{match.city}, {match.state}</div>
//               <div className="sunMoonAscendant"><span></span><span></span><span></span></div>
//               <div className="percentageMatch">{match.partnerPreference.zodiac.compatibility.score}% Match</div>
//               <div className="matchBio">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur. </div>
//             </div>)   })}
//             <div className="button" ><span className="buttonText">Upgrade Membership</span></div>

//         </div>

//     </div>
//   )
// };

// export default Matches;
