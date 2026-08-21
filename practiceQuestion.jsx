// Q1. Create a component that displays:
// Your name
// Your profession
// A short description
// Use JSX expressions to display variables.

export default function App() {
  const name = "Ankita";
  const role = "Developer";
  const age = 32;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{age}</p>
    </div>
  );
}

// Q2.Create:
// App
// ├── Header
// ├── Main
// └── Footer
// Each should be a separate component.
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
function Header() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}
function Main() {
  return (
    <>
      <h1>App</h1>
    </>
  );
}
function Footer() {
  return <div>© Ankita Dutta | 2026</div>;
}
// 3. Props
//  Create a ProductCard component that receives:
// name
// price
// category
// and displays them.
// Example:
// <ProductCard
//  name="Tomato"
//  price={40}
//  category="Vegetable"
// />

export default function App() {
  return (
    <div>
      <ProductCard name="Tomato" price={40} category="vegetable" />
      <ProductCard name="Potato" price={30} category="vegetable" />
      <ProductCard name="Apple" price={120} category="Fruit" />
    </div>
  );
}

function ProductCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <p>{props.category}</p>
    </div>
  );
}
// Create an array: ******(Revise this q)
// const products = [
//  { id: 1, name: "Tomato", price: 40 },
//  { id: 2, name: "Potato", price: 30 },
//  { id: 3, name: "Carrot", price: 50 }
// ];
// Render all products using ProductCard.

//App.jsx__
import { ProductCard, products } from "./assets/components/Product";
export default function App() {
  return (
    <div>
      <ProductCard />
    </div>
  );
}
//Product.jsx----
const products = [
  { id: 1, name: "Tomato", price: 40 },
  { id: 2, name: "Potato", price: 30 },
  { id: 3, name: "Carrot", price: 50 },
];

export { products };

export function ProductCard() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

//___________________________________________________________________________________

// 5. Children Prop
// Create:
// <Card>
//  <h2>Tomato</h2>
//  <p>₹40/kg</p>
// </Card>
// Inside Card, render the content using children.
//App.jsx--
import { Card } from "./assets/components/Card";

export default function App() {
  return (
    <Card>
      <h2>Tomato</h2>
      <p>₹40/kg</p>
    </Card>
  );
}

//Card.jsx

export function Card({ children }) {
  return <>{children}</>;
}










