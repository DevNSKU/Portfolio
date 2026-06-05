import { clientsData, clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-3 mt-10 sm:mt-14 gap-4 max-w-4xl mx-auto">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						role={client.role}
						period={client.period}
						image={client.img}
						current={client.current}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;
