export default function Services() {
	return (
		<div className="about__two section-padding" style={{ backgroundColor: '#F4F7FB' }} id="services">
			<div className="container" style={{ marginTop: '-30px' }}>
				<div className="row justify-content-center text-center">
					<div className="col-xl-6">
						<div className="services__two-title">
							<span className="subtitle-one">Services</span>
							<h2>Unleash the Power of Technology</h2>
						</div>
					</div>
				</div>
				<div className="row gy-4 justify-content-center">
					<div className="col-xl-4 col-lg-4 col-md-6">
						<div className="services__five-single-service">
							<div className="services__five-single-service-icon">
								<i className="flaticon-idea"></i>
							</div>
							<div className="services__five-single-service-content">
								<h4>AI Research &amp; Development</h4>
								<p>Our research and development in AI drives cutting-edge innovations, empowering businesses for a smarter future.</p>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-6">
						<div className="services__five-single-service">
							<div className="services__five-single-service-icon">
								<i className="flaticon-aggregate"></i>
							</div>
							<div className="services__five-single-service-content">
								<h4>Data Analytics &amp; Engineering</h4>
								<p>We empower businesses by turning complex data into innovative engineering solutions for smarter decision-making.</p>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-6">
						<div className="services__five-single-service">
							<div className="services__five-single-service-icon">
								<i className="flaticon-software-development"></i>
							</div>
							<div className="services__five-single-service-content">
								<h4>Custom Software Development</h4>
								<p>We develop software tailored to your business needs, ensuring seamless integration and improved productivity for sustained growth.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 