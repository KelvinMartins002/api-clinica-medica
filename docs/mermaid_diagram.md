classDiagram
    class PlanoDeSaude {
      +bigint id
      +varchar nome
      +numeric limite_cobertura
      +date data_vencimento
      +varchar operadora
    }
    class Paciente {
      +bigint id
      +varchar nome
      +varchar cpf
      +varchar email
      +varchar telefone
      +varchar endereco
      +date data_nascimento
      +bigint plano_id
    }
    class Medico {
      +bigint id
      +varchar nome
      +varchar especialidade
      +varchar crm
      +varchar telefone
      +varchar email
    }
    class Consulta {
      +bigint id
      +timestamp data_hora
      +numeric valor
      +bigint paciente_id
      +bigint medico_id
      +status_consulta status
    }
    class ReceitaMedica {
      +bigint id
      +bigint consulta_id
      +text descricao
      +varchar tempo_tratamento
      +varchar dosagem
      +date data_emissao
    }
    class Pagamento {
      +bigint id
      +bigint consulta_id
      +numeric valor
      +date data_pagamento
      +forma_pagamento_t forma_pagamento
      +text observacao
    }

    PlanoDeSaude "1" -- "0..*" Paciente : possui
    Paciente "1" -- "0..*" Consulta : marca
    Medico "1" -- "0..*" Consulta : atende
    Consulta "1" -- "0..1" ReceitaMedica : gera
    Consulta "1" -- "0..*" Pagamento : gera
