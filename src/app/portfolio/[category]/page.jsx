import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
   const data = items[cat];
 
   if (data) {
     return data;
   }
 
   return notFound();
 };

const Category = ({ params }) => {
   const datas = getData(params.category);

   return (
      <div>
         <h1 className="font-bold text-[30px] text-coolGreen">
            {params.category}
         </h1>
         {datas.map(data => (
            <Item title={data.title} desc={data.desc} image={data.image} picLocation={data.id % 2 === 0 ? 'right' : 'left'}/>
         ))}
      </div>
   )
}

const Item = ({ picLocation, title, desc, image }) => {
   return (
      <div className="flex gap-[20px] my-[60px]">
         {picLocation === 'right' ? (
            <>
               <div className="flex-[1] flex flex-col gap-[20px] justify-center">
                  <h1 className="font-bold text-[50px] leading-none">{title}</h1>
                  <p className="font-[300] text-[18px]">{desc}</p>
                  <Button url="" text="See More" />
               </div>
               <div className="flex-[1] h-[500px] relative">
                  <Image
                     fill={true}
                     alt={`${title} Illustration`}
                     src={image}
                  />
               </div>
            </>
         ) : (
            <>
               <div className="flex-[1] h-[500px] relative">
                  <Image
                     fill={true}
                     alt={`${title} Illustration`}
                     src={image}
                  />
               </div>
               <div className="flex-[1] flex flex-col gap-[20px] justify-center items-end">
                  <h1 className="font-bold text-[50px] leading-none">{title}</h1>
                  <p className="font-[300] text-[18px]">{desc}</p>
                  <Button url="" text="See More" />
               </div>
            </>
         )}
      </div>
   )
}

export default Category
