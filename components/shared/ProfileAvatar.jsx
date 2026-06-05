import Image from 'next/image';

function ProfileAvatar({ size = 200, alt = 'Nikil S Kumar', priority = false }) {
	const dimension = size;
	return (
		<div
			className="relative rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-100 dark:ring-indigo-500/30 bg-secondary-light dark:bg-ternary-dark shrink-0"
			style={{ width: dimension, height: dimension }}
		>
			<Image
				src="/images/profile.jpeg?v=8"
				alt={alt}
				fill
				sizes={`${dimension}px`}
				className="object-cover object-center"
				priority={priority}
			/>
		</div>
	);
}

export default ProfileAvatar;
