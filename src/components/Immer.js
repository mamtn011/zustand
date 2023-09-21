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
    // apple and watermelon is done using slice pattern..
    apple,
    addApple,
    removeApple,
    watermelon,
    addWatermelon,
    removeWatermelon,

    // mango, banana, broccoli, tomato is done using immer
    // destructured from nested object
    count: {
      fruits: { mango, banana },
      vagetables: { broccoli, tomato },
    },
    addMango,
    removeMango,
    addBanana,
    removeBanana,
    addBroccoli,
    removeBroccoli,
    addTomato,
    removeTomato,

    grapes,
    addGrapes,
    removeGrapes,

    coconut,
    addCoconut,
    removeCoconut,

    cucumber,
    addCucumber,
    removeCucumber,
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
            <PrimaryButton fullWidth onClick={removeApple}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍉</Typography>
            <Typography variant="body1">Watermelon</Typography>
            <Typography variant="h3">{watermelon}</Typography>
            <PrimaryButton fullWidth onClick={addWatermelon}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeWatermelon}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥭</Typography>
            <Typography variant="body1">Mango</Typography>
            <Typography variant="h3">{mango}</Typography>
            <PrimaryButton fullWidth onClick={addMango}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeMango}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍌</Typography>
            <Typography variant="body1">Banana</Typography>
            <Typography variant="h3">{banana}</Typography>
            <PrimaryButton fullWidth onClick={addBanana}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeBanana}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥦</Typography>
            <Typography variant="body1">Broccoli</Typography>
            <Typography variant="h3">{broccoli}</Typography>
            <PrimaryButton fullWidth onClick={addBroccoli}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeBroccoli}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍅 </Typography>
            <Typography variant="body1">Tomato</Typography>
            <Typography variant="h3">{tomato}</Typography>
            <PrimaryButton fullWidth onClick={addTomato}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeTomato}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🍇</Typography>
            <Typography variant="body1">Grapes</Typography>
            <Typography variant="h3">{grapes}</Typography>
            <PrimaryButton fullWidth onClick={addGrapes}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeGrapes}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥥</Typography>
            <Typography variant="body1">Coconut</Typography>
            <Typography variant="h3">{coconut}</Typography>
            <PrimaryButton fullWidth onClick={addCoconut}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeCoconut}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>

        <Grid item sm={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">🥒 </Typography>
            <Typography variant="body1">Cucumber</Typography>
            <Typography variant="h3">{cucumber}</Typography>
            <PrimaryButton fullWidth onClick={addCucumber}>
              +
            </PrimaryButton>
            <PrimaryButton fullWidth onClick={removeCucumber}>
              -
            </PrimaryButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Immer;
