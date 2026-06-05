import { profile } from '../../data/profileData';

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href={profile.github}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					{profile.name}
				</a>
				. Built with Next.js & Tailwind CSS.
			</div>
		</div>
	);
}

export default AppFooterCopyright;
