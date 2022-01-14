import React from "react"
// import Navigation from "../Navigation/Navigation"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Link } from "gatsby"
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
    if(props.layout === "KernItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><i className="fal fa-long-arrow-down"></i></div>
    }else if(props.layout === "DienstItem") {
      return <div className="triangle triangle-arrow triangle-bottom"><Link to="/diensten"><i className="fal fa-long-arrow-right"></i></Link></div>
    }
  }

  var rand = Math.floor(Math.random() * 100)
  return (
    <section className={`slideshow ${props.layout}`}>
      <div className="">
        {props.title && (
          <h2 className="slideshow__title text-2xl px-11 my-8 font-bold">
            {props.title}
          </h2>
        )}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={props.spaceBetween}
          slidesPerView={props.spv}
          centeredSlides={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          loop={true}
          className={`swiper-${rand}`}
          breakpoints={{
            // when window width is <= 999px
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 0,
            },
            1100: {
              slidesPerView: 3,
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
