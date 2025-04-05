import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PromoLayout({ children }: Props) {
  return (
    <div>
      <div className="flex border-b-4 w-full justify-center h-10">
        <div className="py-2">20% off for next 2 days</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
