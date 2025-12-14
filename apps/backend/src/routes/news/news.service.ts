import type { INews } from "types/news.type";
import type { ServiceResponse } from "types/response.type";

import type { NewsCreateDto } from "./dto/news-create.dto";
import type { NewsUpdateDto } from "./dto/news-update.dto";

import { Injectable } from "@nestjs/common";

import { News } from "src/database/models/news.model";
import { generateId } from "src/database/generate-id";
import Parser from "src/database/parse";
import Sorter, { type QuerySort } from "services/sorter.service";

const SORT_BY = ["date", "name", "author"];

const parser = new Parser("news");
const sorter = new Sorter(SORT_BY);

type Filter = { name: string } | { id: string };

@Injectable()
export class Service {
  public async get(query: QuerySort): Promise<ServiceResponse<INews[]>> {
    const news = await News.find({}, {}, sorter.execute(query));

    return {
      successed: true,
      data: news.map((n) => n.toObject()),
      error: null,
    };
  }

  public async getOne(filter: Filter): Promise<ServiceResponse<INews>> {
    const news = await News.findOne(filter);

    if (!news) {
      return {
        successed: false,
        data: null,
        error: "not found",
      };
    }

    return {
      successed: true,
      data: news.toObject(),
      error: null,
    };
  }

  public async post(data: NewsCreateDto): Promise<ServiceResponse<INews>> {
    const news = await new News({
      id: generateId(),
      date: new Date().toISOString(),
      ...parser.execute(data),
    }).save();

    return {
      successed: true,
      data: news.toObject(),
      error: null,
    };
  }

  public async put(
    filter: Filter,
    data: NewsUpdateDto,
  ): Promise<ServiceResponse<INews>> {
    const updatedNews = await News.findOneAndUpdate(
      filter,
      parser.execute(data),
      {
        returnDocument: "after",
      },
    );

    if (!updatedNews) {
      return {
        successed: false,
        data: null,
        error: "not found or another error",
      };
    }

    return {
      successed: true,
      data: updatedNews.toObject(),
      error: null,
    };
  }

  public patch(
    filter: Filter,
    data: NewsUpdateDto,
  ): Promise<ServiceResponse<INews>> {
    return this.put(filter, data);
  }

  public async delete(filter: Filter): Promise<ServiceResponse<string>> {
    const deleted = await News.deleteOne(filter);

    if (!deleted.acknowledged) {
      return {
        successed: false,
        data: null,
        error: "some error",
      };
    }

    return {
      successed: true,
      data: "deleted",
      error: null,
    };
  }
}
