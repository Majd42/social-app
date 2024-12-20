"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (!file) {
      return setError("Please Provide a file ");
    }
    formData.append("image", file);
    const result = await axios.post("/api/test", formData);
    console.log(result);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) =>
            e.target.files ? setFile(e.target.files[0]) : setFile(null)
          }
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
