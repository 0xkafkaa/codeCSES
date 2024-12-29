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
  const tagNames = [
    "Introductory Problems",
    "Sorting and Searching",
    "Dynamic Programming",
    "Graph Algorithms",
    "Range Queries",
    "Tree Algorithms",
    "Mathematics",
    "String Algorithms",
    "Geometry",
    "Advanced Techniques",
    "Additional Problems",
  ];

  return (
    <div>
      <DataTable columns={columns} data={csesData} tags={tagNames} />
    </div>
  );
}
