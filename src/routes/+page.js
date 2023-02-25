/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const rawData = await fetch(`${url.origin}/api/forecast`);
	const forecast = await rawData.json();
	const { Headline } = forecast;
	let rain = [];
	forecast.DailyForecasts.forEach((el) => {
		const probability = el.Day.RainProbability + el.Night.RainProbability;
		const d = new Date(el.Date);
		const date = d.toDateString().slice(0, 3);
		rain = [...rain, { probability, date }];
	});

	// ongoing classes
	const classes = await fetch(`${url.origin}/api/ongoing`).then((e) => e.json());

	return { Headline, rain, classes };
}
