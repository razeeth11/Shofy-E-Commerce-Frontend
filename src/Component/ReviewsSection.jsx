import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Box, Button, Card, Grid, Rating, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export const ReviewSection = () => {
  const [reviewData, setReviewData] = useState([
    {
      customer: "Johny Shelby",
      role: "Developer",
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.3e37bf45.jpg&w=640&q=75",
      review:
        "Thanks for all your efforts and teamwork over the last several months!  Thank you so much",
      rating: 4,
    },
    {
      customer: "Thomas Shelby",
      role: "Designer",
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.3e37bf45.jpg&w=640&q=75",
      review:
        "Very happy with our choice to take our daughter to Brave care. The entire team was great Thank you",
      rating: 3,
    },
    {
      customer: "Johny Shelby",
      role: "Developer",
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.3e37bf45.jpg&w=640&q=75",
      review:
        "Thanks for all your efforts and teamwork over the last several months!  Thank you so much",
      rating: 2,
    },
    {
      customer: "Johny Shelby",
      role: "Developer",
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.3e37bf45.jpg&w=640&q=75",
      review:
        "Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
      rating: 5,
    },
    {
      customer: "Johny Shelby",
      role: "Developer",
      img: "https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.3e37bf45.jpg&w=640&q=75",
      review:
        "Thanks for all your efforts and teamwork over the last several months!  Thank you so much",
      rating: 3,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Grid
        sx={{
          background: "#eff1f5",
          position: "relative",
          height: "600px",
          mt: 10,
        }}
      >
        <Button
          sx={{
            position: "absolute",
            top: { xs: "90%", md: "50%" },
            left: 10,
          }}
          onClick={handlePrevious}
        >
          <ArrowBackRoundedIcon
            sx={{
              background: "white",
              fontSize: { xs: "20px", md: "40px" },
              color: "#666666",
              padding: "10px",
              borderRadius: "50%",
            }}
          />
        </Button>
        <Button
          sx={{
            position: "absolute",
            top: { xs: "90%", md: "50%" },
            right: 10,
          }}
          onClick={handleNext}
        >
          <ArrowForwardRoundedIcon
            sx={{
              background: "white",
              fontSize: { xs: "20px", md: "40px" },
              color: "#666666",
              padding: "10px",
              borderRadius: "50%",
            }}
          />
        </Button>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
            padding: "100px 20px",
            mt: 5,
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
            The Review Are In
          </Typography>
          <Box>
            <Rating
              name="read-only"
              value={reviewData[currentIndex].rating}
              readOnly
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "30px" },
              fontWeight: 400,
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            {reviewData[currentIndex].review}
          </Typography>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "min-content",
              whiteSpace: "nowrap",
              padding: "10px",
              borderRadius: "50px",
            }}
          >
            <img
              src={reviewData[currentIndex].img}
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <Typography sx={{ fontSize: "14px", mr: 2 }}>
              {reviewData[currentIndex].customer}
              <Typography sx={{ fontSize: "14px", mr: 2 }}>
                {reviewData[currentIndex].role}
              </Typography>
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Gurantee />
    </motion.div>
  );
};

const Gurantee = () => {
  const gurantee = [
    {
      title: "Free Delivery",
      text: "Orders from all item",
    },
    {
      title: "Return & Refund",
      text: "Money back guarantee",
    },
    {
      title: "Member Discount",
      text: "Onevery order over $140.00",
    },
    {
      title: "Support 24/7",
      text: "Contact us 24 hours a day",
    },
  ];

  const iconStyle = {
    fontSize: "35px",
  };

  return (
    <Grid
      sx={{
        border: "1px solid #e9eaec",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "start", md: "center" },
        gap: "40px",
        padding: "20px",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "50px auto",
      }}
    >
      {gurantee.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box>
            {index == 0 ? (
              <LocalShippingOutlinedIcon sx={iconStyle} />
            ) : index == 1 ? (
              <AttachMoneyOutlinedIcon sx={iconStyle} />
            ) : index == 2 ? (
              <PercentOutlinedIcon sx={iconStyle} />
            ) : (
              <SupportAgentOutlinedIcon sx={iconStyle} />
            )}
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
            <Typography sx={{ color: "#666666" }}>{item.text}</Typography>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};
