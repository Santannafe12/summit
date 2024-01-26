"use server";

import prisma from "@/lib/db";

export default async function getBestDestinations() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      image: true,
      days: true,
      price: true,
    },
    take: 6,
  });

  return posts;
}
