Данная ветка описывает реализацию обертки для API на примере теста с созданием кастомера (create.spec.ts - тест "Create cusomer with smoke data with Controller")
Изменения:
1. Добавлена папка api -> apiClients и в ней файл request.ts в котором описана обертка над реквестом playwright
2. Папка api -> Controllers с файлом customers.controller.ts в котором описан класс что полностью описывает работу с кастомером (разные методы по типу "create", "getById", "getAll", "update", "delete")
3. Папка data -> schemas - customers -> файл "customer.schema.ts"
