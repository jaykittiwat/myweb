import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Appointments,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  Resources,
  AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import {  withStyles, createStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { fade } from "@material-ui/core/styles/colorManipulator";

import classNames from "clsx";

const appointments = [
  {
    title: "บำรุงหลังคลอด",
    startDate: new Date(2020, 8, 1, 0, 0),
    endDate: new Date(2020, 8, 1, 23, 59),
    location: "type 1"
  },
  {
    title: "เหนี่ยวนำ",
    startDate: new Date(2020, 8, 2, 0),
    endDate: new Date(2020, 8, 2, 24),
    location: "type 1"
  },
  {
    title: "ผสมพันธุ์",
    startDate: new Date(2020, 8, 3, 0),
    endDate: new Date(2020, 8, 3, 24),
    location: "type 1"
  },
  {
    title: "ตรวจท้อง",
    startDate: new Date(2020, 8, 4, 0),
    endDate: new Date(2020, 8, 4, 24),
    location: "type 1"
  },
  {
    title: "วันคลอด",
    startDate: new Date(2020, 8, 6, 0),
    endDate: new Date(2020, 8, 6, 24),
    location: "type 1"
  },
  {
    title: "รักษา",
    startDate: new Date(2020, 8, 6, 0),
    endDate: new Date(2020, 8, 6, 23.59),
    location: "type 1"
  }
];

const resources = [
  {
    fieldName: "location",
    title: "Location",
    instances: [{ id: "type 1", text: "วันนี้", color: "#304ffe" }]
  }
];

const styles = Theme =>
  createStyles({
    appointment: {
      borderRadius: 3,
      borderBottom: 0
    },
    weekEndCell: {
      backgroundColor: fade(Theme.palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: fade(Theme.palette.action.disabledBackground, 0.04)
      },
      "&:focus": {
        backgroundColor: fade(Theme.palette.action.disabledBackground, 0.04)
      }
    },
    weekEndDayScaleCell: {
      zIndex:0,
      backgroundColor: fade(Theme.palette.action.disabledBackground, 0.2)
    },
    text: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    content: {
      opacity: 0.7
    },
    container: {
      width: "100%",
      lineHeight: 1.2,
      height: "100%",
      fontSize: "16px"
    }
  });

const isWeekEnd = date => date.getDay() === 0 || date.getDay() === 6;

const DayScaleCell = withStyles(styles)(
  ({ startDate, classes, ...restProps }) => (
    <MonthView.DayScaleCell
      className={classNames({
        [classes.weekEndDayScaleCell]: isWeekEnd(startDate)
      })}
      startDate={startDate}
      {...restProps}
    />
  )
);


const Appointment = withStyles(styles)(({ classes, data, ...restProps }) => (
  <Appointments.Appointment {...restProps} data={data} />
));
const AppointmentContent = withStyles(styles, { name: "AppointmentContent" })(
  ({
    classes,
    data,
    ...restProps
    // #FOLD_BLOCK
  }) => {
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{data.title}</div>
        </div>
      </Appointments.AppointmentContent>
    );
  }
);


export default function CalenDemo() {
  return (
    <Paper square  style={{marginTop:"20px"}}>
      <Paper
        elevation={3}
        style={{
          margin: "0",
          padding: "10px",
          fontSize: "22px",
          color: "#fff",
          background: "linear-gradient(90deg, rgba(48,79,254,1) 0%, rgba(69,97,255,1) 50%, rgba(92,116,255,1) 100%)"
        }}
        square
      >
        ปฎิทินการดำเนินงาน
      </Paper>
      <Paper  square>
        <Scheduler data={appointments}>
          <ViewState />
          <MonthView dayScaleCellComponent={DayScaleCell} />
          <Appointments
          
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Resources data={resources} />
          <AppointmentTooltip showCloseButton />
          <Toolbar />
          <DateNavigator />
          <TodayButton messages={{today:"วันนี้"}}/>
        </Scheduler>
      </Paper>
    </Paper>
  );
}