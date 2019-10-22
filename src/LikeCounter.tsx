import React, { useState } from "react";

/**
 * Contatore di like
 * @example
 *  <LikeCounter/>
 */
export function LikeCounter() {
  const [likes, setLikes] = useState(0);
  // likes è lo stato attuale
  // setLikes è la funzione che useremo per modificare lo stato
  // 0 è lo stato iniziale
  return <button onClick={() => setLikes(likes + 1)}>{likes} 👍</button>;
}
