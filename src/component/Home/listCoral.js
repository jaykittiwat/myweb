import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Card1, Card2, Card3, Card4 } from "./card";

 export function ListCorral () {
     return(
        <Grid item xs={12} sm={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {" "}
            <Paper
              elevation={3}
              square
              style={{
                color: "#fff",
                width: "100%",
                background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
              
                minWidth: "250px",
                padding: "12px",
                fontSize: "22px"
              }}
            >
              {" "}
              จำนวนโคในฟาร์ม
            </Paper>
            <Card1 />
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Paper
              elevation={3}
              square
              style={{
                color: "#fff",
                width: "100%",
              background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
          
                minWidth: "250px",
                padding: "12px",
                fontSize: "22px"
              }}
            >
              {" "}
              จำนวนโรงเรือน
            </Paper>
            <Card2 />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: "40px" }}>
          <Grid item xs={12} md={6}>
            {" "}
            <Paper
              elevation={3}
              square
              style={{
                color: "#fff",
                width: "100%",
                background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
              
                minWidth: "250px",
                padding: "12px",
                fontSize: "22px"
              }}
            >
              {" "}
              จำนวนคอก
            </Paper>
            <Card3 />
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Paper
              elevation={3}
              square
              style={{
                color: "#fff",
                width: "100%",
                background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
            
                minWidth: "250px",
                padding: "12px",
                fontSize: "22px"
              }}
            >
              {" "}
              จำนวนฝูง
            </Paper>
            <Card4 />
          </Grid>
        </Grid>
      </Grid>
     )
 }