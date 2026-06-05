import { FiMapPin, FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import { profile } from '../../data/profileData';

const contacts = [
	{
		id: 1,
		name: profile.location,
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: profile.email,
		icon: <FiMail />,
		href: `mailto:${profile.email}`,
	},
	{
		id: 3,
		name: profile.phone,
		icon: <FiPhone />,
		href: `tel:${profile.phone.replace(/\s/g, '')}`,
	},
	{
		id: 4,
		name: 'LinkedIn profile',
		icon: <FiLinkedin />,
		href: profile.linkedin,
	},
	{
		id: 5,
		name: 'github.com/DevNSKU',
		icon: <FiGithub />,
		href: profile.github,
	},
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul>
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							{contact.href ? (
								<a
									href={contact.href}
									target={
										contact.href.startsWith('http')
											? '_blank'
											: undefined
									}
									rel={
										contact.href.startsWith('http')
											? 'noopener noreferrer'
											: undefined
									}
									className="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 duration-300"
								>
									{contact.name}
								</a>
							) : (
								<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
									{contact.name}
								</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
