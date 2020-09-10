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
import Dialogpopup from "./dialogpopup";
import CircularProgress from "@material-ui/core/CircularProgress";
const columns = [
  { id: "ID", label: "หมายเลข", minWidth: 100, align: "center" },
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
  { id: "number", label: "จำนวนการเกิด", minWidth: 100, align: "center" },
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
    id: "recorder",
    label: "ผู้บันทึก",
    minWidth: 100,
    align: "center"
  },
  {
    id: "oparator",
    label: "ผู้ปฎิบัติ",
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
  },
  dialog: {
    width: "450px",
    padding: "2%"
  },
  marTextField: {
    marginTop: "2%"
  }
}));

export default function TableClaves(props) {
  const breed = props.posts.databreed; //ข้อมูลการผสม
  const UID = props.posts.UID; //user ID
  const key = props.posts.keydata; //--------------key ข้อมูลแม่วัว
  const Rows = props.posts.data; //ข้อมูลการแจ้งเตือน
  const loading = props.posts.loading; //สถานะ แบบajax
  const keysDateNotiCattle = props.posts.keysDate;
  const rows = props.posts.dataNoti;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  //***********************state og mom ***************************** */
  const [dateOfClave, setDateOfClave] = React.useState("");
  const [timeClave, setTimeClave] = React.useState("");
  const [dateHeal, setDateHeal] = React.useState("");
  const [dateFatten, setDateFatten] = React.useState("");
  const [recorder, setRecorder] = React.useState("");
  const [oparator, setOparator] = React.useState("");
  const [node, setNode] = React.useState("");
  const [numberRowcalf, setNumberRowcalf] = React.useState(1);
  //**************************************************** */
  const [damOfclaf, setDamOfclaf] = React.useState("");
  const [sirOfclaf, setsirOfclaf] = React.useState("");
  const [openBox, setOpenBox] = React.useState(false);
  const [indexRow, setIndexRow] = React.useState(null);

  const [numberCalf, setNumberClaf] = React.useState([]);
  const [oldIndex, setOldindex] = React.useState(null);

  React.useEffect(() => {
    setRecorder(props.posts.fname);
    setOparator(props.posts.fname);
  }, [props]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ShowBox = (index, row) => {
    //console.log(numberCalf)
    creatTableSon();
    setOpen(true);
  };
  /*----------------------------Open Row---------------------------------- */
  const openInput = (i, r, breed) => {
    if (oldIndex !== i) {
      setNumberRowcalf(1);
      setOldindex(i);
    }
    setsirOfclaf(breed.sire_id || breed.semen);
    setDamOfclaf(breed.dam_id);
    setOpenBox(true);
    setIndexRow(i);
  };

  /*-----------------------------Arrayแถว ตามจำนวนลูกโค----------------------------- */
  const creatTableSon = () => {
    const data = {
      birth_id: "",
      birth_weight: "",
      branding: false,
      breed: "",
      color: "",
      dam_id: damOfclaf,
      horndetering: false,
      name_cattle: "",
      sex: "",
      sire_id: sirOfclaf,
      wean: false
    };
    const stack = [];
    const array = [];
    for (let i = 1; i <= numberRowcalf; i++) {
      array.push(data);
      stack.push(i);
    }

    setNumberClaf(array);
  };

  const backFormdialog = prop => setOpen(prop);

  /*******************************************************************/
  if (loading) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.headerClave}>บันทึกการคลอด</div>
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
                    onClick={() => openInput(index, rows, breed[index])}
                    hover
                    tabIndex={-1}
                    key={index}
                    style={{ zIndex: "-1" }}
                  >
                    <TableCell align="center">{row.id_cattle}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        type="date"
                        style={{ width: "175px" }}
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
                        value={index === indexRow ? numberRowcalf : 1}
                        variant="outlined"
                        size="small"
                        style={{ width: "100px" }}
                        onChange={event => setNumberRowcalf(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        type="date"
                        style={{ width: "175px" }}
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
                        style={{ width: "175px" }}
                        onChange={event => setDateFatten(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        value={recorder || " "}
                        variant="outlined"
                        size="small"
                        onChange={event => setRecorder(event.target.value)}
                        disabled={index === indexRow ? false : true}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        value={oparator || " "}
                        variant="outlined"
                        size="small"
                        onChange={event => setOparator(event.target.value)}
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
                            ? {
                                backgroundColor: "#3f51b5",
                                color: "#fff",
                                outline: "none"
                              }
                            : {
                                backgroundColor: "#ef6c00",
                                color: "#fff",
                                outline: "none"
                              }
                        }
                        size="large"
                        onClick={
                          openBox && index === indexRow
                            ? () => ShowBox()
                            : () => openInput(index, rows, breed[index])
                        }
                      >
                        {index === indexRow ? "บันทึก" : "เลือก"}
                      </Button>
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
      <Dialogpopup
        OPEN={open}
        NUMBERCALF={numberCalf}
        BackFormdialog={backFormdialog}
        dateOfClave={dateOfClave}
        timeClave={timeClave}
        dateHeal={dateHeal}
        dateFatten={dateFatten}
        recorder={recorder}
        oparator={oparator}
        node={node}
        keysDateNotiCattle={keysDateNotiCattle}
        Rows={Rows}
        keycattle={key}
        UID={UID}
        indexOfmom={indexRow}
        countCalf={numberRowcalf}
        damOfclaf={damOfclaf}
        sirOfclaf={sirOfclaf}
        dataNoti={rows}
      />
    </Paper>
  );
}
