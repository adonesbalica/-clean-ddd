# Disparar notificação quando tiver uma resposta.
- new answer (use-case)

# Entidade notificação
- enviar notificação (use-case)

Toda vez que houver uma nova respostar eu envie uma notificação para o usuário dono do tópico.

- Teoricamente eu poderia disparar essa notificação de dentro da new answer, porém isso causa acoplamento

# Pub/Sub
- Estrutura que permite realizar comunicação entre partes do sistema. De forma que elas não se conhecem.

Publisher
- flag ready diz se ele esta pronto ou não para ser consumido.
[
  {event: "create-answer", answer: {}, topic: {}..., ready: false }
]

Subscriber
Uma classe que fica ouvindo quando tem uma adição de um novo evento nessa estrutura de dados.
Se fizer sentido para o contexto ele disparar a ação necessária.