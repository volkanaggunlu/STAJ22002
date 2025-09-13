'use client';
import { useState } from 'react';

type TabId = 'topic-1' | 'topic-2' | 'topic-3' | 'topic-4' | 'topic-5' | 'topic-6';

const tabs = [
	{
		id: 'topic-2' as TabId,
		title: 'AI Solutions with LLMs',
		iconClass: 'flaticon-idea',
		heading: 'Revolutionizing Operations with LLMs',
		paragraph:
			'AI Solutions with LLMs enable businesses to automate complex tasks and derive actionable insights from large datasets. By leveraging advanced language models, companies can enhance decision-making, streamline workflows, and offer personalized customer experiences.',
		leftServices: ['Automated Customer Support', 'Enhanced Decision-Making'],
		rightServices: ['Data-Driven Personalization', 'Content Generation'],
		image: '/assets/img/skill/llm.png',
	},
	{
		id: 'topic-3' as TabId,
		title: 'Comprehensive Optimization',
		iconClass: 'flaticon-analytics',
		heading: 'Data-Driven and Traditional Optimization',
		paragraph:
			'Comprehensive optimization combines data-driven approaches and traditional methods to improve operational efficiency. Traditional techniques solve well-defined problems, while data-driven optimization uses real-time data to adapt solutions dynamically. Together, they deliver more accurate, flexible, and sustainable results.',
		leftServices: ['Route Planning', 'Supply Chain Optimization'],
		rightServices: ['Production Scheduling', 'Workforce Management'],
		image: '/assets/img/skill/optimization.jpg',
	},
	{
		id: 'topic-4' as TabId,
		title: 'Computer Vision Solutions',
		iconClass: 'flaticon-laptop-1',
		heading: 'Transforming Quality Control with CV',
		paragraph:
			'Computer Vision (CV) automates visual inspections by leveraging advanced image processing and machine learning algorithms, reducing human error and standardizing product quality. By implementing CV, businesses can detect defects with high precision, optimize production workflows, and minimize waste, enhancing overall operational efficiency.',
		leftServices: ['Defect Detection', 'Dimensional Accuracy'],
		rightServices: ['Assembly Verification', 'Packaging Inspection', 'Color and Texture Matching'],
		image: '/assets/img/skill/cv.jpg',
	},
	{
		id: 'topic-5' as TabId,
		title: 'High-Volume Data Strategies',
		iconClass: 'flaticon-aggregate',
		heading: 'Turning Big Data into Strategic Insights',
		paragraph:
			'Large-scale data processing allows businesses to derive actionable insights using advanced analytics and machine learning, supporting strategic decisions. Real-time big data analytics helps optimize workflows, predict trends, and improve customer experiences through data-driven personalization.',
		leftServices: ['Customer Segmentation', 'Market Trend Analysis'],
		rightServices: ['Customer Behavior Prediction', 'Demand Forecasting'],
		image: '/assets/img/skill/big-data.jpg',
	},
	{
		id: 'topic-6' as TabId,
		title: 'Seamless Integration',
		iconClass: 'flaticon-solution',
		heading: 'Breaking Barriers with Software Integration',
		paragraph:
			'Software integration eliminates silos by enabling different systems to communicate and work together efficiently. By connecting disparate platforms via APIs and middleware, businesses can automate workflows, ensure data consistency, and improve operational efficiency.',
		leftServices: ['ERP and CRM Integration', 'E-commerce and Inventory'],
		rightServices: ['Finance and Accounting ', 'PM and Time Tracking'],
		image: '/assets/img/skill/integration.jpg',
	},
	{
		id: 'topic-1' as TabId,
		title: 'Digitization Projects',
		iconClass: 'flaticon-software-development',
		heading: 'Modernizing Business Operations',
		paragraph:
			'Digitization modernizes business operations by automating manual processes, enhancing data accuracy, and improving overall efficiency. By converting analog workflows into digital formats, companies can streamline operations, reduce costs, and enhance decision-making with real-time insights.',
		leftServices: ['Digital Document Management', 'CRM Digitization'],
		rightServices: ['After Sales ', 'Employee Onboarding '],
		image: '/assets/img/skill/digitization.jpg',
	},
];

export default function ProjectsTabs() {
	const [active, setActive] = useState<TabId>('topic-2');
	return (
		<div className="skill__two section-padding" id="projects">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-xl-6 col-lg-6 col-md-7">
						<div className="work-process__two-title">
							<span className="subtitle-one">Projects</span>
							<h2>Case Studies</h2>
						</div>
					</div>
				</div>
				<ul className="row nav mb-5 gy-2 justify-content-center ">
					{tabs.map((t) => (
						<li key={t.id} className="nav-item col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div
								className={`skill__two-tab nav-link px-3 py-3 ${active === t.id ? 'active' : ''}`}
								role="button"
								onClick={() => setActive(t.id)}
							>
								<span className="skill__two-tab-icon">
									<i className={t.iconClass}></i>
								</span>
								<span style={{ fontSize: 18 }}>{t.title}</span>
							</div>
						</li>
					))}
				</ul>
				<div className="skill__two-tab-details tab-content">
					{tabs.map((t) => (
						<div key={t.id} className={`row align-items-center flex-wrap-reverse gy-4 tab-pane fade ${active === t.id ? 'show active' : ''}`}>
							<div className="col-xl-6 col-lg-7 col-md-9">
								<div className="skill__two-tab-details-content">
									<h2>{t.heading}</h2>
									<p>{t.paragraph}</p>
									<div className="skill__two-tab-details-content-service">
										<div className="skill__two-tab-details-content-service-left">
											{t.leftServices.map((s) => (
												<div key={s} className="service"><i className="far fa-check-circle"></i><span>{s}</span></div>
											))}
										</div>
										<div className="skill__two-tab-details-content-service-right">
											{t.rightServices.map((s) => (
												<div key={s} className="service"><i className="far fa-check-circle"></i><span>{s}</span></div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8">
								<div className="skill__two-tab-details-image">
									<div className="skill__two-tab-details-image-wrapper">
										<img src={t.image} alt="" className="image-1" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
} 