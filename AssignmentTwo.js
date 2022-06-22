/*
1)What is lexical structure?
    Lexical structure means it defines set of rules on how we should write code and most importantly how we should not write code. For example how to declare variables, $name,_name,name (accepted formats)
    #name,&name(Not accepted)

2)What is Unicode?
    In any programming language we can define special characters with the help of unicodes.In Javascript Unicode value consists of /u followed by HexaDecimal values
    Example: ï (/u00EF), ï (/u0069)
    Even though both the characters looking similar but it's not. If we are declaring unicode characters in our code then keeping its hexadecimal value is always a good choice

3)Explain all the keywords present in the JavaScript with examples.
    Some of the keywords are return,break,continue

    return : return keyword is used in function to end the current execution and return the value 
             function add(x,y) {
   ```````````return x+y;
``````````````}
              console.log(add(1,2))  --> output is 3          
                
    break:  Once the break statement executes then the entire block/function will be terminated
                let i = 0;
                while (i < 6) {
                    if (i === 3) {
                        break;
                    }
                    i = i + 1;
                }
                console.log(i);  --> output is 3

    continue: Whenever continue statement excecutes then, the current loop will be terminated and remaining iterations will continue like before

                for (let i = 0; i < 10; i++) {
                    if (i === 3) {
                        continue;
                    }
                    console.log(i)  --> output is 012456789
                }

4)What are shorthand operators, explain with a suitable example?
    In Javascript we have many shorthand operators but most commpnly used shorthand operators are addition (a+=b), subraction (a-=b), multiplication (a*=b), divison (a/=b) and exponential operator (a**=b)
    Javascript engines read this (a+=b) as (a=a+b) 
                                 (a-=b) as (a=a-b)
                                 (a*=b) as (a=a*b)
                                 (a/=b) as (a=a/b)
                                 (a**=b) as (a=a**b)
    This type of declarations are useful when we want to perform mathematical opetations and then store the result in the same variables. In this cases we dont need to create extra variables just to store the results.

5)What is “use Strict” in JavaScript?
    "use strict" was introduced in ECMA Script version 5. If we use "use script" at the top of the code file then it will not allows us to use a variable name without declaring variable name. If we write "use script" in the function then that function only uses strict mode and rest of the code runs fine.

    In JavaScript, if we type a alphabetical character(variable name) unknowingly then Javascript engine treats is as new global variable to avoid this situation "use strict" mode was introduced. In strict mode, this will throw an error and it is impossible to unknowingly create a global variable.

    Example:
        "use strict";
        x = 5; (Throws Error because x is not defined)
        console.log(x);

        "use strict";
        let x = 5; (Runs fine as x is defined)
        console.log(x);

    ----------------------------------------------------

        x = 5 // Here it works fine because "use script" is in function.
        function myFunction() {
            "use strict"; // scope of this one is only limited to function
            let name = "siva sai";
            console.log(name);
        }
       

*/
