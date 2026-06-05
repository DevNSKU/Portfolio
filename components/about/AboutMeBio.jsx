import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import ProfileAvatar from '../shared/ProfileAvatar';

function AboutMeBio() {
	const [aboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
				<ProfileAvatar size={200} />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
