import { notFound } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
   cache: 'no-store'
  })

  if (!res.ok) {
     return notFound()
  }

  return res.json()
}

const BlogPost = async ({params}) => {

  const data = await getData(params.id)

  return (
    <main className='flex flex-col gap-[50px]'>
      <div className='flex gap-[20px]'>
        <div className='flex-[1] flex flex-col gap-[25px]'>
          <h1 className='font-bold text-[30px]'>{data.title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa suscipit repudiandae? Nam explicabo sequi quibusdam, nisi consequuntur soluta, similique dolorum odio voluptatibus necessitatibus, neque fugit!</p>
          <div className='flex gap-[10px] items-center font-[600]'>
            <Image className="object-cover h-[45px] w-[45px] rounded-full" src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' alt={`profPic`} width={45} height={45}/>
            <h5>Christine</h5>
          </div>
        </div>
        <div className='flex-[1] relative'>
          <Image fill alt='bg' src='https://images.pexels.com/photos/17075261/pexels-photo-17075261/free-photo-of-city-water-street-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
        </div>
      </div>

      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem deserunt laudantium animi doloribus corporis iste at quas reprehenderit doloremque atque repudiandae, soluta expedita accusamus, quos temporibus explicabo natus aliquid odio architecto eius! Excepturi deleniti incidunt tenetur nam cupiditate libero rerum in, ipsa sint commodi adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id esse iusto aut quis at facere ab earum tenetur magnam officia?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias culpa nisi aut officiis mollitia repellat molestiae consequatur ipsa fugiat totam laboriosam, laudantium eveniet error. Aliquid, omnis.</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, dolore! Magnam rem quos repellat, obcaecati et laboriosam a cum, praesentium tempora, animi reprehenderit impedit! Voluptatem temporibus modi necessitatibus id dolore sequi voluptatibus non, iusto maxime inventore expedita reprehenderit ex, odio ut eveniet aut. Enim voluptatum praesentium fugiat debitis! Ullam itaque officia, repellendus ipsam saepe quam quaerat numquam magni illo aliquid?</p>
      </div>
    </main>
  )
}

export default BlogPost