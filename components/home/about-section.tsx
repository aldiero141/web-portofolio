import Image from "next/image";
import React from "react";
import { TextAnimate } from "../magicui/text-animate";

export default function AboutSection() {
  return (
    <div className="container w-full h-full min-h-[80svh] flex flex-col items-center justify-center">
      <div className="flex flex-col mt-24 w-1/2">
        <TextAnimate animation="slideUp" as="h1">
          Who am I?
        </TextAnimate>
        <TextAnimate animation="blurIn" as="h6" className="mt-6">
          A dedicated and detail-oriented Web Developer
        </TextAnimate>

        <TextAnimate animation="blurIn" as="p">
          With 4 years of hands-on experience in building responsive, high-performance web applications
        </TextAnimate>
      </div>
      <Image src="/assets/cute-pet-collage-isolated.png" alt="about-image" width={1000} height={1000} className="-mt-[30em] z-[-10]" />
    </div>
  );
}
