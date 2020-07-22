import React, { useState,useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
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
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
//import axios from "axios";
//เปลี่ยนตัวหนังสือ  บรรทัด310

export default function TableCheckUp(props) {
  let key = props.posts.keydata;
  let rows = props.posts.data;
  let loading = props.posts.loading;
  let keysDateNotiCattle = props.posts.keysDate;
  let date = props.posts.dataNoti;
  //let UID = props.posts.UID;

  //let idInduction= props.posts.idCowInduc;
  const [recoder, setRecoder] = useState("");
  const [operator, setOperator] = useState("");
  //const [selectedDate, setSelectedDate] = useState("");
  const [dateCheckup, setDateCheckup] = useState(" ");
  const [theCheckUp, setThecheckUp] = useState("");
  const [note,setNote] = useState("");
  const [time, setTime] = useState("");
  const [Number_dayClave,setNumber_dayclave]=useState(198)
  const [Number_daySync,setNumber_daySync]=useState(7)
  const [show_Syncday, set_Show_Syncday] = useState();
  const [show_Before_7Day, set_Show_Before_7Day] = useState();
  const [show_Claveday,set_show_clavedate] = useState();
  const [show_Affter_7Day, set_Show_Affter_7Day] = useState();
  const [dateNoti, setDateNoti] = useState([]); //เก็บข้อมูลในnoti ที่เลือก
  const setDateSync=(e)=>{
 
    var newdate = new Date(e.target.value);

    newdate.setDate(newdate.getDate()+parseInt(Number_daySync));//-------------------------------------------------------->ตามจำนวนที่ต้องการ
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }

    var dateSync = dd + "-" + mm + "-" + yyyy
    setTime(e.target.value)
    set_Show_Syncday(dateSync)
    
  }

  const setDateClave = (NotiDate) => {
   // console.log(NotiDate)
   const dayClave = [];
    for (let i = 0; i < NotiDate.length; i++) {
      var date = new Date(NotiDate[i].date);
      var newdate = new Date(date);

      newdate.setDate(newdate.getDate() +193);//-------------------------------------------------------->ตามจำนวนที่ต้องการ
      var dd = newdate.getDate();
      var mm = newdate.getMonth() + 1;
      var yyyy = newdate.getFullYear();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }

      dayClave.push(yyyy + "-" + mm + "-" + dd);
    }
  
    return dayClave;
  };
  const setBefore7Day = (NotiDate) => {
    //console.log(NotiDate)
    const dayClaveBefore7Day = [];
    for (let i = 0; i < NotiDate.length; i++) {
      var date = new Date(NotiDate[i]);
      var newdate = new Date(date);

      newdate.setDate(newdate.getDate() - 7);
      var dd = newdate.getDate();
      var mm = newdate.getMonth() + 1;
      var yyyy = newdate.getFullYear();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }

      dayClaveBefore7Day.push(yyyy + "-" + mm + "-" + dd);
    }
    return dayClaveBefore7Day;
  };
  const setAfter7Day = (NotiDate) => {
    //console.log(NotiDate)
   const dayClaveAfter7Day = [];
    for (let i = 0; i < NotiDate.length; i++) {
      var date = new Date(NotiDate[i]);
      var newdate = new Date(date);

      newdate.setDate(newdate.getDate() + 7);
      var dd = newdate.getDate();
      var mm = newdate.getMonth() + 1;
      var yyyy = newdate.getFullYear();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }

      dayClaveAfter7Day.push(yyyy + "-" + mm + "-" + dd);
    }
    return dayClaveAfter7Day;
  };

 useEffect(() => {

  const CD=setDateClave(dateNoti);
  const B7D=setBefore7Day(CD);
  const A7D=setAfter7Day(CD);

  set_Show_Before_7Day(B7D)
  set_show_clavedate(CD)
  set_Show_Affter_7Day(A7D)
  
 },[dateNoti]);


  const saveData = ()=>{
  console.log(selected)
  console.log(selectedDamId)
  console.log(dateNoti)
  console.log(keyDateNoti)
  console.log(recoder)
  console.log(operator)
  console.log(dateCheckup)
  console.log(time)
  console.log(theCheckUp)
  console.log(Number_dayClave)
  console.log(Number_daySync)
  console.log(note)
}
  


  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  // headCells คอลัม หัวตาราง
  const headCells = [
    { id: "1", numeric: false, disablePadding: true, label: "เลือก" },
    { id: "2", numeric: false, disablePadding: false, label: "หมายเลข" },
    { id: "3", numeric: false, disablePadding: false, label: "โรงเรือน" },
    { id: "4", numeric: false, disablePadding: false, label: "คอก" },
    { id: "5", numeric: false, disablePadding: false, label: "ฝูง" },
    { id: "6", numeric: false, disablePadding: false, label: "วันที่ตรวจท้อง" }
  ];
  //รับ prop มา ทำหัวตาราง
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

    //return นี้ทำ หัวตาราง
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <h5> {headCell.label}</h5>
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
            <h4> รายการ</h4>
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
    },
    FormWidth: {
      width: "100%"
    },
    paperNoti0: {
      backgroundColor: "#fb8c00",
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "white"
    },
    paperNoti1: {
      backgroundColor: "#536dfe",
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "white"
    },
    paperNoti2: {
      backgroundColor: "#304ffe",
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "white"
    },
    paperNoti3: {
      backgroundColor: "#536dfe",
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "white"
    },
    pad: {
      paddingLeft: "2%",
      paddingRight: "2%",
      paddingTop: "2%"
    },
    marForm: {
      marginTop: "4%"
    },
    marTextField: {
      marginTop: "2%"
    },
    textRow: {
      fontSize: "16px"
    }
  }));

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [selectedDamId, setSelectedDamId] = React.useState([]); //cattle_idโคที่เลือก
  
  const [keyDateNoti, setKeyDateNoti] = useState([]); //key child  in --cattle child database  from selected table row
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // เรียงลำดับ
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = key.map(n => n);
      const newSelectedsDamId = rows.map(n => n.cattle_id);
      const newSelectedsDate = date.map(n => n);
      const newSelectedsKeysDate = keysDateNotiCattle.map(n => n);

      setSelected(newSelecteds);
      setSelectedDamId(newSelectedsDamId);
      setDateNoti(newSelectedsDate);
      setKeyDateNoti(newSelectedsKeysDate);
      return;
    }

    setDateNoti([]);
    setSelected([]);
    setSelectedDamId([]);
  };

  const handleClick = (event, id, cattle_id, dateIndex, key) => {
    //หา ค่าที่เข้ามาว่าอยู่ในindex ไหน
    const selectedIndex = selected.indexOf(id);
    const selectedIndexCattle = selectedDamId.indexOf(cattle_id);
    const selectedIndexDate = dateNoti.indexOf(dateIndex);
    const selectedIndexKey = keyDateNoti.indexOf(key);

    let newSelected = [];
    let newSelectedDamId = [];
    let newSelectedDate = [];
    let newSelectedDateKey = [];

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
    if (selectedIndexCattle === -1) {
      newSelectedDamId = newSelectedDamId.concat(selectedDamId, cattle_id);
    } else if (selectedIndexCattle === 0) {
      newSelectedDamId = newSelectedDamId.concat(selectedDamId.slice(1));
    } else if (selectedIndexCattle === selectedDamId.length - 1) {
      newSelectedDamId = newSelectedDamId.concat(selectedDamId.slice(0, -1));
    } else if (selectedIndexCattle > 0) {
      newSelectedDamId = newSelectedDamId.concat(
        selectedDamId.slice(0, selectedIndexCattle),
        selectedDamId.slice(selectedIndexCattle + 1)
      );
    }
    setSelectedDamId(newSelectedDamId);

    if (selectedIndexDate === -1) {
      newSelectedDate = newSelectedDate.concat(dateNoti, dateIndex);
    } else if (selectedIndexDate === 0) {
      newSelectedDate = newSelectedDate.concat(dateNoti.slice(1));
    } else if (selectedIndexDate === dateNoti.length - 1) {
      newSelectedDate = newSelectedDate.concat(dateNoti.slice(0, -1));
    } else if (selectedIndexDate > 0) {
      newSelectedDate = newSelectedDate.concat(
        dateNoti.slice(0, selectedIndexDate),
        dateNoti.slice(selectedIndexDate + 1)
      );
    }
    setDateNoti(newSelectedDate);

    if (selectedIndexKey === -1) {
      newSelectedDateKey = newSelectedDateKey.concat(keyDateNoti, key);
    } else if (selectedIndexKey === 0) {
      newSelectedDateKey = newSelectedDateKey.concat(keyDateNoti.slice(1));
    } else if (selectedIndexKey === keyDateNoti.length - 1) {
      newSelectedDateKey = newSelectedDateKey.concat(keyDateNoti.slice(0, -1));
    } else if (selectedIndexKey > 0) {
      newSelectedDateKey = newSelectedDateKey.concat(
        keyDateNoti.slice(0, selectedIndexKey),
        keyDateNoti.slice(selectedIndexKey + 1)
      );
    }
    setKeyDateNoti(newSelectedDateKey);
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

  if (loading) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={classes.root}>
        <Paper
          className={classes.paper}
          elevation={3}
          style={{ marginTop: "20px" }}
        >
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody
              /* ----------------------------ตัวตาราง--------------------------- */
              >
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(
                      key[index],
                      row.cattle_id
                    );
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={event =>
                          handleClick(
                            event,
                            key[index],
                            row.cattle_id,
                            date[index],
                            keysDateNotiCattle[index]
                          )
                        }
                        role="checkbox"
                        aria-checked={isItemSelected} //คลิกเลืองตรงตารา
                        tabIndex={-1}
                        key={row.cattle_id}
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
                        ></TableCell>
                        <TableCell align="left" className={classes.textRow}>
                          {row.cattle_id}
                        </TableCell>
                        <TableCell align="left" className={classes.textRow}>
                          {row.bigcorral}
                        </TableCell>
                        <TableCell align="left" className={classes.textRow}>
                          {row.corral}
                        </TableCell>
                        <TableCell align="left" className={classes.textRow}>
                          {row.herd_no}
                        </TableCell>
                        <TableCell align="left" className={classes.textRow}>
                          {date[index].date}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
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
          </div>
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
        elevation={3}
        className={classes.pad}
      >
        <h4 style={{ paddingTop: "15px" }}>บันทึกการตรวจท้อง</h4>
        <FormGroup className={classes.marForm}>
          <FormLabel>ชื่อผู้บันทึก</FormLabel>
          <TextField
            variant="outlined"
            placeholder="ชื่อผู้บันทึก"
            size="small"
            value={recoder}
            onChange={e => setRecoder(e.target.value)}
          />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>ชื่อผู้ปฏิบัติการ</FormLabel>
          <TextField
            variant="outlined"
            placeholder="ชื่อผู้ปฏิบัติการ"
            size="small"
            value={operator}
            onChange={e => setOperator(e.target.value)}
          />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>วันที่ตรวจ</FormLabel>
          <TextField
            variant="outlined"
            type="date"
            size="small"
            value={time}
  
            onChange={(e)=>setDateSync(e)}
          />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>เวลาที่ตรวจ</FormLabel>
          <TextField
            variant="outlined"
            type="time"
            size="small"
            value={show_Syncday}
           
            onChange={e => setTime(e.target.value)}
          />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormControl size="small">
            <FormLabel>ผลการตรวจท้อง</FormLabel>
            <Select
              variant="outlined"
              native
              value={theCheckUp}
              onChange={(e)=>setThecheckUp(e.target.value)}
             
            >
              <option value=" ">เลือก</option>
              <option>ท้อง</option>
              <option>ไม่ท้อง</option>
            </Select>
          </FormControl>
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>จำนวนวันแจ้งคลอด(วัน)</FormLabel>
          <TextField variant="outlined"  size="small"  value={Number_dayClave}  onChange={e=>setNumber_dayclave(e.target.value)}/>
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>จำนวนกลับสัด(วัน)</FormLabel>
          <TextField variant="outlined"  size="small" value={Number_daySync} onChange={e=>setNumber_daySync(e.target.value)}/>
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>หมายเหตุ(หากมี)</FormLabel>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder=" "
            value={note}
            onChange={(e)=>setNote(e.target.value)}
          />
        </FormGroup>
        <Grid container spacing={2} className={classes.marTextField}>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3} className={classes.paperNoti0}>
              (หากไม่ท้อง) วันที่คาดการวันกลับสัด วันที่ {show_Syncday}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3} className={classes.paperNoti1}>
              วันคลอด ก่อน -7 วัน วันที่ {show_Before_7Day}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3} className={classes.paperNoti2}>
              วันคลอด วันที่ {show_Claveday}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3} className={classes.paperNoti3}>
              วันคลอด หลังวันคลอด +7 วัน วันที่ {show_Affter_7Day}
            </Paper>
          </Grid>
        </Grid>
        <Paper elevation={0} style={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "250px", margin: "10px", outline: "none" }}
          onClick={saveData}
          >
            บันทึก
          </Button>
        </Paper>
      </Paper>
    </div>
  );
}
