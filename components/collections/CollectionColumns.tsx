"use client";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "title",
    cell: ({ row }) => (
      <Link
        href={`/collections/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "products",
    header: "products",
    cell: ({ row }) => <p>{row.original.products.length}</p>,
  },
  {
    accessorKey: "actions",
    cell: ({ row }) => <Delete id={row.original._id} />,
  },
];
