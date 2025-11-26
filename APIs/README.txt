JSON Server Databases for Assignment (one db.json per question)

Files included and recommended ports:
- q1_products_db.json       -> json-server --watch q1_products_db.json --port 3001
- q2_employees_db.json      -> json-server --watch q2_employees_db.json --port 3002
- q3_tasks_db.json          -> json-server --watch q3_tasks_db.json --port 3003
- q4_multi_api_db.json      -> json-server --watch q4_multi_api_db.json --port 3004
- q5_timetable_db.json      -> json-server --watch q5_timetable_db.json --port 3005
- q6_users_db.json          -> json-server --watch q6_users_db.json --port 3006

Each file contains at least 5 sample records. Use only the specific file/port for API operations.

Example endpoints:
Q1: GET http://localhost:3001/products?q=backpack
Q2: GET http://localhost:3002/employees   PATCH http://localhost:3002/employees/:id
Q3: GET http://localhost:3003/tasks?priority=High
Q4: GET http://localhost:3004/users  /orders  /products
Q5: GET http://localhost:3005/timetable?day=Monday
Q6: GET http://localhost:3006/users?email=abc@example.com  POST http://localhost:3006/users

