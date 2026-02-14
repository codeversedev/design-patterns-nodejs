import { FileCollection } from "./index";

export function runIteratorDemo(): void {
  console.log("=== Iterator Pattern Demo ===\n");

  const files = new FileCollection();
  files.add({ name: "report.pdf", size: 2048, extension: "pdf" });
  files.add({ name: "photo.png", size: 5120, extension: "png" });
  files.add({ name: "notes.txt", size: 512, extension: "txt" });
  files.add({ name: "invoice.pdf", size: 1024, extension: "pdf" });
  files.add({ name: "screenshot.png", size: 3072, extension: "png" });

  // Iterate all files
  console.log("All files:");
  const allIterator = files.createIterator();
  while (allIterator.hasNext()) {
    const file = allIterator.next();
    console.log(`  - ${file.name} (${file.size} KB)`);
  }

  // Iterate only PDFs
  console.log("\nPDF files only:");
  const pdfIterator = files.createExtensionIterator("pdf");
  while (pdfIterator.hasNext()) {
    const file = pdfIterator.next();
    console.log(`  - ${file.name} (${file.size} KB)`);
  }

  console.log("");
}
