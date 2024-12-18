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

const m: Record<Status, string> = {
  [Status.OK]:"Успешно",
  [Status.Any]:"Любая ошибка",
  [Status.NotFound]:"Не найдено",
  [Status.AlreadyExists]:"Уже имеется",
  [Status.PermissionDenied]:"Недостаточно прав",
  [Status.TooFrequentRequests]:"Слишком частые запросы",
  [Status.InternalError]:"Внутренняя ошибка сервера",
  [Status.ManyConnections]:"Много подключений",
  [Status.NotEnoughArguments]:"Недостаточно аргументов",
  [Status.NotAuthorized]:"Не авторизован",
  [Status.Authorized]:"Уже авторизован",
  [Status.IncorrectValue]:"Неверное значение",
  [Status.Inactivity]:"Бездействие",
  [Status.Timeout]:"Время ожидания истекло",
  [Status.ResourceUnavailable]:"Ресурс недоступен",
  [Status.OperationFailed]:"Операция не удалась",
  [Status.NotImplemented]:"Не реализован",
}

export function readable(s: Status): string {
  return m[s] ? m[s] : m[Status.Any]
}