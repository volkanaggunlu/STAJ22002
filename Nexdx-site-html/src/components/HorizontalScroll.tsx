'use client';
import Slider from 'react-slick';

export default function HorizontalScroll() {
	const settings = {
		speed: 12000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		dots: false,
		centerMode: true,
		pauseOnHover: false,
		swipe: false,
		responsive: [
			{ breakpoint: 1200, settings: {} },
			{ breakpoint: 992, settings: {} },
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
			{ breakpoint: 480, settings: { slidesToShow: 1 } },
		],
	} as const;

	return (
		<div className="horizontal-scroll mt-25">
			<div className="container-fluid">
				<div id="projects" className="row">
					<Slider className="horizontal-scroll-active" {...settings}>
						<div className="horizontal-scroll-single-item">
							<h3>AI</h3>
							<div className="horizontal-scroll-icon">
								<i className="flaticon-idea"></i>
							</div>
						</div>
						<div className="horizontal-scroll-single-item">
							<h3>Data Analytics</h3>
							<div className="horizontal-scroll-icon">
								<i className="flaticon-analytics"></i>
							</div>
						</div>
						<div className="horizontal-scroll-single-item">
							<h3>Software</h3>
							<div className="horizontal-scroll-icon">
								<i className="flaticon-software"></i>
							</div>
						</div>
						<div className="horizontal-scroll-single-item">
							<h3>Data Science</h3>
							<div className="horizontal-scroll-icon">
								<i className="flaticon-monitor"></i>
							</div>
						</div>
						<div className="horizontal-scroll-single-item">
							<h3>Integration</h3>
							<div className="horizontal-scroll-icon">
								<i className="flaticon-software-development"></i>
							</div>
						</div>
						<div className="horizontal-scroll-single-item">
							<h3>Data Engineering</h3>
							<div className="horizontal-scroll-icon">
								<i className="flaticon-cloud-storage"></i>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
} 