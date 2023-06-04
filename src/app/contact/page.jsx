import Image from "next/image"

const Contact = () => {
  const inputStyle = 'p-[20px] bg-transparent text-[#bbb] border-[3px] border-[#bbb] font-bold'
  return (
    <main className="w-full flex flex-col items-center gap-[15px]">
      <h1 className="font-extrabold text-[72px]">Let's Keep in Touch</h1>
      <div className="w-full flex items-center gap-[50px]">
        <div className="flex-[1] h-[500px] relative">
          <Image fill className="object-contain cool-move-animation" src='/contact.png' alt="contact illustration"/>
        </div>
        <form className="flex-[1] flex flex-col gap-[10px]">
          <input type="text" placeholder="name" className={`${inputStyle}`} />
          <input type="text" placeholder="email" className={`${inputStyle}`} />
          <textarea className={`${inputStyle}`} placeholder="message" cols='30' rows='10'></textarea>
        </form>
      </div>
    </main>
  )
}

export default Contact