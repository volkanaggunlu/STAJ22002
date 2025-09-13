export default function ContactForm() {
	return (
		<div className="contact__one section-padding" style={{ backgroundImage: 'url(/assets/img/contact/contact-bg.png)' }} id="contact">
			<div className="container">
				<div className="row align-items-end gy-4 justify-content-between">
					<div className="col-xl-6">
						<div className="contact__one-title">
							<span className="subtitle-one" style={{ color: '#fff' }}>Contact Us</span>
							<h2>
								Unleash Your <span style={{
									backgroundColor: '#2e89c6',
									backgroundImage: 'linear-gradient(180deg, #2e89c6, #00ced1)',
									backgroundSize: '100%',
									WebkitBackgroundClip: 'text',
									MozBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									MozTextFillColor: 'transparent'
								}}>DX</span> Potential!
							</h2>
						</div>
						<form action="#" className="contact__one-form">
							<div className="contact__one-form-top">
								<input type="text" placeholder="Name..." />
								<input type="text" placeholder="Phone..." />
							</div>
							<input type="email" placeholder="E-mail..." className="w-100" />
							<button type="submit" className="btn-two w-100">
								Sent Now <i className="fas fa-chevron-right"></i>
							</button>
						</form>
					</div>
					<div className="col-xl-5">
						<div className="contact__one-right">
							<div className="row gy-4 align-items-end">
								<div className="col-xl-8 col-lg-4 col-md-6 col-sm-6">
									<img src="/assets/img/contact/contact-7.jpg" alt="image" />
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
									<div className="contact__one-counter-img">
										<img src="/assets/img/contact/contact-9.jpg" alt="image" />
									</div>
									<div className="contact__one-counter">
										<div className="counter-only">
											<h3 className="counter">8</h3>
											<h3>+</h3>
										</div>
										<span>years of experiences</span>
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