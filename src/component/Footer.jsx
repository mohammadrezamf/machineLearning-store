import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#94a3b8" }}>
      <Stack
        maxWidth="xl"
        py={5}
        direction="row"
        justifyContent="space-around"
        mt={5}
        sx={{ mx: "auto", direction: "rtl" }}
      >
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
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>ايميل</Typography>
            <Typography>mohammadrezamf2014@gamil.com</Typography>
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
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>ايميل</Typography>
            <Typography>mohammadrezamf2014@gamil.com</Typography>
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
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography>ايميل</Typography>
            <Typography>mohammadrezamf2014@gamil.com</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
