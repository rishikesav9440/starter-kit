import Link from 'next/link';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

/* eslint-disable no-nested-ternary */
import { getCommonBtnStyles } from './common-header-icon-btn';
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import HeaderTooltip from './header-tooltip';
import { ChevronLeftSVG } from './icons/svgs/';
import PublicationSocialLinks from './publication-social-links';
import useStickyNavScroll from './use-sticky-nav-scroll';

import { PublicationFragment } from '../generated/graphql';
import { Button } from './custom-button';
import PublicationLogo from './publication-logo';

type Props = {
	publication: Pick<PublicationFragment, 'id' | 'title' | 'links' | 'url' | 'features' | 'isTeam' | 'author' | 'preferences'>;
};

const PostPageNavbar = forwardRef<HTMLElement, Props>((props, ref) => {
	const { publication } = props;

	useStickyNavScroll({ elRef: ref });

	const commonIconBtnStyles = getCommonBtnStyles();

	return (
		<div className="container mx-auto px-2 md:px-4 md:py-1 2xl:px-10">
		

			{/* Logo for mobile view */}
			

		
		</div>
	);
});

PostPageNavbar.displayName = 'PostPageNavbar';

export default PostPageNavbar;
