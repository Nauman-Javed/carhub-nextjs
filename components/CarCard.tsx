"use Client";

import { CustomButton } from "@/collections";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetails } from ".";

interface CarCardProps {
  car: CarProps;
}

export const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/steering-wheel.svg"
              alt="steering"
              width={20}
              height={20}
            />
            <p className="text-[14px">
              {transmission === "a" ? "Automatic" : "manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            styles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] font-semibold leading=[17px]"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
