"use strict"

const ps = require("prompt-sync")

const prompt = ps();

let name = prompt("Enter your Name: " )

console.log(`Hello ${name}`)
