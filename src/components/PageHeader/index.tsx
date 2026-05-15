import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/theme";
import { styles } from "./styles";

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  rightButton?: {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
  };
};

type Props = PageHeaderProps;

export function PageHeader({ title, subtitle, rightButton }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>
        {rightButton ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={rightButton.onPress}
          >
            <MaterialIcons
              name={rightButton.icon}
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}
