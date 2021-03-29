import React from 'react';
import EmailEntry from './emailEntry';

var EmailList = ({ videos}) => (
    <div>
      {videos.map(function (currentVideo) {
        return (
          <EmailEntry
            email={currentVideo}
            key={currentVideo.id}
            
          />
        );
      })}
    </div>
  );

    


export default EmailList;

