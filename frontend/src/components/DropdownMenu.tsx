import React from "react";
import Link from "next/link";
import { Category } from "@/types/category";

type Props = {
  categories: Category[];
  selectedCategoryId?: string;
  onClose: () => void;
};

export default function DropdownMenu({
  categories,
  selectedCategoryId,
  onClose,
}: Props) {
  return (
    <div className="absolute mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <Link
            href="/"
            onClick={onClose}
            className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
              !selectedCategoryId ? "font-bold bg-gray-100 dark:bg-gray-600" : ""
            }`}
          >
            All Categories
          </Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/?category=${cat.id}`}
              onClick={onClose}
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                selectedCategoryId === cat.id
                  ? "font-bold bg-gray-100 dark:bg-gray-600"
                  : ""
              }`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
