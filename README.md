Данная ветка описывает реализацию обертки для API на примере теста с созданием кастомера (create.spec.ts - тест "Create cusomer with smoke data with Controller")
Изменения:
1. Добавлена папка api -> apiClients и в ней файл request.ts в котором описана обертка над реквестом playwright
2. Добавлена папка api -> Controllers с файлом customers.controller.ts в котором описан класс что полностью описывает работу с кастомером (разные методы по типу "create", "getById", "getAll", "update", "delete")
3. Изменен файл в папке types -> файл "customer.types.ts" а именно добавлено 3 интерфейса "ICustomerFromResponse" (исп-ся в интерфейсах "ICustomerResponse" и "ICustomersResponse"), "ICustomerResponse" (используется в файле customers.controller.ts из п3), "ICustomersResponse" (используется в файле customers.controller.ts из п3)
4. Добален файл "controllers.fixture.ts" в папку "fixtures" где реализовано расширение тестового объекта Playwright (test) с помощью кастомного контроллера CustomersController, чтобы использовать его внутри автотестов
5. 
