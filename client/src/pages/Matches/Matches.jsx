import React from 'react';
import axios from 'axios';
import './Matches.css';
import Scorpio from '../../components/Images/Vectors/Matches/Scorpio.png';
import Capricorn from '../../components/Images/Vectors/Matches/Scorpio.png';
import Pisces from '../../components/Images/Vectors/Matches/Scorpio.png';
import ManThree from '../../components/Images/Vectors/Matches/ManThree.svg';


// axios.get('api/user', {withCredential})

// // var query = Model.find({});

// // query.where('field', 5);
// // query.limit(5);
// // query.skip(100);

// // query.exec(function (err, docs) {
// //   // called when the `query.complete` or `query.error` are called
// //   // internally
// // });




const Matches = () => {
//   // some sort of state that will capture the data retrieval 
//   const [matches, setMatches] = useState(null);


//   // make a call to the backend to retrieve the users matches 
//   // useEffect to the get users matches, and set the matches state variable to the response
//   useEffect(async () => {
//     let match = found
//     let compatible = user.compatible;
//     let preferences = '{(ageMin < match.age < ageMax), (distMin < match.age < distMax), (match.findOne() user.prefSun), (religion), (identity)}';
//     let meetsPreferences = {^^^^^ same};
//     // if user._id === match.preferences[i]

//     //OR, FOR SWIPE CARD THEN USE FINDONE ON LOGIN. THIS WAY, IT'S READY AND ON SWIPE, START TO FIND ANOTHER ONE. MAY REDUCE SECONDS.
//     //BUT IF WE MAP IT... IT WILL BE DIFFERENT. 10 PEOPLE - WHO WILL GET VOTED OFF THE ISLAND AND REPLACED - TYPE THING

//     let match = found;

//     const potential = (async, ( {
//       await 
//     }))


//     return () => {
//       cleanup
//     }
//   }, [input])


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
