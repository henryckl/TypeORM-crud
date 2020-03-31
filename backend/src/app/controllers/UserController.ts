import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await getRepository(User).find();
    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const email = await getRepository(User).findOne({
      where: {
        email: req.body.email
      }
    })

    if (email) {
      return res.json({error: "E-mail already exists!"})
    }
    
    const user = getRepository(User).create(req.body)
    await getRepository(User).save(user)
    return res.json(user)
  }
}

export default new UserController();
