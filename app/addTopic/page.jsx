"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        name="title"
        className="border border-slate-500 px-8 py-2"
        placeholder="topic Title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        name="description"
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="topic Description"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
