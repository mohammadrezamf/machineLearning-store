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
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        py={3}
        mb={5}
        maxWidth="xl"
        sx={{ mx: "auto", direction: "rtl" }}
      >
        <Stack>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#0B132A" }}>کافه ساينس</Typography>
          </Link>
        </Stack>
        <Stack direction="row" sx={{ gap: 5, color: "#4F5665" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography>صفحه ي اصلي</Typography>
          </Link>

          <Typography>مقالات</Typography>
          <Link to="courses" style={{ textDecoration: "none" }}>
            <Typography>دوره هاي آموزشي</Typography>
          </Link>

          <Typography>خبر</Typography>
        </Stack>
        <Link to="/sales" style={{ textDecoration: "none" }}>
          <Stack direction="row" sx={{ gap: 3 }}>
            <Typography>ثبت نام</Typography>
            <Typography>ورود</Typography>
            <Typography>سبد خريد</Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );
}
