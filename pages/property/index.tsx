import { Container, Stack } from "@mui/material";
import withLayoutBasic from "./libs/components/layout/LayoutBasic";

const PropertyList = () => {
  console.log("PROPERTY LIST COMPONENT - APP ROUTER");

  return (
    <>
      <Container>PROPERTY LIST</Container>
    </>
  );
};

export default withLayoutBasic(PropertyList);
