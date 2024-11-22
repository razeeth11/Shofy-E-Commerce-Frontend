import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const ShopByPopular = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const topPicksCategories = [
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      text: "Clothing",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FSQY6zdb%2Fshoes-5.png&w=384&q=75",
      text: "Bags",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fgg9yCwX%2Fclothing-1.png&w=384&q=75",
      text: "Footwear",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDKJr0w4%2Fclothing-9.png&w=384&q=75",
      text: "Clothing",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FGvXjssF%2Fbag-1.png&w=384&q=75",
      text: "Bags",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FThxGY6N%2Fclothing-13.png&w=384&q=75",
      text: "Clothing",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FSQY6zdb%2Fshoes-5.png&w=384&q=75",
      text: "Bags",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fgg9yCwX%2Fclothing-1.png&w=384&q=75",
      text: "Footwear",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDKJr0w4%2Fclothing-9.png&w=384&q=75",
      text: "Clothing",
      cost: "90",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FGvXjssF%2Fbag-1.png&w=384&q=75",
      text: "Bags",
      cost: "90",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#821f40",
            fontWeight: 400,
            textAlign: "center",
            mt: 15,
          }}
        >
          Shop by Popular
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            color: "#010f1c",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Popular on the Shofy store.
        </Typography>
        <Grid
          sx={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <Grid
            ref={scrollRef}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              mt: 5,
              overflowY: "hidden",
              whiteSpace: "nowrap",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {topPicksCategories.map((item, index) => (
              <Box
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                key={index}
                sx={{
                  backgroundImage: `url("${item.img}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "220px",
                  height: "270px",
                  flexShrink: 0,
                  backgroundColor: "#eff1f5",
                }}
              >
                <Box
                  sx={{
                    visibility: hoverIndex == index ? "visible" : "hidden",
                    opacity: hoverIndex === index ? 1 : 0,
                    transform:
                      hoverIndex === index
                        ? "translateY(0)"
                        : "translateY(20px)",
                    transition: "opacity 0.3s ease, transform 0.5s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                    background: "white",
                    margin: "20px",
                    height: "230px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500, mt: 7 }}>
                    $ {item.cost}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                  <Button
                    sx={{
                      background: "transparent",
                      border: "1px solid #010f1c",
                      padding: "5px 20px",
                      fontSize: "12px",
                      textTransform: "capitalize",
                      boxShadow: "none",
                      borderRadius: 0,
                      color: "#010f1c",
                      width: "min-content",
                      whiteSpace: "nowrap",
                      mt: 3,
                      "&:hover": {
                        background: "#821f40",
                        color: "#FFFFFF",
                        border: "1px solid #821f40",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
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
      </Grid>
    </motion.div>
  );
};
