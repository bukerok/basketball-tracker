import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { aggregateRecords } from '../../helpers/graph';
import { selectRecords } from '../../store/features/shots/shotsSlice';

import './index.scss';

export default function ShotsStatsGraph() {
  const records = useSelector(selectRecords);
  const data = aggregateRecords(records);

  return (
    <ResponsiveContainer
      className="shots-stats-graph"
      width="100%"
      height={300}
    >
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip
            formatter={(value, name, props) => {
              return `${value.toFixed(2)}%`;
            }}
          />
          <Legend />
          <Line
            connectNulls
            type="monotone"
            dataKey="FT"
            stroke="#0288D1"
            activeDot={{ r: 8 }}
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="2PT"
            stroke="#7B1FA2"
            activeDot={{ r: 8 }}
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="3PT"
            stroke="#388E3C"
            activeDot={{ r: 8 }}
          />
      </LineChart>
    </ResponsiveContainer>
  );
};
