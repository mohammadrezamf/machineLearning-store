import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Course from "./Course";

export default function CourseList() {
  const courses = useSelector((state) => state.courses);
  console.log(courses);
  return (
    <Box
      maxWidth="lg"
      sx={{
        mx: "auto",
        border: "1px dashed #999",
        px: 2,
        py: 2,
        mb: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Course />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
