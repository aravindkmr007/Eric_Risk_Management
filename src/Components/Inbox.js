import React from 'react'
import "./Inbox.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Inbox() {
    return (
        <div className="Inbox">
            <label className="Inbox_Header">Inbox - 678</label>
            <div className="Inbox_Messages">
                <div className="Inbox_Message">
                    <input type="checkbox" />
                    <div className="Inbox_Img">
                        <img src="https://th.bing.com/th/id/Rd85ac9247969772845abdd646b9b3ae5?rik=ZQCh01icsoqrGw&riu=http%3a%2f%2fimages.askmen.com%2f1080x540%2f2016%2f01%2f25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg&ehk=BSMb91PJm4uvb%2fqiQC83%2fo6ToljKI%2fqvskSSZPjRHKc%3d&risl=&pid=ImgRaw" alt="Avatar" />

                    </div>
                    <label className="Inbox_Name"> Aravindakumar</label>
                    <label className="Inbox_Field">Unit Testing</label>
                    <p>Text lines shuffler tool What is a text lines shuffler? This ....</p>
                    <MoreVertIcon />
                    
                </div>
                <div className="Inbox_Message">
                    <input type="checkbox" />
                    <div className="Inbox_Img">
                        <img src="https://th.bing.com/th/id/Rd85ac9247969772845abdd646b9b3ae5?rik=ZQCh01icsoqrGw&riu=http%3a%2f%2fimages.askmen.com%2f1080x540%2f2016%2f01%2f25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg&ehk=BSMb91PJm4uvb%2fqiQC83%2fo6ToljKI%2fqvskSSZPjRHKc%3d&risl=&pid=ImgRaw" alt="Avatar" />

                    </div>
                    <label className="Inbox_Name"> Aravindakumar</label>
                    <label className="Inbox_Field">Unit Testing</label>
                    <p>Text lines shuffler tool What is a text lines shuffler? This ....</p>
                    <MoreVertIcon />
                    
                </div>
                <div className="Inbox_Message">
                    <input type="checkbox" />
                    <div className="Inbox_Img">
                        <img src="https://th.bing.com/th/id/Rd85ac9247969772845abdd646b9b3ae5?rik=ZQCh01icsoqrGw&riu=http%3a%2f%2fimages.askmen.com%2f1080x540%2f2016%2f01%2f25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg&ehk=BSMb91PJm4uvb%2fqiQC83%2fo6ToljKI%2fqvskSSZPjRHKc%3d&risl=&pid=ImgRaw" alt="Avatar" />

                    </div>
                    <label className="Inbox_Name"> Aravindakumar</label>
                    <label className="Inbox_Field">Unit Testing</label>
                    <p>Text lines shuffler tool What is a text lines shuffler? This ....</p>
                    <MoreVertIcon />
                    
                </div>

            </div>  
        </div>
    )
}

export default Inbox
