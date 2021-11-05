insert into departments (name)
values  ("Strategy"),
        ("Markeing"),
        ("Finance"),
        ("Human Resources"),
        ("Technology & Equipment"),
        ("Operations");

insert into roles (title,salary,dept_id)
values  ("Chief Strategist",150000,1),
        ("Head of Marketing",125000,2),
        ("Head of Finance",200000,3),
        ("Head of Human Resources",80000,4),
        ("Chief Engineer",130000,2),
        ("Senior Developer",175000,5),
        ("CEO", 300000,1),
        ("CTO", 250000,2),
        ("CIO", 220000,3),
        ("Head of Legal", 200000,6);

insert into employees (first_name,last_name,role_id,manager_id)
values  ("Masai","Ujiri",1,null),
        ("Nick","Nurse",2,1),
        ("Scottie","Barnes",3,2),
        ("Pascal","Siakam",4,2),
        ("Gary","Trent Jr.",5,2),
        ("OG","Anunoby",6,2),
        ("Fred","VanVleet",7,2),
        ("Chris","Boucer",8,2),
        ("Sviatoslav","Makhailiuk",9,2),
        ("Dalano","Banton",10,2);
        
select * from departments;