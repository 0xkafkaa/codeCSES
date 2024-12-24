"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
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
    size: 25,
    cell: ({ row }) => {
      const link = `https://cses.fi/problemset/task/${row.getValue("id")}`;

      return (
        <div className="underline flex gap-1 justify-center items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            {row.getValue("name")}
            <ExternalLink width={16} height={16} />
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "question",
    header: "Description",
    size: 50,
  },
  {
    accessorKey: "tags",
    header: "Category",
    size: 25,
    cell: ({ row }) => {
      // return <div className="text-center">{row.getValue("tags")}</div>;
      return (
        <div className="text-center">
          <Badge
            variant={"outline"}
            className="bg-slate-200 text-customBlack font-normal shadow-none rounded-xl px-4 py-2"
          >
            {row.getValue("tags")}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "Action",
    size: 25,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("id")}</div>;
    },
  },
];
