// first letter of react components should be capital (to diff from HTML tags)
// export default exports the main (and only) function from that file
// everything in {} (when surrounded by return) is javascript
// all data processing shold be done before resturn statement
import { useState } from "react";

const Mybutton = () => {
  return <button> basic button</button>;
};

const user = {
  name: "siddharth",
  age: "28",
  role: "engineer",
};

const prodlist = [
  { product: "fruit", islow: true, id: 1 },
  { product: "veggies", islow: false, id: 2 },
  { product: "bread", islow: false, id: 3 },
  { product: "milk", islow: false, id: 4 },
];

const List = prodlist.map(x =>
  <li key={x.id} style={{color: x.islow ? 'red':'green'}}> {x.product} </li>);

const App = () => {
  console.log(List)

  return (
    <div className="card">
      <h1>basic React tutorial</h1>
      <h3>simple buttom component</h3>
      <Mybutton />
      <h3>user variables</h3>
      <p>user name: {user.name}</p>
      <p>user age: {user.age}</p>

      <h3>array to list via maps</h3>
      {List}

    </div>
  );
};

export default App;
