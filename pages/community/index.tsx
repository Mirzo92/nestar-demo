"use client";
import { useState } from "react";

const Community = () => {
    console.log('community component - pages router')
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PRESSME
      </button>
    </div>
  );
};

export default Community;
