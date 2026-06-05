function AboutSection({ heading, children, className = '' }) {
	return (
		<section className={`mt-12 sm:mt-16 ${className}`}>
			<h2 className="font-general-semibold text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-4">
				{heading}
			</h2>
			{children}
		</section>
	);
}

export default AboutSection;
