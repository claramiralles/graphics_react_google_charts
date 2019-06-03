import React from 'react';
import Chart from 'react-google-charts';

const data = [
	{
		month: 0,
		year: 2018,
		ikea: 1,
		racc: 5,
		cc: 3,
		audi: 3,
		tork: 1
	},
	{
		month: 1,
		year: 2018,
		ikea: 2,
		racc: 15,
		cc: 6,
		audi: 3,
		tork: 2
	},
	{
		month: 2,
		year: 2018,
		ikea: 2,
		racc: 8,
		cc: 9,
		audi: 2,
		tork: 3
	},
	{
		month: 3,
		year: 2018,
		ikea: 2,
		racc: 4,
		cc: 3,
		audi: 1,
		tork: 2
	}
];

class PruebaBars extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoadingStatusBars: 'loading',
			chartDataBars: []
		};
	}

	componentDidMount() {
		//First item on array is an array of topic in direction x->, followed by companies names (the data to be stacked)
		// console.log(Object.values(data));
		// console.log(data);
		// console.log(Object.keys(data));

		const chartDataBars = [['Months', 'ikea', 'racc', 'cc', 'audi', 'tork']];

		this.setState({
			dataLoadingStatusBars: 'ready',
			chartDataBars: [
				['Meses', 'ikea', 'racc', 'cc', 'audi', 'tork'],
				['Enero', 1, 5, 3, 3, 1],
				['Febrero', 2, 15, 6, 3, 2],
				['Marzo', 2, 8, 9, 2, 3],
				['Abril', 2, 4, 3, 1, 2]
			]
		});
	}

	// 	const chartDataBarsNames = ['Genial', 'Meh', 'Mal'];
	// 	const chartDataBarsValues = Object.values(data);

	// 	for (let i = 0; i < chartDataBarsNames.length; i += 1) {
	// 		chartDataBars.push([chartDataBarsNames[i], chartDataBarsValues[i]]);
	// 	}
	// 	this.setState({
	// 		dataLoadingStatusBars: 'ready',
	// 		chartDataBars: chartDataBars
	// 	});
	// });

	// componentDidMount() {
	// 	fetch('http://private-01a241-adalabapi.apiary-mock.com/bar')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			console.log(data);
	// 			//For a basic bar chart we need the data like the following:
	// 			// data={[
	// 			//   ['City', '2010 Population', '2000 Population'],
	// 			//   ['New York City, NY', 8175000, 8008000],
	// 			//   ['Los Angeles, CA', 3792000, 3694000],
	// 			//   ['Chicago, IL', 2695000, 2896000],
	// 			//   ['Houston, TX', 2099000, 1953000],
	// 			//   ['Philadelphia, PA', 1526000, 1517000],
	// 			// ]}
	// 			const chartDataBars = [['Call mood', 'Quantity']];
	// 			//First item of this array is another array with the titles for topic and measurement
	// 			const chartDataBarsNames = ['Genial', 'Meh', 'Mal'];
	// 			const chartDataBarsValues = Object.values(data);

	// 			for (let i = 0; i < chartDataBarsNames.length; i += 1) {
	// 				chartDataBars.push([chartDataBarsNames[i], chartDataBarsValues[i]]);
	// 			}
	// 			this.setState({
	// 				dataLoadingStatusBars: 'ready',
	// 				chartDataBars: chartDataBars
	// 			});
	// 		});
	// }
	render() {
		//Conditional rendering
		return this.state.dataLoadingStatusBars === 'ready' ? (
			<Chart
				chartType="BarChart"
				loader={<div>Loading Chart</div>}
				width={'800px'}
				height={'300px'}
				// data={this.state.chartDataBars}
				data={this.state.chartDataBars}
				options={{
					title: 'Llamadas totales',
					chartArea: {
						width: '50%',
						stroke: '#1C1C1C'
					},
					isStacked: true,
					orientation: 'horizontal',

					hAxis: {
						title: 'Mes',
						titleTextStyle: {
							color: '#fff'
						},
						textStyle: {
							color: '#fff'
						},
						minValue: 0
					},

					vAxis: {
						title: 'Número de llamadas',
						titleTextStyle: {
							color: '#fff'
						}
					},

					legend: {
						//To place the legend on the top
						position: 'top',
						alignment: 'start',

						//Working
						textStyle: {
							color: '#fff',
							fontSize: 14,
							fontName: 'Arial',
							bold: false,
							italic: false
						}
					},

					backgroundColor: '#1C1C1C',
					titleTextStyle: {
						color: 'white',
						fontSize: 16,
						fontName: 'Arial',
						bold: true
					}
				}}
			/>
		) : (
			<div>Fetching data from API</div>
		);
	}
}

export default PruebaBars;
