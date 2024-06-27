import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePdfDto } from './pdf.dto';
import { PdfService } from './pdf.service';

@Controller('pdf')
@ApiTags('PDF')
export class PdfController {
    constructor(
        private readonly pdfService: PdfService
    ) { }

    @Post()
    async create(
        @Body() createPdfDto: CreatePdfDto,
    ): Promise<string> {
        const data = await this.pdfService.create(createPdfDto);
        return data;
    }
}
