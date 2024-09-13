import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import Overview from "scenes/overview";
import Calendar from "scenes/calendar";
import Login from "scenes/login";
import Profile from "scenes/profile";
import ApplicationForm from "scenes/applicationForm";

import Meeting from "scenes/meetings";
import TextEditor from "scenes/TextEditor";
import Notifications from "scenes/notification";
import Nlp from "scenes/nlp";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));
  const isAuth = Boolean(useSelector((state) => state.global.token));
  const userId = useSelector((state) => state.global.userId);
  const caseId = useSelector((state) => state.global.caseId);
  const user = useSelector((state) => state.global.user);
  console.log("user", user);
  console.log("userId", userId);
  console.log("caseId", caseId);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/profile" element={<Profile userId={userId} />} />
              <Route path="/applicationForm" element={<ApplicationForm />} />
              
              <Route path="/meetings" element={<Meeting />} />
              <Route path="/texteditor" element={<TextEditor />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/nlp" element={<Nlp />} />
              <Route
                path="/signout"
                element={<Navigate to="/login" replace />}
              />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
