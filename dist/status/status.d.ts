export declare const enum Status {
    /** Успешно */
    OK = 0,
    /** Любая ошибка */
    Any = 1,
    /** Не найдено */
    NotFound = 2,
    /** Уже имеется */
    AlreadyExists = 3,
    /** Недостаточно прав */
    PermissionDenied = 4,
    /** Слишком частые запросы */
    TooFrequentRequests = 5,
    /** Внутренняя ошибка сервера */
    InternalError = 6,
    /** Много подключений */
    ManyConnections = 7,
    /** Недостаточно аргументов */
    NotEnoughArguments = 8,
    /** Не авторизован */
    NotAuthorized = 9,
    /** Уже авторизован */
    Authorized = 10,
    /** Неверное значение */
    IncorrectValue = 11,
    /** Бездействие */
    Inactivity = 12,
    /** Время ожидания истекло */
    Timeout = 13,
    /** Ресурс недоступен */
    ResourceUnavailable = 14,
    /** Операция не удалась */
    OperationFailed = 15,
    /** Не реализован */
    NotImplemented = 16
}
export declare function readable(s: Status): string;
