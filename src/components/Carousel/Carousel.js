// Import CSS
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Navigation from "../Navigation/Navigation"
import { A11y, EffectCoverflow, Keyboard, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import KernItem from "../Slideshow/views/kernwaarde"
import React from "react"

// import "./Slideshow.scss"


// install Swiper modules
const Slideshow = props => {

  function getTriangle() {
    if (props.layout === "KernItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow" alt="Pijl wit lang" /></div>
    } else if (props.layout === "DienstItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><AniLink cover bg="#00f" duration={2} to="/diensten"><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow" alt="Pijl wit lang" /></AniLink></div>
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
          modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y, Keyboard]}
          effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'1.2'} spaceBetween={30}
          keyboard={{ "enabled": true }}
          className={`swiper-${rand}`}
          navigation
          loop={true}
          coverflowEffect={{
            "rotate": 0,
            "stretch": 0,
            "depth": 130,
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
              "spaceBetween": 0,
            },
            "1200": {
              "slidesPerView": 2.17,
              "spaceBetween": 0,
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
