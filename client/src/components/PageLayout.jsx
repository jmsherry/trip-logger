import React, {useContext} from "react";
import Container from "@mui/material/Container";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Outlet } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import Header from "./Header";

import { UIContext } from './../contexts/ui.context'

function PageLayout() {
  const { snackbar: { open, type, message }, resetMessage } = useContext(UIContext)
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={resetMessage}
        message={message}
      >
        <Alert onClose={resetMessage} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default PageLayout;
