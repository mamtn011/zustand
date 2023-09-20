import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import useStoreImmer from "../store/store.immer";

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#C2E0FB",
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 5),
  "&:hover": {
    backgroundColor: "#CCEAF5",
  },
}));

const Immer = () => {
  const {
    apple,
    watermelon,
    mango,
    banana,
    grapes,
    coconut,
    cucumber,
    broccoli,
    tomato,
    addApple,
  } = useStoreImmer();

  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍎</Typography>
            <Typography variant="body1">Apple</Typography>
            <Typography variant="h3">{apple}</Typography>
            <PrimaryButton fullWidth onClick={addApple}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍉</Typography>
            <Typography variant="body1">Watermelon</Typography>
            <Typography variant="h3">{watermelon}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥭</Typography>
            <Typography variant="body1">Mango</Typography>
            <Typography variant="h3">{mango}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍌</Typography>
            <Typography variant="body1">Banana</Typography>
            <Typography variant="h3">{banana}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍇</Typography>
            <Typography variant="body1">Grapes</Typography>
            <Typography variant="h3">{grapes}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥥</Typography>
            <Typography variant="body1">Coconut</Typography>
            <Typography variant="h3">{coconut}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥒 </Typography>
            <Typography variant="body1">Cucumber</Typography>
            <Typography variant="h3">{cucumber}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥦</Typography>
            <Typography variant="body1">Broccoli</Typography>
            <Typography variant="h3">{broccoli}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍅 </Typography>
            <Typography variant="body1">Tomato</Typography>
            <Typography variant="h3">{tomato}</Typography>
            <PrimaryButton fullWidth>+</PrimaryButton>
            <PrimaryButton fullWidth>-</PrimaryButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Immer;
