import { expect } from "@playwright/test";
import Ajv from "ajv";

// здесь описано как валидизуертся схема с помощью библиотеки AJV (json схема валидатор)
//в этой функции создается инстанс ajw
export function validateSchema(expectedSchema: object, body: object) {
  const ajv = new Ajv(); //создание экземпляра компилятора потом в нем создает экземплр валидатора через замыкание просовывая туда ожидаемую схему (ниже)
  const validate = ajv.compile(expectedSchema); //валидатор который работает исходя из той схемы которую ему отдали (замыкание)
  const isValid = validate(body); //сравнение с тем объект который будет сюда подставлен
  if (!isValid) {
    console.log("Data is not valid according to the schema.");
    console.log(validate.errors);
    expect.soft(validate.errors, "Should not have json schema errors").toMatchObject([]);
  }
  expect.soft(isValid, "Actual data should match expected").toBe(true);
}
