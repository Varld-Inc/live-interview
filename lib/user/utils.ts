import { User, Post } from "../../types";

export function countUsersTotalPosts(posts: Post[]): { [key: string]: number } {
  if (!posts) return {};

  return posts.reduce((acc: { [key: string]: number }, post) => {
    if (acc[post.userId]) {
      acc[post.userId]++;
    } else {
      acc[post.userId] = 1;
    }

    return acc;
  }, {});
}

export function setUsersTotalPosts(
  users: User[],
  usersTotalPosts: { [key: string]: number }
): User[] {
  if (!users || !usersTotalPosts) return [];

  return users.map((user) => ({
    ...user,
    totalPosts: usersTotalPosts[user.id] || 0,
  }));
}
