import React, { useState, useEffect } from "react";

export function TitleChanger() {
  const [title, setTitle] = useState("React Workshop");
  // useEffect è una hook che ci permette di eseguire un comando imperativo al cambiamento di alcuni valori
  // primo parametro: funzione eseguita ogni volta che i valori cambiano
  // secondo parametro: lista dei valori usati all'interno dell'effect
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      page title:{" "}
      <input
        value={title} // bisogna specificare quale sia il valore contenuto nell'input
        onChange={event => {
          // aggiorniamo lo stato prendendo il valore del campo di input dall'evento
          setTitle(event.target.value);
        }}
      />
    </div>
  );
}
