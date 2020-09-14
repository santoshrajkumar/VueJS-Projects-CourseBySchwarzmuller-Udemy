## The Computed Property of Vue

- While rendering a template, Vue always runs the functions methods wherever they are called.
- For some applications, running some methods every time during rendering some change in the template is not desired (when those methods are not related to the change). In such cases we can use Computed Property to store the values. 
- Computed Property looks like a function. But they are called w/o the paretheses. 
- In the example, secondCounter is not related to result method. But, when secondCounter button is pressed, the result method runs.