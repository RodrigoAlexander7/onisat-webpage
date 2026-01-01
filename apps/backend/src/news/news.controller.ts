import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiQuery,
} from "@nestjs/swagger";
import { NewsService } from "./news.service";
import { CreateNewsDto } from "./dto";

@ApiTags("news")
@Controller("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  /**
   * GET /news
   * Public endpoint - retrieves all news articles
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get all news articles (public)" })
  @ApiQuery({
    name: "limit",
    required: false,
    type: Number,
    description: "Limit the number of articles returned",
  })
  @ApiResponse({
    status: 200,
    description: "List of news articles",
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          content: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
    },
  })
  async findAll(@Query("limit") limit?: string) {
    if (limit) {
      const parsedLimit = parseInt(limit, 10);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        return this.newsService.findRecent(parsedLimit);
      }
    }
    return this.newsService.findAll();
  }

  /**
   * GET /news/:id
   * Public endpoint - retrieves a single news article
   */
  @Get(":id")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get a single news article by ID (public)" })
  @ApiResponse({
    status: 200,
    description: "News article found",
  })
  @ApiResponse({
    status: 404,
    description: "News article not found",
  })
  async findOne(@Param("id") id: string) {
    const news = await this.newsService.findOne(id);
    if (!news) {
      throw new NotFoundException(`News article with ID ${id} not found`);
    }
    return news;
  }

  /**
   * POST /news
   * Protected endpoint - creates a new news article
   * Requires JWT authentication
   */
  @UseGuards(AuthGuard("jwt"))
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a new news article (protected)" })
  @ApiBody({ type: CreateNewsDto })
  @ApiResponse({
    status: 201,
    description: "News article created successfully",
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - valid JWT token required",
  })
  async create(@Body() dto: CreateNewsDto) {
    return this.newsService.create(dto);
  }

  /**
   * DELETE /news/:id
   * Protected endpoint - deletes a news article
   * Requires JWT authentication
   */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete a news article (protected)" })
  @ApiResponse({
    status: 200,
    description: "News article deleted successfully",
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - valid JWT token required",
  })
  @ApiResponse({
    status: 404,
    description: "News article not found",
  })
  async delete(@Param("id") id: string) {
    const news = await this.newsService.findOne(id);
    if (!news) {
      throw new NotFoundException(`News article with ID ${id} not found`);
    }
    return this.newsService.delete(id);
  }
}
