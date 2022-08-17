export async function load({ fetch }) {
	const noticeList = await fetch(`/api/notices.json`).then((res) => res.json());
	return {
		noticeList
	};
}
