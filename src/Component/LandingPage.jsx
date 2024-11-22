import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const landingPageCarousal = [
    {
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.e4537517.png&w=640&q=75",
      text: "New Arrivals 2024",
      title: "The clothing collection",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-2.e9d51783.png&w=640&q=75",
      text: "Best selling 2024",
      title: "The summer collection",
      link: "#",
    },
    {
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-3.9e7731a1.png&w=640&q=75",
      text: "Winter has arrived",
      title: "The winter collection",
      link: "#",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === landingPageCarousal.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [landingPageCarousal.length]);
  return (
    <Grid
      sx={{
        padding: {
          xs: "80px 30px 30px 30px",
          sm: "100px 20px 30px 20px",
          md: "100px 80px 0 80px",
        },
        background: "#eff1f5",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {landingPageCarousal.map((item, index) => (
          <Grid
            key={index}
            sx={{
              display: currentIndex === index ? "flex" : "none",
              flexDirection: { xs: "column", sm: "row" },
              mt: { xs: 5, sm: 0 },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              animation: "fade-in 1s",
            }}
          >
            {/* Left Content */}
            <Grid
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#010f1c",
                  textTransform: "capitalize",
                }}
              >
                {item.text}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "80px", lg: "100px" },
                  color: "#010f1c",
                  textTransform: "capitalize",
                }}
              >
                {item.title}
              </Typography>
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
                Shop Collection
              </Button>
            </Grid>

            {/* Right Content */}
            <Grid>
              <img
                src={item.img}
                alt={item.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        ))}
      </motion.div>
    </Grid>
  );
};
