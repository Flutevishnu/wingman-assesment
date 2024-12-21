'use client'
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { Separator } from '../ui/separator';
import { PastPeriodData } from '../data/data';

export default function VsPastPeriod({data}:  {data:PastPeriodData[]}) {
    return(
        <span className='relative border min-h-[200px] h-auto max-h-[600px] flex flex-col justify-start w-auto basis-[70%] p-[24px] rounded-[20px] mb-4 md:mb-0'>
            <span className='flex items-center gap-2 pb-4 ml-[55px]'>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.875 8.75C9.875 8.84946 9.83549 8.94484 9.76517 9.01517C9.69484 9.08549 9.59946 9.125 9.5 9.125H0.5C0.400544 9.125 0.305161 9.08549 0.234835 9.01517C0.164509 8.94484 0.125 8.84946 0.125 8.75C0.125 8.65054 0.164509 8.55516 0.234835 8.48483C0.305161 8.41451 0.400544 8.375 0.5 8.375H0.875V5.375C0.875 5.27554 0.914509 5.18016 0.984835 5.10983C1.05516 5.03951 1.15054 5 1.25 5H2.375C2.47446 5 2.56984 5.03951 2.64016 5.10983C2.71049 5.18016 2.75 5.27554 2.75 5.375V8.375H3.5V3.125C3.5 3.02554 3.53951 2.93016 3.60984 2.85984C3.68016 2.78951 3.77554 2.75 3.875 2.75H5.375C5.47446 2.75 5.56984 2.78951 5.64017 2.85984C5.71049 2.93016 5.75 3.02554 5.75 3.125V8.375H6.5V0.875C6.5 0.775544 6.53951 0.680161 6.60983 0.609835C6.68016 0.539509 6.77554 0.5 6.875 0.5H8.75C8.84946 0.5 8.94484 0.539509 9.01517 0.609835C9.08549 0.680161 9.125 0.775544 9.125 0.875V8.375H9.5C9.59946 8.375 9.69484 8.41451 9.76517 8.48483C9.83549 8.55516 9.875 8.65054 9.875 8.75Z" fill="#667085"/>
            </svg>

              <p className='font-semibold text-[12px] text-[#667085] '>
                VS PAST PERIODS
              </p>
            </span>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barCategoryGap={4} // Controls the gap between groups of bars
                barGap={10}
                >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis dataKey="name" />
                <YAxis 
                domain={[10, 20]}
                tickCount={7}
                tickLine={false}
                axisLine={false}
                />
                <Tooltip />
                <Bar dataKey="pv" radius={[10, 10, 0, 0]} barSize={40} fill="#CCFBEF" activeBar={<Rectangle fill="#CCFBEF" stroke="blue" radius={[10, 10, 0, 0]}/>} />
                <Bar dataKey="uv" radius={[10, 10, 0, 0]} barSize={40} fill="#134E48" activeBar={<Rectangle fill="#134E48" stroke="purple" radius={[10, 10, 0, 0]} />} />
                </BarChart>
            </ResponsiveContainer>
            <Separator className="mt-2 mb-8"/>
            <Legend />

        </span>
    )
}

function Legend(){
  return(
    <div className="flex gap-20 sm:gap-6">

              <div className="flex gap-2 items-center">
              <Separator className="w-[16px] h-[4px] rounded-lg  bg-[#CCFBEF]"/>
              <p className="font-normal text-[#667085] text-[12px]">Consultations</p>
              </div>

              <div className="flex gap-2 items-center">
              <Separator className="w-[16px] h-[4px] rounded-lg   bg-[#134E48]"/>
              <p className="font-normal text-[#667085] text-[12px]">Orders Placed</p>
              </div>
              

            </div>
  )
}