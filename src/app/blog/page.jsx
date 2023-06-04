import Image from 'next/image'
import Link from 'next/link'

async function getData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
   })

   if (!res.ok) {
      throw new Error('Failed to fetch data')
   }

   return res.json()
}

const Blog = async () => {
   const datas = await getData()

   return (
      <div className=''>
         {datas.map((data) => (
            <Link
               key={data.id}
               href={`blog/${data.id}`}
               className="flex items-center gap-[50px] mb-[50px]"
            >
               <div className="flex-[1] h-[260px] relative">
                  <Image
                     fill
                     alt="test"
                     src="https://images.pexels.com/photos/17047402/pexels-photo-17047402/free-photo-of-la-gravedad-del-lugar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
               </div>
               <div className='flex-[2]'>
                  <h1>{data.title}</h1>
                  <p>{data.body}</p>
               </div>
            </Link>
         ))}
      </div>
   )
}

export default Blog
