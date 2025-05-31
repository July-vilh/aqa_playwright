// TASK1
// 1. Реализовать SignInController по аналогии с CustomersController и использовать его во всех уже написанных АПИ тестах

// TASK2
/* Используя DDT подход, напишите тест сьют для проверки эндпоинта создания покупателя:
  - с позитивными проверками
  - с негативными проверками

  Используйте SignInConroller, CustomersController, после каждого теста, где создастся кастомер - удаляйте его.

  Требования:
  Email: обязательное, уникальный
  Name: обязательное, Customer's name should contain only 1-40 alphabetical characters and one space between
  Country: обязательное, ['USA', 'Canada', 'Belarus', 'Ukraine', 'Germany', 'France', 'Great Britain', 'Russia']
  City: обязательное, City's name should contain only 1-20 alphabetical characters and one space between
  Street: обязательное, Street should contain only 1-40 alphanumerical characters and one space between
  House: обязательное, House number should be in range 1-999
  Flat: обязательное, Flat number should be in range 1-9999
  Phone: обязательное, Mobile Number should be at least 10 characters (max 20) and start with a +
  Notes: Notes should be in range 0-250 and without < or > symbols */