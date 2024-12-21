import Insights from "@/components/insights";
import Table from "@/components/table/table";
import { glances } from "@/components/data/data";
import NavBar from "@/components/navbar";


export default function Home() {
  
  return (
    <div className="w-full h-full overflow-y-auto overflow-hidden  flex flex-col">

      <NavBar/>

      {/* graph and box */}
      <div className="relative md:p-8 flex-1 flex">
        <div className=" flex-1 md:border md:border-2 md:rounded-[20px] p-8">
          <div className="border-black rounded-[20px] ">
            <div className="h-[38px]  flex items-center justify-between">
              <h1 className="text-[32px] font-medium">At the glance</h1>
              <select name="duration" id="duration" className="rounded-lg w-[97px] h-[36px] border border-2 bg-inherit">
                <option value="Today" className="w-[49px] bg-inherit font-normal">7 days</option>
                <option value="7 days" className="font-normal">1 month</option>
                <option value="1 month" className="font-normal">Today</option>
                <option value="All time" className="font-normal">All time</option>
              </select>
            </div>
          </div>

          {/* At the glance */}
          <div className=" grid grid-col-1 md:grid-cols-3 gap-4 mt-10">
            {glances.map((glance, key) => (
              <div key={key} className="border border-[1.5px]  rounded-[20px] p-[24px] gap-[16px] flex flex-col drop-shadow-xl">
                <span className="flex gap-2 items-center ">
                  {glance.icon}
                  <p className="font-semibold text-[12px] text-[#667085]">{glance.title}</p>
                </span>
                <p className="text-[32px] font-medium">{glance.number}</p>
                <div className="flex items-center gap-2">
                  {glance.percen_icon}
                  <p>
                    <span className="text-[#15B79F] font-normal">{glance.percentage}</span> <span className="font-normal text-[#667085] text[14px]">{glance.incee_decre}</span>
                  </p>
                </div>  
              </div>
            ))}
          </div>

          {/* Insights */}
          <Insights/>

          {/* DataTable */}
          <Table/>
          
          
        </div>
      </div>
    </div>
  );
}
