import React, { useContext, /*useState*/ } from 'react';
// import { AppContext } from '../../context/AppContext';
// import axios from 'axios';
import MessageCard from './MessageCard';
import './Inbox.css';


const Inbox = () => {
  return (
    <div>
      <div className="messageCard" >
          {data.map((data, index) => {
              return(
                <MessageCard key="{data._id}" description="{data.lastMessage}" sender="{data.firstName}" imgName="{data.imgName}" />
                );
          })};
      </div>
    </div>
  )
}

export default Inbox



// const Card = ({ place }) => {
//   return (
//     <div className="tile is-parent">
//       <div className="tile is-child card" style={{ width: 200 }}>
//         <div className="card-image">
//           <figure
//             className="image is-4by3"
//             style={{
//               backgroundImage: `url(${place.image_url})`,
//               backgroundPosition: 'center',
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat'
//             }}
//           >
//             <a href={place.url}>
//               <div style={{ height: 100 }}></div>
//             </a>
//           </figure>
//         </div>
//         <div className="card-content is-centered">
//           <p className="title is-5">{place.name}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;