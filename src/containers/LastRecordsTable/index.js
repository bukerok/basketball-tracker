import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';

import { removeRecord, selectLast5Records } from '../../store/features/shots/shotsSlice';
import { mapZoneToLabel } from '../../helpers/shooting';

import './index.scss';

export default function LastRecordsTable() {
  const dispatch = useDispatch();
  const rows = useSelector(selectLast5Records);

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
          {rows.map((row) => {
            const date = new Date(row.date);

            return (
              <TableRow key={row.date}>
                <TableCell align="center">
                  {mapZoneToLabel(row.zone)}
                </TableCell>
                <TableCell className="date-cell">
                  {date.toLocaleString()}
                </TableCell>
                <TableCell
                  align="right"
                  className="score-cell"
                >
                  {row.score} / {row.attempts}
                </TableCell>
                <TableCell className="action-cell">
                  <IconButton
                    size="small"
                    onClick={() => dispatch(removeRecord(row.date))}
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
};
