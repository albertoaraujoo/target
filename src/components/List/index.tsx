import { Separator } from "../Separator";
import { colors } from "@/theme";
import {
  FlatList,
  Text,
  View,
  type FlatListProps,
  type ViewStyle,
} from "react-native";
import { styles } from "./styles";

type Props<T> = FlatListProps<T> & {
  title: string;
  emptyMessage?: string;
  containerStyle?: ViewStyle;
};

export function List<T>({
  title,
  emptyMessage,
  containerStyle,
  data,
  renderItem,
  ...rest
}: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        ListEmptyComponent={
          emptyMessage ? <Text style={styles.empty}>{emptyMessage}</Text> : null
        }
        {...rest}
      />
    </View>
  );
}
