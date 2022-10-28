const facebookPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_PAGE : '';
const facebookAuthorPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_AUTHOR_PAGE : '';

const website = {
	version: '3.2.9',
	author: 'Ognidhro 21',
	ogLanguage: 'en_US',
	siteLanguage: 'en-US',
	siteTitle: 'Ognidhro 21',
	siteShortTitle: 'Ognidhro 21',
	siteUrl: import.meta.env ? /** @type {string} */ (import.meta.env.VITE_SITE_URL) : '',
	icon: 'static/ognidhro-rounded.png',
	backgroundColor: '#ffebee',
	themeColor: '#ff1744',
	contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : '',
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: import.meta.env ? import.meta.env.VITE_GITHUB_PAGE : ''
};

export { website as default };
