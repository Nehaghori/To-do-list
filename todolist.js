"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
while (true) {
    var input = await inquirer_1.default.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: 'add todo item in the listing'
        },
        {
            name: "addMore",
            type: 'list',
            choices: ["yes", "no"]
        }
    ]);
    var Todoitem = input.Todoitem, addMore = input.addMore;
    todos.push(Todoitem);
    if (addMore == "no") {
        console.log("todolist:");
        for (var i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        break;
    }
}
