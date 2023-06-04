import Button from '@/components/Button'
import Image from 'next/image'

const About = () => {
   return (
      <div>
         <div className="w-full h-[300px] relative">
            <Image
               className="object-cover grayscale"
               fill
               src="https://images.pexels.com/photos/4350084/pexels-photo-4350084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="absolute bottom-[20px] left-[20px] bg-coolGreen text-white px-2">
               <h1 className="font-extrabold text-[35px]">
                  Digital Storytellers
               </h1>
               <h5 className="font-bold text-[20px]">
                  Handcrafting award winning digital experiences
               </h5>
            </div>
         </div>

         <main className="flex gap-[80px] mt-[50px]">
            <div className='flex-[1] flex flex-col gap-[15px]'>
              <h1 className='font-bold text-4xl'>Who Are We?</h1>
              <p className='text-[18px] font-[300] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente officiis omnis beatae! Autem vitae quis officiis nihil. Harum laudantium quo qui hic assumenda libero deleniti minus. Voluptatibus, maiores reiciendis quod hic culpa rerum deserunt dicta! Dolorum tempore voluptatum magni ad dolor hic! Illo, corrupti veniam?</p>
              <p className='text-[18px] font-[300] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias ab eligendi suscipit labore laudantium eius pariatur fuga nostrum expedita! Alias suscipit repudiandae, corrupti aspernatur nisi dolorem ratione?</p>
            </div>
            <div className='flex-[1] flex flex-col gap-[15px]'>
              <h1 className='font-bold text-4xl'>What We Do?</h1>
              <p className='text-[18px] font-[300] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias ab eligendi suscipit labore laudantium eius pariatur fuga nostrum expedita! Alias suscipit repudiandae, corrupti aspernatur nisi dolorem ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <ul className='list-disc ml-4 flex flex-col gap-2'>
                <li>Dynamic Websites</li>
                <li>Fast and Handy</li>
                <li>Mobile Apps</li>
              </ul>
              <Button url='contact' text='Contact'/>
            </div>
         </main>
      </div>
   )
}

export default About
