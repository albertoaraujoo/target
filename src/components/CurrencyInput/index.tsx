import { colors } from "@/theme";
import Input, { type CurrencyInputProps } from "react-native-currency-input";
import { Text, View } from "react-native";
import { styles } from "../Input/styles";

type Props = CurrencyInputProps & {
  label: string;
};

export function CurrencyInput({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        prefix="R$ "
        {...rest}
      />
    </View>
  );
}
