import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import { profile } from '../../data/profileData';

function AboutCounter() {
	useCountUp({
		ref: 'experienceCounter',
		end: profile.yearsOfExperience,
		duration: 2,
	});
	useCountUp({
		ref: 'backendCounter',
		end: profile.yearsBackendDev,
		duration: 2,
	});
	useCountUp({
		ref: 'companiesCounter',
		end: profile.companiesWorked,
		duration: 2,
	});
	useCountUp({
		ref: 'stacksCounter',
		end: profile.coreStacks,
		duration: 2,
	});

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Years in backend dev"
					counter={<span id="backendCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Companies worked with"
					counter={<span id="companiesCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Core stacks"
					counter={<span id="stacksCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
