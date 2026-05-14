# Conceitos

## Aggregate
- É uma entidade que depende de outra entidade para existir.
- Eles são salvos no mesmo tempo no banco de dados.
- Elas juntas compõe algo maior, ai são chamadas de agregado.

Exemplo:
- Order -> OrderItem[]
- Order -> Shipping

## WatchedList
- Lista observada.
- Question -> Attachment[]
- É um partner que permite ter mais informações de items contido em uma lista. Tem informações dos items da lista, se foi removido, editado ou se é um item novo.

### Criação

- Título
- Conteúdo
- Anexos (3)

### Edição

- Título
- Conteúdo

- Adicionar um novo anexo
- Remover o segundo anexo que tinha sido criado previamente
- Editar um anexo existente