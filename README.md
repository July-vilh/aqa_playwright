Данная ветка описывает базовое тестирование (автоматизированное) API (методы post, put, get, delete)

Изменения:
1. Добавлен файл "SchemaValidation.utils.ts" в src -> utils -> validations; в нем описана валидация json схем с помощью библиотеки AJV
Валидатор сравнивает фактический объект (например, тело ответа от сервера) с ожидаемой структурой (JSON-схемой) в "customer.schema.ts".
2. Добавлены файлы "customer.schema.ts" и "statusCodes.schema.ts" в src -> data -> schemas-customers
в "customer.schema.ts" описана json-схема (это просто способ задать правила, каким должен быть объект, т.е. шаблон который гоыорит что должен содержать объект)
в "statusCodes.schema.ts" описан enum с возможными статус-кодами
3. Добавлен файл "api-config.ts" в src -> config; описывает формирование урлы и эндпоинты
4. Добавлены файлы "create.spec.ts", "delete.spec.ts", "getById.spec.ts" и "update.spec.ts" в src -> api-tests-customers и содержат непосредственно api тесты с ассертами
