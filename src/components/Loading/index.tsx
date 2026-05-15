import { styles } from "./styles";
import { ActivityIndicator } from "react-native";
import { colors } from "@/theme";

export function Loading() {
  return (
    <ActivityIndicator color={colors.blue[500]} style={styles.container} />
  );
}
