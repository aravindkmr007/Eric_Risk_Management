import React from 'react'
import "./Content.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VideocamIcon from '@material-ui/icons/Videocam';
import Meeting from './Meeting';

function Content() {
    return (
        <div className="Content">
            <div className="Content_Header">
                <h5>Messages</h5>
                <div className="Content_Header_Right">
                    <div className="Content_Header_Right_Pages">
                        <ArrowBackIcon />
                        <label>1-50 pages</label>
                        <ArrowForwardIcon />
                    </div>
                    <button className="Button_Active">
                        All
                    </button>
                    <button className="Button_InActive">
                        Unread
                    </button>
                    <button className="Button_InActive">
                        Important
                    </button>
                </div>
            </div>
            <div className="LiveCall">
                <div className= "LiveCall_Avathar">
                    <label>a</label>
                </div>
                <div className="LiveCall_Details">
                    <h6>Sales Presentation - Live Call</h6>
                    <label>aravindkmr007@gmail.com</label>
                    <span>Started 3 min ago</span>
                </div>
                <div className="LiveCall_Invited">
                    <button>
                        Your Invited
                    </button>
                </div>
                <div className="LiveCall_Join">
                    <button>
                        <VideocamIcon fontSize="small" style={{color:" lightgrey" }}/>
                        Join Now
                    </button>
                </div>

            </div>
            <Meeting />

            
        </div>
    )
}

export default Content
