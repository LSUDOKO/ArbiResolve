import React from "react";

interface RoundedSectionProps {
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
  id?: string;
}

export default function RoundedSection({ 
  children, 
  className = "", 
  darker = false,
  id 
}: RoundedSectionProps) {
  return (
    <section 
      id={id}
      className={`rounded ${darker ? "darker" : ""} ${className}`}
    >
      <div className="content-wrapper">
        {children}
      </div>
    </section>
  );
}
