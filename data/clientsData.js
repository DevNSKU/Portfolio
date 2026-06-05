import { v4 as uuidv4 } from 'uuid';

export const clientsHeading = "Companies I've worked with";

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Petrocon Engineers & Consultants',
		role: 'Senior Backend Engineer',
		period: 'Dec 2024 – Present',
		img: '/images/companies/petrocon.png',
		current: true,
	},
	{
		id: uuidv4(),
		title: 'Invenger Technologies',
		role: 'Software Engineer · Odoo Developer',
		period: 'Aug 2021 – Nov 2024',
		img: '/images/companies/invenger.png',
	},
	{
		id: uuidv4(),
		title: 'Udupi Web Solutions',
		role: 'Software Engineer',
		period: 'Feb 2021 – Aug 2021',
		img: '/images/companies/udupi.svg',
	},
];
