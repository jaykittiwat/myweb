import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    marginTop: "3px",
    width: "100%"
  },
  header: {
    marginTop: "20px",
    margin: "0",
    padding: "10px",
    fontSize: "22px",
    color: "#fff",
    backgroundColor: "#304ffe",
    borderRadius: "5px 5px 0 0"
  },
  HeaderSetting: {
    marginTop: "20px",
    color: "#fff",
    width: "25%",
    backgroundColor: "#2979ff",
    minWidth: "400px",
    padding: "12px",
    fontSize: "22px"
  },
  colrumLenght1: {
    minWidth: "100px"
  },
  colrumLenght2: {
    minWidth: "200px"
  }
});

export default function TableClaf() {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  useEffect(() => {}, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <Paper className={classes.HeaderSetting} elevation={3} square>
        จัดการลูกโค
      </Paper>
      <Paper elevation={3} className={classes.table}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.colrumLenght1}>
                  ชื่อแรกเกิด
                </TableCell>
                <TableCell className={classes.colrumLenght1}>วันเกิด</TableCell>
                <TableCell className={classes.colrumLenght1}>เพศ</TableCell>
                <TableCell className={classes.colrumLenght1}>
                  สายพันธุ์
                </TableCell>
                <TableCell className={classes.colrumLenght1}>พ่อ</TableCell>
                <TableCell className={classes.colrumLenght1}>แม่</TableCell>
                <TableCell className={classes.colrumLenght2}>
                  วันสักหู
                </TableCell>
                <TableCell className={classes.colrumLenght2}>
                  วันสูญเขา
                </TableCell>
                <TableCell className={classes.colrumLenght2}>
                  วันตีเบอร์
                </TableCell>
                <TableCell className={classes.colrumLenght2}>
                  วันหย่านม
                </TableCell>
                <TableCell className={classes.colrumLenght2}>
                  กำหนดเลขโค
                </TableCell>
                <TableCell className={classes.colrumLenght2}>
                  หมายเหตุ
                </TableCell>
                <TableCell align="center">บันทึก</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Sonic</TableCell>
                <TableCell>2020-10-01</TableCell>
                <TableCell>ผู้</TableCell>
                <TableCell>บรามัน</TableCell>
                <TableCell>A 1</TableCell>
                <TableCell>B 2</TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" }} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" }} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" }} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" }} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%" }} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%" }} />
                </TableCell>
                <TableCell>
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ outline: "none" }}
                  >
                    {" "}
                    บันทึก
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 75, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Paper>
  );
}
