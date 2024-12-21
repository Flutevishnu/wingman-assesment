"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export type ProductData = {
  productImage: string;
  chatLink:string,
  product: string;
  date: string;
  time_spent: string;
  order_value: string;
  commission: string;
}

export const columns: ColumnDef<ProductData>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-normal"
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center space-x-4 ">
        <Image
          src={row.original.productImage}
          alt="Product"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="font-normal">{row.original.product}</span>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-normal"
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ getValue }) => {
      const value = getValue() as string;
      const [date, time] = value.split("'");
      return(
      <div className="">
        <p>{date}</p>
        <p className="text-sm text-gray-500 font-normal">{time}</p>
      </div>
      );
    },
  },
  {
    accessorKey: "time_spent",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-normal"
        >
          Time Spent
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell :({getValue}) => {
      const value = getValue() as string
      return (
        <p className="font-normal">
          {value}
        </p>
      )
    }
  },
  {
    accessorKey: "order_value",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-normal"
        >
          Order Value
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ getValue }) => {
      const value = getValue() as string  
      return <p className="font-normal ">{value}</p>;
    },
  },
  {
    accessorKey: "commission",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-normal"
        >
          Commission
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <p className="font-bold text-black ">{value}</p>
    },
  },
  {
    accessorKey: "chatLink",
    header: "",
    cell: ({getValue}) => {
      const link = getValue() as string
      return (
        <div className="flex gap-4 items-center text-[#8A94A6] justify-end">
          <Link href={link}><span className="font-normal">View Chat</span></Link>
          <Link href={link} target="_blank" >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0626 1.5V8.8125C11.0626 8.96168 11.0033 9.10476 10.8978 9.21025C10.7923 9.31574 10.6493 9.375 10.5001 9.375C10.3509 9.375 10.2078 9.31574 10.1023 9.21025C9.99683 9.10476 9.93757 8.96168 9.93757 8.8125V2.85773L1.89804 10.898C1.79249 11.0035 1.64934 11.0628 1.50007 11.0628C1.3508 11.0628 1.20765 11.0035 1.1021 10.898C0.996552 10.7924 0.937256 10.6493 0.937256 10.5C0.937256 10.3507 0.996552 10.2076 1.1021 10.102L9.14233 2.0625H3.18757C3.03838 2.0625 2.89531 2.00324 2.78982 1.89775C2.68433 1.79226 2.62507 1.64918 2.62507 1.5C2.62507 1.35082 2.68433 1.20774 2.78982 1.10225C2.89531 0.996763 3.03838 0.9375 3.18757 0.9375H10.5001C10.6493 0.9375 10.7923 0.996763 10.8978 1.10225C11.0033 1.20774 11.0626 1.35082 11.0626 1.5Z" fill="#8A94A6"/>
          </svg>
          </Link>
          
        </div>
      )
    }
  }
];
