import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Cattle ID', minWidth: 100 },
  { id: 'sync', label: 'วันกลับสัด(หากไม่ท้อง)', minWidth: 100,align: 'right' },
  { id: 'code', label: 'แจ้งเตือนก่อน 7วัน', minWidth: 100,align: 'right' },
  {
    id: 'population',
    label: 'วันคลอด',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'size',
    label: 'แจ้งเตือนหลัง 7 วัน',
    minWidth: 100,
    align: 'right',
  },
 
];


const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:"20px",
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableClaves(props) {
  const rows =props.id;
const B7=props.B7;
const Clave=props.clavedate;
const A7=props.A7;
const dateSync=props.sync;
  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} >
      <TableContainer className={classes.container} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,zIndex:"0" }}
                >
                <h6>  {column.label}</h6>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover tabIndex={-1} key={index}>
                 <TableCell>{row}</TableCell>
                 <TableCell align="right">{dateSync}</TableCell>
                 <TableCell align="right">{B7[index]}</TableCell>
                 <TableCell align="right">{Clave[index]}</TableCell>
                 <TableCell align="right">{A7[index]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
