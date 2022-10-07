import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { faker } from "@faker-js/faker";
import { Star1 } from "iconsax-react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Stack, Typography } from "@mui/material";

export default function CarouselComment() {
  return (
    <Box sx={{ p: 3 }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // spaceBetween={10}
        slidesPerView={2}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide>
            <Stack
              sx={{
                px: 2,
                mx: 6,
                my: 2,
                mb: 3,
                py: 2,
                border: "2px dashed #999",
                borderRadius: 2,
                "&:hover": {
                  border: "2px solid #F53838",
                },
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItem: "center",
                }}
              >
                <Stack direction="row" alignItems="center" sx={{ gap: 1 }}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #999",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#777",
                    }}
                  >
                    <img
                      src={faker.image.avatar()}
                      alt=""
                      style={{
                        borderRadius: "50%",
                        width: "70px",
                        height: "70px",
                      }}
                    />
                  </Box>
                  <Typography>محمد رضا اکبري</Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ alignItem: "center" }}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    sx={{ alignItem: "center", gap: 1 }}
                  >
                    <Typography align="center">
                      {Math.floor(Math.random()* 5+1)}
                    </Typography>
                    <Star1 color="#FF8A65" variant="Bold" />
                  </Stack>
                </Stack>
              </Stack>
              <Typography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </Box>
  );
}
