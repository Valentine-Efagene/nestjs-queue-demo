import { Injectable, Logger } from '@nestjs/common';
import { CreatePdfDto } from './pdf.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class PdfService {
    constructor(
        @InjectQueue('pdf') private pdfQueue: Queue
    ) { }

    async create(createPdfDto: CreatePdfDto): Promise<string> {
        Logger.log('Before queue', parseInt(process.env.REDIS_PORT))
        const job = await this.pdfQueue.add('transcode', {
            foo: 'bar'
        })
        return 'Printing will be done asynchronously';
    }
}
