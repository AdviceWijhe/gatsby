// Import CSS
import "./Popup.scss"

import React, { useEffect, useState }  from "react"

import KUTE from 'kute.js'

// import Navigation from "../Navigation/Navigation"


const Popup = props => {
  

  const adres = props.data.socials.adres;
  const postcode = props.data.socials.postcode;
  const email = props.data.socials.email;
  const telefoon = props.data.socials.telefoon;

  const [openPopup, setOpenPopup] = useState(false)

  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }

  const closePopup = () => {
    setOpenPopup(false);
  }

  // useEffect(() => {
  //   var tween = KUTE.to('#phone',
  //   {path: '#envelope'},
  //   {
  //     easing: 'easingCubicInOut', 
  //     yoyo: true, repeat: 300, duration: 2500,repeatDelay: 1000,
  //   }
  //   ).start();
  // });

  


  let classes = "";
  
  if (openPopup) {
    classes = "open";
  } else {
    classes = "";
  }


  console.log(adres);

  return (
    <>
      <div className="popup">
        <div className={`popup__icon ${classes}`} onClick={togglePopup}>
          <i class="fas fa-info"></i>
          {/* <svg id="morph-example" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path id="info" style={{visibility:'hidden'}}  d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/>
            <path id="envelope" style={{visibility:'hidden'}}  d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"/>
            <path id="phone" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
          </svg> */}
        </div>
        <div className={`popup__content ${classes}`}>
          <span className="close" onClick={closePopup}><i class="fal fa-times"></i></span>
          <div className={`popup__content__inner`}>
            <div className={`popup__content__inner__content`}>
              <p className="mb-0"><a href={`tel:${telefoon}`}>{telefoon}</a></p>
              <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>

            <div className={`popup__content__inner__info`}>
              <h3 className={`text-md font-bold mb-0`}>Villa Waterloo</h3>
              <p className="mb-0">{adres}</p>
              <p>{postcode}</p>
            </div>

            <div className={`popup__content__inner__socials`}>
              <a href={props.data.socials.facebook.url} target="_blank" aria-label="Facebook" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href={props.data.socials.instagram.url} target="_blank" aria-label="instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href={props.data.socials.linkedin.url} target="_blank" aria-label="linkedin" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <svg
          version="1.1"
          id="adviceLetters"
          x="0px"
          y="0px"
          viewBox="0 0 616.1 969.6"
        >
          <g>
            <path
              className="st0 firstLetter"
              d="M516.7,0v124.4c-17.6-8.8-37.4-13.7-58.4-13.7c-72.4,0-131,58.7-131,131c0,72.4,58.7,131,131,131
		c2.7,0,5.3-0.2,8-0.4v-72.9c-2.6,0.4-5.3,0.6-8,0.6c-32.2,0-58.4-26.1-58.4-58.4c0-32.2,26.1-58.4,58.4-58.4
		c32.2,0,58.3,26.1,58.4,58.3v0.1c0,0.6-0.1,1.2-0.1,1.8h0.1v2.2h72.6V0"
            ></path>
            <path
              className="st0 secondLetter"
              d="M108.7,270.8l44.1-115.7l43.3,115.7H108.7z M189.3,59.5H117h-7.7L2.9,338.4L0.7,344h0l0,0.1h80l0.1-0.1h142.7
		l21.5,57.4h80L197,59.5H189.3z"
            ></path>
          </g>
          <polygon
            className="st0 thirdLetter"
            points="405.4,641.9 482.8,641.9 555.4,428.9 478,428.9 "
          ></polygon>
          <polyline
            className="st0 fourthLetter"
            points="615.2,507.3 561.4,507.3 561.4,727 615.9,727 "
          ></polyline>
          <g>
            <path
              className="st0 fourthLetter"
              d="M615.9,305.8c-1.4-0.1-2.9-0.2-4.4-0.2c-28.2,0-51,22.8-51,51c0,28.2,22.8,51,51,51c1.5,0,3-0.1,4.5-0.2"
            ></path>
            <path
              className="st0 fifthLetter"
              d="M169.8,558c-72.4,0-131,58.7-131,131s58.7,131,131,131c7.7,0,15.1-0.8,22.4-2.1v-75.1
		c-6.9,2.9-14.5,4.5-22.4,4.5c-32.2,0-58.4-26.1-58.4-58.4s26.1-58.4,58.4-58.4c20,0,37.6,10.1,48.1,25.4l52.3-51
		C246.2,576.2,210.1,558,169.8,558z"
            ></path>
            <path
              className="st0 sixthLetter"
              d="M499.8,798.7c-13.6-57.9-65.5-101-127.6-101v72.6c21.3,0,39.9,11.4,50.1,28.4c0.6,1,1.1,2,1.6,3H261.5v0
		l-15.2,0c-3.3,11.5-5.1,23.7-5.1,36.3c0,72.4,58.7,131,131,131c29.9,0,57.4-10.2,79.4-27.1l-55.2-50.9c-7.4,3.4-15.6,5.3-24.2,5.3
		c-22.5,0-42-12.7-51.7-31.4h97.4h67h13.2c3.3-11.5,5.1-23.7,5.1-36.3C503.3,818.4,502.1,808.4,499.8,798.7z"
            ></path>
          </g>
          <polygon
            className="st0 thirdLetter"
            points="255.5,428.9 328.1,641.9 405.4,641.9 332.9,428.9 "
          ></polygon>
        </svg>
        </div>


        
      </div>
    </>
  )
}

export default Popup
