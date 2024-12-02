import { Grid } from "@mui/material";
import "./App.css";
import { AllProducts } from "./Component/AllProducts";
import { LandingPage } from "./Component/LandingPage";
import { NavBar } from "./Component/NavBar";
import { ReviewSection } from "./Component/ReviewsSection";
import { ShopByPopular } from "./Component/ShopByPopular";
import { TopPicks } from "./Component/TopPicks";
import { TrendingProducts } from "./Component/TrendingProducts";
import { WeekBestSeller } from "./Component/WeekBestSeller";

function App() {
  return (
    <Grid>
      <NavBar />
      <LandingPage />
      <TopPicks />
      <ShopByPopular />
      <AllProducts />
      <WeekBestSeller />
      <TrendingProducts />
      <ReviewSection />
    </Grid>
  );
}

export default App;
