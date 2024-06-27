import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePdfDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsString()
  name: string;
}