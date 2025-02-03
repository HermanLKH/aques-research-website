import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="flex justify-center w-full py-5 bg-cyan-700 text-white">
      <ul className="flex justify-between w-11/12 md:w-3/4 lg:w-2/3 xl:w-[80%]">
        {/* Logo Section */}
        <li>
          <h1 className="text-4xl font-semibold">AquES</h1>
          <p className="text-sm font-light">Aquatic & Environmental Sciences</p>
        </li>

        {/* Social Media Placeholder */}
        <li className="flex flex-col items-start">
          <Button variant="link" className="text-white flex items-center gap-2">
            <FaFacebook />
            <Link href={"https://www.facebook.com/AquaEnviroSci/"}>
              @Aquatic and Environmental Sciences - AQUES{" "}
            </Link>
          </Button>
          <Button variant="link" className="text-white flex items-center gap-2">
            <FaXTwitter />
            <Link href={"https://x.com/aques_my"}>@AQUES_MY</Link>
          </Button>
        </li>

        {/* LinkedIn Links */}
        <li className="flex flex-col items-start">
          <Button variant="link" className="text-white flex items-center gap-2">
            <FaLinkedin />
            <Link
              href={"https://www.linkedin.com/in/moritz-m%C3%BCller-1b105723/"}
            >
              Professor Dr Moritz Müller
            </Link>
          </Button>
          <Button variant="link" className="text-white flex items-center gap-2">
            <FaLinkedin />
            <Link href={"https://www.linkedin.com/in/aazani-mujahid-7309771a/"}>
              Associate Professor Dr Aazani Mujahid
            </Link>
          </Button>
          <Button variant="link" className="text-white flex items-center gap-2">
            <FaLinkedin />
            <Link href={"https://www.linkedin.com/in/changi-wong-05590a204/"}>
              Dr Wong Changi
            </Link>
          </Button>
          <Button variant="link" className="text-white flex items-center gap-2">
            <FaLinkedin />
            <Link href={"https://www.linkedin.com/in/jenny-choo-50a697286"}>
              Dr Jenny Choo
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
