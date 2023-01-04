import { User } from "../../types";
import UserListItem from "./UserListItem";

export default function UserList({ items }: { items: User[] }) {
  if (!items) return null;

  return (
    <ul className="space-y-4 overflow-auto max-h-[390px]">
      {items.map((user) => (
        <UserListItem key={user.id} data={user} />
      ))}
    </ul>
  );
}
