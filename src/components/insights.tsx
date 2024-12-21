'use client'
import React from 'react';
import Consultations from './charts/consultations';
import VsPastPeriod from './charts/pastperiod';
import ForeCasts from './charts/forecasts';
import { consultData, pastperiodData } from './data/data';


export default function Insights() {
    return(
        <div className="relative w-full h-auto mt-10 py-4 ">
          <h1 className="text-[32px]  mb-5 font-medium ">Insights</h1>
          <div className='w-full h-auto flex-col gap-4 xl:flex xl:flex-row'>
            <Consultations data={consultData}/>
            <div className='relative flex-col basis-[45%] w-full gap-6 md:gap-4 lg:flex lg:flex-row lg:max-h-[700px] xl:flex xl:flex-row'>
              <VsPastPeriod data={pastperiodData}/>
              <ForeCasts />
            </div>
            
          </div>
        </div>
    )
}