import { Box, Stack } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const PopularProperties = (/*{ initialInput, ...props }: any*/) => {
  const [popularProperties, setPopularProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Popular properties</span>
            <p>Popular is based on views</p>
          </Box>
          <Box className={"right"}>
            <div className="more-box">
              <Link href={"/property"}>
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>Popular Empty</Box>
          ) : (
            <Swiper
              className="popular-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
              }}>
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"popular-property-slide"}>
                    <PopularPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
        <div className="pagination-box">
          <WestIcon className={"swiper-popular-prev"} />
          <div className="swiper-popular-pagination"></div>
          <EastIcon className={"swiper-popular-next"} />
        </div>
      </Stack>
    </Stack>
  );
};

// PopularProperties.defaultProps = {
//   initialInput: [1, 2, 3, 4, 5, 6, 7],
// };
export default PopularProperties;
