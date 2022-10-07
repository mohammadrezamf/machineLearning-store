import { Button, Divider, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import courseImg from "../../assets/1.png";
export default function CourseDetail() {
  return (
    <Container sx={{ direction: "rtl" }}>
      <Stack
        justifyContent="space-between"
        direction="row"
        sx={{
          direction: "rtl",
          backgroundColor: "#c4ffe1",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Stack spacing={5} sx={{ p: 3 }}>
          <Typography variant="h4">آموزش پایتون</Typography>
          <Stack spacing={2}>
            <Typography>
              تایپ‌اسکریپت نمی‌تونه حدس بزنه که فریم‌ورک چه کاری تایپ‌اسکریپت
              نمی‌تونه حدس بزنه که فریم‌ورک چه کاری تایپ‌اسکریپت نمی‌تونه حدس
              بزنه که فریم‌ورک چه کاری
            </Typography>
            <Typography variant="body1">مدرس احمدی</Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography>مدت زمان دوره :3ساعت</Typography>
              <Button sx={{ ml: 5, px: 5, py: 1 }} variant="contained">
                <Typography>خرید دوره </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <img src={courseImg} alt="" style={{ width: " 550px" }} />
        </Stack>
      </Stack>
      <Stack
        mt={20}
        direction="row"
        sx={{
          direction: "rtl",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={2} sx={{ width: "80%" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
            <Stack
              key={index}
              direction="row"
              sx={{
                justifyContent: "space-between",
                borderBottom: 1,
                boxShadow: 3,

                p: 1,
                borderRadius: 5,
                backgroundColor: "#a9c9c5",
              }}
            >
              <Stack direction="row" sx={{ gap: 2 }}>
                <Typography sx={{ borderLeft: 1, pl: 1 }}>1</Typography>
                <Typography>آموزش ئايتون</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", gap: 1, color: "#000", pl: 1 }}
              >
                <Typography variant="body1">دانلود</Typography>
                <Typography variant="caption">20:15</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={8} sx={{ width: "50%" }}>
          <Stack
            spacing={2}
            sx={{
              p: 3,
              border: "1px dashed #999",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" align="center" sx={{ mb: 1 }}>
              اطلاعات دوره{" "}
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>زمان مورد نياز براي گدراندن دوره </Typography>
                <Typography>40 ساعت</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography>زمان مورد نياز براي گدراندن دوره </Typography>
                <Typography>40 ساعت</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography>زمان مورد نياز براي گدراندن دوره </Typography>
                <Typography>40 ساعت</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography>زمان مورد نياز براي گدراندن دوره </Typography>
                <Typography>40 ساعت</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              // backgroundColor: "#777",
              p: 1,

              pr: 2,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ borderBottom: "1px dashed #999", pb: 2 }}
            >
              درباره ي استاد
            </Typography>
            <Typography>
              دکتر محمدامین فضلی هیئت‌علمی دانشکده کامپیوتر دانشگاه صنعتی شریف،
              محقق و مهندس نرم‌افزار و برنامه‌نویس در مرکز راهکارهای اطلاعاتی
              هوشمند دانشگاه صنعتی شریف هستند. ایشان و همکارانشان در این مرکز بر
              روی پروژه‌های مهندسی نرم‌افزار و برنامه‌نویسی مقیاس بزرگ در زمینه
              توسعه تکنولوژی‌های ارزش‌آفرین در صنایع مختلف فعالیت دارند.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={2} sx={{ direction: "rtl", mt: 5 }}>
        <Typography mr={1} variant="h6">
          نظرات
        </Typography>
        <Stack spacing={3} sx={{ width: "80%" }}>
          {[1, 2, 3].map((item, index) => (
            <Box
              key={index}
              sx={{
                boxShadow: 3,
                p: 2,
                background: "#c4ffe1",
                
                borderRadius: 2,
              }}
            >
              <Typography mb={3}>a</Typography>
              <Typography>
                بیان و تسلط استاده دوره خوب و عالی هست اما ضعفی که دوره داره این
                هست در واقع کلاس انلاین ضبط شده شریف هست و کلا دانشجوهای کلاس
                فقط درباره زبان C C++ اطلاع دارن و استاده دوره هم مجبوره همه چیز
                رو به این دو زبان ارجاع بده. تا جایی که خیلی از مفاهیم بدلیل
                تشابه با زبان c و C++ کلا skip میشه!!!! این موضوع باعث شده هر
                جلسه از دوره پیچیده تر و طولانی تر بشه. اصولا دوره هایی که از
                روی کلاس ضبط شدن اصلا مناسب اموزش انلاین نیستن چراکه استاد
                مجبوره وقت کلاس رو مطابق با جدول اموزشی دانشگاه پر کنه و این وسط
                اموزش خیلی به حاشیه میره. من این دوره رو با دوره پایتون اقای
                جادی مقایسه کردم.
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack spacing={2} sx={{ direction: "rtl", mt: 10, width: "80%" }}>
        <Typography mr={1} variant="h6">
          سوالات متداول
        </Typography>
        {[1, 2, 3].map((item, index) => (
          <Stack key={index} spacing={2} sx={{ boxShadow: 5, p: 2 }}>
            <Typography>آیا ممکن است که درسی ناقص ضبط شده باشد؟</Typography>
            <Divider />
            <Box
              sx={{
                boxShadow: 2,
                backgroundColor: "#c4ffe1",
                py: 2,
                px: 1,
                borderRadius: 1,
              }}
            >
              <Typography>
                ما همواره تلاش کرده­‌ایم که دروس را به طور کامل ضبط نماییم و در
                اختیار شما دوستان قرار دهیم. اما گاهی برخی ناهماهنگی ها سبب می
                شود که یک یا تعدادی از جلسات یک درس ضبط نشود. توضیح این گونه
                نواقص در توضیح درس­ ها آمده است.
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
