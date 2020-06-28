import mongoose from "mongoose";
import sequence from "mongoose-sequence";

const AutoIncrement = sequence(mongoose);

export interface IExampleModel extends mongoose.Document {
  id: number;
  name: string;
}

const schema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    name: String,
  },
  {
    collection: "examples",
  }
);

schema.plugin(AutoIncrement, { inc_field: "id" });

export const Example = mongoose.model<IExampleModel>("Example", schema);
