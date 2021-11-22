import React from "react"
// import Navigation from "../Navigation/Navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseItem from "./views/case"

// Import CSS
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/a11y"
import "./Slideshow.scss"

const Slideshow = props => {
  return (
    <section className="slideshow">
      <div className="md:container">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {" "}
          {props.items &&
            props.items.map(post => {
              return (
                <SwiperSlide key={post.id}>
                  <CaseItem item={post}></CaseItem>
                </SwiperSlide>
              )
            })}{" "}
        </Swiper>
      </div>
    </section>
  )
}

export default Slideshow
