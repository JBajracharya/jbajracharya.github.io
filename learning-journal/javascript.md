[Back to Home](README.md)

## **Javascript**

As HTML defines the content of the web page, CSS specifies the layout of the web page, Javascript programs the behavior of the web pages. It is the layer that makes the web pages interactive and enhance the usability of the site. Javascript is added last after HTML and CSS. It is a best practice to have a separate javascript file than having javascript on the html page because it allows html page to load first and minimize interruption while the javascript is loading on the background.

### Statement

A script is a series of instruction or steps that the computer follows on-by-one and each instruction or step is known as statement. 

```
example:

var today= new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting= 'Good evening!';
}
else if (hourNow > 12) {
    greeting = 'Good afternoon!';
}
else if (hourNow > 0) {
    greeting = 'Good morning!';
}
else {
    greeting = 'Welcome! ';
}

document.write('<h3>' + greeting + '</h3>'); 
```

### Some rules in javscript

- **Each line of code is a statement and ends with semicolon.**

`var today= new Date();`

- **Curly braces indicates the start and end of the code block.**

```
else {
    greeting = 'Welcome! ';
}
```
- **Javascript is case sensitive.**

`hourNow is not equal to HOURNOW or HourNow`

- **Comment a code with `/*---*/` for a block of comments or `//` for single line comment.**

`/* Th i s script displays a greeting to
the user based upon the current time.
It is an example from JavaScript & jQuery book */`

`// Create a new object`

### Variable

Variable is a temporary storage where the data is stored. The data in the specific variable can change each time a script is run.

**Declaring variable**

```
var quantity;

Here var is the keyword and quantity is the variable name.
```

**Assigning value to variable**

```
quantity = 5;

Here quantity is variable name and 5 is the variable value.

```
[Back to Home](README.md)
