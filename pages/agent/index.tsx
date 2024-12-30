"use client";
import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";

const AgentList: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENTS LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
