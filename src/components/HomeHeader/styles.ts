import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 324,
    flexDirection: "column",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
    paddingBottom: 18,
    gap: 24,
  },

  label: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.white,
  },

  total: {
    fontFamily: fontFamily.medium,
    fontSize: 32,
    color: colors.white,
  },

  summary: {
    width: "100%",
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
