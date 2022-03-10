import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Letters from "./letters"
import InViewMonitor from "react-inview-monitor"

import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/effect-fade';
import "swiper/css/navigation"


const HomeHero = props => {

  let count = 0;
  let separatedLetters = [];

  if(props.letters) {
    separatedLetters = props?.letters?.split('')
  }

  // const shuffledArray = props.slideshow.sort((a, b) => 0.5 - Math.random());
var rand = Math.floor(Math.random() * 100)

  return (
    <section className={`hero ${props.layout} py-0`}>
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="hero__content lg:w-2/4">
          <h4 className="text-xl md:text-2xl font-medium text-secondary mb-3">
            {props.subtitle}
          </h4>
          <h1 className="text-4xl sm:text-4xl md:text-6xl xl:text-6xl font-extrabold mb-10">
            {parse(props.title)}
          </h1>
        </div>

          {props.slideshow && (
          <Swiper
          modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y, Keyboard]}
          grabCursor={true} centeredSlides={true} slidesPerView={'1'} spaceBetween={20}
          effect={'fade'}
          keyboard={{ "enabled": true }}
          className={`swiper-${rand} hero_dienstenSlider`}
          loop={false}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          autoHeight={true}
          onSwiper={(swiper) => {
            console.log(swiper)
            const pageTotal = swiper.slides.length;
            const pageNumber = swiper.activeIndex + 1;
            const pageTotalEl = document.querySelector('.pageTotal');
            const pageNumberEl = document.querySelector('.pageNumber');

            pageTotalEl.innerHTML = pageTotal;
            pageNumberEl.innerHTML = pageNumber;
          }}

          onSlideChange={(swiper) => {
            const pageNumberEl = document.querySelector('.pageNumber');
            const pageNumber = swiper.activeIndex + 1;

            pageNumberEl.innerHTML = pageNumber;
          }}
        >
            <div className="swiper__controls flex items-center justify-between w-full lg:w-1/3">
              <div className="swiper__navigation flex">
                <div className="prev"><i class="fal fa-arrow-left"></i></div>
                <div className="next"><i class="fal fa-arrow-right"></i></div>
              </div>
              <span className="pageCount"><span className="pageNumber"></span> / <span className="pageTotal"></span></span>
            </div>
            {props.slideshow &&
              props.slideshow.map(post => {
                const title = post.title
                console.log(post);
                return (
                  post.wpParent == null ? (
                  <SwiperSlide key={post.id}>
                    <div className="hero__slideshow__item--inner flex flex-col xl:flex-row">
                      <div class="image xl:w-2/3" style={{backgroundImage: `url(${post.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`}}>
                        
                      </div>
                      <div class="content xl:w-1/3 bg-primary p-8 lg:p-12 pt-20 lg:pt-16 text-white flex items-center">
                        <div class="content__inner" >
                         <h2 className="hero__slideshow__item--title text-2xl lg:text-3xl font-bold relative">
                        {title}
                      </h2>
                      <div className="hero__slideshow__item--excerpt font-light relative">
                        {parse(post.excerpt)}
                      </div>
                      <AniLink paintDrip to={post.uri} className="mt-12 text-white font-medium relative btn btn-link">
                        Lees meer
                      </AniLink>
                      </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  ) : null
                )
              })}{" "}
          </Swiper>
        )}

            {props.letters && 
              <div className="hero__description lg:w-3/4">
              {separatedLetters.map(post => {
                count++
                return (
                  <Letters key={count} letter={post} count={count} />
                )
              })}
              </div>
             }

            {props.content &&
            <div className="hero__description lg:w-3/4">
              {parse(props.content)}
            </div>
            }
      </div>
      <div className="hero__svgLogo">
        <svg
          version="1.1"
          id="adviceLetters"
          x="0px"
          y="0px"
          viewBox="0 0 616.1 969.6"
        >
          <g>
            <path
              className="st0 firstLetter"
              d="M516.7,0v124.4c-17.6-8.8-37.4-13.7-58.4-13.7c-72.4,0-131,58.7-131,131c0,72.4,58.7,131,131,131
		c2.7,0,5.3-0.2,8-0.4v-72.9c-2.6,0.4-5.3,0.6-8,0.6c-32.2,0-58.4-26.1-58.4-58.4c0-32.2,26.1-58.4,58.4-58.4
		c32.2,0,58.3,26.1,58.4,58.3v0.1c0,0.6-0.1,1.2-0.1,1.8h0.1v2.2h72.6V0"
            ></path>
            <path
              className="st0 secondLetter"
              d="M108.7,270.8l44.1-115.7l43.3,115.7H108.7z M189.3,59.5H117h-7.7L2.9,338.4L0.7,344h0l0,0.1h80l0.1-0.1h142.7
		l21.5,57.4h80L197,59.5H189.3z"
            ></path>
          </g>
          <polygon
            className="st0 thirdLetter"
            points="405.4,641.9 482.8,641.9 555.4,428.9 478,428.9 "
          ></polygon>
          <polyline
            className="st0 fourthLetter"
            points="615.2,507.3 561.4,507.3 561.4,727 615.9,727 "
          ></polyline>
          <g>
            <path
              className="st0 fourthLetter"
              d="M615.9,305.8c-1.4-0.1-2.9-0.2-4.4-0.2c-28.2,0-51,22.8-51,51c0,28.2,22.8,51,51,51c1.5,0,3-0.1,4.5-0.2"
            ></path>
            <path
              className="st0 fifthLetter"
              d="M169.8,558c-72.4,0-131,58.7-131,131s58.7,131,131,131c7.7,0,15.1-0.8,22.4-2.1v-75.1
		c-6.9,2.9-14.5,4.5-22.4,4.5c-32.2,0-58.4-26.1-58.4-58.4s26.1-58.4,58.4-58.4c20,0,37.6,10.1,48.1,25.4l52.3-51
		C246.2,576.2,210.1,558,169.8,558z"
            ></path>
            <path
              className="st0 sixthLetter"
              d="M499.8,798.7c-13.6-57.9-65.5-101-127.6-101v72.6c21.3,0,39.9,11.4,50.1,28.4c0.6,1,1.1,2,1.6,3H261.5v0
		l-15.2,0c-3.3,11.5-5.1,23.7-5.1,36.3c0,72.4,58.7,131,131,131c29.9,0,57.4-10.2,79.4-27.1l-55.2-50.9c-7.4,3.4-15.6,5.3-24.2,5.3
		c-22.5,0-42-12.7-51.7-31.4h97.4h67h13.2c3.3-11.5,5.1-23.7,5.1-36.3C503.3,818.4,502.1,808.4,499.8,798.7z"
            ></path>
          </g>
          <polygon
            className="st0 thirdLetter"
            points="255.5,428.9 328.1,641.9 405.4,641.9 332.9,428.9 "
          ></polygon>
        </svg>
      </div>
    </section>
  )
}

export default HomeHero
