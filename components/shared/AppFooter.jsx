import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../../data/profileData';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: profile.github,
		label: 'GitHub',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: profile.linkedin,
		label: 'LinkedIn',
	},
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				<div className="font-general-regular flex flex-col justify-center items-center">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								key={link.id}
								aria-label={link.label}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AppFooter;
