"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
// import { ExternalLink } from "lucide-react";
export type Question = {
  id: number;
  name: string;
  question: string;
  tags: string;
};

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "name",
    header: "Problem",
    size: 20,
    cell: ({ row }) => {
      const link = `https://cses.fi/problemset/task/${row.getValue("id")}`;

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
    accessorKey: "id",
    header: "Action",
    size: 20,
    cell: ({}) => (
      <div className="text-center">
        <Button>View Solution</Button>
      </div>
    ),
  },
];
