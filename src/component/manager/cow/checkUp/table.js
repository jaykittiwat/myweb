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
  { id: 'name', label: 'Cattle ID', minWidth:"110px" },
  { id: 'sync', label: 'วันกลับสัด', minWidth:"120px",align: 'left' },
  { id: 'sync', label: 'สิ้นสุดวันจับสัด', minWidth:"120px",align: 'left' },
  {
    id: 'population',
    label: 'วันคลอด',
    minWidth: "120px",
    align: 'left',
  },
  {
    id: 'size',
    label: 'ระยะเฝ้าระวัง',
    minWidth: "160px",
    align: 'left',
  },
 
];


const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  container: {
    maxHeight: 440,
  }, 
  headerClave: {
    margin: "0",
    padding: "10px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#304ffe",
    borderRadius: "5px 5px 0 0"
  },
});

export default function TableClaves(props) {
  const rows =props.id;
  const B7=props.B7;
  const A7=props.A7;
  const dateSync=props.sync;

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [Clave,setClave]=React.useState([])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const caldate=(date)=>{
    var newdateA7 = new Date(date);
    newdateA7.setDate(newdateA7.getDate() +4);
    var ddA7 = newdateA7.getDate();
    var mmA7 = newdateA7.getMonth() + 1;
    var yyyyA7 = newdateA7.getFullYear();
    if (mmA7 < 10) {
      mmA7 = "0" + mmA7;
    }
    if (ddA7 < 10) {
      ddA7 = "0" + ddA7;
    }

    return ( ddA7+ "-" + mmA7 + "-" +yyyyA7 );
  }
React.useEffect(() => {
setClave(props.clavedate)
}, [props]);

const swapDate=(date)=>{
  var newdateA7 = new Date(date);
  newdateA7.setDate(newdateA7.getDate());
  var ddA7 = newdateA7.getDate();
  var mmA7 = newdateA7.getMonth() + 1;
  var yyyyA7 = newdateA7.getFullYear();
  if (mmA7 < 10) {
    mmA7 = "0" + mmA7;
  }
  if (ddA7 < 10) {
    ddA7 = "0" + ddA7;
  }

  return ( ddA7+ "-" + mmA7 + "-" +yyyyA7==="NaN-NaN-NaN"?"":ddA7+ "-" + mmA7 + "-" +yyyyA7);
}
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} >
       <div className={classes.headerClave}>วันแจ้งเตือน</div>
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
                 <TableCell align="left">{dateSync}</TableCell>
                 <TableCell align="left">{caldate(dateSync)}</TableCell>
                 <TableCell align="left">{swapDate(Clave[index])}</TableCell>
                 <TableCell align="left">{swapDate(B7[index])} - {swapDate(A7[index])}</TableCell>
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
