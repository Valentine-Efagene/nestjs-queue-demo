import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { BullModule } from '@nestjs/bull';

@Module({
    imports: [
        BullModule.forRoot({
            redis: {
                host: 'localhost',
                port: parseInt(process.env.REDIS_PORT)
            },
        }),
        BullModule.registerQueue({
            name: 'pdf'
        }),
    ],
    controllers: [PdfController],
    providers: [PdfService],
})
export class PdfModule { }
