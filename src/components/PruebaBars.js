import React from 'react';
import Chart from 'react-google-charts';

class PruebaBars extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoadingStatusBars: 'loading',
			chartDataBars: []
		};
	}
	componentDidMount() {
		fetch(
			'https://private-afa254-adalabapi.apiary-mock.com/pie?from=18/01/2019&to=01/02/2019&client=ikea'
		)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				//For a basic bar chart we need the data like the following:
				// data={[
				//   ['City', '2010 Population', '2000 Population'],
				//   ['New York City, NY', 8175000, 8008000],
				//   ['Los Angeles, CA', 3792000, 3694000],
				//   ['Chicago, IL', 2695000, 2896000],
				//   ['Houston, TX', 2099000, 1953000],
				//   ['Philadelphia, PA', 1526000, 1517000],
				// ]}
				const chartDataBars = [['Call mood', 'Quantity']]; //First item of this array is another array with the titles for topic and measurement
				const chartDataBarsNames = ['Genial', 'Meh', 'Mal'];
				const chartDataBarsValues = Object.values(data);

				for (let i = 0; i < chartDataBarsNames.length; i += 1) {
					chartDataBars.push([chartDataBarsNames[i], chartDataBarsValues[i]]);
				}
				this.setState({
					dataLoadingStatusBars: 'ready',
					chartDataBars: chartDataBars
				});
			});
	}
	render() {
		//Conditional rendering
		return this.state.dataLoadingStatusBars === 'ready' ? (
			<Chart
				chartType="PieChart"
				data={this.state.chartData}
				options={{
					slices: [
						{
							color: '#58C155'
						},
						{
							color: '#F5C167'
						},
						{
							color: '#EE8268'
						}
					],
					chartArea: {
						width: '50%',
						height: '80%',
						stroke: '#1C1C1C'
					},
					legend: {
						textStyle: {
							color: '#fff',
							fontSize: 14
						}
					},
					backgroundColor: '#1C1C1C',
					pieSliceBorderColor: '#1C1C1C',
					pieSliceTextStyle: {
						color: '#1C1C1C'
					},
					title: 'Humor de las llamadas',
					titleTextStyle: {
						color: 'white'
					}
				}}
				rootProps={{ 'data-testid': '1' }}
			/>
		) : (
			<div>Fetching data from API</div>
		);
	}
}

export default PruebaBars;
