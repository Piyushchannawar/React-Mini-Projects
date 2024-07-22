import './App.css'
import Question from './Components/Question';

const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.",
  },
  {
    id: 2,
    question: "What are the key features of React?",
    answer:
      "Key features of React include Virtual DOM for efficient updates, JSX for declarative UI, component-based architecture for reusability, and unidirectional data flow for predictability.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows writing HTML elements and React components in the same file. It provides a more concise and readable way to describe the UI components.",
  },
  {
    id: 4,
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application. They are independent and reusable pieces of code that represent a part of the UI. Components can be either functional or class-based.",
  },
  {
    id: 5,
    question: "What is the difference between state and props in React?",
    answer:
      "State is internal to a component and can be changed over time by the component itself. Props (short for properties) are passed to a component from its parent and remain fixed throughout the component's lifetime.",
  },
  {
    id: 6,
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model) maintained by React. It allows React to perform efficient updates by minimizing DOM manipulation operations.",
  },
  {
    id: 9,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that let you use state and other React features in functional components. They allow you to add state and lifecycle methods to functional components without using classes.",
  },
];



function App() {

  return (
   <div>
     <Question data={ data} />
   </div>
  )
}

export default App
