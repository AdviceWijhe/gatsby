import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Video from "../Video/Video"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./ContentImage.scss"

const ContentImage = props => {
  const image = props.settings.image?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <section className="contentimage">
      <div className="container container-line">
        <div className={`contentimage-title text-2xl md:text-4xl lg:text-5xl font-bold mb-5`}>{props.settings.title}</div>
        <div className="mb-10">{props.settings.content}</div>
        {image &&
        <GatsbyImage
          image={image}
          alt="image"
          style={{ marginBottom: 50 }}
          className="contentimage-image"
        />
        }
      <Video
        videoSrcURL="https://player.vimeo.com/video/670210100?h=88a550a0cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        videoTitle="Official Music Video on YouTube"
      />
        
      </div>
    </section>
  )
}

export default ContentImage
