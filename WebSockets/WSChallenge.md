### WebSockets Challenge

Solving the challenge:

1. Create WebSocket and (important!) set binaryType = "arraybuffer";
2. Registration.
   Think about cool participant name and then send a registration message. 
   Message looks like: { "name":"SuperHero", "command": "challenge accepted" }
3. The server will respond with:{"message":"You successfully accept challenge","next":"arithmetic","token":"eae34860c6f507f2"}.
   Message contains an authentication token which you will attach to your messages for identification and the next task name.
4. Request the next task with { token: my_saved_token, command: saved_next_task_name } There are 2 simple tasks:
   - {"name":"arithmetic","task":{"sign": OPERATION ,"values": ARRAY}} where:
      OPERATION {String} - random operator (+, -, *) which corresponds to an arithmetic operation you have to perform with the ARRAY
      ARRAY {Array} - numbers array, length = 4.
      Send the answer with { "token": my_saved_token, "command": "arithmetic", "answer": RESULT } if answer is correct,
      server will respond with {"message":"You solve task","nextTask":"binary_arithmetic"}
    ... Request the next task with { token: my_saved_token, command: saved_next_task_name }
   - Server will send you the following message: {"name":"binary_arithmetic","task":{"bits":16}} where bits is either 8 or 16. 
      Immediately after that you should receive a binary message (16 bytes) which you should treat as a Uint8Array or Uint16Array 
      depending on the bits field. Your task is to sum the resulting array's elements and send the result: 
      { "token": my_saved_token, "command": "binary_arithmetic", "answer": RESULT } if RESULT is correct, server will respond with 
      {"message":"You solve task","nextTask":"win"}.
      
5. Request the win! { token: my_saved_token, command: win_command }
6. Send the uniq code to us { "code":UNIQ_CODE } :)