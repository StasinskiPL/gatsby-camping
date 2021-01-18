import { Link } from 'gatsby'
import React from 'react'
import {FaTimes} from "react-icons/fa"
import links from '../constants/links'

const Slider = ({openSlider,setOpenSlider}) => {

    return (
        <aside className={`slider ${openSlider ? "active" : ""}`}>
            <div className="slider-inner">
                <div className="slider-header">
                    <button onClick={()=>setOpenSlider(false)}>
                        <FaTimes/>
                    </button>
                        </div>
                    <ul className="slider-links">
                        {links.map((link,index)=>{
                            return(
                                <li className="slider-link" key={index}>
                                    <Link to={link.url}
                                    activeClassName="active" >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            </div>
            
        </aside>
    )
}

export default Slider
