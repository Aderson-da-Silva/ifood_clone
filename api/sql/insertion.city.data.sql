-- Insert Brazil as a country
INSERT INTO countries (code, name, patter_number)
VALUES ('BR', 'Brasil', 55);

-- Insert all 27 states
INSERT INTO states (name, initials, country_id)
VALUES 
('Acre', 'AC', (SELECT id FROM countries WHERE code = 'BR')),
('Alagoas', 'AL', (SELECT id FROM countries WHERE code = 'BR')),
('Amapá', 'AP', (SELECT id FROM countries WHERE code = 'BR')),
('Amazonas', 'AM', (SELECT id FROM countries WHERE code = 'BR')),
('Bahia', 'BA', (SELECT id FROM countries WHERE code = 'BR')),
('Ceará', 'CE', (SELECT id FROM countries WHERE code = 'BR')),
('Distrito Federal', 'DF', (SELECT id FROM countries WHERE code = 'BR')),
('Espírito Santo', 'ES', (SELECT id FROM countries WHERE code = 'BR')),
('Goiás', 'GO', (SELECT id FROM countries WHERE code = 'BR')),
('Maranhão', 'MA', (SELECT id FROM countries WHERE code = 'BR')),
('Mato Grosso', 'MT', (SELECT id FROM countries WHERE code = 'BR')),
('Mato Grosso do Sul', 'MS', (SELECT id FROM countries WHERE code = 'BR')),
('Minas Gerais', 'MG', (SELECT id FROM countries WHERE code = 'BR')),
('Pará', 'PA', (SELECT id FROM countries WHERE code = 'BR')),
('Paraíba', 'PB', (SELECT id FROM countries WHERE code = 'BR')),
('Paraná', 'PR', (SELECT id FROM countries WHERE code = 'BR')),
('Pernambuco', 'PE', (SELECT id FROM countries WHERE code = 'BR')),
('Piauí', 'PI', (SELECT id FROM countries WHERE code = 'BR')),
('Rio de Janeiro', 'RJ', (SELECT id FROM countries WHERE code = 'BR')),
('Rio Grande do Norte', 'RN', (SELECT id FROM countries WHERE code = 'BR')),
('Rio Grande do Sul', 'RS', (SELECT id FROM countries WHERE code = 'BR')),
('Rondônia', 'RO', (SELECT id FROM countries WHERE code = 'BR')),
('Roraima', 'RR', (SELECT id FROM countries WHERE code = 'BR')),
('Santa Catarina', 'SC', (SELECT id FROM countries WHERE code = 'BR')),
('São Paulo', 'SP', (SELECT id FROM countries WHERE code = 'BR')),
('Sergipe', 'SE', (SELECT id FROM countries WHERE code = 'BR')),
('Tocantins', 'TO', (SELECT id FROM countries WHERE code = 'BR'));

-- Insert capital cities for each state
INSERT INTO city (name, state_id)
VALUES
('Rio Branco', (SELECT id FROM states WHERE initials = 'AC')),
('Maceió', (SELECT id FROM states WHERE initials = 'AL')),
('Macapá', (SELECT id FROM states WHERE initials = 'AP')),
('Manaus', (SELECT id FROM states WHERE initials = 'AM')),
('Salvador', (SELECT id FROM states WHERE initials = 'BA')),
('Fortaleza', (SELECT id FROM states WHERE initials = 'CE')),
('Brasília', (SELECT id FROM states WHERE initials = 'DF')),
('Vitória', (SELECT id FROM states WHERE initials = 'ES')),
('Goiânia', (SELECT id FROM states WHERE initials = 'GO')),
('São Luís', (SELECT id FROM states WHERE initials = 'MA')),
('Cuiabá', (SELECT id FROM states WHERE initials = 'MT')),
('Campo Grande', (SELECT id FROM states WHERE initials = 'MS')),
('Belo Horizonte', (SELECT id FROM states WHERE initials = 'MG')),
('Belém', (SELECT id FROM states WHERE initials = 'PA')),
('João Pessoa', (SELECT id FROM states WHERE initials = 'PB')),
('Curitiba', (SELECT id FROM states WHERE initials = 'PR')),
('Recife', (SELECT id FROM states WHERE initials = 'PE')),
('Teresina', (SELECT id FROM states WHERE initials = 'PI')),
('Rio de Janeiro', (SELECT id FROM states WHERE initials = 'RJ')),
('Natal', (SELECT id FROM states WHERE initials = 'RN')),
('Porto Alegre', (SELECT id FROM states WHERE initials = 'RS')),
('Porto Velho', (SELECT id FROM states WHERE initials = 'RO')),
('Boa Vista', (SELECT id FROM states WHERE initials = 'RR')),
('Florianópolis', (SELECT id FROM states WHERE initials = 'SC')),
('São Paulo', (SELECT id FROM states WHERE initials = 'SP')),
('Aracaju', (SELECT id FROM states WHERE initials = 'SE')),
('Palmas', (SELECT id FROM states WHERE initials = 'TO'));

-- Insert additional cities for Rio Grande do Sul (RS)
INSERT INTO city (name, state_id)
VALUES
('Pelotas', (SELECT id FROM states WHERE initials = 'RS')),
('Bagé', (SELECT id FROM states WHERE initials = 'RS'));

SELECT * FROM city