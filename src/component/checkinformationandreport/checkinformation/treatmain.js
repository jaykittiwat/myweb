import React, { Component } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import 'chartjs-plugin-datalabels';
import { Button, FormControl, Select, TextField } from "@material-ui/core";

import axios from "axios"
class Maintain extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cattle: "emtyp",
            form: "แสดงการเปรียบเทียบจำนวนโคในแต่ละปี",
            indexYears: [],
            type: "กราฟเส้น",
            start: "2020",
            end: "2020",
            chartData: {
                labels: [
                    "มกราคม",
                    "กุมภาพันธ์",
                    "มีนาคม",
                    "เมษายน",
                    "พฤศภาคม",
                    "มิถุนายน",
                    "กรกฎาคม",
                    "สิงหาคม",
                    "กันยายน",
                    "ตุลาคม",
                    "พฤศจิกายน",
                    "ธันวามคม",
                ],
                datasets: null,
            },
        };
    }

    setChart() {
        if(this.state.form==="แสดงการเปรียบเทียบจำนวนโคในแต่ละปี"){
            axios.get("https://aipcattle.herokuapp.com/treatment/graph/" + this.props.UID + "/" + this.state.start + "-01-01/" + this.state.end + "-12-31/emtyp").then(res => {
            const setData = []
            res.data.map((i, index) => {
                console.log(i);
                const sum = i.reduce(function (acc, val) { return acc + val; }, 0)
                if (sum !== 0) {
                    const indexYeas = this.state.indexYears
                    indexYeas.push(index)
                    const setDataset = {
                        fill: false,
                        label: index === 0 ? "ทั้งหมด" : index === 1 ? "2016" : index === 2 ? "2017" : index === 3 ? "2018" : index === 4 ? "2019" : index === 5 ? "2020" : index === 6 ? "2021" : index === 7 ? "2022" : index === 8 ? "2023" : index === 9 ? "2024" : index === 10 ? "2025" : index === 11 ? "2026" : index === 12 ? "2027" : index === 13 ? "2028" : index === 14 ? "2029" : "2030",
                        data: i,
                        borderColor: [index === 0 ? "rgba(255, 68, 43)" : index === 1 ? "rgba(54, 162, 235)" : index === 2 ? "rgba(255, 206, 86)" : index === 3 ? "rgba(75, 192, 192)" : index === 4 ? "rgba(153, 102, 255)" : index === 5 ? "rgba(255, 126, 64)" : index === 6 ? "rgba(245, 130, 180)" : index === 7 ? "rgba(44, 60, 150)" : index === 8 ? "rgba(245, 60, 160)" : index === 9 ? "rgba(65, 120, 120)" : index === 10 ? "rgba(143, 110, 150)" : index === 11 ? "rgba(245, 75, 110)" : index === 12 ? "rgba(30, 50, 110)" : index === 13 ? "rgba(20, 110, 110)" : index === 14 ? "rgba(20, 75, 10)" : "rgba(180, 180, 180)"],
                        backgroundColor: [
                            "rgba(255, 68, 43)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(153, 102, 255)",
                            "rgba(255, 126, 64)",
                            "rgba(245, 130, 180)",
                            "rgba(44, 60, 150)",
                            "rgba(245, 60, 160)",
                            "rgba(65, 120, 120)",
                            "rgba(143, 110, 150)",
                            "rgba(245, 75, 110)",
                        ],
                        pointStyle:index === 0 ? "dash" : index === 1 ? "circle" : index === 2 ? "cross" : index === 3 ? "triangle"  : index === 4 ? "dash" : index === 5 ? "rect" : index === 6 ? "rect" : index === 7 ? "rectRounded" : index === 8 ? "rectRot" : index === 9 ? "star" : index === 10 ? "triangle" : index === 11 ? "" : index === 12 ? "" : index === 13 ? "" : index === 14 ? "" : "", 
                        pointRadius:10,
                    }
                    setData.push(setDataset)
                    this.setState({ ...this.state, indexYears: indexYeas })
                }

            })
            this.setState({
                ...this.state, chartData: {
                    labels: [
                        "มกราคม",
                        "กุมภาพันธ์",
                        "มีนาคม",
                        "เมษายน",
                        "พฤศภาคม",
                        "มิถุนายน",
                        "กรกฎาคม",
                        "สิงหาคม",
                        "กันยายน",
                        "ตุลาคม",
                        "พฤศจิกายน",
                        "ธันวามคม",
                    ],
                    datasets: setData,
                }
            })
        })
        }
        else{
            axios.get("https://aipcattle.herokuapp.com/treatment/graph/" + this.props.UID + "/" + this.state.start + "-01-01/" + this.state.start + "-12-31/"+this.state.cattle).then(res => {
            const setData = []
            res.data.map((i, index) => {
                console.log(i);
                const sum = i.reduce(function (acc, val) { return acc + val; }, 0)
                if (sum !== 0) {
                    const indexYeas = this.state.indexYears
                    indexYeas.push(index)
                    const setDataset = {
                        fill: false,
                        label: index === 0 ? "ทั้งหมด" : index === 1 ? "2016" : index === 2 ? "2017" : index === 3 ? "2018" : index === 4 ? "2019" : index === 5 ? "2020" : index === 6 ? "2021" : index === 7 ? "2022" : index === 8 ? "2023" : index === 9 ? "2024" : index === 10 ? "2025" : index === 11 ? "2026" : index === 12 ? "2027" : index === 13 ? "2028" : index === 14 ? "2029" : "2030",
                        data: i,
                        borderColor: [index === 0 ? "rgba(255, 68, 43)" : index === 1 ? "rgba(54, 162, 235)" : index === 2 ? "rgba(255, 206, 86)" : index === 3 ? "rgba(75, 192, 192)" : index === 4 ? "rgba(153, 102, 255)" : index === 5 ? "rgba(255, 126, 64)" : index === 6 ? "rgba(245, 130, 180)" : index === 7 ? "rgba(44, 60, 150)" : index === 8 ? "rgba(245, 60, 160)" : index === 9 ? "rgba(65, 120, 120)" : index === 10 ? "rgba(143, 110, 150)" : index === 11 ? "rgba(245, 75, 110)" : index === 12 ? "rgba(30, 50, 110)" : index === 13 ? "rgba(20, 110, 110)" : index === 14 ? "rgba(20, 75, 10)" : "rgba(180, 180, 180)"],
                        backgroundColor: [
                            "rgba(255, 68, 43)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(153, 102, 255)",
                            "rgba(255, 126, 64)",
                            "rgba(245, 130, 180)",
                            "rgba(44, 60, 150)",
                            "rgba(245, 60, 160)",
                            "rgba(65, 120, 120)",
                            "rgba(143, 110, 150)",
                            "rgba(245, 75, 110)",
                        ],pointStyle:index === 0 ? "dash" : index === 1 ? "circle" : index === 2 ? "cross" : index === 3 ? "triangle"  : index === 4 ? "dash" : index === 5 ? "rect" : index === 6 ? "rect" : index === 7 ? "rectRounded" : index === 8 ? "rectRot" : index === 9 ? "star" : index === 10 ? "triangle" : index === 11 ? "" : index === 12 ? "" : index === 13 ? "" : index === 14 ? "" : "", 
                        pointRadius:10,
                    }
                    setData.push(setDataset)
                    this.setState({ ...this.state, indexYears: indexYeas })
                }

            })
            this.setState({
                ...this.state, chartData: {
                    labels: [
                        "มกราคม",
                        "กุมภาพันธ์",
                        "มีนาคม",
                        "เมษายน",
                        "พฤศภาคม",
                        "มิถุนายน",
                        "กรกฎาคม",
                        "สิงหาคม",
                        "กันยายน",
                        "ตุลาคม",
                        "พฤศจิกายน",
                        "ธันวามคม",
                    ],
                    datasets: setData,
                }
            })
        })
        }
    }


    componentDidMount() {
        if(this.state.form==="แสดงการเปรียบเทียบจำนวนโคในแต่ละปี"){
            axios.get("https://aipcattle.herokuapp.com/treatment/graph/" + this.props.UID + "/" + this.state.start + "-01-01/" + this.state.end + "-12-31/emtyp").then(res => {
            const setData = []
            res.data.map((i, index) => {
                console.log(i);
                const sum = i.reduce(function (acc, val) { return acc + val; }, 0)
                if (sum !== 0) {
                    const indexYeas = this.state.indexYears
                    indexYeas.push(index)
                    const setDataset = {
                        fill: false,
                        label: index === 0 ? "ทั้งหมด" : index === 1 ? "2016" : index === 2 ? "2017" : index === 3 ? "2018" : index === 4 ? "2019" : index === 5 ? "2020" : index === 6 ? "2021" : index === 7 ? "2022" : index === 8 ? "2023" : index === 9 ? "2024" : index === 10 ? "2025" : index === 11 ? "2026" : index === 12 ? "2027" : index === 13 ? "2028" : index === 14 ? "2029" : "2030",
                        data: i,
                        borderColor: [index === 0 ? "rgba(255, 68, 43)" : index === 1 ? "rgba(54, 162, 235)" : index === 2 ? "rgba(255, 206, 86)" : index === 3 ? "rgba(75, 192, 192)" : index === 4 ? "rgba(153, 102, 255)" : index === 5 ? "rgba(255, 126, 64)" : index === 6 ? "rgba(245, 130, 180)" : index === 7 ? "rgba(44, 60, 150)" : index === 8 ? "rgba(245, 60, 160)" : index === 9 ? "rgba(65, 120, 120)" : index === 10 ? "rgba(143, 110, 150)" : index === 11 ? "rgba(245, 75, 110)" : index === 12 ? "rgba(30, 50, 110)" : index === 13 ? "rgba(20, 110, 110)" : index === 14 ? "rgba(20, 75, 10)" : "rgba(180, 180, 180)"],
                        backgroundColor: [
                            "rgba(255, 68, 43)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(153, 102, 255)",
                            "rgba(255, 126, 64)",
                            "rgba(245, 130, 180)",
                            "rgba(44, 60, 150)",
                            "rgba(245, 60, 160)",
                            "rgba(65, 120, 120)",
                            "rgba(143, 110, 150)",
                            "rgba(245, 75, 110)",
                        ]
                    }
                    setData.push(setDataset)
                    this.setState({ ...this.state, indexYears: indexYeas })
                }

            })
            this.setState({
                ...this.state, chartData: {
                    labels: [
                        "มกราคม",
                        "กุมภาพันธ์",
                        "มีนาคม",
                        "เมษายน",
                        "พฤศภาคม",
                        "มิถุนายน",
                        "กรกฎาคม",
                        "สิงหาคม",
                        "กันยายน",
                        "ตุลาคม",
                        "พฤศจิกายน",
                        "ธันวามคม",
                    ],
                    datasets: setData,
                }
            })
        })
        }
        else{
            axios.get("https://aipcattle.herokuapp.com/treatment/graph/" + this.props.UID + "/" + this.state.start + "-01-01/" + this.state.start + "-12-31/"+this.state.cattle).then(res => {
            const setData = []
            res.data.map((i, index) => {
                console.log(i);
                const sum = i.reduce(function (acc, val) { return acc + val; }, 0)
                if (sum !== 0) {
                    const indexYeas = this.state.indexYears
                    indexYeas.push(index)
                    const setDataset = {
                        fill: false,
                        label: index === 0 ? "ทั้งหมด" : index === 1 ? "2016" : index === 2 ? "2017" : index === 3 ? "2018" : index === 4 ? "2019" : index === 5 ? "2020" : index === 6 ? "2021" : index === 7 ? "2022" : index === 8 ? "2023" : index === 9 ? "2024" : index === 10 ? "2025" : index === 11 ? "2026" : index === 12 ? "2027" : index === 13 ? "2028" : index === 14 ? "2029" : "2030",
                        data: i,
                        borderColor: [index === 0 ? "rgba(255, 68, 43)" : index === 1 ? "rgba(54, 162, 235)" : index === 2 ? "rgba(255, 206, 86)" : index === 3 ? "rgba(75, 192, 192)" : index === 4 ? "rgba(153, 102, 255)" : index === 5 ? "rgba(255, 126, 64)" : index === 6 ? "rgba(245, 130, 180)" : index === 7 ? "rgba(44, 60, 150)" : index === 8 ? "rgba(245, 60, 160)" : index === 9 ? "rgba(65, 120, 120)" : index === 10 ? "rgba(143, 110, 150)" : index === 11 ? "rgba(245, 75, 110)" : index === 12 ? "rgba(30, 50, 110)" : index === 13 ? "rgba(20, 110, 110)" : index === 14 ? "rgba(20, 75, 10)" : "rgba(180, 180, 180)"],
                        backgroundColor: [
                            "rgba(255, 68, 43)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(153, 102, 255)",
                            "rgba(255, 126, 64)",
                            "rgba(245, 130, 180)",
                            "rgba(44, 60, 150)",
                            "rgba(245, 60, 160)",
                            "rgba(65, 120, 120)",
                            "rgba(143, 110, 150)",
                            "rgba(245, 75, 110)",
                        ],pointStyle:index === 0 ? "dash" : index === 1 ? "circle" : index === 2 ? "cross" : index === 3 ? "triangle"  : index === 4 ? "dash" : index === 5 ? "rect" : index === 6 ? "rect" : index === 7 ? "rectRounded" : index === 8 ? "rectRot" : index === 9 ? "star" : index === 10 ? "triangle" : index === 11 ? "" : index === 12 ? "" : index === 13 ? "" : index === 14 ? "" : "", 
                        pointRadius:10,
                    }
                    setData.push(setDataset)
                    this.setState({ ...this.state, indexYears: indexYeas })
                }

            })
            this.setState({
                ...this.state, chartData: {
                    labels: [
                        "มกราคม",
                        "กุมภาพันธ์",
                        "มีนาคม",
                        "เมษายน",
                        "พฤศภาคม",
                        "มิถุนายน",
                        "กรกฎาคม",
                        "สิงหาคม",
                        "กันยายน",
                        "ตุลาคม",
                        "พฤศจิกายน",
                        "ธันวามคม",
                    ],
                    datasets: setData,
                }
            })
        })
        }

    }
    componentDidUpdate(prevProps) {
        //array [0] คือทั้งหมด
        if (this.props.UID !== prevProps.UID) {
            axios.get("https://aipcattle.herokuapp.com/treatment/graph/" + this.props.UID + "/2020-01-01/2020-12-31/"+this.state.cattle).then(res => {
                const setData = []
                res.data.map((i, index) => {
                    const sum = i.reduce(function (acc, val) { return acc + val; }, 0)
                    if (sum !== 0) {
                        const indexYeas = this.state.indexYears
                        indexYeas.push(index)
                        const setDataset = {
                            fill: false,
                            label: index === 0 ? "ทั้งหมด" : index === 1 ? "2016" : index === 2 ? "2017" : index === 3 ? "2018" : index === 4 ? "2019" : index === 5 ? "2020" : index === 6 ? "2021" : index === 7 ? "2022" : index === 8 ? "2023" : index === 9 ? "2024" : index === 10 ? "2025" : index === 11 ? "2026" : index === 12 ? "2027" : index === 13 ? "2028" : index === 14 ? "2029" : "2030",
                            data: i,
                            borderColor: [index === 0 ? "rgba(255, 68, 43)" : index === 1 ? "rgba(54, 162, 235)" : index === 2 ? "rgba(255, 206, 86)" : index === 3 ? "rgba(75, 192, 192)" : index === 4 ? "rgba(153, 102, 255)" : index === 5 ? "rgba(255, 126, 64)" : index === 6 ? "rgba(245, 130, 180)" : index === 7 ? "rgba(44, 60, 150)" : index === 8 ? "rgba(245, 60, 160)" : index === 9 ? "rgba(65, 120, 120)" : index === 10 ? "rgba(143, 110, 150)" : index === 11 ? "rgba(245, 75, 110)" : index === 12 ? "rgba(30, 50, 110)" : index === 13 ? "rgba(20, 110, 110)" : index === 14 ? "rgba(20, 75, 10)" : "rgba(180, 180, 180)"],
                            backgroundColor: [
                                "rgba(255, 68, 43)",
                                "rgba(54, 162, 235)",
                                "rgba(255, 206, 86)",
                                "rgba(75, 192, 192)",
                                "rgba(153, 102, 255)",
                                "rgba(255, 126, 64)",
                                "rgba(245, 130, 180)",
                                "rgba(44, 60, 150)",
                                "rgba(245, 60, 160)",
                                "rgba(65, 120, 120)",
                                "rgba(143, 110, 150)",
                                "rgba(245, 75, 110)",
                            ],
                        }
                        setData.push(setDataset)
                        this.setState({ ...this.state, indexYears: indexYeas })

                    }

                })
                this.setState({
                    ...this.state, chartData: {
                        labels: [
                            "มกราคม",
                            "กุมภาพันธ์",
                            "มีนาคม",
                            "เมษายน",
                            "พฤศภาคม",
                            "มิถุนายน",
                            "กรกฎาคม",
                            "สิงหาคม",
                            "กันยายน",
                            "ตุลาคม",
                            "พฤศจิกายน",
                            "ธันวามคม",
                        ],
                        datasets: setData,
                    }
                })



            })

        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ width: "60%" }}>
                <Grid container spacing={1} >
                    <Grid container item xs={12} spacing={3} >
                        <Grid item xs={12} >
                            {this.state.type === "กราฟเส้น" ? <Paper elevation={1}>
                                <Line
                                    data={this.state.chartData}
                                    options={{
                                        scales: {
                                            yAxes: [{
                                              scaleLabel: {
                                                display: true,
                                                labelString: 'จำนวนโค (ตัว)',
                                                fontSize: 20
                                              }
                                            }],
                                            xAxes: [{
                                                scaleLabel: {
                                                  display: true,
                                                  labelString: 'เดือน',
                                                  fontSize: 20
                                                }
                                              }]
                                          }     ,
                                        responsive: true,
                                        title: {
                                            display: true,
                                            text: "กราฟแสดงสถิติการรักษา",
                                            fontSize: 25,
                                        },
                                        legend: {
                                            display: false,
                                            position: "bottom",
                                        },
                                        layout: {
                                            padding: {
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                            },
                                        },
                                        plugins: {
                                            datalabels: {
                                                display: true,
                                                color: 'white'
                                            }
                                        }
                                    }}
                                />
                            </Paper>
                                :
                                <Paper elevation={1}>
                                    <Bar
                                        data={this.state.chartData}
                                        options={{
                                            scales: {
                                                yAxes: [{
                                                  scaleLabel: {
                                                    display: true,
                                                    labelString: 'จำนวนโค (ตัว)',
                                                    fontSize: 20
                                                  }
                                                }],
                                                xAxes: [{
                                                    scaleLabel: {
                                                      display: true,
                                                      labelString: 'เดือน',
                                                      fontSize: 20
                                                    }
                                                  }]
                                              }     ,
                                            responsive: true,
                                            title: {
                                                display: true,
                                                text: "กราฟแสดงสถิติการรักษา",
                                                fontSize: 25,
                                            },
                                            legend: {
                                                display: false,
                                            },
                                            layout: {
                                                padding: {
                                                    left: 0,
                                                    right: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                },
                                            },
                                        }}
                                    />
                                </Paper>}
                        </Grid>
                    </Grid>
                </Grid>
                <Paper elevation={0} className="container" style={{ textAlign: "right", marginTop: "10px" }}>
                    <FormControl size="small" style={{ width: "15%" }}>
                        <Select
                            id="typeuse"
                            variant="outlined"
                            native
                            style={{ fontSize: "18px" }}
                            onChange={(e) => this.setState({ ...this.state, type: e.target.value })}
                        >
                            <option>กราฟเส้น</option>
                            <option>กราฟแท่ง</option>
                        </Select>
                    </FormControl>
                </Paper>
                <Paper elevation={0} className="container" style={{ textAlign: "center", marginTop: "10px" }}>
                    <FormControl size="small" style={{ width: "350px" }}>
                        <Select
                            id="typeuse"
                            variant="outlined"
                            native
                            style={{ fontSize: "18px" }}
                            value={this.state.form}
                            onChange={(e) => this.setState({ ...this.state, form: e.target.value })}
                        >
                            <option>แสดงการเปรียบเทียบจำนวนโคในแต่ละปี</option>
                            <option>แสดงจำนวนครั้งตามหมายเลขโคในปีนั้น</option>
                        </Select>
                    </FormControl>
                </Paper>
                <Paper elevation={0} className="container" style={{ textAlign: "center", marginTop: "10px" }}>
                    {this.state.form === "แสดงการเปรียบเทียบจำนวนโคในแต่ละปี" ?
                        <Paper elevation={0}><FormControl size="small" style={{ width: "15%" }}>
                            <Select
                                id="typeuse"
                                variant="outlined"
                                native
                                value={this.state.start}
                                onChange={(e) => this.setState({ ...this.state, start: e.target.value })}
                                style={{ fontSize: "18px" }}
                            >

                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>

                            </Select>
                        </FormControl>
                            <span style={{ fontSize: "18px", margin: '20px' }}>ถึง</span>
                            <FormControl size="small" style={{ width: "15%" }}>
                                <Select
                                    id="typeuse"
                                    variant="outlined"
                                    native
                                    value={this.state.end}
                                    onChange={(e) => this.setState({ ...this.state, end: e.target.value })}
                                    style={{ fontSize: "18px" }}
                                >
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                </Select>
                            </FormControl></Paper> :
                        <Paper elevation={0}>
                            <FormControl size="small" style={{ width: "350px" }}>
                                <TextField
                                    id='cattle'
                                    variant="outlined"
                                    placeholder="กรอกหมายเลขโค"
                                    size='small'
                                    onChange={(e) => this.setState({ ...this.state, cattle: e.target.value })}
                                    style={{ fontSize: "18px" }}></TextField>

                            </FormControl>
                            <FormControl size="small" style={{ width: "15%", marginLeft: "10px" }}>
                                <Select
                                    variant="outlined"
                                    native
                                    value={this.state.start}
                                    onChange={(e) => this.setState({ ...this.state, start: e.target.value })}
                                    style={{ fontSize: "18px" }}
                                >
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                </Select>
                            </FormControl>
                        </Paper>
                    }
                </Paper>
                <Paper elevation={0} style={{ textAlign: "center" }} className="container" >
                    <Button variant="contained" color="primary" style={{ width: "120px", marginTop: "20px", outline: "none" }} onClick={() => this.setChart()}> ตกลง</Button>
                </Paper>
            </div>
        );
    }
}

export default Maintain;



