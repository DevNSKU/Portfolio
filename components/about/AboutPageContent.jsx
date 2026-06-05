import Link from 'next/link';
import { profile } from '../../data/profileData';
import ProfileAvatar from '../shared/ProfileAvatar';
import {
	aboutHero,
	whatYouBuild,
	proofProjects,
	freelanceGoals,
	backendTechnologies,
	experienceHighlights,
	educationCerts,
	aboutContact,
} from '../../data/aboutPageData';
import AboutSection from './AboutSection';

function AboutPageContent() {
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 pb-10">
			<div className="w-full sm:w-1/4 mb-8 sm:mb-0 flex flex-col items-center sm:items-start">
				<ProfileAvatar size={200} alt={aboutHero.name} priority />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<h1 className="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
					{aboutHero.name}
				</h1>
				<p className="font-general-medium text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 mt-2">
					{aboutHero.title}
				</p>
				<p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mt-1">
					{aboutHero.subtitle}
				</p>
				<p className="mt-6 text-lg text-ternary-dark dark:text-ternary-light leading-relaxed">
					{aboutHero.intro}
				</p>

				<AboutSection heading={whatYouBuild.heading}>
					<p className="text-lg text-ternary-dark dark:text-ternary-light leading-relaxed">
						{whatYouBuild.paragraph}
					</p>
				</AboutSection>

				<AboutSection heading={proofProjects.heading}>
					<ul className="space-y-5">
						{proofProjects.items.map((item) => (
							<li
								key={item.title}
								className="border-l-4 border-indigo-500 pl-4"
							>
								<p className="font-general-medium text-primary-dark dark:text-primary-light">
									{item.title}
								</p>
								<p className="mt-1 text-ternary-dark dark:text-ternary-light">
									{item.impact}
								</p>
							</li>
						))}
					</ul>
				</AboutSection>

				<AboutSection heading={freelanceGoals.heading}>
					<ul className="list-disc list-inside space-y-2 text-ternary-dark dark:text-ternary-light text-lg">
						{freelanceGoals.items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<p className="mt-4 text-indigo-600 dark:text-indigo-400 font-general-medium">
						{freelanceGoals.availability}
					</p>
				</AboutSection>

				<AboutSection heading={backendTechnologies.heading}>
					<div className="flex flex-wrap gap-2">
						{backendTechnologies.items.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1.5 text-sm font-general-medium rounded-lg bg-indigo-50 dark:bg-ternary-dark text-primary-dark dark:text-primary-light border border-indigo-100 dark:border-secondary-dark"
							>
								{tech}
							</span>
						))}
					</div>
					<p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
						{backendTechnologies.note}
					</p>
				</AboutSection>

				<AboutSection heading={experienceHighlights.heading}>
					<div className="space-y-6">
						{experienceHighlights.items.map((job) => (
							<div key={job.company + job.period}>
								<p className="font-general-semibold text-primary-dark dark:text-primary-light">
									{job.role}
								</p>
								<p className="text-ternary-dark dark:text-ternary-light">
									{job.company} · {job.period}
								</p>
								<ul className="mt-2 list-disc list-inside space-y-1 text-ternary-dark dark:text-ternary-light">
									{job.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</AboutSection>

				<AboutSection heading={educationCerts.heading}>
					<p className="font-general-medium text-primary-dark dark:text-primary-light">
						{educationCerts.education.degree}
					</p>
					<p className="text-ternary-dark dark:text-ternary-light">
						{educationCerts.education.school} ·{' '}
						{educationCerts.education.period}
					</p>
					<ul className="mt-4 list-disc list-inside space-y-1 text-ternary-dark dark:text-ternary-light">
						{educationCerts.certifications.map((cert) => (
							<li key={cert}>{cert}</li>
						))}
					</ul>
				</AboutSection>

				<AboutSection heading={aboutContact.heading}>
					<ul className="space-y-3">
						{aboutContact.links.map((link) => (
							<li key={link.label}>
								<span className="font-general-medium text-primary-dark dark:text-primary-light mr-2">
									{link.label}:
								</span>
								{link.label === 'Resume' ? (
									<a
										href={profile.resumeFile}
										download={profile.resumeDownloadName}
										className="text-indigo-600 dark:text-indigo-400 hover:underline"
									>
										{link.text}
									</a>
								) : (
									<Link
										href={link.href}
										target={
											link.href.startsWith('http') ||
											link.href.startsWith('mailto')
												? '_blank'
												: undefined
										}
										rel={
											link.href.startsWith('http')
												? 'noopener noreferrer'
												: undefined
										}
										className="text-indigo-600 dark:text-indigo-400 hover:underline"
									>
										{link.text}
									</Link>
								)}
							</li>
						))}
					</ul>
				</AboutSection>
			</div>
		</div>
	);
}

export default AboutPageContent;
