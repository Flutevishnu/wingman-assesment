import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { productData } from "@/components/data/data";
export default function Table() {
    return(
      
      // <div className="relative flex flex-col container w-auto h-auto mt-10 py-4 ">
      //   <h1 className="text-[32px] font-bold mb-5">Orders</h1>
      //   <DataTable columns={columns} data={productData} />
      // </div>
      <div className="grid grid-cols-1">
        <h1 className="text-[32px] font-medium mb-5 ">Orders</h1>
        <DataTable columns={columns} data={productData} />
      </div>
     
        
    )
}