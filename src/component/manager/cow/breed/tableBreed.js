import React, { useState } from "react";
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
import axios from "axios";
//เปลี่ยนตัวหนังสือ  บรรทัด310

export default function TableBreed(props) {
  let key = props.posts.keydata; 
  let rows =  props.posts.data;
  let loading = props.posts.loading;
  let keysDateNotiCattle = props.posts.keysDate;
  let date=props.posts.dataNoti;
  let UID = props.posts.UID;
  //let idInduction= props.posts.idCowInduc;
  const [typeModule] = useState({ status: "ผสมพันธุ์แล้ว" });
  const [recoder, setRecoder] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [dateCheckup, setDateCheckup] = useState("");
  const [dateBeforeCheckup, setDateBeforeCheckup] = useState("-- -- ----");
  const [time, setTime] = useState(""); //เวลาเป็นสัด
  const [time2, setTime2] = useState(""); //เวลานิ่ง
  const [time3, setTime3] = useState(""); //เวลาผสม
  const [HowTobreed, setHowTobreed] = useState("");
  const [HowIdTobreed, setHowIdTobreed] = useState("");
  const [showDateCheckUp, setShowDateCheckUp] = useState("-- -- ----");
  const [theNote,setNote]=useState("")

  const manageDate = e => {
    //ยังไม่ได้ดึงsetting มา
    var date = new Date(e.target.value);
    var newdate = new Date(date); //วันที่สำหรับตรวจท้อง

    newdate.setDate(newdate.getDate() + 90);
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }

    var newdate2 = new Date(date); //วันที่สำหรับตรวจเหนี่ยวนำกลับสัดหลังผสม
    newdate2.setDate(newdate2.getDate() + 19);
    var dd2 = newdate2.getDate();
    var mm2 = newdate2.getMonth() + 1;
    var yyyy2 = newdate2.getFullYear();
    if (mm2 < 10) {
      mm2 = "0" + mm2;
    }
    if (dd2 < 10) {
      dd2 = "0" + dd2;
    }
    var nextmissionday = yyyy + "-" + mm + "-" + dd;
    var nextmissionday2 = dd2 + "-" + mm2 + "-" + yyyy2; //output วันที่ตรจการเหี่นวนำกลับสุดก่อนตรวจท้อง
    var setnextmissionday = dd + "-" + mm + "-" + yyyy;
    setSelectedDate(e.target.value); //วันที่บันทึก
    setShowDateCheckUp(setnextmissionday); //แสดงวันที่ตรวจท้อง
    setDateCheckup(nextmissionday); //เก็บวันที่moduleถัดไป(ตรวจท้อง)
    setDateBeforeCheckup(nextmissionday2);
  };



  const saveDataToInduction = () => {
    //console.log(selected);
   // console.log(selectedDamId);


    const x = selected.length;

    //delete notification
   
    //เปลี่ยนสถานะโค
    for (let a = 0; a < x; a++) {
      axios.post(
        "http://localhost:4000/cattle/status/" + UID + "/" + selected[a],
        typeModule
      );
    }
    //hisstory
    for (let b = 0; b < x; b++) {
      axios.post("http://localhost:4000/history/" + UID, {
        dam_id: selectedDamId[b],
        date: selectedDate,
        type: "ผสมพันธุ์"
      });
    }
    if (HowTobreed === "พ่อพันธุ์") {
      for (let c = 0; c < x; c++) {
        axios.post("http://localhost:4000/breed/" + UID, {
          dam_id: selectedDamId[c],
          date_breeding: selectedDate,
          note: "",
          noti_oestrus: "19",
          noti_pregnant: "90",
          recorder: recoder,
          operator: operator,
          sire_id: HowIdTobreed,
          time_breeding: time3, //เวลาผสม
          time2: time2, //เวลานิ่ง
          time3: time //เวลาเป็นสัด
        })
      }
    }
    if (HowTobreed === "น้ำเชื้อ") {
      for (let c = 0; c < x; c++) {
        axios.post("http://localhost:4000/breed/" + UID, {
          dam_id: selectedDamId[c],
          date_breeding: selectedDate,
          note:theNote,
          noti_oestrus: "19",
          noti_pregnant: "90",
          recorder: recoder,
          operator: operator,
          semen: HowIdTobreed,
          time_breeding: time3, //เวลาผสม
          time2: time2, //เวลานิ่ง
          time3: time //เวลาเป็นสัด
        })
      }
    }

    for (let d = 0; d < x; d++) {
      axios.post(
        "http://localhost:4000/notification/" + UID + "/" + dateCheckup,
        {
          date: dateCheckup,
          id_cattle: selectedDamId[d],
          type: "ตรวจท้อง"
        }
      )
      axios.delete(
        "http://localhost:4000/notification/delete/" +
          UID +
          "/" +
          dateNoti[d].date +
          "/" +
          keyDateNoti[d]
      )
    }
    alert("success");
    window.location.reload()
  };

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
    { id: "6", numeric: false, disablePadding: false, label: "วันที่ผสมพันธุ์" }
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
              <h5> {headCell.label /* ชื่อตาราง */}</h5>
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
    },  paperNoti: {
      backgroundColor:"#fb8c00",
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "white"
    },
    paperNoti1: {
      backgroundColor:"#304ffe",
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
  //เก็บ row.cattle_id เมื่อ กดคลิก เลือกรายการทั้งหมด
  const [selected, setSelected] = React.useState([]);
  const [selectedDamId, setSelectedDamId] = React.useState([]); //cattle_idโคที่เลือก
  const [dateNoti, setDateNoti] = useState([]); //วันที่แจ้งเตือน
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
  //checkBox  ทั้งหมด
  const handleSelectAllClick = event => {
    //ถ้ามีการ คลิกเชค
    if (event.target.checked) {
      //map row    idเก็บ ไว้ใน newSelecteds
      const newSelecteds = key.map(n => n);
      const newSelectedsDamId = rows.map(n => n.cattle_id);
      const newSelectedsDate = date.map(n => n);
      const newSelectedsKeysDate = keysDateNotiCattle.map(n => n);

      //console.log(newDateNoti) ;

      setSelected(newSelecteds);
      setSelectedDamId(newSelectedsDamId);
      setDateNoti(newSelectedsDate);
      setKeyDateNoti(newSelectedsKeysDate);
      return;
    }

    //ถ้าไปก็ set array is empty
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
                    const isItemSelected = isSelected(
                      key[index],
                      row.cattle_id
                    );
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        //เมื่อมีการคลิกในแถว  หรือ check box จะเรียกใช้handleClick เพื่อไปเก็บไว้ใน serSelected([]);
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
                        aria-checked={isItemSelected}//คลิกเลืองตรงตารา
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
                        <TableCell align="left"  className={classes.textRow}>{row.cattle_id}</TableCell>
                        <TableCell align="left"  className={classes.textRow}>{row.bigcorral}</TableCell>
                        <TableCell align="left"  className={classes.textRow}>{row.corral}</TableCell>
                        <TableCell align="left"  className={classes.textRow}>{row.herd_no}</TableCell>
                        <TableCell align="left"  className={classes.textRow}>{date[index].date}</TableCell>
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
        //ตัวบันทึก///////////////////////////////////
        className={classes.pad}
      >
        <h4 style={{ paddingTop: "15px" }}>บันทึกการผสมพันธุ์</h4>

        <FormGroup className={classes.marForm}>
          <FormLabel>ชื่อผู้บันทึก</FormLabel>
          <TextField
            id="input1"
            variant="outlined"
            placeholder="ชื่อผู้บันทึก"
            size="small"
            onChange={e => setRecoder(e.target.value)}
          />
        </FormGroup>
        <FormGroup className={classes.marTextField}>
          <FormLabel>ชื่อผู้ปฏิบัติการ</FormLabel>
          <TextField
            id="input2"
            variant="outlined"
            placeholder="ชื่อผู้ปฏิบัติการ"
            size="small"
            onChange={e => setOperator(e.target.value)}
          />
        </FormGroup>

        <FormGroup className={classes.marTextField}>
          <FormLabel>วันที่</FormLabel>
          <TextField
            id="input3"
            variant="outlined"
            type="date"
            size="small"
            onChange={e => manageDate(e)}
          />
        </FormGroup>

        <Grid container spacing={2} className={classes.marTextField}>
          <Grid item xs={4}>
            <FormGroup>
              <FormLabel>เวลาเป็นสัด</FormLabel>
              <TextField
                id="input4"
                variant="outlined"
                type="time"
                size="small"
                defaultValue="00:00"
                onChange={e => setTime(e.target.value)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <FormLabel>เวลานิ่ง</FormLabel>
              <TextField
                id="input5"
                variant="outlined"
                type="time"
                size="small"
                defaultValue="00:00"
                onChange={e => setTime2(e.target.value)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <FormGroup>
              <FormLabel>เวลาผสม</FormLabel>
              <TextField
                id="input6"
                variant="outlined"
                type="time"
                size="small"
                defaultValue="00:00"
                onChange={e => setTime3(e.target.value)}
              />
            </FormGroup>
          </Grid>
        </Grid>

        <FormGroup className={classes.marTextField}>
          <FormControl size="small">
            <FormLabel>วิธีการผสม</FormLabel>
            <Select
              variant="outlined"
              native
              value={HowTobreed}
              onChange={e => setHowTobreed(e.target.value)}
            >
              <option value=" ">เลือก</option>
              <option>น้ำเชื้อ</option>
              <option> พ่อพันธุ์</option>
            </Select>
          </FormControl>
        </FormGroup>

        <FormGroup className={classes.marTextField}>
          <FormLabel>หมายเลขน้ำเชื้อ/พ่อพันพันธุ์</FormLabel>
          <TextField
            id="input7"
            variant="outlined"
            placeholder="กรอกหมายเลข"
            size="small"
            onChange={e => setHowIdTobreed(e.target.value)}
          />
        </FormGroup>

        <FormGroup className={classes.marTextField}>
          <FormLabel>หมายเหตุ(หากมี)</FormLabel>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            value={theNote}
            onChange={(e)=>setNote(e.target.value)}
          />
        </FormGroup>
        <Grid container spacing={2} className={classes.marTextField}>
         
          <Grid item xs={12} sm={12}>
            <Paper elevation={3} className={classes.paperNoti}>
              ตรวจวันกลับสัด วันที่ {dateBeforeCheckup}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3} className={classes.paperNoti1}>
              ตรวจท้อง วันที่ {showDateCheckUp}
            </Paper>
          </Grid>
        
        </Grid>

        <Paper elevation={0} style={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "250px", margin: "10px", outline: "none" }}
            onClick={() => saveDataToInduction()}
          >
            บันทึก
          </Button>
        </Paper>
      </Paper>
    </div>
  );
}
