import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
   return (
      <main className="w-full flex gap-[80px] items-center">
         <div className="flex-[1] flex flex-col gap-[50px]">
            <h1 className="text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#194c33] to-[#bbb]">
               Better design for your digital products.
            </h1>
            <h5 className="text-[24px] font-[300]">
               Turning your ideas into Reality. We bring together the teams from
               the global tech industry.
            </h5>
            <Button url='portfolio' text='See Our Works'/>
         </div>
         <div className="flex-[1] h-[500px] relative">
            <Image priority={true} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='object-cover up-down-animation' alt='hero' src='/hero.png' />
         </div>
      </main>
   )
}
