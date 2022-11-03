/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const rawData = await fetch(`${url.origin}/api/forecast`);
	const forecast = await rawData.json();
	let weather = [];
	// let temperature = [];

	forecast.DailyForecasts.forEach((el) => {
		const probability = el.Day.RainProbability + el.Night.RainProbability;
		const d = new Date(el.Date);
		const date = d.toDateString().slice(0, 3);
		const min = el.RealFeelTemperature.Minimum.Value + '°';
		const max = el.RealFeelTemperature.Maximum.Value + '°';
		const day = el.Day.LongPhrase;
		const night = el.Night.LongPhrase;
		weather = [...weather, { probability, date, min, max, day, night }];
	});

	return { weather };
}
