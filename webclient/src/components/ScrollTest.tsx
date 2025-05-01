import React from "react";

export default function ScrollableContent() {
  const paragraphs = new Array(20).fill("asdasdasdasdasdasdasdasdasd");

  return (
    <div
      style={{
        padding: "2rem",
        width: "100%",
        margin: "0 auto",
        alignSelf: "center",
        backgroundColor: "#424141",
      }}
    >
      <h1>Scrolling test</h1>
      {paragraphs.map((para, index) => (
        <p key={index} style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          {para}
        </p>
      ))}
    </div>
  );
}
