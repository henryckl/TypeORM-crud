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

  public async update(req: Request, res: Response): Promise<Response> {
    const user = await getRepository(User).findOne(req.params.id)
    if (!user) {
      return res.json({error: "User does not exists!"})
    }
    getRepository(User).merge(user, req.body)
    const result = await getRepository(User).save(user)
    return res.json(result)
  }

  public async delete(req: Request, res: Response): Promise <Response> {
    const user = await getRepository(User).delete(req.params.id)

    return res.json(user)
  }
}

export default new UserController();
