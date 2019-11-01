[Back to Home](README.md)


## **Operators and Loops**

### Comparison operators

**Is equal to `==`**

Compares two value to see if they are the same. It ignores value type.

```
"Hello" == "Goodbye" returns false
"hello" == "hello" returns true
'5' == 5 returns true although they are
different types
```

**Is not equal to `!= `**

Compares two values to see if they are not the same.

```
'Air' != 'water' returns true
'Air' != 'Air' returns false
'5' != 5 returns false
```

**Strict equal to `===`**

Compares two values to check if both data type and value are the same.

```
'3' === 3 returns false
'3' === '3' returns true
```
**Strict not equal to `!==`**

Compares two values to check if both data type and value are not the same.

```
'3' != 3 returns true

'3' != '3' returns false
```

### Logical operators

Logical operators allows you to compare the result of more than one comparison operator. 

**Logical and `&&`**

Both sides of `&&` operator must be true for the expression to return true

```
((2 < 5) && (3 >= 2))
returns true because both expression are true

((2 < 5) && (3 >= 6))
returns false because right side expression is false

```

**Logical or `||`**

Only one of the expression has to be true to return true.

```
((2 < 5) && (3 >= 2)) returns true

((2 < 5) && (3 >= 6)) returns true
```

**Logical not `!`**

This operators takes a single boolean value and inverts it.

```
!(2 < 1) returns true
```

## **Loops**

### For loop

For loop runs the code for a specific number of time. It uses counter as a condition.

```
for ( var i = 0; i < 10; i++) {
    document.write (i);
}

i = 0, initial value of the counter is set to zero
i < 10, counter ends at 9 and at 10 it exits the loop
i++, counter increases by increment of 1
```

### While loop
While loop runs the code as long as the condition is true. It is useful when you don't know how many times run the code. 

```
while (i < 10) {
    document.write ("hello");
}
here as long as 'i' is less than 10, it continues to loop and execute the code.
```

[Back to Home](README.md)
