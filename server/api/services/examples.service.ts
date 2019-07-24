import l from "../../common/logger";

import { Example, IExampleModel } from "../models/example";

export class ExamplesService {
  async getAll(): Promise<IExampleModel[]> {
    l.info("fetch all examples");
    const examples = (await Example.find(
      null,
      "-_id -__v"
    ).lean()) as IExampleModel[];
    return examples;
  }

  async getById(id: number): Promise<IExampleModel> {
    l.info(`fetch example with id ${id}`);
    const example = (await Example.findOne(
      { id: id },
      "-_id -__v"
    ).lean()) as IExampleModel;
    return example;
  }

  async create(data: IExampleModel): Promise<IExampleModel> {
    l.info(`create example with data ${data}`);
    const example = new Example(data);
    const doc = (await example.save()) as IExampleModel;
    return doc;
  }
}

export default new ExamplesService();
