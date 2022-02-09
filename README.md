# CommitBit

1. npm install
2. npm start
3. mongorestore --db commitbit dump/commitbit
4. Get list of all created random strins :
   URL : http://localhost:8000/api/randomString?sortKey=name&sortBy=1&skip=1
   METHOD : GET
5. Create random strings from frontend
   URL : http://localhost:8000/api/randomString
   METHOD : POST
   BODY DATA : {
    "name": "String Type 5",
    "type": "string"
}
