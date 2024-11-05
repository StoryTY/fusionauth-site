import React from "react";

export interface Props {
  data: {
    title: string;
    description: string;
  }
}

export const QuickstartGallery = ({ data }: Props) => {
  const { title, description } = data;

  return (
      <>
        <h1 className={"text-indigo-500 text-2xl"}>{title}</h1>
        <p className={"text-white italic"}>{description}</p>
        <p className={"text-indigo-200 font-bold"}>Put your gallery stuff here!</p>
      </>
  )
}