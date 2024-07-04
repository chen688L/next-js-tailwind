"use client";

const Submenu = ({ item }) => {
  const links = item.component
  
  return (
    <div className="flex flex-wrap items-center justify-between w-full h-full bg-zinc-800 border-solid border-slate-700 border rounded-3xl py-12 px-12">
        { links.map((item,index)=>{
           return <div className="rounded-3xl mb-2.5 flex flex-col items-center justify-center w-52 h-16 border-solid border-slate-700 border" key={index}>
            <div>{item.name}</div>
            <div className="text-xs text-center">A description related </div>
           </div>
        })}
    </div>
  );
};

export default Submenu;
