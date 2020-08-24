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
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

const columns = [
  { id: "Q", label: "ลำดับ", minWidth: 5, align: "center" },
  { id: "date", label: "วันที่", minWidth: 100, align: "center" },
  { id: "id", label: "หมายเลขโค", minWidth: 100, align: "center" },
  {
    id: "detail",
    label: "ข้อมูล",
    minWidth: 100,
    align: "center"
  },
  {
    id: "size",
    label: "จัดการ",
    minWidth: 100,
    align: "center"
  }
];

const useStyles = makeStyles({
  headerClave: {
    margin: "0",
    padding: "10px",
    fontSize: "22px",
    color: "#fff",
    backgroundColor: "#304ffe",
    borderRadius: "5px 5px 0 0"
  },
  root: {
    width: "100%",
    marginTop: "20px",
    zIndex: "-1"
  },
  container: {
    maxHeight: "100%"
  },
  text:{
    fontSize:"18px"
  }
});

export default function PaperNotificaion(props) {
  const loading = props.posts.loading;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows] = React.useState([]);
React.useEffect(() => {
setRows(props.posts.dataNoti[0]==='No'?[]:props.posts.dataNoti)//<<<------------------กลับมาเชคอีกรอบ------------------<<<

}, [props]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const history = useHistory();
  const RouterTopage = type => {
    if (type === "บำรุงแม่พันธุ์") {
      history.push("/fatten");
    }
    if (type === "เหนี่ยวนำกลับสัด") {
      history.push("/induction");
    }
    if (type === "ผสมพันธุ์") {
      history.push("/breed");
    }
    if (type === "ตรวจท้อง") {
      history.push("/checkup");
    }
    if (type === "วันคลอด") {
      history.push("/calve");
    }
    if (type === "สัญเขา") {
      history.push("/calve");
    }
    if (type === "อย่านม") {
      history.push("/calfmanage");
    }
    if (type === "ตีเบอร์") {
      history.push("/calfmanage");
    }
    if (type === "รักษา") {
      history.push("/calfmanage");
    }
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
      <Paper className={classes.root}>
        <div className={classes.headerClave}>แจ้งเตือนการจัดการ</div>
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
                    <h5> {column.label}</h5>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  
                  return (
                    <TableRow hover  tabIndex={-1} key={index}>
                      <TableCell align="center" style={{fontSize:"16px"}}>{index + 1} </TableCell>
                      <TableCell align="center" style={{fontSize:"16px"}}>{row.date} </TableCell>
                      <TableCell align="center" style={{fontSize:"16px"}}>{row.id_cattle} </TableCell>
                      <TableCell align="center" style={{fontSize:"16px"}}>{row.type} </TableCell>
                      <TableCell align="center" >
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => RouterTopage(row.type)}
                        >
                          เลือก
                        </Button>
                      </TableCell>
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
      <div style={{ marginTop: "50px" }}></div>
    </div>
  );
}
