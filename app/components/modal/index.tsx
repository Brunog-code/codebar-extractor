"use client";

import { useRef, type MouseEvent } from "react";
import { FiCopy, FiX } from "react-icons/fi";

interface IModalProps {
  setShowModal: (value: boolean) => void;
  codeBar: string;
}

export function Modal({ setShowModal, codeBar }: IModalProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowModal(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeBar)
      .then(() => {
        alert("Código copiado!");
      })
      .catch(() => {
        alert("Não foi possível copiar o código.");
      });
  };

  return (
    <section
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm "
      onClick={handleClick}
    >
      <div
        ref={ref}
        className="bg-white bg-opacity-100 shadow-2xl rounded-2xl  w-full md:w-10/12 mx-4 p-8 flex flex-col items-center border border-slate-200 relative"
      >
        <span className="font-semibold text-md text-slate-800 break-words text-center p-2">
          {codeBar}
        </span>
        <button
          type="button"
          aria-label="Copiar código de barras"
          className="mt-4 p-2 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 shadow transition-colors cursor-pointer"
          onClick={handleCopy}
        >
          <FiCopy size={30} />
        </button>
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-2 top-2 rounded-full p-1 bg-blue-300 text-white hover:bg-blue-200 opacity-90 z-10 cursor-pointer"
        >
          <FiX size={24} />
        </button>
      </div>
    </section>
  );
}
