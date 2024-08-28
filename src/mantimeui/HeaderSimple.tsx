import { Button, Group, Text } from "@mantine/core";

export const HeaderSimple = () => {
  return (
    <>
      <header
        style={{
          height: "100%",
          margin: "11px 20px",
          fontFamily: "Roboto",
          color: "white",
        }}
      >
        <Group justify="space-between" gap="xl" style={{}}>
          <Text size="xl" fw={900}>
            Ethan Skinner
          </Text>
          <Group justify="flex-end" gap={"2em"}>
            <a href="/" >
              <Button size="1.5em" fw={900} variant="subtle" color="white" radius={"2em"} >
                Resume
              </Button>
            </a>
            <a href="/projects">
              <Button size="1.5em" fw={900} variant="subtle" color="white" radius={"2em"} >
                Projects
              </Button>
            </a>
            <a href="/Education">
              <Button size="1.5em" fw={900} variant="subtle" color="white" radius={"2em"} >
                Education
              </Button>
            </a>
          </Group>
        </Group>
      </header>
    </>
  );
};
