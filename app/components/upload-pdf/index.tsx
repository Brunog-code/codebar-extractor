"use client";

import imgCodebar from "@/public/codebar.png";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { FiX } from "react-icons/fi";
import { useRef } from "react";
import { Modal } from "../modal";
import { Loader2 } from "lucide-react";

interface In8nResponseWebhook {
  codebar: string;
  success: boolean;
  message: string;
}

export function UploadPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [codeBar, setIsCodeBar] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    //verificar se tem file, e se a extensão é válida

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      console.log(file.type);

      const allowedTypes = [
        "application/pdf",
        "image/jpg",
        "image/jpeg",
        "image/png",
      ];
      if (!allowedTypes.includes(file?.type)) {
        toast.error("Formato inválido");
        setFile(null);
        event.target.value = "";
        event.target.files = null;
        return;
      }

      setFile(event.target.files[0]);
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!file) {
      toast.error("Selecione um arquivo");
      return;
    }

    try {
      setIsLoading(true);
      setIsCodeBar("");

      const formData = new FormData();
      formData.append("filepay", file);

      const response = await fetch("/api/file", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast.error("Erro ao extrair o código de barras");
        setFile(null);
        return;
      }

      const responseCodeBarData: In8nResponseWebhook = await response.json();
      console.log("response", responseCodeBarData);

      //   if (!responseCodeBarData.success) {
      //     toast.error(
      //       responseCodeBarData.message ||
      //         "Código de barras não encontrado na imagem",
      //     );
      //     return;
      //   }

      setIsCodeBar(responseCodeBarData.codebar);
      console.log(responseCodeBarData.codebar);
      toast.success("Código de barras extraído com sucesso!");
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao processar arquivo:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro inesperado ao processar o arquivo";

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function handleDeleteFile(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setIsCodeBar("");
    setFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <section className="w-full flex flex-col-reverse md:flex-row h-full  items-center">
      <div className="flex-1 flex  items-end relative w-full h-80 min-h-64 ">
        <Image
          src={imgCodebar}
          fill
          className="object-cover"
          alt="Imagem codebar"
        />
      </div>
      <div className="flex-2 flex flex-col justify-center items-center w-full h-80 min-h-64  ">
        <div className="mb-2 flex flex-col items-center w-full">
          <span className="text-slate-600 text-sm font-medium mb-1">
            Extensões permitidas:
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
              .pdf
            </span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold border border-cyan-200">
              .jpg
            </span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold border border-cyan-200">
              .jpeg
            </span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold border border-cyan-200">
              .png
            </span>
          </div>
        </div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <label className="group relative w-11/12 sm:w-9/12 lg:w-6/12 h-60 bg-slate-200 border-2 border-dashed border-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-100  transition">
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center w-full">
              <FaCloudUploadAlt
                size={50}
                className="pointer-events-none text-cyan-500  group-hover:text-cyan-300"
              />
              <span className="text-cyan-700">
                {file ? file.name : "Clique ou arraste para enviar o arquivo"}
              </span>
            </div>
            {file && (
              <button
                onClick={handleDeleteFile}
                className="absolute right-5 top-5 rounded-full p-1 bg-blue-300 text-white hover:bg-blue-200 opacity-90 z-10 cursor-pointer"
              >
                <FiX size={24} />
              </button>
            )}
          </label>
          <Button
            disabled={!file || isLoading}
            className=" w-11/12 sm:w-9/12 lg:w-6/12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl mt-4 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Enviando....</span>
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </div>

      {showModal && <Modal setShowModal={setShowModal} codeBar={codeBar} />}
    </section>
  );
}
