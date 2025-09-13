export default function About() {
	return (
		<div className="about__three section-padding" id="about">
			<div className="container">
				<div className="row align-items-center gy-4">
					<div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
						<div className="about__three-content">
							<span className="subtitle-one">About us</span>
							<h2><span className="highlighted-two">Next-Gen</span> Solutions for Tomorrow</h2>
							<div className="about__three-content-service pt-10">
								<div className="about__three-content-service-single">
									<i className="flaticon-good-feedback"></i>
									<div className="content">
										<h4>Mission</h4>
										<p>To enable our clients to achieve their digital transformation goals through innovative products and strategic projects powered by our R&D expertise.</p>
									</div>
								</div>
								<div className="about__three-content-service-single">
									<i className="flaticon-incoming-message"></i>
									<div className="content">
										<h4>Vision</h4>
										<p>As a global brand in digital transformation, to build the future of business with sustainable solutions in technology.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Desktop version - hidden on mobile */}
					<div className="col-xl-6 col-lg-6 col-md-9 d-none d-sm-block">
						<div className="about__three-right">
							<div className="row align-items-center">
								<div className="about__three-right-counter">
									<h4 className="counter" style={{ paddingLeft: 16, marginRight: -10 }}>8</h4>
									<h4>+</h4>
									<span>Years Of experience</span>
								</div>
								<div className="col-xl-6 col-lg-7 col-md-6 col-sm-6">
									<div className="about__three-right-image-left-side">
										<img src="/assets/img/about/about-1.jpg" alt="image" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-5 col-md-5 col-sm-6">
									<div className="about__three-right-image">
										<img src="/assets/img/about/about-3.jpg" alt="image" />
									</div>
									<div className="about__three-right-image">
										<img src="/assets/img/about/about-4.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Mobile version - visible only on mobile */}
					<div className="col-12 d-block d-sm-none">	
						<div className="about__three-mobile flex flex-col items-center mt-12">
							<div className="relative w-full max-w-sm mx-auto">
								{/* Daraltılmış overlay kutusu */}
								<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-9
												bg-[#3730a3] rounded-xl z-10 text-center px-4 py-2">
									<h4 className="inline text-sm font-bold text-white pr-1">8+</h4>
									<span className="block text-sm text-white whitespace-nowrap">Years Of Experience</span>	
								</div>
								{/* Resimler Container */}
								<div className="flex gap-2">
									{/* Sol büyük resim */}
									<div className="flex-1">
										<img
											src="/assets/img/about/about-1.jpg"
											alt="image"
											className="w-full !h-[16.5rem] rounded-l-2xl object-cover"
										/>
									</div>
									{/* Sağ resimler */}
									<div className="flex-1 flex flex-col gap-2">
										<img
											src="/assets/img/about/about-3.jpg"
											alt="image"
											className="w-full !h-32 rounded-tr-2xl object-cover"
										/>
										<img
											src="/assets/img/about/about-4.jpg"
											alt="image"
											className="w-full !h-32 rounded-br-2xl object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}