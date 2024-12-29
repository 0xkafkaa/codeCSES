// TableSearch.tsx
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TableSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function TableSearch({ value, onChange }: TableSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        placeholder="Search questions..."
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="pl-8 text-sm"
      />
    </div>
  );
}
