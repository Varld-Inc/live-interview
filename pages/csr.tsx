import AddUserForm from "../components/AddUserForm";
import MainLayout from "../layouts/MainLayout";
import { buildAPIUrl } from "../lib/utils";
import { AddUserFormData } from "../types";

/* 
 ** CSR page is for user creating
 **
 ** 1. Implement backend api route for user creating
 ** 2. Implement AddUserForm component
 ** 3. Implement submit method for the AddUserForm, use "AddUserFormData" type
 ** 4. Implement POST api call to create a user,
 **    to build url you should use "buildAPIUrl" method and pass endpoint
 */

export default function CSRPage() {
  // TODO: implement submit handler with API call

  return (
    <MainLayout>
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Add user page</h1>
        <AddUserForm />
      </section>
    </MainLayout>
  );
}
