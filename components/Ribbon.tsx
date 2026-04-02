import React from "react";

interface RibbonProps {
  items: string[];
}

export default function Ribbon({ items }: RibbonProps) {
  // Triple the items to ensure smooth infinite wrap
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="ribbon-container">
      <div className="ribbon-list">
        {displayItems.map((item, index) => (
          <span key={index} className="ribbon-item">
            {item}<em>.</em>
          </span>
        ))}
      </div>
      <div className="ribbon-list" aria-hidden="true">
        {displayItems.map((item, index) => (
          <span key={`dup-${index}`} className="ribbon-item">
            {item}<em>.</em>
          </span>
        ))}
      </div>
    </div>
  );
}
