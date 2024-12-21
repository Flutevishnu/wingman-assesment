import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts";
  import { Separator } from "@/components/ui/separator"
type consultations = {
    day : string,
    incoming: number,
    answered: number,
    experts: number
}


export default function Consultations({data}: {data: consultations[]} ) {
    return(
        <span className='border  basis-[55%] min-h-[200px] max-h-[600px] p-[24px] h-auto rounded-[20px]'>
            <span className='flex items-center gap-2 pb-4'>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill="#667085"/>
              </svg>
              <p className="font-semibold text-[12px] text-[#667085]">
                CONSULTATIONS
              </p>
            </span>

            <div className="sm:overflow-x-auto md:overflow-x-hidden">
            <ResponsiveContainer width="100%" height={300} className="sm:overflow-x-auto md:overflow-x-hidden">
              <ComposedChart data={data}>
                {/* Background Grid */}
                <CartesianGrid
                 strokeDasharray="3 3"
                 vertical={false}
                 horizontal={true}
                  />

                {/* X Axis */}
                <XAxis dataKey="day" tickLine={false} />

                {/* Left Y Axis for Consultations */}
                <YAxis
                  yAxisId="left"
                  domain={[0, 60]}
                  tickCount={7}
                  tickLine={false}
                  axisLine={false}
                  label={{
                    value: "CONSULTATIONS",
                    angle: -90,
                    position: "insideLeft",
                    style: { textAnchor: "middle", fontSize: 12, fill: "#C4C4C4" },
                  }}
                />

                {/* Right Y Axis for Experts Online */}
                <YAxis
                  yAxisId="right"
                  domain={[0, 20]}
                  orientation="right"
                  tickCount={6}
                  tickLine={false}
                  axisLine={false}
                  label={{
                    value: "EXPERTS ONLINE",
                    angle: 90,
                    position: "insideRight",
                    style: { textAnchor: "middle", fontSize: 12, fill: "#C4C4C4" },
                  }}
                />

                {/* Tooltip */}
                <Tooltip />

                {/* Yellow Bars for Experts Online */}
                <Bar
                  yAxisId="right"
                  dataKey="experts"
                  fill="#FFF3C6"
                  barSize={30}
                  radius={[10, 10, 0, 0]}
                />

                {/* Solid Green Line for Answered */}
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="answered"
                  stroke="#00C49F"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                />

                {/* Dashed Gray Line for Incoming */}
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="incoming"
                  stroke="#8884d8"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 5 }}
                />
                
                
              </ComposedChart>
            </ResponsiveContainer>
            </div>         
            <Separator className="mt-2 mb-8"/>
            <Legend />

          </span>
    )
}

function Legend(){
  return(
    <div className="flex gap-6 md:gap-20 w-auto">

              <div className="flex gap-2 items-center ">
              <Separator className="w-[16px] h-[4px] rounded-lg  bg-[#8A94A6]"/>
              <p className="font-normal text-[#667085] text-[12px]">Incoming</p>
              </div>

              <div className="flex gap-2 items-center">
              <Separator className="w-[16px] h-[4px] rounded-lg   bg-[#15B79F]"/>
              <p className="font-normal text-[#667085] text-[12px]">Answered</p>
              </div>
              
              <div className="flex gap-2 items-center">
              <Separator className="w-[16px] h-[4px] rounded-lg  bg-[#FFE587]"/>
              <p className="font-normal text-[#667085] text-[12px]">Experts online</p>
              </div>

            </div>
  )
}