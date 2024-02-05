import * as I from "./styles";

import { useTheme } from "styled-components/native";

import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return <I.Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}
