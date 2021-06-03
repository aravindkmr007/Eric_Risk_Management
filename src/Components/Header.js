import React from 'react'
import "./Header.css"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="Header">
            <h6>BOARDASH</h6>
            <input placeholder="Search Message,People,ticket" />
            <button>
                    <SearchIcon />
            </button>
            <div className ="Header_Alt">
                <NotificationsNoneIcon />
                Set Alert
            </div>
            <div className="Avatar">
                <img src="https://th.bing.com/th/id/OIP.4iLqWG6iAIygCf0Y1Tu7OQHaEo?pid=ImgDet&rs=1" alt ="avatar"/>
                <label>Aravindakumar</label>

            </div>
            
        </div>
    )
}

export default Header
