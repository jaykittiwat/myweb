import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//เปลี่ยนตัวหนังสือ  บรรทัด310

export default function EnhancedTable({ posts, loading }) {
  const rows = posts;
  /*-----------------------------------------------------------------------------*/

  //ฟังก์ชั่นเรียกวันที่
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  //เรรียงค่าอะไรสักอย่าง
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  // headCells คอลัม หัวตาราง
  const headCells = [
    { id: "1", numeric: false, disablePadding: true, label: "เลือก" },
    { id: "2", numeric: true, disablePadding: false, label: "หมายเลข" },
    { id: "3", numeric: true, disablePadding: false, label: "โรงเรือน" },
    { id: "4", numeric: true, disablePadding: false, label: "คอก" },
    { id: "5", numeric: true, disablePadding: false, label: "ฝูง" }
  ];
  //รับ prop มา ทำหัวตาราง
  function EnhancedTableHead(props) {
    const {
      classes,
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort
    } = props;

    //รับheadCell.id  สำหรับปุ่ม เรียงค่า
    const createSortHandler = property => event => {
      //calback
      onRequestSort(event, property);
    };

    //return นี้ทำ หัวตาราง
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              // check box หัวตาราง  indeterminateต้อง 0 ถึง จำนวนแถว
              indeterminate={numSelected > 0 && numSelected < rowCount}
              // สั่งให้เชคปุ่ม จำนวนแถว มากว่า 0 และ จำนวนที่เลือกเท่ากับ จำนวนแถว
              checked={rowCount > 0 && numSelected === rowCount}
              //เมื่อมีการเปลี่ยนแลง เรียงใช้ onSelectAllClick เพื่อใช้ฟังชันใน onSelectAllClickอีกที
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
          {headCells.map(headCell => (
            //map headCells ชื่อหัวตาราง และจัดหน้า
            <TableCell
              key={headCell.id}
              //numeric จริง ชิดขวา เท็จ ชิดซ้าย
              align={headCell.numeric ? "right" : "left"}
              //disablePadding จิง เท็จ
              padding={headCell.disablePadding ? "none" : "default"}
              //จริง,เท็จ      calories=== headCell.id //แต่ของของเราไม่ใช่
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                //น่าจะเรียงตาราง ลูกศรละมั้ง
                //ปุ่มจะแสดงเมื่อ  orderBy === headCell.id   ของเราไม่เหมือนเลยไม่ออก แต่เอาไปชี้ก็แสดง
                /*********************ลูกศร จัดค่า*************************** */
                active={orderBy === headCell.id}
                //กดปุ่ม  orderBy === headCell.id  จริง  เรียงมากไปน้อย เท็จ น้อยไปมาก
                direction={orderBy === headCell.id ? order : "asc"}
                //เมื่อ คลิิก
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label /* ชื่อตาราง */}

                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
  };

  const useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.primary.main,
            backgroundColor: lighten(theme.palette.primary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark
          },
    title: {
      flex: "1 1 100%"
    }
  }));

  const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="primary" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            รายการ
          </Typography>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
  };

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  }));

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  //เก็บ row.id เมื่อ กดคลิก เลือกรายการทั้งหมด
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // เรียงลำดับ
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  //checkBox  ทั้งหมด
  const handleSelectAllClick = event => {
    //ถ้ามีการ คลิกเชค
    if (event.target.checked) {
      //map row    idเก็บ ไว้ใน newSelecteds

      const newSelecteds = rows.map(n => n.id);
      //console.log(newSelecteds) ;
      setSelected(newSelecteds);
      return;
    }

    //ถ้าไปก็ set array is empty
    setSelected([]);
  };

  const handleClick = (event, id) => {
    //หา ค่าที่เข้ามาว่าอยู่ในindex ไหน
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  /*-----------------------------------รายการยา(ยังไม่ได้แก้)-------------------------------------------*/
  const [state, setState] = React.useState({
    age: ""
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  /*------------------------------------------------------------------------------*/

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="container">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                //เรียงใช้ หัวตาราง ส่ง prop ไปที่ EnhancedTableHead()
                //ส่ง  classes  เป็นค่าuseStyleไป EnhancedTableHead()
                classes={classes}
                //ส่งขนาf index array ไป EnhancedTableHead()
                numSelected={selected.length}
                //ส่งคำสั่งstate order 'asc' เรียงค่า (มากไปน้อย) ไป EnhancedTableHead()
                order={order}
                //ส่งstate calories  ไป EnhancedTableHead()
                orderBy={orderBy}
                //เรียกใช้ handleSelectAllClick เมื่อมีการ checkedBox บนหัวตาราง
                onSelectAllClick={handleSelectAllClick}
                //เรียกใช้  handleRequestSort(Event,  กับproperty)
                onRequestSort={handleRequestSort}
                //ส่ง จำนวน index ใน  rows[{},{}]
                rowCount={rows.length}
              />
              <TableBody
              /* ----------------------------ตัวตาราง--------------------------- */
              >
                {//ส่ง Array Rows กับ call back getComparator()
                //แสดงข้อมูลและการจัดการต่างๆทีละแถว
                stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        //เมื่อมีการคลิกในแถว  หรือ check box จะเรียกใช้handleClick เพื่อไปเก็บไว้ใน serSelected([]);
                        onClick={event => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected} //คลิกเลืองตรงตารา
                        tabIndex={-1}
                        key={row.id /*keyyyyyyyyyyyyy*/}
                      >
                        <TableCell
                          padding="checkbox"
                          /*ส่วนของcheckBox แต่ละแถว*/
                        >
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                            color="primary"
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.userId}</TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            //ปุ่มเปลี่ยนห้นา
            rowsPerPageOptions={[5, 10, 15, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={
            <Switch
              checked={dense}
              onChange={handleChangeDense}
              color="primary"
            />
          }
          label="ย่อตาราง"
        />
      </div>

      <Paper
        //ตัวบันทึก
        style={{ textAlign: "center" }}
      >
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          style={{ padding: "0.3%" }}
        >
          <TextField
            id="outlined-basic"
            label="ผู้บันทึก"
            variant="outlined"
            style={{ width: "400px", margin: "10px" }}
            size="small"
          />{" "}
          <TextField
            id="outlined-basic2"
            label="ผู้ปฏิบัติการ"
            variant="outlined"
            style={{ width: "400px", margin: "10px" }}
            size="small"
          />
        </form>

        <form className={classes.root} style={{ padding: "0.3%" }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker
                style={{ width: "400px", margin: "10px" }}
                size="small"
                margin="normal"
                id="date-picker-dialog"
                label="วันที่"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />{" "}
              <KeyboardTimePicker
                style={{ width: "400px", margin: "10px" }}
                size="small"
                margin="normal"
                id="time-picker"
                label="เวลา"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </form>
        <form className={classes.root} style={{ padding: "0.3%" }}>
          <FormControl style={{ width: "400px", margin: "10px" }}>
            <InputLabel htmlFor="age-native-simple">รายการยา</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "age-native-simple"
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <TextField
            id="standard-basic"
            label="ปริมาณ cc."
            //ยังไม้ได้สร้างstateให้มัน
            style={{ width: "400px", margin: "10px" }}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "250px", margin: "10px" }}
        >
          บันทึก
        </Button>
      </Paper>
    </div>
  );
}
