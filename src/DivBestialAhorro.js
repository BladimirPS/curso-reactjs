
export function DivBestialAhorro({banco, nombre}) {
    //console.log(banco);
    
    const condition = 5;
    if (condition > 10) {
      return (
        <>
          <h1>Bestial Ahorro {banco}</h1>
          <p>¡Ahorra en grande!</p>
        </>
      );
    } else {
      return (
        <>
          <h1>Tarjeta de crédito {nombre} 🤣</h1>
          <p>¡Paga en grande!</p>
        </>
      );
    }
  }
/*
export function DivBestialAhorro() {
    return <h1>Bestial Ahorro</h1>;
} */

export function UserGreeting({titulo, edad}) {
    return <h1>Welcome back! {titulo}, tu edad es: {edad}</h1>;
  }