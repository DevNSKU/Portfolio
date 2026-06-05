import Image from 'next/image';

function AboutClientSingle({ title, role, period, image, current }) {
	return (
		<div className="py-6 px-6 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-5 h-full flex flex-col items-center text-center">
			<div className="relative w-20 h-20 mb-4 flex items-center justify-center">
				<Image
					src={image}
					alt={title}
					width={80}
					height={80}
					className="object-contain max-h-20"
				/>
			</div>
			{current ? (
				<span className="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2">
					Current
				</span>
			) : null}
			<h3 className="font-general-semibold text-base text-primary-dark dark:text-primary-light leading-snug">
				{title}
			</h3>
			<p className="font-general-regular text-sm text-ternary-dark dark:text-ternary-light mt-2">
				{role}
			</p>
			<p className="font-general-regular text-xs text-gray-500 dark:text-gray-400 mt-1">
				{period}
			</p>
		</div>
	);
}

export default AboutClientSingle;
