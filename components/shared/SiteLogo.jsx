import Image from 'next/image';
import Link from 'next/link';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function SiteLogo() {
	const [activeTheme] = useThemeSwitcher();

	return (
		<Link href="/" className="inline-flex items-center" aria-label="NIKIL — Home">
			<Image
				src={
					activeTheme === 'dark'
						? '/images/logo-nikil-dark.png'
						: '/images/logo-nikil.png'
				}
				alt="NIKIL"
				width={360}
				height={88}
				className="h-8 w-auto sm:h-9"
				priority
			/>
		</Link>
	);
}

export default SiteLogo;
