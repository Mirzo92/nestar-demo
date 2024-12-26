import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "./property/libs/components/layout/LayoutHome";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
        <Box>Events</Box>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
