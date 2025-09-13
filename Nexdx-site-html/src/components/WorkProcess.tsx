export default function WorkProcess() {
	return (
		<div className="work-process__two section-padding">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-xl-6 col-lg-6 col-md-7">
						<div className="work-process__two-title">
							<span className="subtitle-one">Phases</span>
							<h2>Steps to <span style={{
								backgroundColor: '#2e89c6',
								backgroundImage: 'linear-gradient(180deg, #2e89c6, #00ced1)',
								backgroundSize: '100%',
								WebkitBackgroundClip: 'text',
								MozBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}>Digital Transformation</span></h2>
						</div>
					</div>
				</div>
				<div className="work-process__two-cards">
					<div className="work-process__two-cards-single">
						<div className="work-process__two-cards-single-title">
							<div className="work-process__two-cards-single-title-left">
								<span>01.</span>
								<h4>Digitization</h4>
							</div>
							<div className="work-process__two-cards-single-title-right">
								<i className="flaticon-consultant"></i>
							</div>
						</div>
						<p>Converting analog data into digital format for easier access and management.</p>
						<div className="card-arrow-wrapper">
							<div className="card-arrow-ingredient">
								<div className="arrow-body"></div>
								<div className="arrow-head"></div>
							</div>
						</div>
					</div>
					<div className="work-process__two-cards-single">
						<div className="work-process__two-cards-single-title">
							<div className="work-process__two-cards-single-title-left">
								<span>02.</span>
								<h4>Digitalization</h4>
							</div>
							<div className="work-process__two-cards-single-title-right">
								<i className="flaticon-it"></i>
							</div>
						</div>
						<p>Leveraging digital technologies to enhance business processes and efficiency.</p>
						<div className="card-arrow-wrapper">
							<div className="card-arrow-ingredient">
								<div className="arrow-body"></div>
								<div className="arrow-head"></div>
							</div>
						</div>
					</div>
					<div className="work-process__two-cards-single">
						<div className="work-process__two-cards-single-title">
							<div className="work-process__two-cards-single-title-left">
								<span>03.</span>
								<h4>Digital Transformation</h4>
							</div>
							<div className="work-process__two-cards-single-title-right">
								<i className="flaticon-data-scientist"></i>
							</div>
						</div>
						<p>Redesigning business strategies through digital innovation for long-term growth.</p>
					</div>
				</div>
			</div>
		</div>
	);
} 