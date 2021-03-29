import React from 'react';
import EmailEntry from './emailEntry';
var fetch = require('node-fetch')
var EmailList = async function(emails){

    console.log("clicked")
    /*var url = 'http://172.27.219.234:3001/emails'
    var response = await fetch(url)
    //console.log(response)
    const emails = await response.json()
    console.log(emails)*/
    return(
        <div>
        {emails.map(function (currentEmail) {
                return (
                    <EmailEntry
                    email={currentEmail}
                    key={currentEmail.id}
                    />
                );
            })
        }
        </div>
    )
  
    
}


export default EmailList;

