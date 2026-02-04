interface In8nResponseWebhook {
  codebar: string;
  success: boolean;
  message: string;
}

export class ExtractCodeBarService {
  async execute(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const formDataToSend = new FormData();
    formDataToSend.append(
      "filepay",
      new Blob([buffer], { type: file.type }),
      file.name,
    );

    //chamar n8n
    const n8nResponse = await fetch(process.env.N8N_URL_WEBHOOK as string, {
      method: "POST",
      body: formDataToSend,
    });

    if (!n8nResponse.ok) {
      throw new Error("Erro ao conectar com o serviço de extração do código");
    }

    const response: In8nResponseWebhook = await n8nResponse.json();
    if (!response.success) {
      throw new Error(response.message || "Código de barras não encontrado");
    }

    return response;
  }
}
