"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
// import { Button } from "../ui/button";
// import { ExternalLink } from "lucide-react";
import CppCodeDialog from "../Solution";
export type Question = {
  id: number;
  name: string;
  question: string;
  tags: string;
  solution: string;
};

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "name",
    header: "Problem",
    size: 20,
    cell: ({ row }) => {
      const id = row.original.id;
      const link = `https://cses.fi/problemset/task/${id}`;

      return (
        <div className="underline flex gap-1 justify-center items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            {row.getValue("name")}
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "question",
    header: "Description",
    size: 40,
  },
  {
    accessorKey: "tags",
    header: "Category",
    size: 20,
    cell: ({ row }) => (
      <div className="text-center">
        <Badge
          variant="outline"
          className="bg-slate-200 text-customBlack font-medium text-sm shadow-none rounded-xl px-4 py-2"
        >
          {row.getValue("tags")}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "solution",
    header: "Action",
    size: 20,
    cell: ({ row }) => (
      <div className="text-center">
        {/* <Button>View Solution</Button> */}
        <CppCodeDialog code={row.getValue("solution")} />
      </div>
    ),
  },
];
