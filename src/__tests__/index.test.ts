import app from "../app";
import supertest from "supertest";

const client = supertest(app);

describe("Testing the environment", () => {
  test("Test the environment", () => {
    expect(true).toBe(true);
  });

  test("If testing endpoint is working", async () => {
    const response = await client.get("/test");
    expect(response.body.message).toBe("Hello, World!");
  });
});
