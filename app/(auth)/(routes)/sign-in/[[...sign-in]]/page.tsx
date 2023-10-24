import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <SignIn />
      <h1>demo email: zakm6911@gmail.com(with teachers mode)</h1>
      <h1>demo email2: zekariyasberihun281@gmail.com(without teachers mode) </h1>
      <h1>demo password: 12345678(for all users)</h1>
    </div>
  );
}
