INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 4),
    ('Salesperson', 80000, 4),
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Legal Team Lead', 250000, 3),
    ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Aaron', 'Rodgers', 1),
    ('Jordan', 'Love', 2),
    ('Patrick', 'Mahomes', 3),
    ('Chad', 'Henne', 4),
    ('Josh', 'Allen', 5),
    ('Case', 'Keenum', 6),
    ('Jimmy', 'Garropolo', 7),
    ('Trey', 'Lance', 8);