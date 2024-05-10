import { SignInButton, UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className=" p-10 flex flex-col bg-[#282929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="sm:text-5xl text-3xl font-bold">
            Welcome to FileRush. <br /> <br />
            Your business file store everything you need.All in one place
          </h1>
          <p className="pb-20">
            Enhance your file storage with FileRush, offering a simple and
            seffcicient way to upload , organize and access files from anywhere.
            Securely store important documents and media and experience the
            convenience of easy file managment and sharing in one place
          </p>

          <Link
            className="flex w-fit bg-blue-500 cursor-pointer text-white p-4"
            href={"/dashboard"}
          >
            Try it now for free <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="h-full p-10 bg-[#1E1919] dark:bg-slate-800">
          <video
            className="rounded-lg"
            autoPlay
            loop
            muted
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
          ></video>
        </div>
      </div>
    </main>
  );
}
