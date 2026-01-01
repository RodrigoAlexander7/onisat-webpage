import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateNewsDto {
  @ApiProperty({
    description: "News title",
    example: "ONISAT classified for CanSat 2026 finals",
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({
    description: "News content (can be long text)",
    example: "Our team has passed the preliminary design phase...",
    minLength: 10,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content: string;
}
