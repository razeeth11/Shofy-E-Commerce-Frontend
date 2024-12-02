import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { AllProductsList } from "./AllProducts";
export const TrendingProducts = () => {
  const scrollRef = useRef(null);
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
          alignItems: "start",
          gap: "30px",
          padding: { xs: "20px", lg: "0 80px" },
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#821f40",
              fontWeight: 400,
              mt: 15,
            }}
          >
            More to Discover
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              color: "#010f1c",
              fontWeight: 500,
            }}
          >
            Trending Arrivals
          </Typography>
        </Grid>
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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 7,
              gap: "40px",
            }}
          >
            <KeyboardDoubleArrowLeftRoundedIcon
              onClick={() => scrollLeft()}
              sx={{
                fontSize: "40px",
                color: "lightgrey",
                cursor: "pointer",
                "&:hover": { color: "#821f40" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "transparent",
                border: "1px solid #010f1c",
                padding: "10px 30px",
                fontSize: "14px",
                textTransform: "capitalize",
                boxShadow: "none",
                borderRadius: 0,
                color: "#010f1c",
                width: "min-content",
                whiteSpace: "nowrap",
                "&:hover": {
                  background: "#821f40",
                  color: "#FFFFFF",
                  border: "1px solid #821f40",
                },
              }}
            >
              Show All Products
            </Button>
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
      </Grid>
    </motion.div>
  );
};
