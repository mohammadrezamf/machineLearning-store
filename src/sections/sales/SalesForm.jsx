import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

export default function SalesForm() {
  return (
    <Container sx={{ backgroundColor: "#999" }}>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          p: 5,
          backgroundColor: "#777",
          mx: 20,
          direction: "rtl",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ border: 1, px: 1 }}
        >
          <Stack direction="row" sx={{ gap: 1 }}>
            <Typography sx={{ borderLeft: 1, pl: 1 }}>1</Typography>
            <Typography>دوره ي آموزشي پايتون</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 1 }}>
            <Typography>قيمت</Typography>
            <Typography>23$</Typography>
            <Typography> حذف</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", px: 3, border: 1 }}
        >
          <Typography>هزينه ي کل</Typography>
          <Typography>12000T</Typography>
        </Stack>
        <Button variant="contained">
          <Typography>پرداخت</Typography>
        </Button>
      </Stack>
    </Container>
  );
}
