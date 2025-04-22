import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <main className="center">
      <PropagateLoader color="#145050" />
    </main>
  );
}
