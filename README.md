**1. What is NPM?**

   Node Package Manager is a package manager and a software register that allows one to install, uninstall, and update packages in the Node.js environment.
   
**2. What is SPA?**

   Single Page Application is a web application that dynamically rewites the a single page as the user interacts with it rather than follow the deafult way of reloading an entirely different page.
   
**3. What is the event loop?**

   Javascript essentially has a runtime model that is based on an event loop which continually looks for pending events in a queue and executes callback functions, ensuring that I/O operations don't block the execution of other code. Moreover, it is responsible for executing code,collecting and processing events.
   
**4. What is the difference between export x and export default x? How do you import them differently?**

   **export default x:** It allows one to export a single 'main' value as the default export in a module. While importing, it allows one to use a custom name to represent the exported value.
   
  **export x:** It is also known as 'named export' because it allows one to export multiple values but with specific names. While importing, one can only use the exact exported names enclosed in curly braces.
   
**5. Why do you use className as a property in React and not class?**

   This is because 'class' is a reserved keyword in javascript and since in react we use JSX, a javascript extension, we have to follow that convention to avoid any conflicts.
   
**6. Why should you not write the following? What will happen?**

```
<button onClick={setCounter(counter + 1)}> +1 </button>
```
One should not write the function in the above manner because it causes an infinite loop. The loop is as a result of setCounter being invoked every time the react component is rendered, changing the current state declared using 'useState()' even before the user clicks the button. Every time the state is changed, the react component has to be rerendered which then loops infinitely causing the 'Too many rerenders' error.

**7. What is object deconstruction and how is it connected to React components (example)?**

   Object destructuring is the process of extracting values from objects and binding them to variables. This makes code more concise and easy to read and understand.

   In regard to React components, object destructuring is often used to extract values from objects, such as state and props.
   
   **For example:**
   ```
   function StudentProfile(props) {
    // destructing name, age and course from props
       const{name, age, course} = props;
       return (
          <div>
              <h1>Name: {name}!</h1>
              <p>Age: {age}</p>
              <p>Course: {course}</p>
         </div>
      );
    };


   //usage
   function App() {
        return (
            <div>
                  {/* Using StudentProfile and passing the props */}
                  <StudentProfile name="John" age=25, course="Journalism" />
            </div>
      );
    };
```
**8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?**

   It is possible because of the use of JSX, javascript extension, which allows one to write HTML-like code on javascript files. It looks like HTML/XML but it is entirely JSX.
   What makes possible under the hood is the Babel tool which compiles JSX into React.createElement calls, which ultimately creates a virtual DOM representation of the code that browsers can easily understand.
   
   **For example:**
   
   JSX
   ```
   <button style={{ color: 'blue' }}>Press me</button>
   ```

   Virtual DOM
   

   ```
   React.createElement(
      'button',
       { style: { color: 'blue' } },
      'Press me'
   );
  ```

**9. What is async/await? Bring an example**

   **async:** This keyword allows one to write promises-based code as if it was synchronous and ensures that execution thread is not broken. Async functions will always ensure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
    
   **For example:**
   
     async function greeting() {
         return Promise.resolve("hey");
      }
      
      greeting().then(alert);
     
   The function above always returns the value "hey" no matter what.

   **await:** This keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.
   
   **For example:**

   ```
   async function greeting() {
       let timer = new Promise((resolve, reject) => {
           setTimeout(() => resolve("hey"), 3000)});
       let result = await timer; // waits until the promise resolves
       alert(result); 
    }
    
   greeting();
   ```
  

   The function above displays 'hey' after 3 seconds because the variable 'result' has to wait until the promise is resolved before the value is stored in it and in turn, displayed.
   
**10. What is a Promise? Bring an example**

   A promise is an object that represents the eventual completion or failure of an asynchronous operation. In other words, it will produce a single value over time that will represent either the completion or failure of the asychronous operation.
   
**For example:**
```
let similarity = new Promise(function (resolve, reject) {
    const x = "Ilovemath";
    const y = "Ilovemathy"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
}); 
promise.
    then(function () {
        console.log('Success, the texts match');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
  ```

The example above shows how promise can be used. In this case, "Some error has occurred", will be returned because the promise failed to resolve and thus rejected.
