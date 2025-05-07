# Lab 5 
Abhyuday Singh

Question 1:

No. The message feature involves multiple components (input handling, network, database, delivery) crossing system boundaries. Unit tests would require extensive mocking. Integration tests would better verify that messages actually get from user A to user B correctly.

Question 2:

Yes. This is perfect for unit testing since it's isolated functionality with clear inputs and outputs. We can easily test that 80-character messages are accepted while 81-character messages are rejected without needing external dependencies.