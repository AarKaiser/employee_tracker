-- Droping & Creating Database

drop database if exists employee_db;
create database employee_db;

-- Specifying Database to Use
use employee_db;

-- Creating Departments Table

create table departments (
    id int not null auto_increment primary key,
    name varchar(50)
);

-- Creating Roles Table

create table roles (
    id int auto_increment primary key,
    title varchar(50) not null,
    salary not null decimal,
    dept_id int,
        foreign key (dept_id)
        references departments(id)
);

-- Creating Employees Table

create table employees (
    id int auto_increment primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    role_id int,
    manager_id INT,
        foreign key (role_id)
        references roles(id)
        on delete set null,
        foreign key (manager_id)
        references employees(id)
);