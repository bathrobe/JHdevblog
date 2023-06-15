"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import dayjs from "dayjs";
import { ReactNode } from "react";

interface Post {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  externalLink: boolean;
  url: string;
  order: number;
  type: string;
}
interface PostWrapperProps {
  externalLink: boolean;
  url: string;
  slug: string;
  type: string;
  children: ReactNode;
}
function PostWrapper({
  children,
  type,
  externalLink,
  url,
  slug,
}: PostWrapperProps) {
  if (externalLink) {
    return (
      <a
        href={url}
        className="flex py-6 justify-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={type + "/" + slug} className="flex py-6 justify-start">
        {children}
      </Link>
    );
  }
}
export default function PostCard({
  title,
  type,
  slug,
  description,
  image,
  date,
  externalLink,
  url,
}: Post) {
  return (
    <PostWrapper type={type} url={url} externalLink={externalLink} slug={slug}>
      <div className="hidden md:block">
        <CldImage
          width="200"
          height="200"
          src={image}
          crop="fill"
          alt="Description of my image"
        />
      </div>
      <div className="ml-4 max-w-xl flex-col flex py-2">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="py-2">{description}</div>
        <div className="text-gray-400">{dayjs(date).format("MMM YYYY")}</div>
      </div>
    </PostWrapper>
  );
}
