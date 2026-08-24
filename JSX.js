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
