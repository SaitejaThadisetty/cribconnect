import * as React from "react";

export function Avatar({ name }: { name?: string }) {
  // Simple avatar with initials
  const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase() : "U";
  return (
    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-lg text-[#A60000]">
      {initials}
    </div>
  );
}
