// Import CSS
import "./Flexible.scss"

import Collage from "../Collage/Collage"
import DoubleImages from "../DoubleImages/DoubleImages"
import Image from "../Image/Image"
import InViewMonitor from "react-inview-monitor"
import OneColumnsContent from "../OneColumnsContent/OneColumnsContent"
import Quote from "../Quote/Quote"
import React from "react"
import TripleImages from "../TripleImages/TripleImages"
import TwoColumnsContent from "../TwoColumnsContent/TwoColumnsContent"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const Flexible = props => {

  const getBlock = (layout, posttype) => {
    console.log(layout)
    switch(layout.fieldGroupName) {
    case posttype + "_Flexible_Flexibleblocks_Collage":
      return <Collage images={layout.collageimages} />

    case posttype + "_Flexible_Flexibleblocks_VideoOrImage":
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

    case posttype + "_Flexible_Flexibleblocks_Quote":
      return <Quote letters={layout.content} />

    case posttype + "_Flexible_Flexibleblocks_OneColumnsContent":
      return (
        <OneColumnsContent title={layout.title} content={layout.content}/>
      )

    case posttype + "_Flexible_Flexibleblocks_TwoColumnsContent":
      return (

      <TwoColumnsContent title1={layout.column1.title} content1={layout.column1.content} title2={layout.column2.title} content2={layout.column2.content} />
      )

    case posttype + "_Flexible_Flexibleblocks_TripleImages":
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
