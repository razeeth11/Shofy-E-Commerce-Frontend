import { Grid } from "@mui/material";
import "./App.css";
import { LandingPage } from "./Component/LandingPage";
import { NavBar } from "./Component/NavBar";
import { TopPicks } from "./Component/TopPicks";

function App() {
  return (
    <Grid>
      <NavBar />
      <LandingPage />
      <TopPicks />
    </Grid>
  );
}

export default App;
