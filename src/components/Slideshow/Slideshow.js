import React from "react"
// import Navigation from "../Navigation/Navigation"
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard } from "swiper"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseItem from "./views/case"
import KernItem from "./views/kernwaarde"
import TeamItem from "./views/team"
import DienstItem from "./views/diensten"

// Import CSS
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Slideshow.scss"


// install Swiper modules
const Slideshow = props => {

  function getLayout(post) {
    if (props.layout === "CaseItem") {
      return <CaseItem item={post}></CaseItem>
    } else if (props.layout === "KernItem") {
      return <KernItem item={post}></KernItem>
    } else if (props.layout === "TeamItem") {
      return <TeamItem item={post}></TeamItem>
    }
    else if (props.layout === "DienstItem") {
      return <DienstItem item={post}></DienstItem>
    }
  }

  function getTriangle() {
    if (props.layout === "KernItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow" alt="Pijl wit lang" /></div>
    } else if (props.layout === "DienstItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><AniLink to="/diensten"><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow" alt="Pijl wit lang" /></AniLink></div>
    }
  }

  var rand = Math.floor(Math.random() * 100)
  return (
    <section className={`slideshow ${props.layout}`}>
      <div className="">
        {props.title && (
          <h2 className="slideshow__title text-2xl px-3 my-8 font-bold">
            {props.title}
          </h2>
        )}
        <Swiper
          modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y, Keyboard]}
          grabCursor={true} centeredSlides={true} slidesPerView={'1.25'} spaceBetween={20}
          keyboard={{ "enabled": true }}
          className={`swiper-${rand}`}
          loop={true}
          navigation
          breakpoints={{
            "640": {
              "slidesPerView": 2,
              "spaceBetween": 20
            },
            "768": {
              "slidesPerView": 3,
              "spaceBetween": 10
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 10
            }
          }}
        >

          {props.items &&
            props.items.map(post => {
              return (
                post.wpParent == null ? (
                  <SwiperSlide key={post.id}>{getLayout(post)}</SwiperSlide>
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
