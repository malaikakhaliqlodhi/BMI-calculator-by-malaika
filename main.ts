#!/usr/bin/env Node
import inquirer from "inquirer"
let answers=await inquirer.prompt([
    {
type:"numbers",
name:"weightinkg",
message:"enter your weight in kg"
 },   {
    type:"numbers",
    name:"heightinmeters",
    message:"enter your height in meters"
     },
])
let BMI=answers.weightinkg/(answers.heightinmeters * answers.heightinmeters)
console.log ("your BMI is:" ,BMI)