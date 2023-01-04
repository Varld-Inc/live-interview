import Link from "next/link";
import { User } from "../../types";

export default function UserListItem({ data }: { data: User }) {
  return (
    <li className="duration-100 transition-colors rounded-md hover:bg-slate-300">
      <Link className="" href={`/ssg/${data.id}`} passHref>
        <article className="p-2">
          <h2 className="font-medium">{`${data.name} ${data.lastName}`}</h2>
          <p>Email: {data.email}</p>
          <p>Total posts: {data.totalPosts}</p>
        </article>
      </Link>
    </li>
  );
}
