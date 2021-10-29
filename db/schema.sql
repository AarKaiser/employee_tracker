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
    id int not null auto_increment primary key,

)