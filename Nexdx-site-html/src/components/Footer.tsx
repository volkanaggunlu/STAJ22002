import Link from "next/link";

export default function Footer() {
	return (
		<div className="footer__one">
			<img className="footer__one-shape" src="/assets/img/shape/footer-bg.png" alt="image" />
			<div className="container">
				<div className="row gy-4 justify-content-between">
					<div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
						<div className="footer__one-widget">
							<div className="footer__one-widget-about">
								<Link href="/"><img src="/assets/img/nexdx-2.png" alt="image" /></Link>
								<p>Next-Gen Solutions for Tomorrow</p>
								<div className="footer__one-widget-about-social">
									<h4>Follow us</h4>
									<ul>
										<li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
										<li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
						<div className="footer__one-widget border-one">
							<h4>Services</h4>
							<div className="footer__one-widget-solution">
								<ul>
									<li><a href="#services"><i className="far fa-chevron-double-right"></i>AI R&amp;D</a></li>
									<li><a href="#services"><i className="far fa-chevron-double-right"></i>Data Analytics &amp; Eng.</a></li>
									<li><a href="#services"><i className="far fa-chevron-double-right"></i>Custom Software Dev.</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
						<div className="footer__one-widget border-one">
							<h4>Contact</h4>
							<div className="footer__one-widget-location">
								<div className="footer__one-widget-location-item">
									<div className="footer__one-widget-location-item-icon">
										<i className="flaticon-mail"></i>
									</div>
									<div className="footer__one-widget-location-item-info email">
										<span>Email</span>
										<a href="mailto:info@nexdx.com">info@nexdx.com</a>
									</div>
								</div>
								<div className="footer__one-widget-location-item">
									<div className="footer__one-widget-location-item-icon">
										<i className="flaticon-location"></i>
									</div>
									<div className="footer__one-widget-location-item-info">
										<span>Address</span>
										<a href="https://www.google.com/maps/place/Ulutek+Teknopark/@40.2222981,28.8588327,17z/data=!3m1!4b1!4m6!3m5!1s0x14ca11e76897ed27:0x6b086edd81e12343!8m2!3d40.2222981!4d28.8588327!16s%2Fg%2F1hc0wtqzt?entry=tts&g_ep=EgoyMDI0MDkwMy4wKgBIAVAD">Görükle Mah. Üniversite-1 Cad. Ulutek Teknoloji Geliştirme Binası No: 933 / 317 Nilüfer BURSA</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6">
						<div className="footer__one-widget border-one tow">
							<h4>Newsletter</h4>
							<div className="footer__one-widget-subscribe">
								<p>Subscribe to stay updated on the latest news!</p>
								<form action="#">
									<input type="text" name="email" placeholder="Your e-mail" required />
									<button type="submit"><i className="fas fa-paper-plane"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright__one">
				<div className="container">
					<div className="row justify-content-between copyright__one-container-area">
						<div className="col-xl-5 col-lg-6">
							<div className="copyright__one-left">
								<p>© NEXDX  2024 | All Rights Reserved</p>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="copyright__one-right">
								<a href="#">Privacy Policy</a>
								<a href="#contact">Contact Us</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 