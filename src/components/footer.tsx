import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  SiInstagram,
  SiLinkerd,
  SiTiktok,
  SiX,
} from "@icons-pack/react-simple-icons";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pb-8 pt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 sm:col-span-4 flex flex-col gap-8 items-start justify-start">
          <img
            src="/assets/logo.svg"
            className="h-16 w-auto object-contain"
            alt=""
          />
          <p className="text-gray-300">
            18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3,
            Senayan, Kebayoran Baru, Jakarta 12190
          </p>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col gap-8 items-start justify-start">
          <h1 className="text-lg">Social Media</h1>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 sm:col-span-6 flex gap-2 items-center">
              <SiInstagram className="size-4" />
              <span>5758creativelab</span>
            </div>
            <div className="col-span-12 sm:col-span-6 flex gap-2 items-center">
              <SiTiktok className="size-4" />
              <span>warga5758</span>
            </div>
            <div className="col-span-12 sm:col-span-6 flex gap-2 items-center">
              <SiX className="size-4" />
              <span>5758creativelab</span>
            </div>
            <div className="col-span-12 sm:col-span-6 flex gap-2 items-center">
              <SiLinkerd className="size-4" />
              <span>5758 Creative Lab</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col justify-between">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="col-span-12 sm:col-span-6 flex gap-2 items-center">
              <Mail className="size-4" />
              <span>admin@5758creativelab.com</span>
            </div>
            <div className="col-span-12 sm:col-span-6 flex gap-2 items-center">
              <Phone className="size-4" />
              <span>+62 87880 8089 80</span>
            </div>
          </div>
          <Button className="rounded-full bg-brand-500 text-black hover:bg-brand-500/80">
            Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <hr className="col-span-12 bg-gray-400 h-[1px]" />
        <div className="col-span-12">
          <span className="text-white text-sm flex items-center justify-center">
            Copyright 5758 Creative Lab © 2025 All rights reserved - Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
};
