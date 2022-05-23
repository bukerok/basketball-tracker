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
import Typography from '@material-ui/core/Typography';

import { aggregateShots } from '../../helpers/graph';
import { selectShots } from '../../store/features/shots/shotsSlice';

import './index.scss';

export default function ShotsStatsGraph() {
  const shots = useSelector(selectShots);
  const data = aggregateShots(shots);

  return (
    <div className="shots-stats-graph">
      <Typography
        variant="h6"
        gutterBottom
      >
        Shots Stats
      </Typography>
      {
        data.length === 0 ?
          <div className="shots-stats-graph__no-data">No data.</div> :
          <ResponsiveContainer
            className="shots-stats-graph__graph"
            width="100%"
            height={200}
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
                formatter={(value) => {
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
      }
    </div>
  );
};
