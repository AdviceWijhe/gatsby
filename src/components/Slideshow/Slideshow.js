import React from "react"
// import Navigation from "../Navigation/Navigation"
import { A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseItem from "./views/case"

// Import CSS
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./Slideshow.scss"

const Slideshow = props => {
  return (
    <section className="slideshow">
      <div className="md:container">
        <Swiper
          modules={[A11y]}
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
                <SwiperSlide>
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
