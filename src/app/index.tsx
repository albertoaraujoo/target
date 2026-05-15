import { Button, HomeHeader, List, Target } from "@/components";
import { router } from "expo-router";
import { StatusBar, View } from "react-native";

const summary = {
  total: "R$ 2.680,00",
  input: {
    label: "Entradas",
    value: "R$ 6.184,90",
  },
  output: {
    label: "Saídas",
    value: "-R$ 883.65",
  },
};

const targets = [
  {
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
    id: "1",
  },
  {
    name: "Comprar um notebook",
    percentage: "50%",
    current: "R$ 500,00",
    target: "R$ 1.000,00",
    id: "2",
  },
  {
    name: "Comprar um celular",
    percentage: "25%",
    current: "R$ 250,00",
    target: "R$ 1.000,00",
    id: "3",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />
      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta cadastrada. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />
      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
