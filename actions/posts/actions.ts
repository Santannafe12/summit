"use server";

import prisma from "@/lib/db";
import { itemsPerPage } from "../utils/actions";

export async function fetchPosts(currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage;

  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      title: "asc",
    },
    take: itemsPerPage,
    skip: offset,
  });

  const count = await prisma.post.count();

  const totalPages = Math.ceil(count / itemsPerPage);

  return { posts, totalPages };
}
