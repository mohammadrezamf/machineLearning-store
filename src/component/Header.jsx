import { Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Header() {
  // const navigate = useNavigate();

  return (
    <Box
      sx={{
        // backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        width: "100%",
        boxShadow: 1,
        position: "fixed",
        // background:""
        backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
        zIndex: 10,
        height: "70px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        mb={5}
        maxWidth="xl"
        sx={{ mx: "auto", direction: "rtl", mt: 3 }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Stack sx={{ px: 3, boxSizing: "border-box" }}>
            <Typography
              sx={{
                color: "#0B132A",
                boxSizing: "border-box",

                "&:hover": {
                  color: "#F53838",
                  boxSizing: "border-box",
                },
              }}
            >
              کافه ساينس
            </Typography>
          </Stack>
        </Link>
        <Stack direction="row" sx={{ gap: 5, color: "#4F5665" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
            >
              صفحه ي اصلي
            </Typography>
          </Link>

          <Typography
            sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
          >
            مقالات
          </Typography>
          <Link to="courses" style={{ textDecoration: "none" }}>
            <Typography
              sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
            >
              دوره هاي آموزشي
            </Typography>
          </Link>

          <Typography
            sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
          >
            خبر
          </Typography>
        </Stack>
        <Link to="/sales" style={{ textDecoration: "none" }}>
          <Stack direction="row" sx={{ gap: 3 }}>
            <Typography
              sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
            >
              ثبت نام
            </Typography>
            <Typography
              sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
            >
              ورود
            </Typography>
            <Typography
              sx={{ color: "#0B132A", "&:hover": { color: "#F53838" } }}
            >
              سبد خريد
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );
}
