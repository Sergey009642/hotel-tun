import Image from "next/image";

function Contact() {
 const images: { src: string; href: string; alt: string }[] = [
    { src: "/fb.png", href: "https://www.facebook.com/profile.php?id=61563290124228#", alt: "Facebook" },
    { src: "/Inst.webp", href: "https://www.instagram.com/___greengardendilijan_/", alt: "Instagram" },
    { src: "/watsap.png", href: "tel:093766506", alt: "WhatsApp" },
  ];

    return(
<div className="flex justify-center items-center ">
    <div className="">
        <div className="w-[350px] h-[400px] bg-[#242123] rounded-2xl max-sm:w-[300px]">
            <div className="">
                <div className="text-center">
                    <h1 className="text-[40px] text-[#fff]">Contact US</h1>
            </div>
        </div>
<div className="flex justify-center items-center pt-[20px]">
    <div className="flex flex-col">
         {images.map((img) => (
                      <a
                        key={img.src}
                        href={img.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={img.src}
                          width={100}
                          height={100}
                          alt={img.alt}
                          className="w-12 h-12 p-1 rounded-full hover:scale-110 duration-300"
                        />
                      </a>
                    ))}
    </div>
</div>
<div className="pt-[50px] text-center flex flex-col">
     <a href="mailto:marin_78@list.ru" className="text-[#0454ff] hover:underline text-[20px] max-sm:text-[18px]">
                marin_78@list.ru
            </a>
            <a href="tel:093766506" className="hover:underline text-[16px] text-[#fff]">
              093-76-65-06
            </a>
            </div>
        </div>
    </div>
</div>
    )
}
export default Contact