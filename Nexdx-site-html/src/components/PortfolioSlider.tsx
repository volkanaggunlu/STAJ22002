'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PortfolioSlider() {
    const slides = [
        {
            id: 1,
            image: "/assets/img/portfolio/edtech.jpg",
            title: "NEXDX EdTech",
            description: "LMS, E-Learning, Virtual Classrooms & STEAM"
        },
        {
            id: 2,
            image: "/assets/img/portfolio/gen-ai.jpg",
            title: "NEXDX Gen-AI Assistant", 
            description: "Making Smarter Decisions With Generative AI"
        },
        {
            id: 3,
            image: "/assets/img/portfolio/map-2.jpg",
            title: "NEXDX Map API",
            description: "Optimizing Routes With Precision And Speed"
        },
    ];

    return (
        <div className="portfolio__one section-padding " id="products">
            <div className="container">
                <div className="row gy-4 align-items-end justify-content-between mb-5 ">
                    <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10 ">
                        <div className="portfolio__one-content-left">
                            <span className="subtitle-one">Products</span>
                            <h2>Innovative Products for the Digital Era</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container custom__container">
                <div className="portfolio__one-slider py-5 !overflow-visible min-h-[600px]">
                    <Swiper
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={3}
                        initialSlide={0}
                        speed={600}
                        allowTouchMove={true}
                        grabCursor={true}
                        watchSlidesProgress={true}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },   
                            768: { slidesPerView: 2, spaceBetween: 25 },
                            992: { slidesPerView: 3, spaceBetween: 30 }, 
                        }}
                        className="!overflow-hidden !px-4"
                    >
                        {[...slides, ...slides, ...slides].map((slide, index) => (
                           <SwiperSlide 
                                key={`${slide.id}-${index}`} 
                                className="group transition-all duration-300 !h-auto"
                            >
                                <div className="w-full text-center p-2 transition-all duration-300 relative rounded-2xl top-10 overflow-visible min-h-[530px]">
                                    
                                    {/* Resim + İçindeki yazı (sadece desktop) */}
                                    <div className="relative overflow-hidden group-[.swiper-slide-active]: transition-all duration-300 rounded-2xl">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="
                                                w-full h-full object-cover rounded-2xl transition-all duration-300
                                                h-40 sm:h-48          
                                                md:h-32              
                                                group-[.swiper-slide-active]:md:h-72 
                                            "
                                        />

                                        {/* Başlık + Açıklama desktopta resmin içinde */}
                                        <div className="
                                            hidden md:block
                                            absolute bottom-0 left-0 w-full bg-white bg-opacity-80 p-2 md:p-3 rounded-xl text-black
                                        ">
                                            <h3 className="text-sm md:text-sm lg:text-base font-semibold mb-1">
                                                {slide.title}
                                            </h3>
                                            <p className="text-xs md:text-xs lg:text-sm leading-relaxed">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Başlık + Açıklama  mobilde resmin altında */}
                                    <div className="block md:hidden mt-3 bg-white bg-opacity-90 p-3 rounded-xl text-black transition-all duration-300">
                                        <h3 className="text-base font-semibold mb-1">{slide.title}</h3>
                                        <p className="text-xs leading-relaxed">{slide.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
