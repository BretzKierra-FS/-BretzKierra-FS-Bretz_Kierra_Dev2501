import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: 'January',
    uv: 0,
    pv: 24,
    amt: 240,
  },
  {
    name: 'Febuary',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'May',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'June',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'July',
    uv: 189,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'August',
    uv: 23,
    pv: 38,
    amt: 20,
  },
  {
    name: 'September',
    uv: 34,
    pv: 43,
    amt: 20,
  },
  {
    name: 'October',
    uv: 122,
    pv: 43,
    amt: 20,
  },
  {
    name: 'November',
    uv: 4,
    pv: 43,
    amt: 21,
  },
  {
    name: 'December',
    uv: 36,
    pv: 43,
    amt: 21,
  },
];

const Chart1 = ({ chart }) => {
  return (
    <div key={chart.id} style={styles.chart}>
      <h3 style={styles.title}>{chart.title}</h3>
      <AreaChart
        width={400}
        height={200}
        data={data}
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
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill={chart.fillColor}
        />
      </AreaChart>
    </div>
  );
};

export default Chart1;

const styles = {
  chart: {
    width: '100%',
    margin: '1rem',
    backgroundColor: '#F0F6F6',
    borderRadius: '.75rem',
  },
  title: {
    textAlign: 'center',
  },
};
