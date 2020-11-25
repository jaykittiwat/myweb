import React from "react";
import {
  Paper,
  Grid,
  FormControl,
  Select,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import jsPDF from "jspdf";
import { font } from "./conten";
import "jspdf-autotable";
import firebase from "./../../../backEnd/firebase";
import ReactExport from "react-data-export";

export default function Maintain(props) {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const [dataExcel, setDataExcel] = React.useState(null);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [rows, setrows] = React.useState([]);
  const [dataBrand, setDatabrand] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  const [owner, setOwner] = React.useState("");
  const [logo, setLogo] = React.useState(null);
  const [mode, setMode] = React.useState("");
  const [valuesFillter, setValuseFillter] = React.useState("");

  const queryDataPDF = async (id) => {
    const res3 = await axios.get(
      "https://aipcattle.herokuapp.com/settingbrand/brand/" + props.UID
    );
    const databrand = Object.values(res3.data);

    toDataUrl(logo, (myBase64) => {
      PDF(databrand[0], myBase64);
    });
  };

  const date = () => {
    const newdate = new Date();
    let dd = newdate.getDate();
    let mm = newdate.getMonth() + 1;
    const yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    return dd + "/" + mm + "/" + yyyy;
  };

  const toDataUrl = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  const DataToPDF = () => {
    const data = [];
    rows.map((i, index) => {
      return data.push([
        index + 1,
        i.dam_id,
        i.number_of_breeding,
        convertDate(i.date),
        i.note,
        i.operator,
      ]);
    });

    return data;
  };

  const conditionSreach = () => {
    if (
      mode === "" &&
      valuesFillter === "" &&
      startDate === "" &&
      endDate === ""
    ) {
      setloading(true);
      axios
        .get(
          "https://aipcattle.herokuapp.com/abortion/historyAllAbortion/" +
            props.UID
        )
        .then((res) => {
          setrows(res.data);
          setloading(false);
        });
    }

    if (
      mode === "" &&
      valuesFillter === "" &&
      startDate !== "" &&
      endDate !== ""
    ) {
      setloading(true);
      axios
        .get(
          "https://aipcattle.herokuapp.com/abortion/historyAllAbortion/" +
            props.UID +
            "/" +
            startDate +
            "/" +
            endDate
        )
        .then((res) => {
          setrows(res.data);
          setloading(false);
        });
    }

    if (
      (mode === "dam_id" ||
        mode === "number_of_breeding" ||
        mode === "operator") &&
      valuesFillter !== "" &&
      startDate === "" &&
      endDate === ""
    ) {
      setloading(true);
      axios
        .get(
          "https://aipcattle.herokuapp.com/abortion/historyAllAbortion/form01/" +
            props.UID +
            "/" +
            valuesFillter +
            "/" +
            mode
        )
        .then((res) => {
          setrows(res.data);
          setloading(false);
        });
    }

    if (
      (mode === "dam_id" ||
        mode === "number_of_breeding" ||
        mode === "operator") &&
      valuesFillter !== "" &&
      startDate !== "" &&
      endDate !== ""
    ) {
      setloading(true);
      axios
        .get(
          "https://aipcattle.herokuapp.com/abortion/historyAllAbortion/form02/" +
            props.UID +
            "/" +
            valuesFillter +
            "/" +
            startDate +
            "/" +
            endDate +
            "/" +
            mode
        )
        .then((res) => {
          setrows(res.data);
          setloading(false);
        });
    }
  };

  const reset = () => {
    setMode("");
    setValuseFillter("");
    setStartDate("");
    setEndDate("");
  };
  const PDF = (databrand, base64) => {
    const doc = new jsPDF();
    const content = font;
    const finalY = doc.lastAutoTable.finalY || 10;
    doc.addFileToVFS("THSarabunNew.ttf", content);
    doc.addFont("THSarabunNew.ttf", "custom", "normal");
    doc.setFont("custom");
    doc.setFontSize(26);
    doc.text("ใบประวัติโคแท้ง", 85, finalY + 23);
    doc.addImage(base64, 15, 5, 20, 20);
    doc.setFontSize(20);
    doc.text("ชื่อฟาร์ม:" + databrand.farm_name_TH, 14, finalY + 31);
    doc.text("เจ้าของฟาร์ม:" + owner, 14, finalY + 39);
    doc.autoTable({
      startY: finalY + 43,
      head: [
        [
          "รายการ",
          "หมายเลขโค",
          "ครั้งที่ท้อง",
          "วันที่",
          "สาหตุ",
          "ผู้ปฎิบัติ",
        ],
      ],
      columnStyles: {
        0: { cellWidth: 19 },
        1: { cellWidth: 40 },
        2: { cellWidth: 25 },
        3: { cellWidth: 25 },
        4: { cellWidth: 40 },
        5: { cellWidth: 33 },
      },
      body: DataToPDF(),
      headStyles: {
        font: "custom",
        fontSize: 18,
        fillColor: [85, 157, 251],
        halign: "center",
      },
      bodyStyles: { font: "custom", fontSize: 16, halign: "center" },
      theme: "grid",
    });
    doc.text(
      "ลงชื่อ...........................................................",
      120,
      doc.lastAutoTable.finalY + 200
    );
    doc.text(
      "       (      " + owner + "      )",
      120,
      doc.lastAutoTable.finalY + 209
    );
    doc.text(
      "                     " + date() + "            ",
      120,
      doc.lastAutoTable.finalY + 218
    );
    doc.save("table.pdf");
  };

  React.useEffect(() => {
    if (props.UID !== "") {
      axios
        .get("https://aipcattle.herokuapp.com/settingbrand/brand/" + props.UID)

        .then((res) => {
          const databrand = Object.values(res.data);
          setDatabrand(databrand);
         
          axios
            .get(
              "https://aipcattle.herokuapp.com/abortion/historyAllAbortion/" +
                "Frame"
            )
            .then((res) => {
              setOwner(props.owner);
              setrows(res.data);
              setloading(false);
            })
            .then(() => {
              firebase
                .storage()
                .ref("Photos/" + props.UID + "/")
                .child("Logo")
                .getDownloadURL()
                .then((url) => {
                  setLogo(url);
                });
            });
        });
    }
  }, [props]);

  const convertDate = (dateEvent) => {
    var date = new Date(dateEvent);
    var newdate = new Date(date);
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }

    return dd + "/" + mm + "/" + yyyy;
  };

  const queryDataExcel = () => {
    const data = [];
    const borders = {
      top: { style: "thin" },
      bottom: { style: "thin" },
      left: { style: "thin" },
      right: { style: "thin" },
    };
    rows.map((i) => {
      const newSet = [
        {
          value: i.dam_id,
          style: {
            border: borders,
            alignment: { wrapText: true, horizontal: "left", vertical: "top" },
          },
        },
        {
          value: i.number_of_breeding,
          style: {
            border: borders,
            alignment: { wrapText: true, horizontal: "left", vertical: "top" },
          },
        },
        {
          value: convertDate(i.date),
          style: {
            border: borders,
            alignment: { wrapText: true, horizontal: "left", vertical: "top" },
          },
        },
        {
          value: i.note,
          style: {
            border: borders,
            alignment: { wrapText: true, horizontal: "left", vertical: "top" },
          },
        },
        {
          value: i.operator,
          style: {
            border: borders,
            alignment: { wrapText: true, horizontal: "left", vertical: "top" },
          },
        },
      ];

      return data.push(newSet);
    });
    const multiDataSet = [
      {
        xSteps: 0,
        ySteps: 0,
        columns: [
          { title: "ใบประวัติโคแท้ง" }, //pixels width
        ],
        data: [],
      },
      {
        xSteps: 0,
        ySteps: 1,
        columns: [
          { title: "ชื่อฟาร์ม:"+dataBrand[0].farm_name_TH, width: { wpx: 90 } }, //pixels width
        ],
        data: [],
      },
      {
        xSteps: 0,
        ySteps: 1,
        columns: [
          {
            title: "หมายเลขโค",
            width: { wpx: 100 },
            style: { border: borders, font: { bold: true } },
          }, //pixels width
          {
            title: "ครั้งที่ท้อง",
            width: { wpx: 150 },
            style: { border: borders, font: { bold: true } },
          }, //char width
          {
            title: "วันที่",
            width: { wpx: 100 },
            style: { border: borders, font: { bold: true } },
          },
          {
            title: "สาเหตุ",
            width: { wpx: 100 },
            style: { border: borders, font: { bold: true } },
          },
          {
            title: "ผู้ปฏิบัติ",
            width: { wpx: 150 },
            style: { border: borders, font: { bold: true } },
          },
        ],
        data: data,
      },
    ];
    setDataExcel(multiDataSet);
  };

  return (
    <>
      <Paper square variant="outlined" style={{ padding: "8px" }}>
        <Grid container spacing={3}>
          <Grid item md={2} xs={12} style={{ textAlign: "right" }}>
            {" "}
            <FormControl size="small" style={{ width: "80%" }}>
              <Select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                style={{ fontSize: "18px" }}
                id="typeuse"
                variant="outlined"
                native
              >
                <option value="">ทั้งหมด</option>
                <option value="dam_id">หมายเลขโค</option>
                <option value="number_of_breeding">ครั้งที่ท้อง</option>
                <option value="operator">ชื่อผู้ปฎิบัติ</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              value={valuesFillter}
              disabled={mode === "" ? true : false}
              onChange={(e) => setValuseFillter(e.target.value)}
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              placeholder="ค้นหา"
            />
          </Grid>

          <Grid item md={2} xs={12} style={{ textAlign: "left" }}>
            <span style={{ fontSize: "18px" }}>
              {" "}
              วันที่{" "}
              <TextField
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                variant="outlined"
                type="date"
                size="small"
                style={{ width: "80%" }}
              />
            </span>
          </Grid>

          <Grid item md={2} xs={12} style={{ textAlign: "left" }}>
            <span style={{ fontSize: "18px" }}>
              {" "}
              ถึง{" "}
              <TextField
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                variant="outlined"
                type="date"
                size="small"
                style={{ width: "80%" }}
              />
            </span>
          </Grid>
          <Grid item md={2} xs={12} style={{ textAlign: "left" }}>
            <Button
              onClick={() => conditionSreach()}
              variant="contained"
              style={{
                backgroundColor: "#FF7C10",
                color: "#fff",
                fontSize: "18px",
                width: "80px",
                height: "40px",
                outline: "none",
              }}
            >
              ค้นหา
            </Button>

            <Button
              onClick={() => reset()}
              variant="contained"
              color="secondary"
              style={{
                marginLeft: "5px",
                fontSize: "18px",
                width: "80px",
                height: "40px",
                outline: "none",
              }}
            >
              ยกเลิก
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {loading ? (
        <div
          className="container-fluid text-center"
          style={{ padding: "10px" }}
        >
          <CircularProgress size={30} />
        </div>
      ) : (
        <>
          <Paper square variant="outlined">
            <TableContainer style={{ maxHeight: "550px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                      รายการที่
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                      หมายเลขโค
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                      ครั้งที่ท้อง
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                      วันที่
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                      สาเหตุ
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                      ผู้ปฏิบัติ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((i, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell align="center" style={{ fontSize: "16px" }}>
                          {index + 1}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: "16px" }}>
                          {i.dam_id}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: "16px" }}>
                          {i.number_of_breeding}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: "16px" }}>
                          {convertDate(i.date)}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: "16px" }}>
                          {i.note||"-"}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: "16px" }}>
                          {i.operator}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Grid container spacing={3} style={{ marginTop: "2px" }}>
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <Button
                onClick={() => queryDataExcel()}
                variant="contained"
                style={{
                  color: "#fff",
                  backgroundColor: "#1D6F42",
                  fontSize: "18px",
                  width: "100px",
                  outline: "none",
                }}
              >
                Excel
              </Button>{" "}
              {dataExcel != null ? (
                <ExcelFile
                  element={<button>Download Data With Styles</button>}
                  hideElement={true}
                >
                  <ExcelSheet dataSet={dataExcel} name="ใบประวัติการบำรุง" />
                </ExcelFile>
              ) : null}
              <Button
                onClick={() => queryDataPDF()}
                variant="contained"
                style={{
                  color: "#fff",
                  backgroundColor: "#E61F25",
                  fontSize: "18px",
                  width: "100px",
                  outline: "none",
                }}
              >
                PDF
              </Button>{" "}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
