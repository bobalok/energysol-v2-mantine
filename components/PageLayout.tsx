import { useState } from "react";
import { AppShell, Header, Text, Burger, useMantineTheme } from "@mantine/core";
const PageLayout = ({ children }: any) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return <AppShell>{children}</AppShell>;
};

export default PageLayout;
