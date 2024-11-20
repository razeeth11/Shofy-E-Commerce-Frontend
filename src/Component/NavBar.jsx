import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import { Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "/LOGO.png";

export function NavBar() {
  const theme = useTheme();
  const matcheslg = useMediaQuery(theme.breakpoints.up("lg"));
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));
  const LinkList = ["Home", "Products", "Shop", "Coupons", "Blogs", "Contact"];
  const fontSizeIcon = {
    fontSize: "30px",
    color: "#666666",
    cursor: "pointer",
    "&:hover": { color: "#000000" },
  };

  return (
    <Grid
      className="flexContainerJustify"
      sx={{
        padding: matchessm ? "10px" : matchesmd ? "10px 40px" : "10px 80px",
        border: "1px solid rgba(1,15,28,.1)",
      }}
    >
      <Grid className="flexContainerBasicRow" sx={{ gap: "30px" }}>
        <Grid className="flexContainerBasicRow">
          <img src={logo} style={{ width: "40px" }} />
          <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
            Shofy.
          </Typography>
        </Grid>
        {matcheslg && (
          <Grid className="flexContainerBasicRow" sx={{ gap: "20px" }}>
            {LinkList.map((item, index) => (
              <Link
                className="flexContainerBasicRow"
                key={index}
                sx={{
                  fontSize: "16px",
                  color: "#010f1c",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#666666",
                  },
                }}
              >
                {item}
                {item != "Coupons" && <KeyboardArrowDownIcon />}
              </Link>
            ))}
          </Grid>
        )}
      </Grid>
      {!matchessm ? (
        <Grid className="flexContainerJustify" sx={{ gap: "30px" }}>
          <Grid
            className="flexContainerJustify"
            sx={{
              padding: "5px 20px",
              background: "#f8f8f8",
              border: "1px solid rgba(1,15,28,.1)",
            }}
          >
            <input
              placeholder="Search for Products..."
              type="text"
              style={{
                fontSize: "16px",
                outline: "none",
                border: "none",
                background: "#f8f8f8",
              }}
            />
            <SearchIcon sx={{ fontSize: "30px", color: "#666666" }} />
          </Grid>
          <Grid className="flexContainerBasicRow" sx={{ gap: "20px" }}>
            <SwapVertRoundedIcon sx={fontSizeIcon} />
            <FavoriteBorderRoundedIcon sx={fontSizeIcon} />
            <AddShoppingCartRoundedIcon sx={fontSizeIcon} />
          </Grid>
        </Grid>
      ) : (
        <MenuRoundedIcon sx={fontSizeIcon} />
      )}
    </Grid>
  );
}
