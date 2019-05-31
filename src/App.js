import React from 'react';
import Chart from 'react-google-charts';
import './App.css';

function App() {
  return (
    <div className="App">
  <Chart
  width={'800px'}
  height={'400px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>} 
  data={[
    ['Tone', 'Percentage'],
    ['Genial', 76],
    ['Meh', 7],
    ['Mal', 17],
  ]}
  options={{
    title: 'Humor de las llamadas',
    sliceVisibilityThreshold: 0.01, // 1%
  }}
  rootProps={{ 'data-testid': '7' }}
/>
    </div>
  );
}


export default App;
