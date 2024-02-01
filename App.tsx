import { ThemeProvider } from "styled-components/native";

import { StatusBar } from "expo-status-bar";
import { Groups } from "./src/screens/Groups";

import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Groups />
    </ThemeProvider>
  );
}
