import theme from "./src/theme";

import { ThemeProvider } from "styled-components/native";

import { StatusBar } from "expo-status-bar";

import { Plays } from "./src/screens/Plays";
import { NewGroup } from "./src/screens/NewGroup";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Plays />
    </ThemeProvider>
  );
}
