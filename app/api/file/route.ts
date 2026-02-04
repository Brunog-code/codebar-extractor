import { NextRequest } from "next/server";
import { ExtractCodeBarController } from "./controllers/extractCodeBarController";
import { ExtractCodeBarService } from "./services/extractCodeBarService";

export async function POST(req: NextRequest) {
  const extractService = new ExtractCodeBarService();
  const extractController = new ExtractCodeBarController(extractService);
  return await extractController.handle(req);
}
