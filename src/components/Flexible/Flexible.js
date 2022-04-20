// Import CSS
import "./Flexible.scss"

import InViewMonitor from "react-inview-monitor"
import React from "react"
import Collage from "../Collage/Collage"
import DoubleImages from "../DoubleImages/DoubleImages"
import Image from "../Image/Image"
import Quote from "../Quote/Quote"
import parse from "html-react-parser"
import TripleImages from "../TripleImages/TripleImages"
import OneColumnsContent from "../OneColumnsContent/OneColumnsContent"
import TwoColumnsContent from "../TwoColumnsContent/TwoColumnsContent"
// import Navigation from "../Navigation/Navigation"


const Flexible = props => {

  const getBlock = (layout, posttype) => {
    console.log(layout)
    switch(layout.fieldGroupName) {
    case posttype + "_Flexible_Blocks_Collage":
      return <Collage images={layout.collageimages} />

    case posttype + "_Flexible_Blocks_VideoOrImage":
      if(layout.video) {
      return (
        <>
      <section className="pb-0">
        <div className="casePlayer">
          <iframe src={layout.video} frameBorder="0" className={`caseFrame`} allow="autoplay" allowFullScreen title={layout.title}></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        
      </section>
      <DoubleImages images={layout.otherImages} />
      </>
      )
    }
    return (
      <>
    <Image image={layout.image} />
    <DoubleImages images={layout.otherImages} />
    </>
    )

    case posttype + "_Flexible_Blocks_Quote":
      return <Quote letters={layout.content} />

    case posttype + "_Flexible_Blocks_OneColumnsContent":
      return (
        <OneColumnsContent title={layout.title} content={layout.content}/>
      )

    case posttype + "_Flexible_Blocks_TwoColumnsContent":
      return (

      <TwoColumnsContent title1={layout.column1.title} content1={layout.column1.content} title2={layout.column2.title} content2={layout.column2.content} />
      )

    case posttype + "_Flexible_Blocks_TripleImages":
      return <TripleImages images={layout.images} />
      
      
    default:
      return false
  }

  }

  return (
    <div className={`Flexible pt-0`}>
      {getBlock(props.data, props.posttype)}
    </div>
  )
}

export default Flexible
