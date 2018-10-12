import React from "react";
import {FaInstagram, FaFacebook, FaSnapchat, FaTwitter} from "react-icons/fa"
import "./Icon.css"


const Icon = () => {

    const iconFont = {
        color: "white"
    }

    return (
        <div id="box">
            <ul>
                <li className="snapchat_color">
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"><FaSnapchat style={iconFont}></FaSnapchat> </span>                   
                </li>
                <li className="instagram_color">
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"><FaInstagram style={iconFont}></FaInstagram></span>                    
                </li>
                <li className="facebook-color">
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"><FaFacebook style={iconFont}></FaFacebook></span>                    
                </li>
                <li className="twitter_color">
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"></span>
                    <span className="layer"><FaTwitter style={iconFont}></FaTwitter></span>                    
                </li>
            </ul>
        </div>
    )
}


export default Icon