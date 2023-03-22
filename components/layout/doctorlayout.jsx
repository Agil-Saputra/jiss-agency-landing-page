import React from "react";

export default function doctorlayout({ children, style }) {
  return (
    <div className={"flex items-start gap-10 justify-between max-xl:flex-col " + style }>
      {children}
    </div>
  );
}
