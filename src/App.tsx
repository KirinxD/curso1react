import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";
import { useFetch } from "./hooks";

const url = "";

interface Data{
  name:string;
  lastName:string;
  age:number;
}
function App() {
  const [count, setCount] = useState(0);
  const { data, error, loading } = useFetch<Data>(url);

  if (loading) {
    return <div>Cargando</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const countMore = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <Button label={`El valor es ${count} `} onCLick={countMore}></Button>
    </>
  );
}

export default App;
