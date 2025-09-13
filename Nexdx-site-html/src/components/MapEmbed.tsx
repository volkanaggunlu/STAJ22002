export default function MapEmbed() {
	return (
		<div className="location-map" style={{ marginBottom: -120 }}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.4047473382134!2d28.856257775517673!3d40.22230216745074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11e76897ed27%3A0x6b086edd81e12343!2sUlutek%20Teknopark!5e0!3m2!1str!2str!4v1725609554045!5m2!1str!2str"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Ulutek Teknopark"
				style={{ width: '100%', height: 650, border: 0 }}
			/>
		</div>
	);
} 