'use client'
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { Separator } from '../ui/separator';
import { PastPeriodData } from '../data/data';

export default function VsPastPeriod({data}:  {data:PastPeriodData[]}) {
    return(
        <span className='relative border min-h-[200px] h-auto max-h-[600px]  w-auto basis-[70%] p-[24px] rounded-[20px]'>
            <span className='flex items-center gap-2 pb-4'>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill="#667085"/>
              </svg>
              <p>
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
              <p>Consultations</p>
              </div>

              <div className="flex gap-2 items-center">
              <Separator className="w-[16px] h-[4px] rounded-lg   bg-[#134E48]"/>
              <p>Orders Placed</p>
              </div>
              

            </div>
  )
}