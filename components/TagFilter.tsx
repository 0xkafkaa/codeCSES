import { Button } from "@/components/ui/button";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedTag === null ? "default" : "outline"}
        size="sm"
        onClick={() => onTagSelect(null)}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          size="sm"
          className="text-sm"
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
