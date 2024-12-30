import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "./libs/components/layout/LayoutHome";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack className={"home-page"}>
        <Stack>
          <Stack className="container">Trend Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Adverstisement</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
