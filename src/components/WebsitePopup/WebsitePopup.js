// Import CSS
// import "./Popup.scss"

import React, { useEffect, useState } from "react"

import newLogo from "../../images/newLogo.svg"
import rightUp from "../../images/Icon.svg"
import textCircle from "../../images/textCircle.svg"

// import Navigation from "../Navigation/Navigation"


const WebsitePopup = props => {
  

  // const adres = props.data.socials.adres;
  // const postcode = props.data.socials.postcode;
  // const email = props.data.socials.email;
  // const telefoon = props.data.socials.telefoon;

  const [displayPopUp, setDisplayPopUp] = useState(true);

  // when pop-up is closed this function triggers, we pass it to 'onClose' property of the modal
  const closePopUp = () => {
    // setting key "seenPopUp" with value true into localStorage
    localStorage.setItem("seenPopUp", true);
    // setting state to false to not display pop-up
    setDisplayPopUp(false);
  };

  useEffect(() => {
    // getting value of "seenPopUp" key from localStorage
    let returningUser = localStorage.getItem("seenPopUp");
    // if it's not there, for a new user, it will be null
    // if it's there it will be boolean true
    // setting the opposite to state, false for returning user, true for a new user
    setDisplayPopUp(!returningUser);
  }, []);

  // useEffect(() => {
  //   var tween = KUTE.to('#phone',
  //   {path: '#envelope'},
  //   {
  //     easing: 'easingCubicInOut', 
  //     yoyo: true, repeat: 300, duration: 2500,repeatDelay: 1000,
  //   }
  //   ).start();
  // });

  


  let classes = "open";
  
  if (displayPopUp) {
    classes = "open";
  } else {
    classes = "";
  }



  return (
    <>
      <div className={`popupOutside ${classes}`}></div>
      <div className={`WebsitePopup ${classes} `}>
        {/* <div className={`popup__icon ${classes}`} onClick={togglePopup}>
          <i class="fas fa-info"></i>
          <svg id="morph-example" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path id="info" style={{visibility:'hidden'}}  d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/>
            <path id="envelope" style={{visibility:'hidden'}}  d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"/>
            <path id="phone" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
          </svg>
        </div> */}
        <div className={`WebsitePopup__content`}>
          <span className="close" onClick={closePopUp}><i class="fal fa-times"></i></span>

          <img  src={newLogo} className="popupLogo" alt="vacature button" />
          <div className="content">
            <p>Met een team van specialisten werken wij voor merken met ambitie. Met trots kondigen wij onze nieuwe branding aan vanuit ons nieuwe domein in Zwolle. Onze site is in de maak, dus houd ons in de gaten voor wat komt. Jouw toekomst met ons begint hier.</p>
          </div>
          

          <a class="btn btn-advice" target="_blank" href="https://creatiefdigitaalbureau.nl">bekijk de huisstijl <img src={rightUp} alt="" /></a>
          <img className="mb-5 textCircle" src={textCircle} alt="vacature button" />
        </div>


        
      </div>
    </>
  )
}

export default WebsitePopup
