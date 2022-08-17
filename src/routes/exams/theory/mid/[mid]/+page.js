import { isCompleted } from '$lib/time/date';
import Container from '../../../../../components/shared/Container.svelte';
import ExamCard from '../../../../../components/shared/schedules/ExamCard.svelte';
import SEO from '../../../../../components/shared/SEO/index.svelte';

export async function load({ params }) {
	const slug = params.mid;

	const json = await import(`../../../../../data/schedules/exams/theory/${slug}.json`);
	return {
		json
	};
}
