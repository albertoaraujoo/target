import { colors } from "@/theme";
import {
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
}
