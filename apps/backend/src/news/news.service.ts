import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import type { News } from "@generated/prisma/client";
import { CreateNewsDto } from "./dto";

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new news article
   */
  async create(dto: CreateNewsDto): Promise<News> {
    return this.prisma.client.news.create({
      data: {
        title: dto.title,
        content: dto.content,
      },
    });
  }

  /**
   * Retrieves all news articles, ordered by creation date (newest first)
   */
  async findAll(): Promise<News[]> {
    return this.prisma.client.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Retrieves a limited number of recent news articles
   */
  async findRecent(limit: number = 3): Promise<News[]> {
    return this.prisma.client.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
    });
  }

  /**
   * Retrieves a single news article by ID
   */
  async findOne(id: string): Promise<News | null> {
    return this.prisma.client.news.findUnique({
      where: { id },
    });
  }

  /**
   * Deletes a news article by ID
   */
  async delete(id: string): Promise<News> {
    return this.prisma.client.news.delete({
      where: { id },
    });
  }
}
