export const enum Status {
  /** Успешно */
  OK,

  /** Любая ошибка */
  Any,

  /** Не найдено */
  NotFound,

  /** Уже имеется */
  AlreadyExists,

  /** Недостаточно прав */
  PermissionDenied,

  /** Слишком частые запросы */
  TooFrequentRequests,

  /** Внутренняя ошибка сервера */
  InternalError,

  /** Много подключений */
  ManyConnections,

  /** Недостаточно аргументов */
  NotEnoughArguments,

  /** Не авторизован */
  NotAuthorized,

  /** Уже авторизован */
  Authorized,

  /** Неверное значение */
  IncorrectValue,

  /** Бездействие */
  Inactivity,

  /** Время ожидания истекло */
  Timeout,

  /** Ресурс недоступен */
  ResourceUnavailable,

  /** Операция не удалась */
  OperationFailed,

  /** Не реализован */
  NotImplemented,
}