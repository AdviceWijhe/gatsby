import React from "react"
// import Navigation from "../Navigation/Navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseItem from "./views/case"
import KernItem from "./views/kernwaarde"

// Import CSS
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/a11y"
import "./Slideshow.scss"

const Slideshow = props => {
  console.log(props.layout)

  function getLayout(post) {
    if (props.layout === "CaseItem") {
      return <CaseItem item={post}></CaseItem>
    } else if (props.layout === "KernItem") {
      return <KernItem item={post}></KernItem>
    }
  }
  return (
    <section className={`slideshow ${props.layout}`}>
      <div className="md:container">
        <Swiper
          spaceBetween={props.spaceBetween}
          slidesPerView={props.spv}
          centeredSlides={true}
          loop={true}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {" "}
          {props.items &&
            props.items.map(post => {
              return <SwiperSlide key={post.id}>{getLayout(post)}</SwiperSlide>
            })}{" "}
        </Swiper>
        <div className="triangle triangle-arrow triangle-bottom">
          <i className="fal fa-long-arrow-down"></i>
        </div>
      </div>
    </section>
  )
}

export default Slideshow
