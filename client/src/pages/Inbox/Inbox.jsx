import React from 'react';
import './Inbox.css';
/*import {Message, Title, Sender, Recipient, SenderAvatar} from = require(');*/


const Inbox = () => {
  const [match, setMatch] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const callOurYelpAPI = async () => {
      try {
        // FIX ME
        const resp = await axios.get('/api/places');
        setPlaces(resp.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };

//     callOurYelpAPI();
//   }, []);
//   return (
//     <div id="app" className="container">
//       <h1 className="title">Wyncode Does Lunch</h1>
//       {isError && <div className="err">Oh no, something went wrong :(</div>}
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="tile is-ancestor" style={{ flexWrap: 'wrap' }}>
//           {places.length &&
//             places.map((place) => <Card key={place.id} place={place} />)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


const Inbox = () => {
  return(
    <div>

      <div className="background">

        <div className="title">YOUR MESSAGES</div>

          <div className="incoming"> 

            <span className="avatar" /*backgroundimg={}*/></span>

            <div className="messageBox">
              <div classsName="messageTitle">SUBJECT: msgTitle</div>
              <div className="text"> incomingMessage </div>
            </div>

          </div>

          <div className="button"><span className="buttonText">Upgrade Membership</span></div>

      </div>

    </div>


  );
};

export default Inbox;
