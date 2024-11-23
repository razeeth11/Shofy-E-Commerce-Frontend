import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { AllProductsList } from "./AllProducts";

export const WeekBestSeller = () => {
  const theme = useTheme();
  const matches1000 = useMediaQuery(theme.breakpoints.down(1000));
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };
  const [allProductList, setAllProductList] = useState([
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      category: "whitetails,Clothing,Womens",
      name: "Whitetails Womens Dress",
      cost: "90",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: "20px", lg: "0 80px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "#821f40",
            fontWeight: 400,
            mt: 15,
          }}
        >
          Best Seller This Week’s
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            color: "#010f1c",
            fontWeight: 500,
          }}
        >
          This Weeks Featured
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexDirection: matches1000 && "column",
            alignItems: "center",
            gap: "40px",
            mt: 5,
          }}
        >
          <Grid
            sx={{
              maxWidth: "90vw",
              overflowX: "hidden",
            }}
          >
            <Grid
              ref={scrollRef}
              sx={{
                display: "flex",
                justifyContent: { xs: "space-around" },
                gap: "20px",
                width: matches1000 ? "100%" : "625px",
                margin: "0 auto",
                overflowX: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <AllProductsList productList={allProductList} />
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "start", mt: 3 }}>
              <KeyboardDoubleArrowLeftRoundedIcon
                onClick={() => scrollLeft()}
                sx={{
                  fontSize: "40px",
                  color: "lightgrey",
                  cursor: "pointer",
                  "&:hover": { color: "#821f40" },
                }}
              />
              <KeyboardDoubleArrowRightRoundedIcon
                onClick={() => scrollRight()}
                sx={{
                  fontSize: "40px",
                  color: "lightgrey",
                  cursor: "pointer",
                  "&:hover": { color: "#821f40" },
                }}
              />
            </Grid>
          </Grid>
          <Grid sx={{ width: "350px", position: "relative" }}>
            <img
              src="https://shofy-client.vercel.app/_next/static/media/trending-banner.0fa1fee7.jpg"
              style={{ width: "100%" }}
            />
            <Box sx={{ position: "absolute", bottom: "30px", margin: "40px" }}>
              <Typography
                sx={{ fontSize: "32px", fontWeight: 600, color: "white" }}
              >
                Short Sleeve Tunic Tops Casual Swing
              </Typography>
              <Button
                sx={{
                  background: "transparent",
                  border: "1px solid white",
                  padding: "10px 30px",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                  borderRadius: 0,
                  color: "white",
                  width: "min-content",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    background: "#821f40",
                    color: "#FFFFFF",
                    border: "1px solid #821f40",
                  },
                }}
              >
                Explore More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};
