import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
interface BlogProp {
  id: number;
  title: string;
  desc: string;
  image: string;
  author: string;
  tag: string;
  time: string;
}
const BlogCards = ({ blog }: { blog: BlogProp }) => {
  return (
    <div className="">
      <div className="relative h-60 w-full  ">
        <Image
          width={400}
          height={300}
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 translate-y-1/2 w-full px-3 left-0  z-10">
          <p className="bg-neutral-200 px-5 font-semibold py-2 w-fit text-xs rounded-full border border-slate-300 shadow">
            {blog.tag}
          </p>
        </div>
      </div>
      <div className="mt-6 px-5">
        <h3 className="text-lg font-semibold leading-tight">{blog.title}</h3>
        <p className="line-clamp-2 text-sm mt-1 ">{blog.desc}</p>
        <button className="flex font-semibold items-center gap-2 mt-3">
          Learn more
          <span className="bg-black rounded-lg px-2 py-1">
            <ArrowRight className={"size-3 text-white rounded"} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
