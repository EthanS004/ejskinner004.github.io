import { Text, Button, Stack, useMantineTheme } from "@mantine/core";
import { Navunfilled } from "../assets/navunfilled";
import { useState } from "react";

export const NavbarSimple = () => {
  const [navigated, setnavigated] = useState(-1);
  const theme = useMantineTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.dark[7], // Dark background for navbar
        color: "white",
        padding: "1em 0",
        borderRadius: theme.radius.md,
        margin: "0 10px",
        boxShadow: theme.shadows.sm,
      }}
    >
      <Stack
        align="center"
        gap="md"
        style={{ maxWidth: 300, margin: "auto" }}
      >
        {/* Start Button */}
        <Button
          onClick={() => {
            window.location.replace("/#start");
            setnavigated(0);
          }}
          radius="xl"
          size="lg"
          variant={navigated === 0 ? "filled" : "outline"}
          color={navigated === 0 ? "gray" : "dark"} // Monochrome colors for buttons
          fullWidth
          styles={{
            root: {
              backgroundColor: navigated === 0 ? theme.colors.gray[8] : theme.colors.dark[6], // Dark background for active button
              borderColor: theme.colors.gray[6], // Subtle border color
              color: "white",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.colors.dark[5], // Slightly lighter on hover
              },
            },
          }}
          leftSection={<Navunfilled enabled={navigated === 0} />}
        >
          <Text size="lg" fw={700}>
            Start
          </Text>
        </Button>

        {/* Education Button */}
        <Button
          onClick={() => {
            window.location.replace("/#education");
            setnavigated(1);
          }}
          radius="xl"
          size="lg"
          variant={navigated === 1 ? "filled" : "outline"}
          color={navigated === 1 ? "gray" : "dark"}
          fullWidth
          styles={{
            root: {
              backgroundColor: navigated === 1 ? theme.colors.gray[8] : theme.colors.dark[6],
              borderColor: theme.colors.gray[6],
              color: "white",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.colors.dark[5],
              },
            },
          }}
          leftSection={<Navunfilled enabled={navigated === 1} />}
        >
          <Text size="lg" fw={700}>
            Education
          </Text>
        </Button>

        {/* Experience Button */}
        <Button
          onClick={() => {
            window.location.replace("/#experience");
            setnavigated(2);
          }}
          radius="xl"
          size="lg"
          variant={navigated === 2 ? "filled" : "outline"}
          color={navigated === 2 ? "gray" : "dark"}
          fullWidth
          styles={{
            root: {
              backgroundColor: navigated === 2 ? theme.colors.gray[8] : theme.colors.dark[6],
              borderColor: theme.colors.gray[6],
              color: "white",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.colors.dark[5],
              },
            },
          }}
          leftSection={<Navunfilled enabled={navigated === 2} />}
        >
          <Text size="lg" fw={700}>
            Experience
          </Text>
        </Button>

        {/* Personal Button */}
        <Button
          onClick={() => {
            window.location.replace("/#personal");
            setnavigated(3);
          }}
          radius="xl"
          size="lg"
          variant={navigated === 3 ? "filled" : "outline"}
          color={navigated === 3 ? "gray" : "dark"}
          fullWidth
          styles={{
            root: {
              backgroundColor: navigated === 3 ? theme.colors.gray[8] : theme.colors.dark[6],
              borderColor: theme.colors.gray[6],
              color: "white",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.colors.dark[5],
              },
            },
          }}
          leftSection={<Navunfilled enabled={navigated === 3} />}
        >
          <Text size="lg" fw={700}>
            Personal
          </Text>
        </Button>
      </Stack>
    </div>
  );
};
