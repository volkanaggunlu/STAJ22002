'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Banner() {
	return (
	<div>
		{/* Desktop Section*/}
		<div className="banner__two d-none d-md-block">
			<Swiper>
				<SwiperSlide>
					<div className="banner__two-single-slider" style={{ backgroundImage: 'url(/assets/img/banner/banner-two-5.jpg)' }}>
						<div className="banner-two-shape">
							<div className="banner-two-shape-1 shape">
								<img src="/assets/img/shape/banner-two-shape3.png" alt="" className="animate-rotate" />
							</div>
							<div className="banner-two-shape-2 shape">
								<img src="/assets/img/shape/banner-two-shape-2-1.png" alt="image" />
							</div>
							<div className="banner-two-shape-3 shape">
								<img src="/assets/img/shape/banner-two-shape-3-1.png" alt="image" />
							</div>
							<div className="banner-two-shape-4 shape">
								<img src="/assets/img/shape/banner-two-shape-4-2.png" alt="image" />
							</div>
						</div>
						<div className="container">
							<div className="row" style={{ marginTop: '-60px' }}>
								<div className="col-xl-5 col-lg-10 col-md-8">
									<div className="banner__two-content">
										<h2>Next-Gen Solutions for Tomorrow</h2>
										<p>Unleashing your digital potential, empowering businesses to thrive in the digital age.</p>
										<a href="#contact" className="btn-two" style={{ border: '1px solid white' }}>
											Contact Us <i className="fas fa-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
		{/* Mobile Section*/}
		<div className="banner__mobile block md:hidden">
				<div 
					className="banner__mobile-section bg-cover bg-center bg-no-repeat min-h-screen relative flex items-center"
					style={{ 
						backgroundImage: 'url(/assets/img/banner/banner-two-5.jpg)'
					}}
				>
					<div className="banner-two-shape">
						<div className="banner-two-shape-1 shape">
							<img src="/assets/img/shape/banner-two-shape3.png" alt="" className="animate-rotate" />
						</div>
						<div className="banner-two-shape-2 shape">
							<img src="/assets/img/shape/banner-two-shape-2-1.png" alt="image" />
						</div>
						<div className="banner-two-shape-3 shape">
							<img src="/assets/img/shape/banner-two-shape-3-1.png" alt="image" />
						</div>
						<div className="banner-two-shape-4 shape">
							<img src="/assets/img/shape/banner-two-shape-4-2.png" alt="image" />
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="banner__two-content text-center">
									<h2>Next-Gen Solutions for Tomorrow</h2>
									<p>Unleashing your digital potential, empowering businesses to thrive in the digital age.</p>
									<a href="#contact" className="btn-two" style={{ border: '1px solid white' }}>
										Contact Us <i className="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 