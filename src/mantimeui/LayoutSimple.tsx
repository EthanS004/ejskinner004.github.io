//Blacken Background
// Add Borders
// Now after that add different pages

import { AppShell, AppShellHeader, Burger, useMantineTheme } from "@mantine/core";
import { HeaderSimple } from "./HeaderSimple";
import { NavbarSimple } from "./NavbarSimple";
import { useDisclosure } from "@mantine/hooks";

export const LayoutSimple = ({ children }: any) => {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();
  return (
    <>
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
        header={{ height: 60 }}
        zIndex={100}
      >
        <AppShellHeader
          style={{
            background: "#1F1F1F",
            borderRadius: "12px",
            border: "2px solid gray",
          }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <HeaderSimple></HeaderSimple>
        </AppShellHeader>
        <AppShell.Navbar
          style={{
            backgroundColor: theme.colors.dark[7],
            borderRadius: "12px",
            border: "2px solid gray",
          }}
        >
          <NavbarSimple></NavbarSimple>
          {/* {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))} */}
        </AppShell.Navbar>

        <AppShell.Main style={{ margin: '40px 70px'}}>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};
