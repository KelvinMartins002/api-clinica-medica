-- schema_seed_postgres.sql
-- tipos já são tratados pelo Sequelize; este script cria as tabelas e popula dados caso prefira importar manualmente.

CREATE TABLE IF NOT EXISTS PlanoDeSaude (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  limite_cobertura NUMERIC(14,2) NOT NULL DEFAULT 0,
  data_vencimento DATE,
  operadora VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Paciente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  cpf VARCHAR(14) UNIQUE NOT NULL,
  email VARCHAR(150),
  telefone VARCHAR(30),
  endereco VARCHAR(200),
  data_nascimento DATE,
  plano_id INTEGER REFERENCES PlanoDeSaude(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Medico (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  especialidade VARCHAR(100),
  crm VARCHAR(40) UNIQUE NOT NULL,
  telefone VARCHAR(30),
  email VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS Consulta (
  id SERIAL PRIMARY KEY,
  data_hora TIMESTAMP NOT NULL,
  valor NUMERIC(12,2) NOT NULL,
  paciente_id INTEGER REFERENCES Paciente(id) ON DELETE RESTRICT,
  medico_id INTEGER REFERENCES Medico(id) ON DELETE RESTRICT,
  status VARCHAR(20) DEFAULT 'AGENDADA'
);

CREATE TABLE IF NOT EXISTS ReceitaMedica (
  id SERIAL PRIMARY KEY,
  consulta_id INTEGER REFERENCES Consulta(id) ON DELETE CASCADE,
  descricao TEXT NOT NULL,
  tempo_tratamento VARCHAR(100),
  dosagem VARCHAR(100),
  data_emissao DATE DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS Pagamento (
  id SERIAL PRIMARY KEY,
  consulta_id INTEGER REFERENCES Consulta(id) ON DELETE CASCADE,
  valor NUMERIC(12,2) NOT NULL,
  data_pagamento DATE DEFAULT CURRENT_DATE,
  forma_pagamento VARCHAR(20) DEFAULT 'PIX',
  observacao TEXT
);

-- inserts de exemplo
INSERT INTO PlanoDeSaude (nome, limite_cobertura, data_vencimento, operadora)
VALUES
('Plano Ouro', 20000.00, '2026-12-31', 'SaudePlus'),
('Plano Basico', 5000.00, '2025-09-30', 'VidaTotal');

INSERT INTO Paciente (nome, cpf, email, telefone, endereco, data_nascimento, plano_id)
VALUES
('Joao Silva', '123.456.789-00', 'joao@mail.com', '(11)99999-1111', 'Rua A, 100', '1985-04-10', 1),
('Maria Souza', '987.654.321-00', 'maria@mail.com', '(11)98888-2222', 'Rua B, 200', '1990-08-21', 2);

INSERT INTO Medico (nome, especialidade, crm, telefone, email)
VALUES
('Dra. Helena', 'Cardiologia', 'CRM-SP-112233', '(11)91111-3333', 'helena@hospital.com'),
('Dr. Paulo', 'Clinico Geral', 'CRM-SP-998877', '(11)92222-4444', 'paulo@hospital.com');

INSERT INTO Consulta (data_hora, valor, paciente_id, medico_id, status)
VALUES
('2025-11-22 10:30:00', 150.00, 1, 1, 'AGENDADA'),
('2025-11-22 14:00:00', 100.00, 2, 2, 'AGENDADA');

INSERT INTO Pagamento (consulta_id, valor, data_pagamento, forma_pagamento, observacao)
VALUES
(1, 150.00, '2025-11-21', 'PIX', 'Pagamento via PIX');

INSERT INTO ReceitaMedica (consulta_id, descricao, tempo_tratamento, dosagem, data_emissao)
VALUES
(1, 'Paracetamol 500mg - 1 comprimido a cada 8 horas', '7 dias', '500mg', '2025-11-22');
