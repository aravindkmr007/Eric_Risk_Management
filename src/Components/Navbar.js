import React from 'react'
import "./Navbar.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PeopleIcon from '@material-ui/icons/People';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar_Card">
                <div className = "Card">
                    <div className="Card_Header">
                        <img src="https://th.bing.com/th/id/OIP.4iLqWG6iAIygCf0Y1Tu7OQHaEo?pid=ImgDet&rs=1" alt="Avatar" />
                        <div className = "Avatar_Details">
                            <label>Welcome Aravindakumar</label>
                            <span>Super Admin</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <DashboardIcon />
                            <label>Overview</label>
                        </li>
                        <li>
                            <BookmarkIcon />
                            <label>Reservation</label></li>
                        <li>
                            <CreditCardIcon />
                           <label>Meeting</label>
                        </li>
                        <li>
                            <PeopleIcon />
                            <label>Customers</label>
                        </li>
                        <li>
                            <ConfirmationNumberIcon />
                            <label>Tickets</label>
                        </li>
                        <li className="active">
                            <ForumIcon/>
                            <label>Message</label>
                        </li>
                        <li>
                            <PersonIcon />
                            <label>Profile</label>
                        </li>
                    </ul>
                </div>
                <div className="Navbar_Bottom">
                    <PowerSettingsNewIcon />
                    <label>Log Out</label>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
