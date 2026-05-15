import { MEMBER_DEFAULT, type IMember } from "types/members.type";
import type { ServiceResponse } from "types/response.type";

import type { MemberCreateDto } from "./dto/member-create.dto";
import type { MemberUpdateDto } from "./dto/member-update.dto";

import { Injectable } from "@nestjs/common";

import { Members } from "src/database/models/members.model";
import Sorter, { QuerySort } from "services/sorter.service";
import { generateId } from "src/database/generate-id";

const SORT_BY = [
  "date",
  "name",
  "role",
  "tag"
];

const sorter = new Sorter(SORT_BY);

type Filter = { name: string } | { id: string } | { tag: string };

@Injectable()
export class Service {
  public async get(query: QuerySort): Promise<ServiceResponse<IMember[]>> {
    const members = await Members.find({}, {}, sorter.execute(query));

    return {
      successed: true,
      data: members.map(m => m.toObject()),
      error: null
    };
  }

  public async getOne(filter: Filter): Promise<ServiceResponse<IMember>> {
    const member = await Members.findOne(filter);

    if (!member) {
      return {
        successed: false,
        data: null,
        error: "not found"
      }
    }

    return {
      successed: true,
      data: member.toObject(),
      error: null
    };
  }

  public async post(data: MemberCreateDto): Promise<ServiceResponse<IMember>> {
    const member = await new Members({
      id: generateId(),
      ...MEMBER_DEFAULT,
      ...data
    }).save();

    return {
      successed: true,
      data: member.toObject(),
      error: null
    };
  }

  public async put(filter: Filter, data: MemberUpdateDto): Promise<ServiceResponse<IMember>> {
    const updatedMember = await Members.findOneAndUpdate(filter, data)

    if (!updatedMember) {
      return {
        successed: false,
        data: null,
        error: "not found"
      }
    }

    return {
      successed: true,
      data: updatedMember.toObject(),
      error: null
    };
  }

  public patch(filter: Filter, data: MemberUpdateDto): Promise<ServiceResponse<IMember>> {
    return this.put(filter, data);
  }

  public async delete(filter: Filter): Promise<ServiceResponse<string>> {
    const deleted = await Members.deleteOne(filter);

    if (!deleted.acknowledged) {
      return {
        successed: false,
        data: null,
        error: "not deleted"
      }
    }

    return {
      successed: true,
      data: "deleted",
      error: null
    };
  }
}