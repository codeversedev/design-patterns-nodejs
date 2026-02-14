import { FileConvertFacade } from "./index";

export function runFacadeDemo(): void {
  console.log("=== Facade Pattern Demo ===\n");

  const converter = new FileConvertFacade();

  const result = converter.convertFile(
    "https://example.com/files/report.docx",
    "pdf",
    "/Users/output"
  );

  console.log(`\nConvert result:`, result);
  console.log("");
}
