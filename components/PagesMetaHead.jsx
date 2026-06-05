import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.png" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Nikil S Kumar | Portfolio',
	keywords:
		'Nikil S Kumar, software engineer, Odoo, Laravel, Python, AWS, portfolio',
	description:
		'Nikil S Kumar — Senior Backend Engineer (Python, FastAPI, Odoo, AWS). APIs, ERP, SaaS. Open to remote and freelance work.',
};

export default PagesMetaHead;
