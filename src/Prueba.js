import React from 'react';
import Chart from 'react-google-charts';

class Prueba extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            dataLoadingStatus: 'loading',
            chartData: [],
          }
    }
    componentDidMount() {
        fetch('https://private-afa254-adalabapi.apiary-mock.com/pie?from=18/01/2019&to=01/02/2019&client=ikea')
            .then(response=> response.json())
            .then(data=> {
                const rateCurrencyNames = ['Genial', 'Meh', 'Mal'];
                const rateCurrencyValues = Object.values(data);
                const chartData = [['Call mood', 'Quantity']];
                for (let i=0; i < rateCurrencyNames.length; i += 1) {
                    chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]]);
                }
                this.setState({
                    dataLoadingStatus: 'ready',
                    chartData: chartData,
                });
            })
    }
    render(){
        return(
            this.state.dataLoadingStatus === 'ready' ? (
                <Chart
                  chartType="PieChart"
                  data={this.state.chartData}
                  options={{
                    slices: [
                      {
                        color: "#58C155"
                      },
                      {
                        color: "#F5C167"
                      },
                      {
                        color: "#EE8268"
                      }
                    ],
                    chartArea: {
                      width: "50%",
                      height: "80%",
                      stroke:	"#1C1C1C",
                    },
                    legend: {
                      textStyle: {
                        color: "#fff",
                        fontSize: 14,
                      }
                    },
                    backgroundColor: "#1C1C1C",
                    pieSliceBorderColor: "#1C1C1C",
                    pieSliceTextStyle: {
                      color: "#1C1C1C",
                    },
                    title: 'Humor de las llamadas',
                    titleTextStyle: {
                      color: "white",
                    }
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              ) : (
                <div>Fetching data from API</div>
              )
        );
    }
}

export default Prueba;