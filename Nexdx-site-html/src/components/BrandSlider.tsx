"use client";
import Slider from "react-slick";

export default function BrandSlider() {
	const settings = {
		speed: 6000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		infinite: true,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		swipe: false,
		draggable: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 1200, settings: { slidesToShow: 5 } },
			{ breakpoint: 992, settings: { slidesToShow: 4 } },
			{ breakpoint: 575, settings: { slidesToShow: 3 } },
			{ breakpoint: 420, settings: { slidesToShow: 2 } },
		],
	} as const;

	return (
		<div className="brand__area pt-60 pb-60">
			<div className="container">
				<div className="row brand__area-border">
					<div className="col-xl-12">
						<Slider className="brand__slider" {...settings}>
							<div className="brand__area-item">
								<img src="/assets/img/brand/fcm.png" alt="image" />
							</div>
							<div className="brand__area-item">
								<img src="/assets/img/brand/borcelik.png" alt="image" />
							</div>
							<div className="brand__area-item">
								<img src="/assets/img/brand/durma-next.png" alt="image" />
							</div>
							<div className="brand__area-item">
								<img src="/assets/img/brand/maysan-mando.png" alt="image" />
							</div>
							<div className="brand__area-item">
								<img src="/assets/img/brand/hosseven.png" alt="image" />
							</div>
							<div className="brand__area-item">
								<img src="/assets/img/brand/copa.png" alt="image" />
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
} 