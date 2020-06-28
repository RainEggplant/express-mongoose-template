import "mocha";
import { expect } from "chai";
import request from "supertest";
import Server from "../server";

describe("Examples", () => {
  it("should add a new example", () =>
    request(Server)
      .post("/api/v1/examples")
      .send({ name: "test" })
      .expect(201));

  it("should get an example by id", () =>
    request(Server)
      .get("/api/v1/examples/1")
      .expect("Content-Type", /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an("object")
          .that.has.property("name")
          .equal("test");
      }));

  it("should get all examples", () =>
    request(Server)
      .get("/api/v1/examples")
      .expect("Content-Type", /json/)
      .then((r) => {
        expect(r.body).to.be.an("array").of.length(1);
      }));
});
