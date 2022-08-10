const Mock = require("mockjs")
const id = Mock.mock("@id")
const obj = Mock.mock({
    id: "@id",
    name: "@cname",
    url: "@url",
    date: "@date",
    ip: "@ip",
    description: "@paragraph"
})

console.log(obj)