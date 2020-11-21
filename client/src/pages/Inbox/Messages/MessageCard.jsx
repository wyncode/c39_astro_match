import React from 'react';

const MessageCard = ({ /*data*/ }) => {
    return (
        <div>
            <div className="messageBar" style={{ width: 200, height: 50 }}>
                <div className="matchImage" float="left">
                <img src ="" alt="profile-picture" width={250} height={250} roundedCircle />
                </div>
                <div class="sender">
                    {/* {data.firstName} */}
                </div>
                <div className="messagePreview" float="right">
                    {/* {data.lastMessage} */}
                </div>
            </div>
        </div>
    );
    };

export default MessageCard