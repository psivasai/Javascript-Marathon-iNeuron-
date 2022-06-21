/*
1) Explain the use of JavaScript? ( or What you can do using a JavaScript)

    Javascript is mostly used in building web applications and mobile applications
    It can also be used to validate the user data

2)What is the difference between client-side and server-side?

    Client side means the operations are performed on the local computer
    Example:  If we want to store some data for temporary purpose then we will use local storage provided by the browser. If we want to access the data stored in the browser local storage, we can easily get the data without sending a request to the servet. In this way the operations are performed in local computer. If we perform operations on client side then we can reduce the server charges.

    Server-side means the operations are performed on the server
    Example:  If we want some data from database then we send a server request to get the data from database. If we send more requests to the server then maintaince charges of the server will increase.

3)What is Nodejs?

    Nodejs is a open source platform and it is used to build backend for web applications and mobile applications. Nodejs is having single threaded nature and asynchronous programming nature due to this nodejs is more memory efficient.

    Node.js can be used to add, delete, modify data in the database

4)Explain Scope in JavaScript?

    Scope in Javascript is of two types 1)Local and 2)Global

    we can declare a variable ny using three keywords 1) let 2) var 3)const. 

    Here both let and const are local scope variables and var is global scope variable

    Example: 
        function scope() {
        var mentor = "Hitesh Sir"
        let name = "sai"
        console.log(name);
        console.log(mentor);
    }
    console.log(mentor);  // It shows error
    scope() 
    Even though var is a global scope variable we cannot access outside of the function, because if any scope(local/global) variable declared in a function (block level) it is limited to that particular block of code or to its children only.


5)JavaScript is asynchronous or synchronous?
    JavaScript is synchronous programming language and it performs only one operation/task at a time.

6) JavaScript is Single-threaded or Multi-threaded?
    Single- threaded

7) Explain DOM in your own word?
    DOM stands for Document Object Model. DOM is an interface that define how the browser should read the HTML document. With the help of Javascript we can able to manipulate the structure of the HTML document.
*/

