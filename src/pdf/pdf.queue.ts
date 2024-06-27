import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('pdf')
export class PdfConsumer {
    @Process('transcode')
    async transcode(job: Job<unknown>) {
        let progress = 0;
        for (let i = 0; i < 100; i++) {
            Logger.log(job.data);
            progress += 1;
            await job.progress(progress);
        }
        return {};
    }

    @OnQueueActive()
    onActive(job: Job) {
        console.log(
            `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
        );
    }
}