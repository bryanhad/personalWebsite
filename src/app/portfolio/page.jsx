import Link from "next/link"

const Portfolio = () => {
  const galleries = [
    {
      image: '/illustration.png', 
      title: 'Illutstrations',
      href: '/portfolio/illustrations'
    },
    {
      image: '/websites.jpg', 
      title: 'Websites',
      href: '/portfolio/websites'
    },
    {
      image: '/apps.jpg', 
      title: 'Applications',
      href: '/portfolio/applications'
    },
  ]

  return (
    <>
      <h1 className="mb-[20px] font-bold text-[30px]">Choose a gallery</h1>
      <div className="flex gap-[30px]">
        {galleries.map(gallery => (
          <Link href={gallery.href} key={gallery.title} style={{backgroundImage: `url(${gallery.image})`}} className="group cursor-pointer w-[300px] h-[400px] relative bg-cover border-[3px] border-[#bbb] text-[#bbb] font-bold">
            <h1 className="absolute bottom-[10px] right-[10px] text-[30px] group-hover:text-coolGreen">{gallery.title}</h1>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Portfolio