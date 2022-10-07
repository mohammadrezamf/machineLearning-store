import { Box, Button, colors, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { shadows } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../../assets/1.png";
export default function Course() {
  return (
    <Box
      pb={2}
      sx={{
        borderRadius: "5px",
        mx: "auto",
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <img src={courseImg} style={{ width: "300px" }} />
      <Stack spacing={2} sx={{ px: 2, pt: 3 }}>
        <Typography color="#000" variant="h5" sx={{ textAlign: "right" }}>
          آموزش پایتون
        </Typography>
        <Typography
          color="#000"
          variant="body2"
          sx={{ textAlign: "right", pb: 5 }}
        >
          در این اموزش شما با موارد مورد نیاز برای ماشین لرنینگ آشنا میشوید
        </Typography>

        <Button
          size="small"
          color="inherit"
          variant="contained"
          sx={{
            backgroundColor: "#1f2937",
          }}
        >
          <Link to="/course-detail" style={{ textDecoration: "none" }}>
            <Typography variant="h6" color="#fff">
              مشاهده
            </Typography>
          </Link>
        </Button>
      </Stack>
    </Box>
  );
}
