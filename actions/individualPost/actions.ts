"use server";

import prisma from "@/lib/db";

export async function fetchPostById(id: number) {
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      location: {
        select: {
          id: true,
          city: true,
          country: true,
          content: true,
          population: true,
        },
      },
    },
  });

  return post
}
