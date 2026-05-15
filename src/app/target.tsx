import { Button, CurrencyInput, Input, PageHeader } from "@/components";

import { View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader title="Meta" subtitle="Preencha abaixo os dados da meta" />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Exemplo: viagem para a praia"
        />
        <CurrencyInput label="Valor alvo" value={243434} />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
