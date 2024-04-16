[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3aNDMX3O)
# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

### Analysis
The worst-case for my bottom up function is $\Theta(n)$ because I have one if else statement, the if is constant time and the else has one for loop. That for loop iterates from i=1 to i <= n; so the complexity is $\Theta(n)$, values are updated in the for loop but all in constant time. <br/>
<br/>

### Sources Used
I wrote the program by myself and I came up with a Big Theta alone. I was unsure if it was correct so I checked against classmate's (dynamic-euler-IshitaPatel18, dynamic-euler-noah-mulvaney and dynamic-euler-MelkMan419) analyses. My Big Theta was the same as theirs, but they had more explanation about why that was the Big Theta. So I added to my README more information about the parts of the function that run in constant time and why it is specifically n, not less than n. <br/>
<br/>
I used classmate's analyses, but I wrote the function alone, I came up with an Big Theta alone. I saw that classmates wrote about parts of their code that run in constant time, so I also wrote about the parts of the function that run in constant time. I also saw their explanation about why it was n, I was uncertain about this part, so I used their idea to write my own explanation of the Big Theta that I had already came up with. <br/>
