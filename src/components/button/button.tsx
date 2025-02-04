interface Props{
    label:string;
    onCLick:()=>void;
}
export const Button =({label,onCLick}:Props) => {
  return (
    //Tambien se podria hacer ()=>onclick() pero esto crea una funcion 
    // que llama a la funcion existente onclick lo que hace que ocupe 
    // espacio creando una funcion nueva
    <button className="" onClick={onCLick}>
        {label}
    </button>
  )
};


