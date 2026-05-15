import { colors } from "@/theme";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isProcessing?: boolean;
};

export function Button({
  title,
  isProcessing = false,
  activeOpacity = 0.8,
  disabled,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      disabled={isProcessing || disabled}
      {...rest}
    >
      <Text style={styles.title}>
        {isProcessing ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
}
