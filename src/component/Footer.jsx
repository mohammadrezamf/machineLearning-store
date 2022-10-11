import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import backgroundFooterImage from "../assets/footer.png";
import foot from "../assets/foot.png";

export default function Footer() {
  return (
    <Box
      sx={{
        // // backgroundImage: URL(
        // //   `https://library.kissclipart.com/20181204/ufq/kissclipart-onda-png-clipart-wave-14a69e164f78a8bd.png`
        // // ),
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundImage:""
        pt: 0.5,
        borderRadius: " 10% 10% 0 0",
        // backgroundImage: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
        backgroundImage: " linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)",
      }}
    >
      <Stack
        maxWidth="xl"
        py={3}
        direction="row"
        justifyContent="space-around"
        mt={5}
        sx={{ mx: "auto", direction: "rtl" }}
      >
        <Stack spacing={2}>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>قوانين</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>ايميل</Typography>
            <Typography>mohammadrezamf2014@gamil.com</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>تلفن</Typography>
            <Typography>09375332212</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}></Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>ليست کلاس ها</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>سوالات متداول</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>تماس با ما </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>تلفن</Typography>
            <Typography>09375332212</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>ايميل</Typography>
            <Typography>mohammadrezamf2014@gamil.com</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>تلفن</Typography>
            <Typography>09375332212</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
