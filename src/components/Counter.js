import { Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import useStore from "../store/store.count";
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

const Counter = (props) => {
  //const count = useStore((state) => state.count);
  //const increaseCount = useStore((state) => state.increaseCount);
  const {
    count,
    increaseCount,
    decreaseCount,
    resetCount,
    increaseBy,
    decreaseBy,
  } = useStore();
  return (
    <Container sx={containerStyle}>
      <Typography>{count}</Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={increaseCount}>+</PrimaryButton>
          <PrimaryButton onClick={() => increaseBy(20)}>
            increase by 20
          </PrimaryButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={decreaseCount}>-</PrimaryButton>
          <PrimaryButton onClick={() => decreaseBy(10)}>
            decrease by 10
          </PrimaryButton>
        </Stack>
        <PrimaryButton onClick={resetCount}>reset counter</PrimaryButton>
      </Stack>
    </Container>
  );
};

export default Counter;
