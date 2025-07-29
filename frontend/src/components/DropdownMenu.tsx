import React from "react";
import Link from "next/link";
import { Category } from "@/types/category";

type Props = {
  categories: Category[];
  selectedCategoryId?: string;
  onClose: () => void;
  onCategorySelect: (id: string) => void;
};

export default function DropdownMenu({
  categories,
  selectedCategoryId,
  onClose,
  onCategorySelect,
}: Props) {
  return (
    <div className="absolute mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <button
            onClick={() => {
              onCategorySelect("");
              onClose();
            }}
          >
            All Categories
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => {
                onCategorySelect(cat.id);
                onClose();
              }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
