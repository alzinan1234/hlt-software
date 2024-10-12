"use client";
import { useState } from "react";

export default function Notices() {
  // Sample data for notices
  const [notices] = useState([
    {
      id: 1,
      title: "Monthly Meeting",
      date: "2024-10-15",
      description: "There will be a monthly meeting to discuss all activities.",
    },
    {
      id: 2,
      title: "Membership Payment Deadline",
      date: "2024-10-20",
      description:
        "All members must submit their monthly payments by the 20th of this month.",
    },
    {
      id: 3,
      title: "Annual Event Announcement",
      date: "2024-12-01",
      description:
        "Join us for the annual event and celebration on December 1st.",
    },
    {
      id: 4,
      title: "New Membership Program",
      date: "2025-01-01",
      description:
        "We are introducing a new membership program with exciting benefits.",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Notice Board</h1>
        <ul className="space-y-4">
          {notices.map((notice) => (
            <li
              key={notice.id}
              className="bg-blue-100 p-4 rounded-md shadow-md border border-blue-200"
            >
              <h2 className="text-xl font-semibold">{notice.title}</h2>
              <p className="text-gray-600">Date: {notice.date}</p>
              <p className="mt-2">{notice.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
