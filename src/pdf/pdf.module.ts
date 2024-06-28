import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { BullModule } from '@nestjs/bull';
import { PdfConsumer } from './pdf.consumer';

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
    providers: [PdfService, PdfConsumer],
})
export class PdfModule { }
