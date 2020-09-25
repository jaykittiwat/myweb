import React,{useEffect} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Creact from "@material-ui/icons/Create";
import Save from "@material-ui/icons/Save";
import { TextField, Button } from "@material-ui/core";
import update from "immutability-helper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import PropTypes from "prop-types";
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
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
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};



export default function SimpleTable(props) {
  
  const [checkPage, setCheckPage] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [startEdit, setStartEdit] = React.useState(false);
  const [indexRow, setIndexRow] = React.useState(-1);
  const Head = [
    { cell: "ชื่อแรกเกิด", align: "left" }, // {ชื่อคอลัมล์ซ:" ",จัด(ชิดซ้าย/กลาง/ขวา)}
    { cell: "เพศ", align: "left" },
    { cell: "สายพันธุ์", align: "left" },
    { cell: "พ่อ", align: "left" },
    { cell: "แม่", align: "left" },
    { cell: "วันสักหู", align: "left" },
    { cell: "วันสูญเขา", align: "left" },
    { cell: " วันตีเบอร์", align: "left" },
    { cell: "วันหย่านม", align: "left" },
    { cell: "กำหนดเลขโค", align: "left" },
    { cell: "หมายเหตุ", align: "left" },
    { cell: "แก้ไข", align: "center" },
  ];
  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    setRows(props.posts.data)
  //console.log(props.posts.data)
  }, [props]);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const UPDATE = index => {
    setIndexRow(index);
    setStartEdit(!startEdit);
    setCheckPage(page);
  };

  const SAVE = index => {
    setStartEdit(!startEdit);
  };
  const SETVALUES = (event, index) => {
    const key = event.target.id;
    const v = event.target.value;
    const getToSet = rows;
    const calIndex = page * rowsPerPage + index;
    if(key!=="date_horndetering"&&key!=="date_branding"&&key!=="date_wean"){
      const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v } } });
      setRows(newSet);
    }
    if(key==="date_horndetering"){
      const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v },horndetering:{$set: true} } });
      setRows(newSet);
    }
    if(key==="date_branding"){
      const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v },branding:{$set: true} } });
      setRows(newSet);
    }
    if(key==="date_wean"){
      const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v },wean:{$set: true} } });
      setRows(newSet);
    }
  
    
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {Head.map((list, index) => (
              <TableCell align={list.align} key={index} style={{minWidth:"150px",fontSize:"18px"}}>
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
              <TableCell  style={{fontSize:"16px"}}>
                {row.name_cattle||""}
              </TableCell>
             
              <TableCell style={{fontSize:"16px"}}>
                {row.sex==='BULL'?"ผู้":'เมีย'}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
              {row.breed||""}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
              {row.sire_id||""}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
              {row.dam_id||""}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
                {startEdit && indexRow === index && page === checkPage  ? (
                  <TextField
                  type="date"
                    style={{ width: "100%" }}
                    id="date_tatoo"
                    value={row.date_tatoo||""}
                    onChange={event => SETVALUES(event, index)}
                  ></TextField>
                ) : (
                  row.date_tatoo||"ยังไม่ระบุ"
                )}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
                {startEdit && indexRow === index && page === checkPage  ? (
                  <TextField
                  type="date"
                    style={{ width: "100%" }}
                    id="date_horndetering"
                    value={row.date_horndetering||""}
                    onChange={event => SETVALUES(event, index)}
                  ></TextField>
                ) : (
                  row.horndetering?row.date_horndetering:"ยังไม่ระบุ"
                )}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
                {startEdit && indexRow === index && page === checkPage  ? (
                  <TextField
                  type="date"
                    style={{ width: "100%" }}
                    id="date_branding"
                    value={row.date_branding||""}
                    onChange={event => SETVALUES(event, index)}
                  ></TextField>
                ) : (
                  row.branding?row.date_branding:"ยังไม่ระบุ"
                )}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
                {startEdit && indexRow === index && page === checkPage  ? (
                  <TextField
                  type="date"
                    style={{ width: "100%" }}
                    id="date_wean"
                    value={row.date_wean||""}
                    onChange={event => SETVALUES(event, index)}
                  ></TextField>
                ) : (
                  row.wean?row.date_wean:"ยังไม่ระบุ"
                )}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
                {startEdit && indexRow === index && page === checkPage  ? (
                  <TextField
                    style={{ width: "100%" }}
                    id="birth_id"
                    value={row.birth_id}
                    onChange={event => SETVALUES(event, index)}
                  ></TextField>
                ) : (
                  row.birth_id===" "?"ยังไม่ระบุ":row.birth_id
                )}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}>
                {startEdit && indexRow === index && page === checkPage  ? (
                  <TextField
                    style={{ width: "100%" }}
                    id="note"
                    value={row.note||""}
                    onChange={event => SETVALUES(event, index)}
                  ></TextField>
                ) : (
                  row.note||"ไม่มี"
                )}
              </TableCell>
              <TableCell style={{ width: "200px" }} align="center">
                {startEdit && indexRow === index && page === checkPage  ? (
                  <Save onClick={() => SAVE(index)} color="primary" />
                ) : (
                  <Creact
                    onClick={() => UPDATE(index)}
                    style={{ color: "#ffa000" }}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={12} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
       
          <TableRow>
            
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={14}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      
    </TableContainer>
  );
}
