import React from "react";
import { Table, TableFooter, TablePagination, Button } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { setData } from "./Data";
import Delete from "@material-ui/icons/Delete";
import Creact from "@material-ui/icons/Create";
import Save from "@material-ui/icons/Save";
import { TextField, Grid } from "@material-ui/core";
import update from "immutability-helper";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import IconButton from "@material-ui/core/IconButton";
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  },
  HeaderSetting: {
    color: "#fff",
    background:
      " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    padding: "8px"
  }
}));
const TablePaginationActions = (props) => {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};
export default function TableOfmom() {
  const classes = useStyles1();

  const [rows, setRows] = React.useState(setData);
  const [startEdit, setStartEdit] = React.useState(false);
  const [indexRow, setIndexRow] = React.useState(-1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [checkPage, setCheckPage] = React.useState(0);
  const Head = [
    { cell: "name", align: "left" }, // {ชื่อคอลัมล์ซ:" ",จัด(ชิดซ้าย/กลาง/ขวา)}
    { cell: "lastname", align: "left" },
    { cell: "Age", align: "left" },
    { cell: "Action", align: "center" }
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const UPDATE = (index) => {
    setCheckPage(page);
    setIndexRow(index);
    setStartEdit(!startEdit);
  };
  const DELETE = (index) => {
    const getToUpdate = rows;
    const newUpdate = update(getToUpdate, { $splice: [[index, 1]] });
    setRows(newUpdate);
  };
  const SAVE = (index) => {
    setStartEdit(!startEdit);
  };
  const SETVALUES = (event, index) => {
    const key = event.target.id;
    const v = event.target.value;
    const getToSet = rows;
    const calIndex = page * rowsPerPage + index;
    const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v } } });
    setRows(newSet);
  };
  return (
    <Paper square elevation={3}>
      <Paper className={classes.HeaderSetting} elevation={3} square>
        <Grid container>
          <Grid item xs={6}>
            {" "}
            <div style={{ fontSize: "22px", marginTop: "2px" }}>
              ข้อมูลพ่อพันธุ์โค
            </div>
          </Grid>
          <Grid item xs={6} style={{textAlign:"right"}}>
            <Button
              color="secondary"
              variant="contained"
              style={{ fontSize: "16px", width: "90px", margin: "0px" }}
            >
              PDF
            </Button>{" "}
            <Button
              style={{
                color: "#fff",
                backgroundColor: "#64dd17",
                fontSize: "16px",
                width: "90px",
                margin: "0px"
              }}
            >
              EXCEL
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {Head.map((list, index) => (
                <TableCell
                  align={list.align}
                  key={index}
                  style={{ fontSize: "20px" }}
                >
                  {list.cell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="name"
                      value={row.name}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="lastName"
                      value={row.lastName}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.lastName
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="Age"
                      value={row.Age}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.Age
                  )}
                </TableCell>
                <TableCell style={{ width: "200px" }}>
                  <Grid container>
                    {" "}
                    <Grid item xs={6} align="center">
                      {startEdit && indexRow === index && page === checkPage ? (
                        <Save onClick={() => SAVE(index)} color="primary" />
                      ) : (
                        <Creact
                          onClick={() => UPDATE(index)}
                          style={{ color: "#ffa000" }}
                        />
                      )}
                    </Grid>
                    <Grid item xs={6} align="center">
                      <Delete onClick={() => DELETE(index)} color="secondary" />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  1,
                  10,
                  25,
                  50,
                  100,
                  { label: "All", value: -1 }
                ]}
                colSpan={5}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
