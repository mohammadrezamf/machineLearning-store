import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Carousel from "./Carousel.jsx";
import newsImg from "../../assets/landingpicsection1.png";
import roadMapVector from "../../assets/roadmapvectore2.png";
import courseVectorWoman from "../../assets/courseWomanVector.png";
import CarouselComment from "./CarouselComment.jsx";
const Arr = [
  {
    id: 1,
    img: "https://cafetadris.com/build/app/images/home-page/easy-access.svg",
    title: "دسترسی آسان",
    description:
      "در هر نقطه‌ی جغرافیایی فقط با اینترنت پایدار سر کلاس حاضر شوید.",
  },
  {
    id: 2,
    img: "https://cafetadris.com/build/app/images/home-page/interactive-teaching.svg",
    title: "تدریس تعاملی",
    description:
      "به‌صورت زنده پرسش‌وپاسخ داشته باشید و انواع فایل را به اشتراک بگذارید.",
  },

  {
    id: 3,
    img: "https://cafetadris.com/build/app/images/home-page/best-teachers.svg",
    title: "بهترین استادان",
    description:
      "بدون طی مسافت و هزینه رفت‌وآمد با بهترین استادان کلاس برگزار کنید.",
  },
  {
    id: 4,
    img: "https://cafetadris.com/build/app/images/home-page/easy-access.svg",
    title: "پشتيباني رايگان",
    description: "هر جا هستید، از ۸ صبح تا ۸ شب پشتیبانی کامل داشته باشید.",
  },
  {
    id: 5,
    img: "https://cafetadris.com/build/app/images/home-page/half-price-internet.svg",
    title: "اینترنت نیم‌بها",
    description: "برای آموزش مجازی فقط نیمی از بهای اینترنت مصرفی را بپردازید.",
  },
  {
    id: 6,
    img: "https://cafetadris.com/build/app/images/home-page/experience.svg",
    title: "۱۰۰٬۰۰۰ ساعت تجربه",
    description:
      "از تجربه بیش از ۱۰۰٬۰۰۰ ساعت کلاس آنلاین و وبینار استفاده کنید.",
  },
];
// styles
const ButtonStyle = styled(Button)((theme) => ({
  // -Webkit-Box-Shadow:" 0px 15px 23px 12px #FCCCCC",
  boxShadow: "0px 12px 23px 5px #FCCCCC",
  transition: "all 0.3s",
  backgroundColor: "#F53838",
  boxSizing: "borderBox",
  "&:hover": {
    // backgroundImage: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    backgroundColor: "#fff",
    boxShadow: "0px 12px 23px 5px #FCCCCC",
    border: "0.5px solid #F53838",
    color: "#000",
    boxSizing: "borderBox",
  },
}));

export default function Landing() {
  return (
    <>
      <Container sx={{}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ direction: "rtl" }}
        >
          <Stack>
            <Typography variant="h4" sx={{ mb: 2 }}>
              يادگيري ماشين همراه يک فنجان قهوه
            </Typography>
            <Typography variant="body2" sx={{ mb: 4 }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </Typography>
            <ButtonStyle
              sx={{ width: "35%", boxSizing: "none", mt: 1 }}
              variant="contained"
            >
              شروع کن
            </ButtonStyle>
          </Stack>
          <Stack>
            <img src={newsImg} alt="" style={{ width: "550px" }} />
          </Stack>
        </Stack>
        <Stack></Stack>
      </Container>
      {/* ----------------- Information ------------------------- */}
      <Box sx={{ backgroundColor: "#fff", mt: 8, py: 5, direction: "rtl" }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Arr.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Stack justifyContent="center" spacing={1}>
                  <Box sx={{ mx: "auto" }}>
                    <img src={item.img} alt="" style={{ width: "50px" }} />
                  </Box>

                  <Typography align="center" variant="h6">
                    {item.title}
                  </Typography>
                  <Typography align="center" sx={{ color: "#5b5b5b" }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/*=================== section 1 to 4 ============== */}
      <Container sx={{ direction: "rtl" }}>
        <Stack sx={{ px: 2 }}>
          {/* ================ section1 ============== */}
          <Stack
            direction="row"
            sx={{
              // backgroundColor: "#999",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <Stack
              sx={{
                // backgroundColor: "#777",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" align="center">
                نقشه راه
              </Typography>
              <Typography
                align="center"
                sx={{ width: "80%", mx: "auto", mt: 3 }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </Typography>
            </Stack>
            <Box sx={{ width: "400px" }}>
              <img src={roadMapVector} alt="" style={{ width: "400px" }} />
            </Box>
          </Stack>
          {/* ======================section2======================== */}
          <Stack
            direction="row"
            sx={{
              // backgroundColor: "#999",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <Box sx={{ width: "400px" }}>
              <img src={courseVectorWoman} alt="" style={{ width: "400px" }} />
            </Box>
            <Stack
              sx={{
                // backgroundColor: "#777",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" align="center">
                دوره هاي آموزشي
              </Typography>
              <Typography
                align="center"
                sx={{ width: "80%", mx: "auto", mt: 3 }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </Typography>
            </Stack>
          </Stack>
          {/* ================ section 3 ===================== */}
          {/* <Stack
            direction="row"
            sx={{
              // backgroundColor: "#999",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <Stack
              sx={{
                // backgroundColor: "#777",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" align="center">
                نقشه راه
              </Typography>
              <Typography
                align="center"
                sx={{ width: "80%", mx: "auto", mt: 3 }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </Typography>
            </Stack>
            <Box sx={{ width: "400px" }}>
              <img src={roadMapVector} alt="" style={{ width: "400px" }} />
            </Box>
          </Stack> */}
          {/* ======================section 4======================== */}
          {/* <Stack
            direction="row"
            sx={{
              // backgroundColor: "#999",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <Box sx={{ width: "400px" }}>
              <img src={courseVectorWoman} alt="" style={{ width: "400px" }} />
            </Box>
            <Stack
              sx={{
                // backgroundColor: "#777",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" align="center">
                نقشه راه
              </Typography>
              <Typography
                align="center"
                sx={{ width: "80%", mx: "auto", mt: 3 }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </Typography>
            </Stack>
          </Stack> */}
        </Stack>
        {/* --------------  news  ----------- */}
        <Stack>
          <Typography align="center" variant="h5">
            نظرات کاربران
          </Typography>
          <Divider />
          <Box>
            <CarouselComment />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
