import { Injectable } from '@nestjs/common';
import { CreatePdfDto } from './pdf.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class PdfService {
    constructor(
        @InjectQueue('pdf') private pdfQueue: Queue
    ) { }

    async create(createPdfDto: CreatePdfDto): Promise<string> {
        this.pdfQueue.add('')
        return 'Hello World!';
    }
}
