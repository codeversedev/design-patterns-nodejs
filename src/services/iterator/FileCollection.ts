import { IterableCollection, Iterator, GenericIterator, FilteredIterator } from "./interfaces";

export interface FileItem {
  name: string;
  size: number;
  extension: string;
}

// Concrete Collection using generic iterators
export class FileCollection implements IterableCollection<FileItem> {
  private files: FileItem[] = [];

  add(file: FileItem): void {
    this.files.push(file);
  }

  createIterator(): Iterator<FileItem> {
    return new GenericIterator([...this.files]);
  }

  createExtensionIterator(extension: string): Iterator<FileItem> {
    return new FilteredIterator([...this.files], (f) => f.extension === extension);
  }
}
