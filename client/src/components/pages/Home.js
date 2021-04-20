import React from "react";
import Logo from "../../styles/images/logo.png"

const Home = () => {

    return (
        <div>
            <div className="Header">
            <img style={{display:"block" ,marginLeft:"53.5%", marginRight:"46.5%", width:"50%", height:"auto"}} src={Logo} alt="logo"></img>
                <p style={{color:"#3B4B64"}} className="line-1 anim-typewriter">swipe to your heart's content</p>
            </div>

        </div>
    )

}

export default Home;