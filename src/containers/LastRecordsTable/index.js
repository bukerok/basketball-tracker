import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';

import { removeRecord, selectLast5Shots } from '../../store/features/shots/shotsSlice';

import './index.scss';

export default function LastRecordsTable() {
  const dispatch = useDispatch();
  const shots = useSelector(selectLast5Shots);

  return (
    <div className="last-records">
      <Typography
        variant="h6"
        gutterBottom
      >
        Last Records
      </Typography>
      <Table
        className="last-records__table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell>Zone</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Result</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shots.length === 0 &&
            <TableRow className="last-records__no-data">
              <TableCell
                colSpan="4"
                align="center"
              >
                No data.
              </TableCell>
            </TableRow>
          }
          {shots.map((aShot) => {
            return (
              <TableRow key={aShot.date}>
                <TableCell align="center">
                  {aShot.type}
                </TableCell>
                <TableCell className="date-cell">
                  {aShot.date.toLocaleString()}
                </TableCell>
                <TableCell
                  align="right"
                  className="score-cell"
                >
                  {aShot.score} / {aShot.attempts}
                </TableCell>
                <TableCell className="action-cell">
                  <IconButton
                    size="small"
                    onClick={() => dispatch(removeRecord(aShot.date))}
                  >
                    <RemoveIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
