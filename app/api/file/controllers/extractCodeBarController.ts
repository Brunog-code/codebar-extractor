import { NextRequest, NextResponse } from "next/server";
import { ExtractCodeBarService } from "../services/extractCodeBarService";

export class ExtractCodeBarController {
  constructor(private readonly extractService: ExtractCodeBarService) {}

  async handle(req: NextRequest) {
    const formData = await req.formData();
    const fileEntry = formData.get("filepay");

    if (!(fileEntry instanceof File)) {
      return NextResponse.json(
        { error: "Nenhum arquivo enviado" },
        { status: 400 },
      );
    }

    const file = fileEntry;

    const allowedTypes = [
      "application/pdf",
      "image/jpg",
      "image/jpeg",
      "image/png",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipo de arquivo inválido" },
        { status: 400 },
      );
    }

    try {
      //chamar service
      const codeBar = await this.extractService.execute(file);

      return NextResponse.json(codeBar, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Erro ao extrair o código de barras" },
        { status: 500 },
      );
    }
  }
}
