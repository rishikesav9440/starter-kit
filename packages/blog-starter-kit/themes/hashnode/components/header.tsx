import { twJoin } from 'tailwind-merge';
import { lightOrDark } from '../utils/commonUtils';
import { useAppContext } from './contexts/appContext';
import { Button } from './custom-button';
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import PublicationLogo from './publication-logo';
import PublicationNavLinks from './publication-nav-links';
import PublicationSocialLinks from './publication-social-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {
	const { currentMenuId, isHome } = props;
	const { publication } = useAppContext();

	return (
		<header
			className="blog-header relative z-50 w-full border-b border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70"
		>
	
		</header>
	);
};
