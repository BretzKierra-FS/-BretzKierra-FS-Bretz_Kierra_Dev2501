import React, { useState } from 'react';
import Chart1 from '../components/charts/Chart1';
import Chart2 from '../components/charts/Chart2';

function DashBoard() {
  const [chart] = useState([
    { title: 'Amount of Likes', fillColor: '#8DB580' },
    { title: 'Dislikes', fillColor: '#F55D5D' },
  ]);
  const [viewChart] = useState([
    { topTitle: 'Amount of Views', bottomTitle: 'Amount of Shares' },
  ]);
  return (
    <main style={styles.container}>
      <h1 style={styles.chartTitle}>Dashboard</h1>
      <div style={styles.chartsContainer}>
        {chart.map((chart, id) => (
          <Chart1 key={id} id={id} chart={chart} />
        ))}
      </div>
      <div>
        {viewChart.map((viewChart, id) => (
          <Chart2 key={id} id={id} viewChart={viewChart} />
        ))}
      </div>
    </main>
  );
}
export default DashBoard;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '130vh',
    width: '80%',
  },
  chartsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  chartTitle: {
    margin: '1rem',
    color: '#F0F6F6',
  },
};
