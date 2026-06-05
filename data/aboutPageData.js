import { profile } from './profileData';

export const aboutHero = {
	name: profile.name,
	title: 'Senior Backend Engineer',
	subtitle: 'Python · FastAPI · Odoo · PostgreSQL · AWS',
	intro:
		'I build backend systems that solve real business problems — APIs, ERP customizations, and multi-tenant SaaS. I care about clean architecture, reliable integrations, and shipping work that holds up in production.',
};

export const whatYouBuild = {
	heading: 'What I build',
	paragraph:
		'Production-grade REST and async APIs, Odoo ERP modules, Laravel backends for mobile clients, and cloud deployments on AWS. I integrate payments, OTP/SMS, maps, WhatsApp, and POS systems so products work end-to-end — not just on paper.',
};

export const proofProjects = {
	heading: 'Proof of work',
	items: [
		{
			title: 'LevityX — shop management (Odoo 19) · 2026',
			impact:
				'Personal product started 2026 on Odoo 19 POS — Udhaar credit tracking, WhatsApp bills, and customer purchase history (not employer/client work).',
		},
		{
			title: 'HRMS multi-tenant SaaS migration',
			impact:
				'Migrated a 117-table monolithic Laravel HRMS to dedicated-database-per-tenant architecture with stancl/tenancy — zero data loss and full tenant isolation.',
		},
		{
			title: 'Freelance social mobile app (Flutter + FastAPI) · 2026',
			impact:
				'Delivered production backend for a Flutter client — async REST, WebSocket chat (Redis Pub/Sub), JWT auth, media on AWS S3, FCM push, PostgreSQL on AWS EC2.',
		},
		{
			title: 'RSL enterprise web application (Odoo 18/19) · 2025',
			impact:
				'Custom Odoo modules for RSL — Python ORM, _inherit views, QWeb PDF reports, and record-level security on AWS production.',
		},
		{
			title: 'Furniture vendor system — Odoo 19 (freelance) · 2026',
			impact:
				'Four-role order workflow, 12-state lifecycle, customer portal, and automated invoicing — delivered as a freelance Odoo engagement.',
		},
		{
			title: 'Laravel APIs for mobile & marketplaces',
			impact:
				'Feedygo and Darmadar (2025) — Flutter mobile apps plus Laravel admin dashboards (Petpooja, MSG91, Razorpay, live GPS via Reverb) in production.',
		},
	],
};

export const freelanceGoals = {
	heading: 'Open to',
	items: [
		'Remote Senior Backend Engineer roles (Python, FastAPI, Laravel)',
		'Odoo ERP development and customization engagements',
		'Freelance backend/API work — scoped modules, integrations, or greenfield APIs',
		'Contract-to-hire or part-time backend consulting',
	],
	availability: 'Available immediately for remote work worldwide.',
};

export const backendTechnologies = {
	heading: 'Core stack',
	items: [
		'Python',
		'FastAPI',
		'PostgreSQL',
		'AWS',
		'AWS S3',
		'Redis',
		'Docker',
		'Odoo',
		'Laravel',
		'MySQL',
		'SQLAlchemy',
		'WebSockets',
		'JWT',
	],
	note: 'Mobile (Flutter) appears only where I design APIs consumed by apps — backend remains the focus.',
};

export const experienceHighlights = {
	heading: 'Experience highlights',
	items: [
		{
			role: 'Senior Backend Engineer',
			company: 'Petrocon Engineers & Consultants',
			period: 'Dec 2024 – Present',
			bullets: [
				'Architected HRMS SaaS migration and AWS production stack (EC2, RDS, S3, queues).',
				'RSL enterprise web app (Odoo 18/19), Laravel/FastAPI APIs for Flutter apps; Razorpay, MSG91, Maps, WhatsApp, Petpooja integrations.',
			],
		},
		{
			role: 'Software Engineer',
			company: 'Invenger Cloud & Invenger Technologies',
			period: 'Aug 2021 – Nov 2024',
			bullets: [
				'Odoo 16/17 dental clinic module with WhatsApp reminders and QWeb billing reports.',
				'Claims Pay insurance backend — PHP, optimized SQL, PHPUnit coverage.',
			],
		},
		{
			role: 'Software Engineer',
			company: 'Udupi Web Solutions',
			period: 'Feb 2021 – Aug 2021',
			bullets: [
				'Laravel invoice system with GST, discounts, and client-specific billing rules.',
			],
		},
	],
};

export const educationCerts = {
	heading: 'Education & certifications',
	education: {
		degree: 'B.E. Electronics and Communication Engineering',
		school: 'SMVITM, Bantakal (Udupi)',
		period: '2016 – 2020',
	},
	certifications: [
		'AWS Certified Cloud Practitioner — in progress (target Q3 2026)',
		'GitHub Copilot — daily use for development and code review',
	],
};

export const aboutContact = {
	heading: 'Get in touch',
	links: [
		{ label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
		{ label: 'LinkedIn', href: profile.linkedin, text: 'linkedin.com/in/nikil-s-kumar-34548b1a4' },
		{ label: 'GitHub', href: profile.github, text: 'github.com/DevNSKU' },
		{ label: 'Portfolio', href: '/', text: 'This site' },
		{ label: 'Resume', href: profile.resumeFile, text: 'Download CV (PDF)' },
	],
};
