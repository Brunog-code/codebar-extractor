import { Header } from "./components/header";
import { UploadPdf } from "./components/upload-pdf";

export default function Home() {
  return (
    <>
      <Header />
      <section className="w-full bg-blue-50 border-b border-slate-200 py-6 mt-6 mb-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">
            Extraia o código de barras do seu boleto em segundos
          </h2>
          <p className="text-slate-700 text-base md:text-lg">
            Envie um <span className="font-medium text-blue-600">PDF</span> ou{" "}
            <span className="font-medium text-blue-600">imagem</span> do seu
            boleto bancário. O site faz a extração automática do código de
            barras, transcrevendo para você copiar e colar na hora de pagar sua
            conta, sem erros e sem digitar manualmente.
          </p>
        </div>
      </section>
      <main className="container mx-auto w-full flex justify-center items-center">
        <UploadPdf />
      </main>
    </>
  );
}
