import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Divider, List, Paper } from "@material-ui/core";

export  function CardFarm() {
  return (
    <div>
      <Paper
        elevation={3}
        square
        style={{
          color: "#fff",
          width: "25%",
          backgroundColor: "#ab47bc",
          minWidth: "400px",
          padding: "12px",
          fontSize: "22px"
        }}
      >
        {" "}
        ยีนดีต้อนรับ !!
      </Paper>
      <Card>
        <CardActionArea>
          <Avatar
            alt="LOGO"
            src="https://assets.brandinside.asia/uploads/2019/02/cow-farm-401394-unspx.jpg"
            style={{
              width: "150px",
              height: "150px",
              marginLeft: "10px",
              marginTop: "20px",
              boxShadow: "0px 0px 10px 2px  grey"
            }}
          />

          <CardContent style={{marginTop:"20px"}}>
            <Typography gutterBottom variant="h5" component="p">
              ชื่อฟาร์ม : กิตติวัฒน์
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Farm : KIttiwat
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              เจ้าของฟาร์ม : กิตติวัฒน์
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              ที่อยู่ : 123 หมู่12
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              เบอร์โทรติดต่อ : 0801234457
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ padding: "0" }}>
          <List style={{ width: "100%" }}>
            <Divider />
          </List>
        </CardActions>
        <CardContent style={{ textAlign: "right", padding: "0" }}>
          <Button style={{ outline: "none", fontSize: "18px" }} color="primary">
            ตั้งค่า
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
