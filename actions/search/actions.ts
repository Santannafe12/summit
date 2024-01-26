"use server"

import prisma from "@/lib/db";
import { itemsPerPage } from "../utils/actions";

export async function fetchFilteredPosts(query: string, currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage

  const posts = await prisma.post.findMany({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
    },
    include: {
      categories: {
        select: {
          id: true,
          name: true
        }
      }
    },
    orderBy: {
      title: "asc",
    },
    take: itemsPerPage,
    skip: offset
  });

  const count = await prisma.post.count({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
    },
  });

  const totalPages = Math.ceil(count / itemsPerPage)

  return { posts, count, totalPages };
}
