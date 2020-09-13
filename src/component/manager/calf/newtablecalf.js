import React, { useEffect, useState } from "react";
import {withStyles,
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
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
    background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    width:"100%",
    padding: "12px",
    fontSize: "22px"
  },
  colrumLenght1: {
    fontSize: "18px",
    minWidth: "150px"
  },
  colrumLenght2: {
    minWidth: "200px",
    fontSize: "18px",

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
                <TableCell className={classes.colrumLenght2} align="center">บันทึก</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>Sonic</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>2020-10-01</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>ผู้</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>บรามัน</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>A 1</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>B 2</TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ outline: "none" ,fontSize:"16px"}}
                  >
                    {" "}
                    บันทึก
                  </Button>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>Sonic</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>2020-10-01</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>ผู้</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>บรามัน</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>A 1</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>B 2</TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ outline: "none" ,fontSize:"16px"}}
                  >
                    {" "}
                    บันทึก
                  </Button>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>Sonic</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>2020-10-01</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>ผู้</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>บรามัน</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>A 1</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>B 2</TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ outline: "none" ,fontSize:"16px"}}
                  >
                    {" "}
                    บันทึก
                  </Button>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>Sonic</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>2020-10-01</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>ผู้</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>บรามัน</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>A 1</TableCell>
                <TableCell style={{ width: "100%" ,fontSize:"16px"}}>B 2</TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField type="date" style={{ width: "100%" ,fontSize:"16px"}} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell>
                  <TextField style={{ width: "100%",fontSize:"16px" }} />
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ outline: "none" ,fontSize:"16px"}}
                  >
                    {" "}
                    บันทึก
                  </Button>
                </TableCell>
              </StyledTableRow>
              
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
