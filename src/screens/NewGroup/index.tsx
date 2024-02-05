import * as Ng from "./styles";

import { Button } from "@components/Buttons";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Ng.Container>
      <Header showBackButton />

      <Ng.Content>
        <Ng.Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma"
        />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Ng.Content>
    </Ng.Container>
  );
}
