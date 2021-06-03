import React from 'react'
import Inbox from './Inbox'
import "./Meeting.css"
import AddIcon from '@material-ui/icons/Add';

function Meeting() {
    return (
        <div className="Meeting">
            <div className="Meeting_Header">
                <label>Today - 3 Meeting</label>
                <label>Hide This</label>
            </div>
            <div className="Meeting_Cards">
                <div className="Meeting_Card">
                    <div className="Meeting_Card_Header">
                        <img src="https://i1.wp.com/www.eventstodayz.com/wp-content/uploads/2018/04/cute-profile-pic-2018.jpg?fit=768%2C768&ssl=1" alt="Avatar" />
                        <div className="Meeting_Card_Header_Details">
                            <h6>Aravindakumar</h6>
                            <label>aravindkmr007@gmail.com</label>
                            <span>10.30 AM</span>
                        </div>
                    </div>
                    <div className="Meeting_Card_Body">
                        <div className="Meetings_Pending_going">
                            <label>9 Members Going</label>
                            <span>2 pending</span>

                        </div>

                    </div>
                    <div className="Meeting_Card_Bottom">
                        View Details

                    </div>
                </div>
                <div className="Meeting_Card">
                    <div className="Meeting_Card_Header">
                        <img src="https://i1.wp.com/www.eventstodayz.com/wp-content/uploads/2018/04/cute-profile-pic-2018.jpg?fit=768%2C768&ssl=1" alt="Avatar" />
                        <div className="Meeting_Card_Header_Details">
                            <h6>Aravindakumar</h6>
                            <label>aravindkmr007@gmail.com</label>
                            <span>10.30 AM</span>
                        </div>
                    </div>
                    <div className="Meeting_Card_Body">
                        <div className="Meetings_Pending_going">
                            <label>9 Members Going</label>
                            <span>2 pending</span>

                        </div>

                    </div>
                    <div className="Meeting_Card_Bottom">
                        View Details

                    </div>
                </div>
                <div className="Meeting_Card">
                    <div className="Meeting_Card_Header">
                        <img src="https://i1.wp.com/www.eventstodayz.com/wp-content/uploads/2018/04/cute-profile-pic-2018.jpg?fit=768%2C768&ssl=1" alt="Avatar" />
                        <div className="Meeting_Card_Header_Details">
                            <h6>Aravindakumar</h6>
                            <label>aravindkmr007@gmail.com</label>
                            <span>10.30 AM</span>
                        </div>
                    </div>
                    <div className="Meeting_Card_Body">
                        <div className="Meetings_Pending_going">
                            <label>9 Members Going</label>
                            <span>2 pending</span>

                        </div>

                    </div>
                    <div className="Meeting_Card_Bottom">
                        View Details

                    </div>
                </div>
                <div className="Meeting_Card">
                    <div className="Meeting_Card_Add_Meeting">
                        <AddIcon fontSize="large" color="primary"/>
                      
                    </div>
                    <div className="Meeting_Card_Bottom">
                        Add Meetings
                    </div>
                </div>
            </div>
            <Inbox />            
            
        </div>
    )
}

export default Meeting
