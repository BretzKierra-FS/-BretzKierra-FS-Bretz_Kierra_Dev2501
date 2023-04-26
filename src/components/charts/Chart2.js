import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'January',
    uv: 40,
    pv: 20,
  },
  {
    name: 'Febuary',
    uv: 30,
    pv: 13,
  },
  {
    name: 'March',
    uv: 20,
    pv: 98,
  },
  {
    name: 'April',
    uv: 27,
    pv: 39,
  },
  {
    name: 'May',
    uv: 18,
    pv: 48,
  },
  {
    name: 'June',
    uv: 23,
    pv: 38,
  },
  {
    name: 'July',
    uv: 34,
    pv: 43,
  },
];

const Chart2 = ({ viewChart }) => {
  return (
    <div key={viewChart.id} style={styles.chart}>
      <h4 style={styles.chartTitles}>{viewChart.topTitle}</h4>

      <ResponsiveContainer width="100%" height={100}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <h4 style={styles.chartTitles}>{viewChart.bottomTitle}</h4>

      <ResponsiveContainer width="100%" height={100}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart2;

const styles = {
  chart: {
    width: '100%',
    height: '100%',
    margin: '1rem',
    backgroundColor: '#F0F6F6',
    borderRadius: '.75rem',
    paddingBottom: '0.5rem',
    paddingTop: '0.5rem',
  },
  chartTitles: {
    margin: '1rem',
  },
};
