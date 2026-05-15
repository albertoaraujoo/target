import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { colors } from "@/theme";
import { styles } from "./styles";

export function HomeHeader() {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.label}>Total que você possui</Text>
      </View>
    </LinearGradient>
  );
}
