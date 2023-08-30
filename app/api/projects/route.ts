import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Projects } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body : Projects = await request.json();
  const projects = await prisma.projects.create({
    data:{
      title: body.title,
      category: body.category,
      description: body.description,
      image: body.image,
      link: body.link,
      technologyId: body.technologyId
    }
  })
  return NextResponse.json(projects, {status: 201});
}