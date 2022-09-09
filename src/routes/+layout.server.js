// // src/routes/blog/+page.server.js
export const prerender = true;
export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/notices`);
	const noticeList = await response.json();

	return {
		noticeList
	};
};
