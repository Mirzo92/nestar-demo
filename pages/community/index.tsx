"use client";
import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../property/libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
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

export default withLayoutBasic(Community);
