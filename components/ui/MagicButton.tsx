import React from "react";

type props = {
  title: string;
  icon?: React.ReactNode;

  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({ title, handleClick, otherClasses }: props) => {
  return (
    <>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none w-72 md:w-60 md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-2 text-sm font-semibold tracking-widest text-white gap-2 backdrop-blur-3xl ${otherClasses}`}
        >
          {title}
        </span>
      </button>
    </>
  );
};

export default MagicButton;
