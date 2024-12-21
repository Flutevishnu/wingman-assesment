import Insights from "@/components/insights";
import Table from "@/components/table/table";
import { glances } from "@/components/data/data";
import { nav_data } from "@/components/data/data";

export default function Home() {
  return (
    <div className="w-full h-full overflow-y-auto overflow-hidden  flex flex-col">

      <div className="relative flex justify-center md:justify-start lg:flex-row gap-[12px] h-[94px] border border-b-[1px] pt-[24px] pr-[40px] pb-[24px] pl-[40px]">
        {nav_data.map((data, key) => (
          <div key={key} className="flex gap-2 items-center group cursor-pointer justify-center text-center w-[137px] h-[46px] rounded-[1200px] py-[12px] hover:bg-[#CCFBEF]">
            {data.icon}
            <p>
            {data.title}
            </p> 
        </div>
        ))}
      </div>

      {/* graph and box */}
      <div className="relative md:p-8 flex-1 flex">
        <div className=" flex-1 md:border md:border-2 md:rounded-[20px] p-8">
          <div className="border-black rounded-[20px] ">
            <div className="h-[38px]  flex items-center justify-between">
              <h1 className="text-2xl font-bold">At the glance</h1>
              <select name="duration" id="duration" className="rounded-lg w-[97px] h-[36px] border border-2 bg-inherit">
                <option value="Today" className="w-[49px] bg-inherit">Today</option>
                <option value="7 days">7 days</option>
                <option value="1 month">1 month</option>
                <option value="All time">All time</option>
              </select>
            </div>
          </div>

          {/* At the glance */}
          <div className=" grid grid-col-1 md:grid-cols-3 gap-4 mt-10">
            {glances.map((glance, key) => (
              <div key={key} className="border border-[1.5px]  rounded-[20px] p-[24px] gap-[16px] flex flex-col drop-shadow-xl">
                <span className="flex gap-2 items-center ">
                  {glance.icon}
                  <p>{glance.title}</p>
                </span>
                <p className="text-[32px]">{glance.number}</p>
                <div className="flex items-center gap-2">
                  {glance.percen_icon}
                  <p>
                    <span className="text-[#15B79F]">{glance.percentage}</span> {glance.incee_decre}
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
