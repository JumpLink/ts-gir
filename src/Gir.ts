import Err from 'err';
import fs from 'fs-extra';
import path from 'path';
import { parse } from 'fast-xml-parser';
import GirTypescriptGenerator from './GirTypescriptGenerator';
import { Repository } from './types';

export default class Gir {
  repository: Repository;

  xml: string;

  async loadFile(girFile: string) {
    const filePath = path.resolve(process.cwd(), girFile);
    this.xml = (await fs.readFile(filePath)).toString();
    this.repository = parse(this.xml, {
      ignoreAttributes: false
    }).repository;
  }

  generateTypescript(): string {
    if (!this.repository) throw new Err('xml not loaded');
    const girGenerator = new GirTypescriptGenerator(this.repository);
    girGenerator.build();
    return girGenerator.generate();
  }
}
