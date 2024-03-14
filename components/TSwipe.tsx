"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import { images } from "@/lib/images";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const TSwipe = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const changeImageBack = useCallback(() => {
    if (currentImage - 1 <= 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }, [setCurrentImage, currentImage, images]);

  const changeImageForward = useCallback(() => {
    if (currentImage + 1 >= images.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }, [setCurrentImage, currentImage, images]);

  return (
    <div className="flex gap-4 text-4xl items-center justify-center w-[80%] mx-auto">
      <ButtonWrapper onClick={changeImageBack}>
        <IoChevronBackOutline />
      </ButtonWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.9 }}
        className="overflow-x-auto bg-gray-100 rounded-md p-2 lg:p-4 flex flex-col gap-3 -z-10"
      >
        <div className={cn(roboto.className, "relative")}>
          <Image
            alt="Thumbnail"
            src={images[currentImage]}
            width={1280}
            height={720}
            className="rounded-xl"
          />
          <span className="bg-gray-900/90 rounded-md p-2 absolute bottom-2 right-2   lg:px-2 lg:py-1 text-sm lg:text-base text-gray-300/80 font-normal">
            1:26
          </span>
        </div>
        <div className="flex gap-3">
          <Image
            alt="Dani"
            src={"/logo.png"}
            width={800}
            height={800}
            className="w-[10%] lg:w-[9%] h-auto mb-auto shadow rounded-full"
          />
          <div
            className={cn(
              "flex flex-col leading-3 text-gray-950",
              roboto.className
            )}
          >
            <span className="font-bold text-lg lg:text-xl">
              This is the thumbnails I made
            </span>
            <span className="text-sm *:lg:text-base opacity-70">Dani</span>
            <span className="text-sm lg:text-base opacity-70">
              1.2B views &#183; 10 minutes ago
            </span>
          </div>
        </div>
      </motion.div>
      <ButtonWrapper onClick={changeImageForward}>
        <IoChevronForwardOutline />
      </ButtonWrapper>
    </div>
  );
};

const ButtonWrapper = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.2 }}
      onClick={onClick}
      className="text-gray-900/70 bg-gray-300/90 p-1 lg:p-2 rounded-full transition text-2xl lg:text-4xl flex items-center justify-center"
    >
      {children}
    </motion.button>
  );
};
export default TSwipe;
