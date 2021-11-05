insert into departments (id, name)
values  (1, "Strategy"),
        (2, "Markeing"),
        (3, "Finance"),
        (4, "Human Resources"),
        (5, "Technology & Equipment"),
        (6, "Operations");

insert into roles (role_id,title dept_id,title, dept_id, salary)
values  (1,"Chief Strategist", 1,150000),
        (2,"Head of Marketing", 2, 125000),
        (3,"Head of Finance", 3, 200000),
        (4,"Head of Human Resources", 4, 80000),
        (5,"Chief Engineer", 130000),
        (6,"Senior Developer", 5,175000),
        (7,"CEO", 6, 300000),
        (8,"CTO",6, 250000),
        (9,"CIO", 6, 220000),
        (10,"Head of Legal", 6, 200000);

insert into employees (id, first_name, last_name,role_id, manager_id)
values  (01,"Masai","Ujiri",1,null),
        (02,"Nick","Nurse",2,1),
        (03,"Scottie","Barnes",3,2),
        (04,"Pascal","Siakam",4,2),
        (05,"Gary","Trent Jr.",5,2),
        (06,"OG","Anunoby",6,2),
        (07,"Fred","VanVleet",7,2),
        (08,"Chris","Boucer",8,2),
        (09,"Sviatoslav","Makhailiuk",9,2),
        (10,"Dalano","Banton",10,2);
