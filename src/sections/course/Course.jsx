/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, colors, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { shadows } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import machineLearning from "../../assets/machinelearning-b.jpg";


const ButtonStyle = styled(Button)((theme) => ({
  transition: "all 0.3s",
  boxSizing: "borderBox",
  backgroundColor: "#fff",
  color: "#000",
  // border: "0.5px solid #fff",
  fontSize: "14px",
  "&:hover": {
    // backgroundImage: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    fontSize: "14px",
    // backgroundColor: "#fff",
    // border: "0.5px solid #fff",
    color: "#000",
    boxSizing: "borderBox",
  },
}));

export default function Course() {
  const navigate = useNavigate();
  return (
    <Box
      pb={2}
      sx={{
        borderRadius: "5px",
        mx: "auto",
        boxShadow: 1,
        overflow: "hidden",
      }}
    >
      <img
        src={machineLearning}
        style={{ width: "100%", height: "200px" }}
        alt="course-machineLearning"
      />
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

        <ButtonStyle
          size="small"
          color="inherit"
          variant="contained"
          onClick={() => navigate("/course-detail")}
        >
          مشاهده
        </ButtonStyle>
      </Stack>
    </Box>
  );
}
