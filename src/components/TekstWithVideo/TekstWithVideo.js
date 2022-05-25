// Import CSS
// import "./TekstWithVideo.scss"

import React from "react"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const TekstWithVideo = props => {
  const video = props.video
  const content = props.content
  const titel = props.titel

  console.log(video);

  return (
    <section className="TekstWithVideo">
      <div className="TekstWithVideo__inner flex flex-col-reverse lg:flex-row items-center">
        <div className="TekstWithVideo__content w-full lg:w-2/3">
          <h2 className="TekstWithVideo__titel">{titel}</h2>
          {parse(content)}
        </div>

        <div className="TekstWithVideo__video w-full lg:w-2/3">
            <video autoPlay="true" loop>
              <source src={video.mediaItemUrl} type="video/mp4" />
               <track src="#" kind="captions" srclang="en" label="english_captions"></track>
              Your browser does not support the video tag.
            </video>
        </div>
      </div>
          
    </section>
  )
}

export default TekstWithVideo
