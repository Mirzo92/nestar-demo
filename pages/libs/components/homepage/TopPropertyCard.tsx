import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TopPropertyCard = () => {
  return (
    <Stack className="top-card-box">
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/types/apartment.webp")`,
        }}>
        <div>$550000</div>
      </Box>
      <Box className={"info"}>
        <strong className="title">Winner Apartment</strong>
        <p className="desc">Seoul City Center 50</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 mv</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">220</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon sx={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">300</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TopPropertyCard;