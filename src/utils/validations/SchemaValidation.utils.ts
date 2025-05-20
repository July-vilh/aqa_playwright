import { expect } from "@playwright/test";
import Ajv from "ajv";

export function validateSchema(expectedSchema: object, body: object) {
  const ajv = new Ajv(); 
  const validate = ajv.compile(expectedSchema); 
  const isValid = validate(body); 
  if (!isValid) {
    console.log("Data is not valid according to the schema.");
    console.log(validate.errors);
    expect.soft(validate.errors, "Should not have json schema errors").toMatchObject([]);
  }
  expect.soft(isValid, "Actual data should match expected").toBe(true);
}