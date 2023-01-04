import { fetchUser, fetchUsers } from "../../lib/api";
import MainLayout from "../../layouts/MainLayout";
import { User } from "../../types";

/*
 ** SSG page should display user information (full name, email, age)
 **
 ** 1. Generate paths for each page where a page "id" is "user.id",
 **    if page doesn't exists return 404
 ** 2. Get content for each page and pass user information as prop "user"
 */

export default function SSGPage({ user }: { user: User }) {
  return (
    <MainLayout>
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">User page</h1>
        <article className="space-y-2">
          <h2 className="font-medium">{`${user?.name} ${user?.lastName}`}</h2>
          <p>Email: {user?.email}</p>
          <p>Age: {user?.age}</p>
        </article>
      </section>
    </MainLayout>
  );
}
