"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Projects = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  technologyId: number;
};

const DeleteProject = ({ project }: { project: Projects }) => {
  const router = useRouter();

  const handleDelete = async (projectId: number) => {
    await axios.delete(`/api/projects/${projectId}`);
    router.refresh();
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleDelete(project.id)}
        className="border border-neutral-500 px-2 py-1 rounded-md"
      >
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProject;
