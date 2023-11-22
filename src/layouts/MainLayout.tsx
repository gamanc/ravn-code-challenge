import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Grid, GridItem } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <Container
      maxWidth={"7xl"}
      pt={10}
      bg={"neutral.5"}
      color="white"
      maxHeight="100vh"
      overflowY="hidden"
    >
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem as="aside" colSpan={1} minWidth="232px">
          <span>Sidebar</span>
        </GridItem>
        <GridItem as="main" colSpan={5}>
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default MainLayout;
