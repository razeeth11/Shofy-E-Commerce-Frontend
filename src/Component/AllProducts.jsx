import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Grid, Link, Rating, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export const AllProducts = () => {
  const [productSelect, setProductSelect] = useState(0);
  return (
    <Grid>
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
            mt: 10,
            padding: { xs: "20px", lg: "0 100px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "#821f40",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            All Products Shop
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              color: "#010f1c",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Customer Favorite Style Product
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              mt: 5,
              flexWrap: "wrap",
            }}
          >
            {["All Products", "Shoes", "Clothing", "Bags", "Footwear"].map(
              (item, index) => (
                <Link
                  onClick={() => setProductSelect(index)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: { xs: "14px", sm: "18px" },
                    color: productSelect == index ? "#821f40" : "#a0a2a4",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#821f40",
                    },
                  }}
                  key={index}
                >
                  <BlurOnIcon />
                  {item}
                </Link>
              )
            )}
          </Box>
          <Grid
            sx={{
              display: "flex",
              justifyContent: { xs: "space-around" },
              gap: "25px",
              flexWrap: "wrap",
              mt: 10,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    background: "#eff0ed",
                    width: "300px",
                    height: "330px",
                  }}
                  className="image-container"
                >
                  <img
                    style={{
                      margin: "10px auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      objectFit: "cover",
                      width: "180px",
                      height: "300px",
                    }}
                    src={
                      "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-2.e9d51783.png&w=640&q=75"
                    }
                  />
                </Box>
                <Box sx={{ padding: "15px 15px 15px 5px" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#a0a2a4",
                      textTransform: "capitalize",
                    }}
                  >
                    whitetails,Clothing,Womens
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#666666",
                      fontWeight: 500,
                      textTransform: "capitalize",
                    }}
                  >
                    Whitetails Womens Dress
                  </Typography>
                  <Box>
                    <Rating name="read-only" value={3.5} readOnly />
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      $80.00
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#a0a2a4",
                        fontWeight: 400,
                        textDecoration: "line-through",
                      }}
                    >
                      $76.00
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </motion.div>
    </Grid>
  );
};
