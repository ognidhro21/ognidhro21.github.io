// src/routes/[slug]/+page.server.js
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../data/${params.slug}.md`);
		const { title } = post.metadata;
		const content = post.default.render().html;

		return {
			title,
			content
		};
	} catch (err) {
		throw error(404, err);
	}
}
