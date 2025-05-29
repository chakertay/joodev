"use client";
import { cn } from "@/lib/utils";

interface CardDemoProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function CardDemo({
  title,
  description,
  image,
  className = "",
}: CardDemoProps) {
  return (
    <div className={cn("w-full h-full")}>
      <div
        className={cn(
          "group w-full h-full cursor-pointer overflow-hidden relative rounded-md shadow-xl flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500",
          className
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
