import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

// Theme
import theme from "./theme";

// Layout
import PageLayout from "./components/PageLayout";
// import ErrorBoundary from "./components/ErrorBoundary";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Data Contexts
// import { CarsProvider } from "./contexts/car.context";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          {/* <CarsProvider> */}
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                {/* <Route path="add" element={<AddCar />} />
                <Route path="update/:id" element={<UpdateCar />} /> */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          {/* </CarsProvider> */}
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;