import React from 'react'
import '../App.css';
import {SidebarData} from './SidebarData'
import Logo from '../images/Divum.svg'

function Sidebar() {
  return (
    // <div>Logo</div>
    <div className='Sidebar'>
        {/* <div className='logo'>
            <img src=''
        </div> */}
        <img src={Logo} className='logo' alt='images'/>
        <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
            return (
                <li 
                    key={key} 
                    className='row'
                    id={window.location.pathname === val.link ? "active": "" }
                    onClick={()=> {window.location.pathname=val.link;}}>
                    
                    <div id='icon'>{val.icon}</div>
                    <div id='title'>
                        {val.title}
                    </div>
                </li>
        )
    })}
    </ul>
    </div>
  )
}

export default Sidebar