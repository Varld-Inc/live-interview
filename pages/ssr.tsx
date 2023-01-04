import UserList from "../components/UserList";
import MainLayout from "../layouts/MainLayout";
import { fetchPosts, fetchUsers } from "../lib/api";
import { User } from "../types";

/*
 ** SSR page should display list of users
 **
 ** 1. Implement backend api route to get all users
 ** 2. Get Posts and Users on server side
 ** 3. Calculate total posts number for each user
 ** 4. Create custom data structure where each user has totalPosts property
 ** 5. Pass that structure as "users" prop to the page
 */

export default function SSRPage({ users }: { users: User[] } = { users: [] }) {
  return (
    <MainLayout>
      <section className="h-full space-y-2">
        <h1 className="text-3xl font-bold">Users page</h1>
        <UserList items={users} />
      </section>
    </MainLayout>
  );
}
