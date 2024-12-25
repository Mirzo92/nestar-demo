import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "./property/libs/components/layout/LayoutHome";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Box>Popular Properties</Box>
        <Box>Top Agents</Box>
        <Box>Top Properties</Box>
        <Box>Events</Box>
      </Stack>
    </Container>
  );
}

export default withLayoutMain(Home);
