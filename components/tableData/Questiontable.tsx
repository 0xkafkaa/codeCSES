import { columns } from "./columns";
import { DataTable } from "./data-table";
import { csesData } from "@/data/data";
// async function getData(): Promise<Question[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }

export default async function QuestionTable() {
  return (
    <div>
      <DataTable columns={columns} data={csesData} />
    </div>
  );
}
