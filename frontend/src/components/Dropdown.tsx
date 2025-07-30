"use client";

import React, { useState } from "react";
import { useCategories } from "@/hooks/useCategories";
import DropdownMenu from "./DropdownMenu";
import { DropdownProps } from "@/types/dropdown";

export default function Dropdown({
  selectedCategoryId,
  onCategoryChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Failed to load categories.</p>;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Select Category
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {open && (
        <DropdownMenu
          categories={data?.categories || []}
          selectedCategoryId={selectedCategoryId}
          onClose={() => setOpen(false)}
          onCategorySelect={onCategoryChange}
        />
      )}
    </div>
  );
}
