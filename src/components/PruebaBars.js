import React from 'react';
import Chart from 'react-google-charts';

const data = [
	{
		month: 2,
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

const monthsYear = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Noviembre',
	'Diciembre'
];

class PruebaBars extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoadingStatusBars: 'loading',

			dataBarsTransformed: [],
			chartDataBars: []
		};
	}

	componentDidMount() {
		//Gonna create a new key with the Month as a word
		this.setState({
			dataBarsTransformed: data.map((item,index) => {
				return {
					...item,
					month: monthsYear[data[index].month]
				};
			})
		});
	}

	componentDidUpdate() {
		console.log(this.state);
		const oneMonthReduced = this.state.dataBarsTransformed[0];
		console.log(oneMonthReduced);

		const allDataToKeep = Object.values(oneMonthReduced);
		const dataToKeep = Object.values(oneMonthReduced).splice(1, 1);//[2018]
		const arraySinFecha = allDataToKeep.filter(item => item !== dataToKeep[0])
		console.log(dataToKeep);
		console.log(arraySinFecha);

		const someKeys = Object.keys(oneMonthReduced).splice(2);
		console.log(someKeys);

		//Here all items following 'Months' should be from the filter fetch. Let's start with them manually
		const chartTitle = ['Meses'];
		const concatenate = chartTitle.concat(someKeys);
		console.log(concatenate)
		const chartDataBars = [];
		chartDataBars.push(arraySinFecha);
		console.log(chartDataBars);
	}

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
