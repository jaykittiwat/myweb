import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
const columns = [
  { id: "ID", label: "Cattle ID", minWidth: 100, align: "center" },
  {
    id: "realdateClave",
    label: "กำหนดวันคลอด",
    minWidth: 100,
    align: "center"
  },
  { id: "date", label: "วันที่คลอด", minWidth: 100, align: "center" },
  {
    id: "calveOftime",
    label: "เวลา",
    minWidth: 100,
    align: "center"
  },
  {
    id: "recovery",
    label: "วันที่ทำการรักษา",
    minWidth: 100,
    align: "center"
  },
  {
    id: "fatten",
    label: "วันที่บำรุง",
    minWidth: 100,
    align: "center"
  },
  {
    id: "node",
    label: "หมายเหตุ",
    minWidth: 100,
    align: "center"
  },
  {
    id: "save",
    label: "บันทึก",
    minWidth: 100,
    align: "center"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "20px"
  },
  container: {
    maxHeight: "100%"
  },
  headerClave: {
    margin: "0",
    padding: "10px",
    fontSize: "22px",
    color: "#fff",
    backgroundColor: "#304ffe",
    borderRadius: "5px 5px 0 0"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#000",
    backgroundColor: "#f5f5f51e"
  }
}));

export default function TableClaves() {
  const rows = [
    { cattle_id: "1", date: "2020-10-10" },
    { cattle_id: "2", date: "2020-10-10" },
    { cattle_id: "3", date: "2020-10-10" },
    { cattle_id: "4", date: "2020-10-10" },
    { cattle_id: "5", date: "2020-10-10" }
  ];

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [dateOfClave, setDateOfClave] = React.useState("");
  const [timeClave, setTimeClave] = React.useState("");
  const [dateHeal, setDateHeal] = React.useState("");
  const [dateFatten, setDateFatten] = React.useState("");
  const [node, setNode] = React.useState("");
  const [openBox, setOpenBox] = React.useState(false);
  const [indexRow, setIndexRow] = React.useState(null);
  //const [stactSuccess, setStackSucess] = React.useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const manageData = (index, row) => {
    oo(callAPI);
  };
  const oo = callback => {
    setOpen(!open);
    callback();
  };
  //connect to database Back-end
  const callAPI = () => {
    setTimeout(() => {
      setIndexRow(null);
      setOpenBox(false);
      setOpen(false);
    }, 1000);
  };
  const openInput = (i, r) => {
    setOpenBox(true);
    setIndexRow(i);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.headerClave}>บันทึกการอคลอด</div>

      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, zIndex: "0" }}
                >
                  <h6> {column.label}</h6>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    onClick={() => openInput(index, rows)}
                    hover
                    tabIndex={-1}
                    key={index}
                    style={{ zIndex: "-1" }}
                  >
                    <TableCell align="center">{row.cattle_id}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        type="date"
                        onChange={event => setDateOfClave(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        type="time"
                        onChange={event => setTimeClave(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        type="date"
                        onChange={event => setDateHeal(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        type="date"
                        onChange={event => setDateFatten(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        onChange={event => setNode(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <Button
                        variant="contained"
                        style={
                          index === indexRow
                            ? { backgroundColor: "#3f51b5", color: "#fff" }
                            : { backgroundColor: "#ef6c00", color: "#fff" }
                        }
                        size="large"
                        onClick={
                          openBox && index === indexRow
                            ? () => manageData()
                            : () => openInput(index, rows)
                        }
                      >
                        {index === indexRow ? "บันทึก" : "แก้ไข"}
                      </Button>
                      <Backdrop
                        className={classes.backdrop}
                        open={open}
                        onClick={handleClose}
                      >
                        <CircularProgress color="inherit" />
                      </Backdrop>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50, 100]}
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
