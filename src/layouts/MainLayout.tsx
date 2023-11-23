import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <Container
      maxWidth={"7xl"}
      py={6}
      bg={"neutral.500"}
      color="white"
      maxHeight={{ lg: "100vh" }}
      overflowY="hidden"
    >
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          minWidth="232px"
          minHeight={{ lg: "100%" }}
        >
          <Sidebar />
        </GridItem>
        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }}>
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default MainLayout;
