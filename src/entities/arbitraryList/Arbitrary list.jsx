import React from "react";

export const ArbitraryList = ({ items }) => {
  return (
    <>
      
      <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    </>
    
  );
}