"use client";
import type { Technology } from "@prisma/client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddProject = ({ technology }: { technology: Technology[] }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [tech, setTech] = useState("");

  const router = useRouter();
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/projects", {
      title,
      category,
      description,
      link,
      image,
      technologyId: Number(tech),
    });
    setTitle("");
    setCategory("");
    setDescription("");
    setLink("");
    setImage("");
    setTech("");
    router.refresh();
  };

  return (
    <div className="absolute right-2 top-2">
      <h1>Add Project</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[500px] border border-neutral-500 p-2 grid gap-2 rounded"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent border border-neutral-500 px-2 py-1 rounded-md placeholder:opacity-20"
          placeholder="Title"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-transparent border border-neutral-500 px-2 py-1 rounded-md placeholder:opacity-20"
          placeholder="Category"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-transparent border border-neutral-500 px-2 py-1 rounded-md placeholder:opacity-20"
          placeholder="Description"
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full bg-transparent border border-neutral-500 px-2 py-1 rounded-md placeholder:opacity-20"
          placeholder="Link"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full bg-transparent border border-neutral-500 px-2 py-1 rounded-md placeholder:opacity-20"
          placeholder="Image"
        />
        <div className="grid">
          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="w-full bg-transparent border border-neutral-500 px-2 py-1 rounded-md"
          >
            <option
              value=""
              disabled
              className="w-full bg-neutral-500 text-white px-2"
            >
              Select a Technology
            </option>
            {technology.map((tech) => (
              <option
                key={tech.id}
                value={tech.id}
                className="w-full bg-neutral-500 text-white px-2"
              >
                {tech.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="border border-neutral-500 px-2 py-1 rounded-md"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
