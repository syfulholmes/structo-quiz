# structo-quiz

Solutions to general software quiz parts 1 and 2 are in the socket folder and chain.py respectively.

Part 1 - Socket.io server:
Upon receiving a 'message' event containing the plain text 'time-now', the server emits a 'time-response' event containing the current time. 
If it receives the same event with a plain text 'date-tomorrow', it emits a 'tomorrow-response' event containing tomorrow's date.

Part 2 - Max chain length:
A Python function which returns the maximum chain length of integers in the interval [i, j]
