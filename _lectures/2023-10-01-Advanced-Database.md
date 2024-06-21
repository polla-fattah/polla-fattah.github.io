---
layout: lecture
title: Advance Database
subtitle: ""
date: 2023-10-01
background: /img/lecture/database.png
university: Salahaddin University-Erbil
department: Software Engineering Dept.
level: BSc
year: 2018-Current
myStatus: Lecturer
permalink: /academy/lecture/advance-database/
---

## General Information

- **University**: {{page.university}}
- **Department**: {{page.department}}
- **My Status**: {{page.myStatus}}
- **Level**: {{page.level}}
- **Year**: {{page.year}}

## Course Description

This course aims to provide a thorough understanding of the underlying mechanisms and components that modern database management systems rely on to deliver efficient and reliable performance.

The curriculum covers a range of fundamental concepts that are essential to both high-performance transaction processing systems (OLTP) and large-scale analytical systems (OLAP). Students will be exposed to a variety of topics, including database design, query processing and optimization, indexing, concurrency control, and recovery management.

Furthermore, the course emphasizes the importance of both efficiency and correctness in the implementation of these ideas. To facilitate a more hands-on learning experience, all class projects will be centered on real-world in-memory, multi-core database systems, which will enable students to apply the concepts and principles covered in the course to practical scenarios.

Overall, this course is designed for advanced undergraduate students in software engineering who are looking to deepen their understanding of database management principles. Through a rigorous and scholarly examination of these core concepts, students will gain the knowledge and skills necessary to develop and optimize high-performance, reliable database management systems.


## Course Objectives

At the end of the course, students will be able to:

1. Understand SQL Performance Tuning
1. ER Diagram analysis and design and implementation
1. Security and Data Integrity
1. Data Analysis
1. Transactions and concurrency
1. Replications
1. Backups

## Course Content

- **Week 1** _Th_: Introduction to the course
- **Week 1** _Pr_: Installing [PostgreSql](https://www.postgresql.org/){: target="\PostgreSql" } and [Dbeaver](https://dbeaver.io/){: target="\Dbeaver" }
- **Week 2** _Th_: [Physical Storage Systems]({{"/assets/lectures/adb/ch12.pdf" | relative_url }}){: target="ch12.pdf" }
- **Week 2** _Pr_: [Revisiting SQL I]({{"/assets/lectures/adb/ch3.pdf" | relative_url }}){: target="ch3.pdf" }
- **Week 3** _Th_: [Data Storage Structures]({{"/assets/lectures/adb/ch13.pdf" | relative_url }}){: target="ch13.pdf" }
- **Week 3** _Pr_: [Revisiting SQL II]({{"/assets/lectures/adb/ch4.pdf" | relative_url }}){: target="ch4.pdf" }
- **Week 4** _Th_: [Indexing]({{"/assets/lectures/adb/ch14.pdf" | relative_url }}){: target="ch14.pdf" }
- **Week 4** _Pr_: Creating Indexes Using Java
- **Week 5** _Th_: [Query Processing]({{"/assets/lectures/adb/ch15.pdf" | relative_url }}){: target="ch15.pdf" }
- **Week 5** _Pr_: Advanced Data Types
- **Week 6** _Th_: [Query Optimisation]({{"/assets/lectures/adb/ch16.pdf" | relative_url }}){: target="ch16.pdf" }
- **Week 6** _Pr_: Practical Understanding of Query Optimisation
- **Week 7** _Th_: [Transactions]({{"/assets/lectures/adb/ch17.pdf" | relative_url }}){: target="ch17.pdf" }
- **Week 7** _Pr_: Understanding Transaction Practically
- **Week 8** _Th_: Midterm Exam
- **Week 8** _Pr_: Practical Quiz
- **Week 9** _Th_: [Concurrency Control]({{"/assets/lectures/adb/ch18.pdf" | relative_url }}){: target="ch18.pdf" }
- **Week 9** _Pr_: Installing a concurrent System
- **Week 10** _Th_: [Recovery System]({{"/assets/lectures/adb/ch19.pdf" | relative_url }}){: target="ch19.pdf" }
- **Week 10** _Pr_: Practical Aspects of Recovery System
- **Week 11** _Th_: [Database-System Architectures]({{"/assets/lectures/adb/ch20.pdf" | relative_url }}){: target="ch20.pdf" }
- **Week 11** _Pr_: Looking into Some database Architectures
- **Week 12** _Th_: [Big Data]({{"/assets/lectures/adb/ch10.pdf" | relative_url }}){: target="ch10.pdf" }
- **Week 12** _Pr_: Introduction to Apache Hadoop
- **Week 13** _Th_: [Data Analytics]({{"/assets/lectures/adb/ch11.pdf" | relative_url }}){: target="ch11.pdf" }
- **Week 13** _Pr_: OLAP in Practice Using PostgreSql
- **Week 14** _Th_: Review
- **Week 14** _Pr_: Review
- **Week 15** _Th_: Final Exam
- **Week 15** _Pr_: Final Exam


## References

- Reference Book for this Course
  - [Abraham Silberschatz, Henry Korth and S. Sudarshan - Database System Concepts. 7-McGraw-Hill Education (2020)](https://www.amazon.com/Database-System-Concepts-Abraham-Silberschatz/dp/0078022150){:target="_blank"}
- Alternative Book
  - [Ramez Elmasri and Shamkant B. Navathe. Fundamentals of Database Systems (7th. ed.). Pearson (2015)](https://www.amazon.com/Fundamentals-Database-Systems-Ramez-Elmasri/dp/0133970779){:target="_blank"}
- Alternative Lectures
  - [Database System Concepts Playlist](https://www.youtube.com/playlist?list=PLSE8ODhjZXjasmrEd2_Yi1deeE360zv5O){:target="_blank"}


## Grade Distribution

The Grade is generated from the examination result(s) with the following:
- **20%** Group Project
- **30%** Practical weekly exams + Quizzes
- **30%** Final Theoretical Exam
- **20%** Final Practical Exam

## Group Project Description

The group project should be completed by two students working together. You will be using PostgreSQL to fulfill the following requirements:

1. **Requirement gathering**: Collect and analyze the requirements for your project.
2. **Normalization and ER diagrams**: Design and create Entity-Relationship diagrams, ensuring proper normalization of the database schema.
3. **Creating proper tables and inserting data**: Implement the schema in PostgreSQL by creating tables and inserting sample data.
4. **Creating User roles and users**: Set up user roles and users with appropriate permissions for database access and management.
5. **Select queries for data retrieval**: Based on the gathered requirements, create SQL SELECT queries to retrieve relevant data from the database.
6. **Using transactions for data integrity**: Ensure data integrity by implementing transactions for critical operations.
7. **Creating a Replication for the database**: Set up database replication to maintain a consistent, synchronized copy of the database.
8. **Using OLAP to generate reports**: Utilize Online Analytical Processing (OLAP) techniques to generate informative reports from the database.


Suggestions for the database systems(Not Mandatory):

1. **Library Management System**: Create a system to manage book loans, reservations, and returns in a library. The system should be able to handle information about books, authors, publishers, library members, and loan history.

2. **Inventory Management System**: Develop a system to manage the inventory of a small business, such as a retail store or a warehouse. The system should handle products, suppliers, customers, sales, and purchase orders.

3. **Hospital Management System**: Design a system to manage patient records, doctor appointments, medical staff, and billing information for a hospital or clinic.

4. **University Management System**: Create a system to manage student enrollment, course registration, instructor information, and class schedules for a university.

5. **Employee Management System**: Develop a system for managing employee records, including personal information, job titles, departments, and salary information.

6. **Online Ticket Booking System**: Design a system for booking tickets for events like concerts, movies, or sports. The system should handle event information, venue details, ticket pricing, and user registration.

7. **Real Estate Management System**: Create a system for managing property listings, client information, and transactions for a real estate agency.

8. **Restaurant Reservation System**: Develop a system for managing table reservations and customer information for a restaurant.

9. **Hotel Booking System**: Design a system for managing room reservations, guest information, and billing for a hotel.

10. **Fitness Club Membership System**: Create a system for managing memberships, class schedules, and instructor information for a fitness club.

Make sure to collaborate effectively and divide the tasks evenly between both team members.
