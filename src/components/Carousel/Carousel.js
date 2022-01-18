import React from "react"
// import Navigation from "../Navigation/Navigation"
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard } from "swiper"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Swiper, SwiperSlide } from "swiper/react"
import KernItem from "../Slideshow/views/kernwaarde"

// Import CSS
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import "./Slideshow.scss"


// install Swiper modules
const Slideshow = props => {

  function getTriangle() {
    if(props.layout === "KernItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><i className="fal fa-long-arrow-down"></i></div>
    }else if(props.layout === "DienstItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><AniLink to="/diensten"><i className="fal fa-long-arrow-right"></i></AniLink></div>
    }
  }

  var rand = Math.floor(Math.random() * 100)
  return (
    <section className={`slideshow ${props.layout}`}>
      <div className="container container-small">
        {props.title && (
          <h2 className="slideshow__title text-2xl px-11 my-8 font-bold">
            {props.title}
          </h2>
        )}
        <Swiper
          modules={[Navigation,EffectCoverflow, Pagination, Scrollbar, A11y, Keyboard]}
          effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'1.2'} spaceBetween={0}
          keyboard={{"enabled": true}}
          className={`swiper-${rand}`}
          loop={true}
          coverflowEffect={{
            "rotate": 0,
            "stretch": 0,
            "depth": 460,
            "modifier": 1,
            "slideShadows": false
          }}
          breakpoints={{
          "640": {
            "slidesPerView": 1.2
          },
          "768": {
            "slidesPerView": 1.5,
            "depth": 200,
          },
          "1200": {
            "slidesPerView": 2.17,
            "coverflowEffect": {
              "depth": 460,
            }
          }
}}
        >

            {props.items &&
              props.items.map(post => {
                return (
                  post.wpParent == null ? (
                  <SwiperSlide key={post.id}><KernItem item={post}></KernItem></SwiperSlide>
                  ) : null
                )
              })}{" "}
        </Swiper>
        {getTriangle()}
      </div>
    </section>
  )
}

export default Slideshow
