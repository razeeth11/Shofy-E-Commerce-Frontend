import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const TopPicks = () => {
  const topPicksCategories = [
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fgg9yCwX%2Fclothing-1.png&w=640&q=75",
      text: "Clothing",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FzrdMnPd%2Fbag-5.png&w=640&q=75",
      text: "Bags",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxgPThxC%2Fshoes-1.png&w=1200&q=75",
      text: "Footwear",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fgg9yCwX%2Fclothing-1.png&w=640&q=75",
      text: "Clothing",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FzrdMnPd%2Fbag-5.png&w=640&q=75",
      text: "Bags",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxgPThxC%2Fshoes-1.png&w=1200&q=75",
      text: "Footwear",
      link: "#",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: { xs: "30px 0" },
          overflowY: "hidden",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {topPicksCategories.map((item, index) => (
          <Grid
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              background: "rgba(1,15,28,.08)",
              maxWidth: "500px",
              paddingLeft: "40px",
            }}
          >
            <Grid>
              <Typography sx={{ fontSize: "30px" }}>{item.text}</Typography>
              <Button
                sx={{
                  background: "transparent",
                  border: "1px solid #010f1c",
                  padding: "5px 15px",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                  borderRadius: 0,
                  color: "#010f1c",
                  width: "min-content",
                  whiteSpace: "nowrap",
                  mt: 2,
                  "&:hover": {
                    background: "#821f40",
                    color: "#FFFFFF",
                    border: "1px solid #821f40",
                  },
                }}
              >
                Shop Now &nbsp; <ArrowRightAltIcon sx={{ fontSize: "30px" }} />
              </Button>
            </Grid>
            <Grid>
              <img
                src={item.img}
                style={{ width: "250px", height: "230px", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};
