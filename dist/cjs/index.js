"use strict";var e=require("react"),t=require("antd");exports.Button=({text:t="Button",primary:l=!1,disabled:n=!1,onClick:r})=>{const a={background:l?"blue":"white",color:l?"white":"black"};return e.createElement("button",{style:a,disabled:n,onClick:r},t)},exports.Input=({placeholder:t="Text",size:l="small",onChange:n})=>{const r={padding:"large"==l?"10px":"5px"};return e.createElement("input",{type:"text",placeholder:t,style:r,onChange:n})},exports.ModifiedButton=({text:l="Button",primary:n=!1,disabled:r=!1,onClick:a})=>e.createElement(t.Button,{onClick:a,type:n?"primary":"default",disabled:r},l),exports.ModifiedInput=({placeholder:l="Text",size:n="small",onChange:r})=>e.createElement(t.Input,{type:"text",placeholder:l,size:"small"==n?"small":"large",onChange:r});
