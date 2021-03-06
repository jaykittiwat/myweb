import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import "date-fns";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import {
  IconButton,
  Fab,
  CircularProgress,
  Table,
  TableBody,
  Button,
  Grid,
  FormLabel,
  FormGroup,
  Select,
  FormControl,
  TextField,
  Switch,
  FormControlLabel,
  Checkbox,
  Paper,
  Typography,
  Toolbar,
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
} from "@material-ui/core";

//เปลี่ยนตัวหนังสือ  บรรทัด310

export default function TableFatter(props) {
  const loading = props.posts.loading;

  const [UID, setUID] = useState("");
  const [recoder, setRecoder] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [dateInduction, setDateInduction] = useState("");
  const [time, setTime] = useState("");
  const [showDateInduction, setShowDateInduction] = useState("-- -- ----");
  const [pro_maintain, setpro_maintain] = useState([]);
  const [numdays, setNumdays] = useState(20);

  const manageDate = (e) => {
    if (e.target.id === "numday") {
      setNumdays(parseInt(e.target.value || 0));
      var date = new Date(selectedDate);
      var newdate = new Date(date);
      newdate.setDate(newdate.getDate() + parseInt(e.target.value || 0));
      var dd = newdate.getDate();
      var mm = newdate.getMonth() + 1;
      var yyyy = newdate.getFullYear();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }
      var nextmissionday = yyyy + "-" + mm + "-" + dd;
      var setnextmissionday = dd + "-" + mm + "-" + yyyy;
      setSelectedDate(selectedDate);
      setShowDateInduction(setnextmissionday);
      setDateInduction(nextmissionday);
    }

    if (e.target.id !== "numday") {
      date = new Date(e.target.value);
      newdate = new Date(date);
      newdate.setDate(newdate.getDate() + numdays);
      dd = newdate.getDate();
      mm = newdate.getMonth() + 1;
      yyyy = newdate.getFullYear();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }
      nextmissionday = yyyy + "-" + mm + "-" + dd;
      setnextmissionday = dd + "-" + mm + "-" + yyyy;
      setSelectedDate(e.target.value);
      setShowDateInduction(setnextmissionday);
      setDateInduction(nextmissionday);
    }
  };
  /*-----------------------------------------------------------------------------*/
  let rows = props.posts.data;
  let key = props.posts.keydata;
  let keyDate = props.posts.keysDate;
  let dataNoti = props.posts.dataNoti;

  useEffect(() => {
    setpro_maintain(props.posts.pro_maintain);
    setRecoder(props.posts.fname);
    setOperator(props.posts.fname);
    setUID(props.posts.UID);
    setMedic([{}]);
  }, [props]);

  const saveDataToInduction = async () => {
    const x = selected.length;
    for (let a = 0; a < x; a++) {
      axios
        .post(
          "https://aipcattle.herokuapp.com/cattle/status/" +
            UID +
            "/" +
            selected[a],
          { status: "บำรุงแล้ว", process_date: selectedDate }
        )
        .then(() => {
          axios.post("https://aipcattle.herokuapp.com/history/" + UID, {
            dam_id: selectedDamId[a],
            date: selectedDate,
            type: "บำรุงแม่พันธุ์",
          });
        })
        .then(() => {
          axios.post("https://aipcattle.herokuapp.com/maintain/" + UID, {
            dam_id: selectedDamId[a],
            date: selectedDate,
            type_of_maintain:  medic[0].item,
            recorder: recoder,
            operator: operator,
            time: time,
            detail: medic,
          });
        })
        .then(async () => {
          axios.post(
            "https://aipcattle.herokuapp.com/notification/" +
              UID +
              "/" +
              dateInduction,
            {
              date: dateInduction,
              id_cattle: selectedDamId[a],
              type: "เหนี่ยวนำกลับสัด",
            }
          );
        })
        .then(() => {
          for (let i = 0; i < keyDate.length; i++) {
            if (selectedDamId[a] === dataNoti[i].id_cattle) {
              axios.delete(
                "https://aipcattle.herokuapp.com/notification/delete/" +
                  UID +
                  "/" +
                  dataNoti[i].date +
                  "/" +
                  keyDate[i]
              );
            }
          }
        })
        .then(() => {
          if (a + 1 === selected.length) {
            alert("บันทึกสำเร็จ");
            window.location.reload();
          }
        });
    }
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

  //เรรียงค่าอะไรสักอย่าง
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
  // headCells คอลัม หัวตาราง
  const headCells = [
    { id: "1", numeric: false, disablePadding: true, label: "เลือก" },
    { id: "2", numeric: true, disablePadding: false, label: "หมายเลข" },
    { id: "3", numeric: true, disablePadding: false, label: "โรงเรือน" },
    { id: "4", numeric: true, disablePadding: false, label: "คอก" },
    { id: "5", numeric: true, disablePadding: false, label: "ฝูง" },
    { id: "6", numeric: true, disablePadding: false, label: "จำนวนครั้งผสม" },
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
          {headCells.map((headCell) => (
            //map headCells ชื่อหัวตาราง และจัดหน้า
            <TableCell
              key={headCell.id}
              //numeric จริง ชิดขวา เท็จ ชิดซ้าย
              style={{
                minWidth: 100,
                textAlign: headCell.numeric ? "right" : "left",
              }}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <h5>{headCell.label /* ชื่อตาราง */}</h5>
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
    rowCount: PropTypes.number.isRequired,
  };

  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.primary.main,
            backgroundColor: lighten(theme.palette.primary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
  }));

  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
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
    numSelected: PropTypes.number.isRequired,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
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
      width: 1,
    },
    FormWidth: {
      width: "100%",
    },
    paperNoti: {
      textAlign: "center",
      width: "100%",
      fontSize: "20px",
      padding: "10px",
      color: "#fff",
      backgroundColor: "#3b4fff",
    },
    pad: {
      paddingLeft: "2%",
      paddingRight: "2%",
      paddingTop: "2%",
    },
    marForm: {
      marginTop: "2%",
    },
    marTextField: {
      marginTop: "2%",
    },
    textRow: {
      fontSize: "16px",
    },
    headerClave: {
      margin: "0",
      padding: "10px",
      fontSize: "20px",
      color: "#fff",
      backgroundColor: "#304ffe",
      borderRadius: "5px 5px 0 0",
    },
  }));

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  //เก็บ row.cattle_id เมื่อ กดคลิก เลือกรายการทั้งหมด
  const [selected, setSelected] = React.useState([]);
  const [selectedDamId, setSelectedDamId] = React.useState([]);
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
  const handleSelectAllClick = (event) => {
    //ถ้ามีการ คลิกเชค
    if (event.target.checked) {
      //map row    idเก็บ ไว้ใน newSelecteds

      const newSelecteds = key.map((n) => n);
      const newSelectedsDamId = rows.map((n) => n.cattle_id);
      //console.log(newSelecteds) ;
      setSelected(newSelecteds);
      setSelectedDamId(newSelectedsDamId);
      return;
    }

    //ถ้าไปก็ set array is empty
    setSelected([]);
    setSelectedDamId([]);
  };

  const handleClick = (event, id, cattle_id) => {
    //หา ค่าที่เข้ามาว่าอยู่ในindex ไหน
    const selectedIndex = selected.indexOf(id);
    const selectedIndexCattle = selectedDamId.indexOf(cattle_id);
    let newSelected = [];
    let newSelectedDamId = [];

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
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  /*-----------------------------------รายการยา(ยังไม่ได้แก้)-------------------------------------------*/
  const [medic, setMedic] = useState([
    {
      item: "",
    },
  ]);

  const addtable = (event) => {
    setMedic([
      ...medic,
      {
        item: "",
      },
    ]);
  };
  const handleChange = (event, index) => {
    medic.splice(index, 1, { item: event.target.value });
  };
  const deleteItem = (index) => {
    const result = medic.filter((results) => results !== medic[index]);
    //console.log(result);
    setMedic(result);
  };

  /*------------------------------------------------------------------------------*/

  const showTable = () => {
    return medic.map((medics, index) => (
      <form className={classes.marTextField} key={index}>
        <FormControl size="small" style={{ minWidth: "95%" }}>
          <FormLabel>โปรแกรมการบำรุง</FormLabel>
          <Select
            variant="outlined"
            native
            value={medic.item}
            onChange={(event) => handleChange(event, index)}
          >
            <option value=" ">เลือก</option>
            {pro_maintain.map((list, indexlist) => {
              return <option key={indexlist}>{list.pro_maintain}</option>;
            })}
          </Select>
        </FormControl>

        <IconButton
          aria-label="delete"
          color="secondary"
          style={{ marginTop: "15px", outline: "none" }}
          onClick={() => deleteItem(index)}
        >
          <DeleteIcon />
        </IconButton>
      </form>
    ));
  };
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
                {
                  //ส่ง Array Rows กับ call back getComparator()
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
                          onClick={(event) =>
                            handleClick(event, key[index], row.cattle_id)
                          }
                          role="checkbox"
                          aria-checked={isItemSelected} //คลิกเลืองตรงตารา
                          tabIndex={-1}
                          key={row.cattle_id} /*keyyyyyyyyyyyyy*/
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
                          <TableCell align="right" className={classes.textRow}>
                            {row.cattle_id}
                          </TableCell>
                          <TableCell align="right" className={classes.textRow}>
                            {row.bigcorral || "ไม่ระบุ"}
                          </TableCell>
                          <TableCell align="right" className={classes.textRow}>
                            {row.corral || "ไม่ระบุ"}
                          </TableCell>
                          <TableCell align="right" className={classes.textRow}>
                            {row.herd_no}
                          </TableCell>
                          <TableCell align="right" className={classes.textRow}>
                            {row.number_of_breeding}
                          </TableCell>
                        </TableRow>
                      );
                    })
                }
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
      <div className={classes.headerClave}>บันทึกการบำรุง</div>

      <Paper elevation={3} className={classes.pad}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormGroup className={classes.marForm}>
              <FormLabel>ชื่อผู้บันทึก</FormLabel>
              <TextField
                value={recoder}
                id="input1"
                variant="outlined"
                placeholder="ชื่อ"
                size="small"
                onChange={(e) => setRecoder(e.target.value)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup className={classes.marTextField}>
              <FormLabel>ผู้ปฏิบัติการ</FormLabel>
              <TextField
                value={operator}
                id="input2"
                variant="outlined"
                placeholder="ชื่อ"
                size="small"
                onChange={(e) => setOperator(e.target.value)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup className={classes.marTextField}>
              <FormLabel>วันที่</FormLabel>
              <TextField
                value={selectedDate}
                id="input3"
                variant="outlined"
                type="date"
                size="small"
                onChange={(e) => manageDate(e)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup className={classes.marTextField}>
              <FormLabel>เวลา</FormLabel>
              <TextField
                id="input4"
                variant="outlined"
                type="time"
                size="small"
                defaultValue="00:00"
                onChange={(e) => setTime(e.target.value)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <FormGroup className={classes.marTextField}>
              <FormLabel>จำนวนวัน</FormLabel>
              <TextField
                value={numdays}
                id="numday"
                variant="outlined"
                placeholder="จำนวนวัน"
                size="small"
                onChange={(e) => manageDate(e)}
              />
            </FormGroup>
          </Grid>
        </Grid>
        {showTable()}
        <div className={classes.marTextField}>
          <div className="container-fluid text-center">
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              style={{ margin: "10px", outline: "none" }}
            >
              <AddIcon onClick={addtable} />
            </Fab>
          </div>
        </div>
        <Grid container className={classes.marTextField}>
          <Paper elevation={3} className={classes.paperNoti}>
            เริ่มการเหนี่ยวนำ วันที่ {showDateInduction}
          </Paper>
        </Grid>
        <div className="container-fluid text-center">
          <div className={classes.marTextField}>
            <Button
            disabled={props.posts.privilege}
              variant="contained"
              color="primary"
              size="large"
              style={{ width: "250px", margin: "10px", outline: "none" }}
              onClick={() => saveDataToInduction()}
            >
              บันทึก
            </Button>
          </div>{" "}
        </div>
      </Paper>
    </div>
  );
}
