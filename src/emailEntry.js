import React from 'react';
var EmailEntry = function ({email}){
    return(
    <div><div
       // className="video-list-entry-title"
       // onClick={() => setCurrentVideo(video)}
      >
        {email.subject}
      </div>
      <div >{email.sender}</div>
    </div>
    )

}
export default EmailEntry;