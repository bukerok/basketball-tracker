import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';

import { mapZoneToLabel } from '../../helpers/shooting';
import { formatStat } from '../../helpers/statistics';

import ZoneSelector from '../ZoneSelector';

import './index.scss';

export default function ZoneStatsSheet({
  data,
  opened,
  onClose,
}) {
  if (!opened) {
    return null;
  }

  const rows = [
    {
      name: 'Category',
      value: mapZoneToLabel(data.zone),
    },
    {
      name: 'Accuracy',
      value: formatStat(data),
    },
    {
      name: 'Total attempts',
      value: data.attempts || 0,
    },
  ];

  return (
    <Drawer
      classes={{
        root: 'zone-stats-sheet',
        paper: 'zone-stats-sheet__paper',
      }}
      anchor="bottom"
      open
      onClose={onClose}
    >
      <ZoneSelector
        className="zone-stats-sheet__zones"
        activeZone={data.zone}
      />
      <Table className="zone-stats-sheet__table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.name}>
                <TableCell className="name-cell">{row.name}</TableCell>
                <TableCell className="value-cell">{row.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Drawer>
  );
};
