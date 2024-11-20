import { Grid } from "@mui/material";
import "./App.css";
import { LandingPage } from "./Component/LandingPage";
import { NavBar } from "./Component/NavBar";

function App() {
  return (
    <Grid>
      <NavBar />
      <LandingPage />
    </Grid>
  );
}

export default App;
