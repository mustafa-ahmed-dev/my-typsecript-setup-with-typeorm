import { DocType, PrismaClient, Admin } from "@prisma/client";

import Service from "./../../abstracts/Service";
import InternalServerError from "./../../errors/InternalServerError";
import asyncHandler from "./../helpers/asyncHandler.helper";
import { AdminData } from "./admin.validation";

class AdminService extends Service {
  constructor(private prisma: PrismaClient, private docType: DocType) {
    super();
  }

  // : TODO: Add filters
  // pagination: Pagination
  public async findAll() {}

  public async findOneById(id: string) {}

  public async findByName(name: string) {}

  public async findOneByAdminname(adminname: string) {}

  public async findByEmail(email: string) {}

  public async createOne(adminData: AdminData) {}

  public async updateOne(id: string, data: AdminData) {}

  public async deleteOne(id: string) {}

  public async login(id: string, token: string) {}

  public async logout(id: string, token: string) {}

  public async refreshToken(id: string, token: string) {}
}

export default AdminService;
