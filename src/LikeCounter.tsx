import React, { useState } from "react";

export function LikeCounter() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>{likes} 👍</button>;
}
