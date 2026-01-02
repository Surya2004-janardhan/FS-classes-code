-- what is sql :
-- interview defination

-- SQL stands for Structured Query Language
--  and works with relational databases that 
-- store data in tables of rows and columns.​-- 

-- db - 2 types in general 
-- 1.realational -- realtions btw tables where data is
-- stored in rows and cols

-- 2. non relational --no strong realations ex : mongodb


-- SQL commands are grouped into 5 main types:
-- DDL- define + change -- create , alter, drop , truncate
--  , DML - manipulate -- insert delete update
-- , DQL - query --select,
--  DCL - control over data- grant, revoke , and 
-- TCL -control over transactions -- commit rollback savepoint. 
-- Each group has a different purpose like defining structure, changing data, controlling access, etc.​

-- sql queries in mysql db using sql  












-- show databases;-- 

-- create database sql_classes; 

-- use sql_classes;-- -- 


-- show tables;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    branch VARCHAR(20)
);

select * from students;

INSERT INTO students VALUES
(1, 'Arun Kumar', 'CSE'),
(2, 'Priya Singh', 'ECE'),
(3, 'Ravi Patel', 'CSE'),
(4, 'Sneha Reddy', 'ME'),
(5, 'Vikram Joshi', 'ECE');

insert into students values ('2121', 'srikanth', 'cse');





-- select *  from  students where condition-- 

select * from students where not id < 3;


select count(name) from students; -- non null values 

select count(*) from students; -- only one argument

select id, branch ,name as sum_of_ids_of_students from students; 

-- as is used for alisa for a col name to be changed in the output

select min(id) from students;

-- /avg, min , max, sum, count -- 1 argument only

-- select round(21.212211, 0);

select round(avg(id),0) from students;


--  round - 2 arguments , 2nd one is to tell how many decimal places to be rounded over



select id from students where id = 1;

select name from students where name like '%h';


select * from students order by name desc limit 2;
select * from students order by id desc;

select * from students order by id desc limit 2 offset 0;


-- order by takes 1 argument sorts by default asc , desc manual
--  limit - limits output data to certain rows only
--  offset skips certain rows 
--  like compares with the format of string given


select * from students where branch in ('cse', 'me');

select * from students where id between 10 and 21;
-- where branch = 'cse' or branch ='me';-- 

-- between operators checks in bteweer values
--  in checks wheterh it is in the values it represented 


-- in vs exists -- in (s sgfs sf ) exist(s g s )
SELECT * FROM students 
WHERE EXISTS (SELECT 1 FROM students WHERE branch = 'CSE');