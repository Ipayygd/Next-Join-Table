import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Projects } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (request: Request, { params } : { params: { id: string }}) => {
  const projects = await prisma.projects.delete({
   where: {
     id: Number(params.id)
   }
  })
  return NextResponse.json(projects, {status: 200}); 
}