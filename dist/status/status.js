export var Status;
(function (Status) {
    /** Успешно */
    Status[Status["OK"] = 0] = "OK";
    /** Любая ошибка */
    Status[Status["Any"] = 1] = "Any";
    /** Не найдено */
    Status[Status["NotFound"] = 2] = "NotFound";
    /** Уже имеется */
    Status[Status["AlreadyExists"] = 3] = "AlreadyExists";
    /** Недостаточно прав */
    Status[Status["PermissionDenied"] = 4] = "PermissionDenied";
    /** Слишком частые запросы */
    Status[Status["TooFrequentRequests"] = 5] = "TooFrequentRequests";
    /** Внутренняя ошибка сервера */
    Status[Status["InternalError"] = 6] = "InternalError";
    /** Много подключений */
    Status[Status["ManyConnections"] = 7] = "ManyConnections";
    /** Недостаточно аргументов */
    Status[Status["NotEnoughArguments"] = 8] = "NotEnoughArguments";
    /** Не авторизован */
    Status[Status["NotAuthorized"] = 9] = "NotAuthorized";
    /** Уже авторизован */
    Status[Status["Authorized"] = 10] = "Authorized";
    /** Неверное значение */
    Status[Status["IncorrectValue"] = 11] = "IncorrectValue";
    /** Бездействие */
    Status[Status["Inactivity"] = 12] = "Inactivity";
    /** Время ожидания истекло */
    Status[Status["Timeout"] = 13] = "Timeout";
    /** Ресурс недоступен */
    Status[Status["ResourceUnavailable"] = 14] = "ResourceUnavailable";
    /** Операция не удалась */
    Status[Status["OperationFailed"] = 15] = "OperationFailed";
    /** Не реализован */
    Status[Status["NotImplemented"] = 16] = "NotImplemented";
})(Status || (Status = {}));
const m = {
    [Status.OK]: "Успешно",
    [Status.Any]: "Любая ошибка",
    [Status.NotFound]: "Не найдено",
    [Status.AlreadyExists]: "Уже имеется",
    [Status.PermissionDenied]: "Недостаточно прав",
    [Status.TooFrequentRequests]: "Слишком частые запросы",
    [Status.InternalError]: "Внутренняя ошибка сервера",
    [Status.ManyConnections]: "Много подключений",
    [Status.NotEnoughArguments]: "Недостаточно аргументов",
    [Status.NotAuthorized]: "Не авторизован",
    [Status.Authorized]: "Уже авторизован",
    [Status.IncorrectValue]: "Неверное значение",
    [Status.Inactivity]: "Бездействие",
    [Status.Timeout]: "Время ожидания истекло",
    [Status.ResourceUnavailable]: "Ресурс недоступен",
    [Status.OperationFailed]: "Операция не удалась",
    [Status.NotImplemented]: "Не реализован",
};
export function readable(s) {
    return m[s] ? m[s] : m[Status.Any];
}
