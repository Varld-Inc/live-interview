import { buildAPIUrl } from "../lib/utils";
import { AddUserFormData, User, Post } from "../types";

export async function createUser(data: AddUserFormData) {
  try {
    await fetch(buildAPIUrl("user"), {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUsers(): Promise<User[]> {
  try {
    return await (await fetch(buildAPIUrl("user"))).json();
  } catch (error) {
    return [];
  }
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    return await (await fetch(buildAPIUrl("post"))).json();
  } catch (error) {
    return [];
  }
}

export async function fetchUser(id: string): Promise<User> {
  try {
    return await (await fetch(buildAPIUrl(`user/${id}`))).json();
  } catch (error) {
    return { id: 0, name: "", lastName: "", email: "", age: 0 };
  }
}
