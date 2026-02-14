import {
  FileDownloadService,
  ConvertService,
  FileSaveService,
} from "./subsystems";

export interface ConvertResult {
  success: boolean;
  savedPath?: string;
  error?: string;
}

// Facade
export class FileConvertFacade {
  private downloader = new FileDownloadService();
  private converter = new ConvertService();
  private saver = new FileSaveService();

  convertFile(url: string, targetFormat: string, outputDir: string): ConvertResult {
    console.log(`\nFileConvertFacade: Starting file conversion...`);

    try {
      // Step 1: Download the file
      const downloadedPath = this.downloader.download(url);

      // Step 2: Convert to target format
      const convertedPath = this.converter.convert(downloadedPath, targetFormat);

      // Step 3: Save to destination
      const savedPath = this.saver.save(convertedPath, outputDir);

      return { success: true, savedPath };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { success: false, error: message };
    }
  }
}
