const codes = [
	{
		code: 'acm',
		name: 'Agricultural Chemistry',
		color: 'g.main'
	},
	{
		code: 'hrt',
		name: 'Horticulture',
		color: 'b.main'
	},
	{
		code: 'ssc',
		name: 'Soil Science',
		color: 'c.main'
	},
	{
		code: 'agr',
		name: 'Agronomy',
		color: 'i.main'
	},

	{
		code: 'aes',
		name: 'Agricultural Economics',
		color: 'y.main'
	},
	{
		code: 'bcm',
		name: 'Biomolecular Chemistry',
		color: 'br.main'
	},
	{
		code: 'age',
		name: 'Agricultural Engineering',
		color: 'l.main'
	}
];

export default function c2t(code) {
	const name = codes.find((c) => c.code === code).name;
	return name;
}
