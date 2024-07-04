import Image from "next/image";
import items from "@/lib/api";

export default function Home() {
  return (
    <main className=" flex flex-wrap min-h-screen justify-between py-24 px-6">

      {items.map((item, index) => {
        return <div className="max-w-md h-80 mybg mt-5"  key={index}>
          <Image className="w-full rounded-xl"
            src={item.img}
            alt=""
           
          />
          <div>{item.title}</div>
          <div className="text-xs">{item.des}</div>
        </div>
      })}
    </main>
  );
}
