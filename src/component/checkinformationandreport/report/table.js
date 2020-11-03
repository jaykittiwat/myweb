import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Tablemom from "./tableOfmom";
import Tableclaf from "./tableOfcalf";
import Tablefatten from "./tableOffatten";
import Tableinduction from "./tableOfinduction";
import Tablebreed from "./tableOfBreed";
import Tablecheckup from "./tableOfcheckup";
import Tablecalve from "./tableOfclave";
import Tableabortion from "./tableOfabortion";
import Tabletreat from "./tableOftreatment";
import { Paper,List,ListItem,ListItemText,Divider,Collapse,Grid} from "@material-ui/core";




const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  headItem: {
    color: "#fff",
    background:
      "linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)"
  },
  HeaderSetting: {
    color: "#fff",
    background:
      "linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    padding: "12px",
    fontSize: "22px",
    margin: "0px"
  },
  text: {
    fontSize: "20px"
  },
  text2: {
    fontSize: "18px"
  }
}));

export default function App(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [seletedList, setSelectedList] = React.useState(0);
  React.useEffect(() => {
  //console.log(props.posts);
  }, [props]);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const subList1 = () => {
    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => setSelectedList(3)}
          >
            <ListItemText
              primary="การบำรุง"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => setSelectedList(4)}
          >
            <ListItemText
              primary="การเหนี่ยวนำ"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => setSelectedList(5)}
          >
            <ListItemText
              primary="การผสมพันธุ์"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="div" disablePadding onClick={() => setSelectedList(6)}>
          <ListItem button className={classes.nested}>
            <ListItemText
              primary="การตรวจท้อง"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => setSelectedList(7)}
          >
            <ListItemText
              primary="การคลอด"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => setSelectedList(8)}
          >
            <ListItemText
              primary="การแท้ง"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
      </Collapse>
    );
  };
  const subList2 = () => {
    return (
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => setSelectedList(9)}
          >
            <ListItemText
              primary="ประวัติรักษาโรค"
              classes={{ primary: classes.text2 }}
            />
          </ListItem>
        </List>
        <Divider />
       
      </Collapse>
    );
  };

  return (
    <Paper square elevation={3} style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2} className={classes.root}>
          <Paper square elevation={3}>
            <Paper className={classes.HeaderSetting} elevation={3} square>
              ออกรายงาน
            </Paper>
            <List>
              <ListItem
                button
                className={classes.headItem}
                onClick={() => setSelectedList(0)}
              >
                <ListItemText
                  primary="ข้อมูลพ่อแม่โค"
                  classes={{ primary: classes.text }}
                />
              </ListItem>
              <Divider />
              <ListItem
                button
                className={classes.headItem}
                onClick={() => setSelectedList(1)}
              >
                <ListItemText
                  primary="ข้อมูลลูกโค"
                  classes={{ primary: classes.text }}
                />
              </ListItem>
              <Divider />
             
              <ListItem
                button
                onClick={handleClick}
                className={classes.headItem}
              >
                <ListItemText
                  primary="การจัดการแม่พันธุ์โค"
                  classes={{ primary: classes.text }}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {subList1()}
              <Divider />

              <ListItem
                button
                onClick={handleClick2}
                className={classes.headItem}
              >
                <ListItemText
                  primary="การรักษา"
                  classes={{ primary: classes.text }}
                />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {subList2()}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          {seletedList === 0 ? (
            <Tablemom  keydata={props.posts.keycattle} data={props.posts.datacattle} load={props.posts.loading} UID={props.posts.UID} />
          ) : seletedList === 1 ? (
            <Tableclaf  keydata={props.posts.keycalf} data={props.posts.datacalf} load={props.posts.loading} UID={props.posts.UID} />
          )  : seletedList === 3 ? (
            <Tablefatten  keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          ) : seletedList === 4 ? (
            <Tableinduction   keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          ) : seletedList === 5 ? (
            <Tablebreed keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          ) : seletedList === 6 ? (
            <Tablecheckup keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          ) : seletedList === 7 ? (
            <Tablecalve  keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          ) : seletedList === 8 ? (
            <Tableabortion  keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          ) :  (
            <Tabletreat  keydata={props.posts} data1={props.posts.datacattle}  data2={[]} load={props.posts.loading} UID={props.posts.UID} owner={props.posts.owner}/>
          )
           }
        </Grid>
      </Grid>
    </Paper>
  );
}
