import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Course from "./Course";

export default function CourseList() {
  return (
    <Box
      maxWidth="lg"
      sx={{
        mx: "auto",
        border: "1px dashed #999",
        p: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        spacing={3}
        container
        sx={{
          justifyContent: "space-between",
          pr: 2,
        }}
      >
        <Grid
          item
          xs={3}
          alignItems="center"
          textAlign="center"
          justifyContent="center"
        >
          <Course />
        </Grid>
        {[1, 2, 3, 4, 5].map(() => (
          <Grid item xs={3} justifyContent="center" alignItems="center ">
            <Course />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
