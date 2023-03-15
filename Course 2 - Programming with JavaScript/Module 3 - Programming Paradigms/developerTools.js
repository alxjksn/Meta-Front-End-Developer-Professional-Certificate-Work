'{"greeting": "hello"}'
const jsonStr = '{"greeting:"hello"}'
JSON.parse(jsonStr)
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = 'hi'
const data = {
  firstName: "John",
  lastName: "Doe",
  greeting: "Hello",
}
JSON.stringify(data)
