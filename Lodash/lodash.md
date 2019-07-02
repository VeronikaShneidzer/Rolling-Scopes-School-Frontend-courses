### Lodash

_.chain(Input).your_code_there.value();

Please write implementation of your_code_there.

1. "Demo",
  - "input": "[1, 2, -3, 4, -5]"
  - "expected": "[2, 4]"

filter(x => x > 1)

filter(x => {
  return x > 1;
})

remove(x => x % 2 == 0)

remove(x => {
  return x % 2 == 0;
})

filter(_.partialRight(_.gt, 0)).slice(1)

2. "Unique Age",
  - "input": "[{ \"name\": \"Johnnie\", \"surname\": \"Walker\",  \"age\": 14 }, 
               { \"name\": \"Johnnie\", \"surname\": \"Walker\",  \"age\": 20 }, 
               { \"name\": \"Adam\",    \"surname\": \"Smith\",   \"age\": 99 }, 
               { \"name\": \"Jack\",    \"surname\": \"Daniels\", \"age\": 18 }, 
               { \"name\": \"Unknown\", \"surname\": \"Jameson\", \"age\": 18 }, 
               { \"name\": \"Adam\",    \"surname\": \"Smith1\",  \"age\": 4 } ]"
  - "expected": "[4, 18, 99, 20, 14]"

map('age')

3. "Knowing Your Limits",
  - "input": "[101, -56, 14, 99, -2, 9001, -1000000, 1]"
  - "expected": "[100, 0, 14, 99, 0, 100, 0, 1]"

map((x) => (x > 100) ? 100 : (x < 0) ? 0 : x)

map((x) => {
  if(x > 100) return 100; 
	if(x < 0) return 0; 
	return x;
})

4. "CyberSecurity",
  - "input": "[\"my password is\", 1, 2, 3, 4, 5, \"can you hack it?\"]"
  - "expected": "[\"my password is\", \"*\", \"*\", \"*\", \"*\", \"*\", \"can you hack it?\"]"

fill('*', 1, -1)

map((x) => (x >= 0) ? "*" : x )

map((x) => { 
  return (x >= 0) ? "*" : x ; 
})

5. "Group Me",
  - "input": "[{\"user\": \"John\",   \"auth\": true}, 
               {\"user\": \"Alex\",   \"auth\": false}, 
               {\"user\": \"Barney\", \"auth\": false}, 
               {\"user\": \"Noop\",   \"auth\": false}, 
               {\"user\": \"Joe\",    \"auth\": true}]"
  - "expected": "[[{\"user\":\"John\",\"auth\":true}, {\"user\":\"Joe\",\"auth\":true}],
                  [{\"user\":\"Alex\",\"auth\":false},{\"user\":\"Barney\",\"auth\":false},{\"user\":\"Noop\",\"auth\":false}]]"

orderBy(["auth"], ["desc"])

6. "Hack you, CyberSecurity",
  - "input": "[\"my password is\", \"*\", \"*\", \"*\", \"*\", \"*\", \"can you hack it?\"]"
  - "expected": "[\"my password is\", 1, 2, 3, 4, 5, \"can you hack it?\"]"

map((x, i) => (x == '*') ? i : x )

map((x, i) => { 
	return (x == '*') ? i : x; 
})

7. "Save the Queen!",
  - "input": "[\"God\",\"save\",\"the\",\"Queen\",\"!\"]"
  - "expected": "{\"God\": \"save\", \"the\": \"Queen\"}"

fromPairs(filter(chunk(2), x => x.length == 2))

_.fromPairs(_.filter(_.chunk(2), x => x.length == 2))
chunk(2).dropRight().fromPairs()

8. 
  - "input": 	[{
		    "name": "Johnnie",
		    "surname": "Walker",
		    "age": 14
		}, {
		    "name": "Johnnie",
		    "surname": "Walker",
		    "age": 20
		}, {
		    "name": "Adam",
		    "surname": "Smith",
		    "age": 99
		}, {
		    "name": "Jack",
		    "surname": "Daniels",
		    "age": 18
		}, {
		    "name": "Unknown",
		    "surname": "Jameson",
		    "age": 18
		}, {
		    "name": "Adam",
		    "surname": "Smith1",
		    "age": 4
		}]
  - "expected": [4, 18, 99, 20, 14]

map('age').reverse().uniq()
