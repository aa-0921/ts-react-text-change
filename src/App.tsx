
import React, { useState } from "react";

function Text(props:any) {
  return <div style={{ color: "green" }}>{props.text}</div>;
}

export default function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>
        <Text text={text} />
        入力して下さい
      </h1>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
