//1.
export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to React</p>
    </div>
  );
}
//_____________________________________________________________
//2.
export default function App() {
  return (
    <div>
      <h1>My Profile</h1>
      <h2>Frontend Developer</h2>
      <p>Learning React</p>
    </div>
  );
}
//_____________________________________________________________________
//3.
export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
//_____________________________________________________________________
//4.
export default function App() {
  return (
    <div>
      GreenKart
      <br />
      Fresh vegetables delivered to your door.
    </div>
  );
}
//_____________________________________________________________________
//5.
export default function App() {
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h2>Ankita Dutta</h2>
        <p>Frontend Developer</p>
      </div>
    </div>
  );
}
//_____________________________________________________________________
//6.
export default function App() {
  const name = "Ankita";
  return <div>Hello {name}</div>;
}
//_____________________________________________________________________
//7.
export default function App() {
  const price = 40;
  const quantity = 3;
  return <div>Total: {price * quantity}</div>;
}

//_____________________________________________________________________
//9.
export default function App() {
  return <div>10 + 20 = {10 + 20}</div>;
}
//_____________________________________________________________________
//10.
export default function App() {
  const product = "Tomato";
  const price = 40;
  return <div>{`${product} costs ₹${price}/kg`}</div>;
}
//_____________________________________________________________________
//11.
export default function App() {
  return (
    <div className="card">
      <h2>Tomato</h2>
    </div>
  );
}
//_____________________________________________________________________
//12.
export default function App() {
  return (
    <div className="product-card" id="tomato">
      <h2>Tomato</h2>
    </div>
  );
}
//_____________________________________________________________________
//13.
export default function App() {
  const src_ = "tomato.jpg";
  const alt_ = "Fresh Tomato";
  const width_ = 200;
  return <img src={src_} alt={alt_} width={width_} />;
}
//_____________________________________________________________________
//14.
export default function App() {
  return <input disabled />;
}
//_____________________________________________________________________
//15.
export default function App() {
  return <img src="logo.png" alt="GreenKart Logo" width={150} height={100} />;
}
//_____________________________________________________________________
//16.In JSX, HTML's for attribute must be written as htmlFor.
export default function App() {
  return <label htmlFor="email">Email</label>;
}
//_____________________________________________________________________

//17. 
export default function App() {
  return <h1 style={{ color: "red" }}>Hello</h1>;
}
//_____________________________________________________________________

//18. 
export default function App() {
  return <h1 style={{ color: "green", fontSize: "30px" }}>GreenKart</h1>;
}
//_____________________________________________________________________
//20.
export default function App() {
  return <img src="logo.png" />;
}

//_____________________________________________________________________
//21.
export default function App() {
  return (
    <div>
      <img src="product.jpg" />
      <input type="text" />
      <br />
      <hr />
    </div>
  );
}
//_____________________________________________________________________
//22.
export default function App() {
  const isLoggedIn = true;
  return <div>{isLoggedIn ? "Welcome back" : "Please login"}</div>;
}
//_____________________________________________________________________
//23.
export default function App() {
  const inStock = false;
  return <div>{inStock ? "Available" : "Out of stock"}</div>;
}
//_____________________________________________________________________
//24.
export default function App() {
  const age = 20;
  return <div>{age >= 18 ? "Adult" : "Minor"}</div>;
}
//_____________________________________________________________________
//25.
export default function App() {
  const isAdmin = true;
  return <div>{isAdmin && "Admin Panel"}</div>;
}
//_____________________________________________________________________
//26.
export default function App() {
  const fruits = ["Apple", "Mango", "Banana"];
  return (
    <div>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}
//_____________________________________________________________________
//27.
export default function App() {
  const fruits = ["Apple", "Mango", "Banana"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
//_____________________________________________________________________
//28.
export default function App() {
  const products = [
    { id: 1, name: "Tomato", price: 40 },
    { id: 2, name: "Potato", price: 30 },
    { id: 3, name: "Carrot", price: 50 },
  ];
  return products.map((product) => (
    <div key={product.id}>
      <p>
        {product.name}- ₹{product.price}
      </p>
    </div>
  ));
}
//_____________________________________________________________________
//29.
export default function App() {
  const products = [
    { id: 1, name: "Tomato", price: 40 },
    { id: 2, name: "Potato", price: 30 },
    { id: 3, name: "Carrot", price: 50 },
  ];
  return products.map((product) => (
    <div key={product.id}>
      <p>{product.name}</p>
      <p>₹{product.price}/Kg</p>
    </div>
  ));
}
//_____________________________________________________________________
//30.
export default function App() {
  const products = [
    { id: 1, name: "Tomato", price: 40 },
    { id: 2, name: "Potato", price: 30 },
    { id: 3, name: "Carrot", price: 50 },
  ];
  return products.map((product) => (
    <div key={product.id}>
      {/*This is the product section*/}
      <p>{product.name}</p>
      <p>₹{product.price}/Kg</p>
    </div>
  ));
}

//_____________________________________________________________________
//31.

export default function App() {
 
  return (
    <div>
      {/* Product section */}
      <h1>Products</h1>
    </div>
  );
}
//_____________________________________________________________________
//32.
export default function App() {
  return (
    <>
      <p>Products</p>
      <p>Fresh vegetables</p>
    </>
  );
}
//_____________________________________________________________________
//33.
export default function App() {
  return (
    <>
      <h1>Products</h1>
      <p>Fresh vegetables</p>
    </>
  );
}
//_____________________________________________________________________
//34.
export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <img src="logo.png" />
    </div>
  );
}
//_____________________________________________________________________
//35.
export default function App() {
  return (
    <div className="card">
      <h1>Tomato</h1>
    </div>
  );
}
//_____________________________________________________________________
//36.
export default function App() {
  const name = "Ankita";
  return <h1>Hello {name}</h1>;
}
//_____________________________________________________________________
//37.
export default function App() {
  return <h1>{10 + 0}</h1>;
}
//_____________________________________________________________________
//38.
export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <p>Fresh vegetables</p>

      <footer>GreenKart</footer>
    </div>
  );
}
