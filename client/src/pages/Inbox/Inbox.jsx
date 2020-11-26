import React from 'react';
import './Inbox.css';

// const Inbox = () => {
//   const [match, setMatch] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [isError, setError] = useState(false);
//   const []

useEffect(() => {
  axios
    .get(`/api/products/${id}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);

const Inbox = () => {
  return (
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

        <div className="button">
          <span className="buttonText">Upgrade Membership</span>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
