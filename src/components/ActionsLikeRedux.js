import { Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import useStoreRedux from "../store/store.count.redux";
import { types } from "../store/store.count.redux";
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#C2E0FB",
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 5),
  "&:hover": {
    backgroundColor: "#CCEAF5",
  },
}));

const ActionsLikeRedux = (props) => {
  const { count, dispatch } = useStoreRedux();
  return (
    <Container sx={containerStyle}>
      <Typography>{count}</Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={() => dispatch({ type: types.increase })}>
            +
          </PrimaryButton>
          <PrimaryButton
            onClick={() => dispatch({ type: types.increaseBy, payload: 10 })}
          >
            increase by 10
          </PrimaryButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={() => dispatch({ type: types.decrease })}>
            -
          </PrimaryButton>
          <PrimaryButton
            onClick={() => dispatch({ type: types.decreaseBy, payload: 10 })}
          >
            decrease by 10
          </PrimaryButton>
        </Stack>
        <PrimaryButton onClick={() => dispatch({ type: types.reset })}>
          reset counter
        </PrimaryButton>
      </Stack>
    </Container>
  );
};

export default ActionsLikeRedux;
