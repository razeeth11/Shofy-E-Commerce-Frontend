import { Grid } from "@mui/material";
import "./App.css";
import { AllProducts } from "./Component/AllProducts";
import { LandingPage } from "./Component/LandingPage";
import { NavBar } from "./Component/NavBar";
import { ShopByPopular } from "./Component/ShopByPopular";
import { TopPicks } from "./Component/TopPicks";

function App() {
  return (
    <Grid>
      <NavBar />
      <LandingPage />
      <TopPicks />
      <ShopByPopular />
      <AllProducts />
    </Grid>
  );
}

export default App;
