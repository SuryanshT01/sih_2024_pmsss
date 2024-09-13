import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { send } from "utils/Push";

const Notifications = () => {
  return (
    <div>
      <br />
      <Alert severity="info">
        <AlertTitle>Application Filed</AlertTitle>
        Your Application has been filed, you can now check it's current status in Overview — <strong>check it out!</strong>
      </Alert>
      <br />
      {/* <Alert severity="info">
        <AlertTitle>Pre-Hearing appointment</AlertTitle>
        Your appointment is set due 29th September 2023 —{" "}
        <strong>check it out!</strong>
      </Alert> */}
      <br />
    </div>
  );
};

export default Notifications;
