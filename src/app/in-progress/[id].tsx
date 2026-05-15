import { PageHeader, Progress } from "@/components";
import { View } from "react-native";

export default function InProgress() {
  const details = {
    data: {
      current: "R$ 580,00",
      target: "R$ 2.320,00",
      percentage: 25,
    },
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />
      <Progress data={details.data} />
    </View>
  );
}
