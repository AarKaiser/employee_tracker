drop database if exists employee_db;
create databse employee_db;
use employee_db;

create table departments (
    id int not null auto_increment primary key,
    name varchar(50)
);