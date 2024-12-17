import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../google/protobuf/timestamp";
/**
 * @generated from protobuf message users.CommonRequest
 */
export interface CommonRequest {
    /**
     * @generated from protobuf field: uint32 accountId = 2;
     */
    accountId: number;
}
/**
 * @generated from protobuf message users.IdentifyRequest
 */
export interface IdentifyRequest {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
    /**
     * @generated from protobuf field: string userAgent = 2;
     */
    userAgent: string;
    /**
     * @generated from protobuf field: int32 device = 3;
     */
    device: number;
    /**
     * @generated from protobuf field: string fcm = 5;
     */
    fcm: string;
}
/**
 * @generated from protobuf message users.IdentifyResponse
 */
export interface IdentifyResponse {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
    /**
     * @generated from protobuf field: map<string, string> errors = 2;
     */
    errors: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: optional users.Account account = 3;
     */
    account?: Account;
    /**
     * @generated from protobuf field: optional users.Registration registration = 4;
     */
    registration?: Registration;
}
/**
 * @generated from protobuf message users.LoginRequest
 */
export interface LoginRequest {
    /**
     * @generated from protobuf field: string phone = 1;
     */
    phone: string;
}
/**
 * @generated from protobuf message users.LoginResponse
 */
export interface LoginResponse {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
    /**
     * @generated from protobuf field: map<string, string> errors = 2;
     */
    errors: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: optional users.LoginData data = 3;
     */
    data?: LoginData;
}
/**
 * @generated from protobuf message users.LoginData
 */
export interface LoginData {
    /**
     * @generated from protobuf field: bool is_new = 1;
     */
    isNew: boolean;
    /**
     * @generated from protobuf field: uint32 type = 2;
     */
    type: number;
    /**
     * @generated from protobuf field: string data = 3;
     */
    data: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiredAt = 4;
     */
    expiredAt?: Timestamp;
    /**
     * @generated from protobuf field: repeated uint32 methods = 5;
     */
    methods: number[];
}
/**
 * @generated from protobuf message users.ConfirmResponse
 */
export interface ConfirmResponse {
    /**
     * @generated from protobuf field: uint32 type = 1;
     */
    type: number;
    /**
     * @generated from protobuf field: map<string, string> errors = 2;
     */
    errors: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: string data = 3;
     */
    data: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiredAt = 4;
     */
    expiredAt?: Timestamp;
    /**
     * @generated from protobuf field: repeated uint32 methods = 5;
     */
    methods: number[];
}
/**
 * @generated from protobuf message users.LogoutRequest
 */
export interface LogoutRequest {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
}
/**
 * @generated from protobuf message users.Account
 */
export interface Account {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string surname = 3;
     */
    surname: string;
    /**
     * @generated from protobuf field: string patronymic = 4;
     */
    patronymic: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp birthdate = 5;
     */
    birthdate?: Timestamp;
    /**
     * @generated from protobuf field: int32 country = 6;
     */
    country: number;
    /**
     * @generated from protobuf field: int32 district = 7;
     */
    district: number;
    /**
     * @generated from protobuf field: int32 locale = 8;
     */
    locale: number;
    /**
     * @generated from protobuf field: int32 timezone = 9;
     */
    timezone: number;
    /**
     * @generated from protobuf field: bytes photo = 10;
     */
    photo: Uint8Array;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 14;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 15;
     */
    updatedAt?: Timestamp;
}
/**
 * @generated from protobuf message users.Registration
 */
export interface Registration {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string phone = 2;
     */
    phone: string;
    /**
     * @generated from protobuf field: int32 type = 3;
     */
    type: number;
    /**
     * @generated from protobuf field: int32 code = 4;
     */
    code: number;
    /**
     * @generated from protobuf field: int32 timezone = 5;
     */
    timezone: number;
    /**
     * @generated from protobuf field: int32 country = 6;
     */
    country: number;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 14;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expired_at = 15;
     */
    expiredAt?: Timestamp;
}
/**
 * @generated from protobuf message users.AccountShort
 */
export interface AccountShort {
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string surname = 3;
     */
    surname: string;
    /**
     * @generated from protobuf field: string patronymic = 4;
     */
    patronymic: string;
}
/**
 * @generated from protobuf message users.CheckCodeRequest
 */
export interface CheckCodeRequest {
    /**
     * @generated from protobuf field: int32 code = 1;
     */
    code: number;
}
/**
 * @generated from protobuf message users.HasSessionRequest
 */
export interface HasSessionRequest {
    /**
     * @generated from protobuf field: int64 sessionId = 1;
     */
    sessionId: bigint;
    /**
     * @generated from protobuf field: uint32 accountId = 2;
     */
    accountId: number;
}
/**
 * @generated from protobuf message users.RegisterRequest
 */
export interface RegisterRequest {
    /**
     * @generated from protobuf field: string phone = 1;
     */
    phone: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string surname = 3;
     */
    surname: string;
    /**
     * @generated from protobuf field: int32 country = 10;
     */
    country: number;
    /**
     * @generated from protobuf field: int32 district = 11;
     */
    district: number;
    /**
     * @generated from protobuf field: int32 locale = 12;
     */
    locale: number;
    /**
     * @generated from protobuf field: int32 timezone = 13;
     */
    timezone: number;
}
/**
 * @generated from protobuf message users.AccountEmail
 */
export interface AccountEmail {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
    /**
     * @generated from protobuf field: bool is_primary = 3;
     */
    isPrimary: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 5;
     */
    updatedAt?: Timestamp;
}
/**
 * @generated from protobuf message users.AccountPhone
 */
export interface AccountPhone {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string phone = 2;
     */
    phone: string;
    /**
     * @generated from protobuf field: bool is_primary = 3;
     */
    isPrimary: boolean;
}
/**
 * @generated from protobuf message users.AccountRole
 */
export interface AccountRole {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: uint32 account_id = 2;
     */
    accountId: number;
    /**
     * @generated from protobuf field: string role = 3;
     */
    role: string;
    /**
     * @generated from protobuf field: int32 order = 4;
     */
    order: number;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
}
/**
 * @generated from protobuf message users.UpdateAccountDataRequest
 */
export interface UpdateAccountDataRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string surname = 2;
     */
    surname: string;
    /**
     * @generated from protobuf field: string patronymic = 3;
     */
    patronymic: string;
    /**
     * @generated from protobuf field: string birthdate = 4;
     */
    birthdate: string;
    /**
     * @generated from protobuf field: int32 country = 5;
     */
    country: number;
    /**
     * @generated from protobuf field: int32 district = 6;
     */
    district: number;
    /**
     * @generated from protobuf field: int32 locale = 7;
     */
    locale: number;
    /**
     * @generated from protobuf field: int32 timezone = 8;
     */
    timezone: number;
}
/**
 * @generated from protobuf message users.PhoneManipulationRequest
 */
export interface PhoneManipulationRequest {
    /**
     * @generated from protobuf field: int32 accountId = 1;
     */
    accountId: number;
    /**
     * @generated from protobuf field: string phone = 2;
     */
    phone: string;
}
/**
 * @generated from protobuf message users.EmailManipulationRequest
 */
export interface EmailManipulationRequest {
    /**
     * @generated from protobuf field: int32 accountId = 1;
     */
    accountId: number;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
}
/**
 * @generated from protobuf message users.GetSessionsRequest
 */
export interface GetSessionsRequest {
    /**
     * @generated from protobuf field: int32 accountId = 1;
     */
    accountId: number;
}
/**
 * @generated from protobuf message users.GetSessionsResponse
 */
export interface GetSessionsResponse {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
    /**
     * @generated from protobuf field: repeated users.Session sessions = 2;
     */
    sessions: Session[];
}
/**
 * @generated from protobuf message users.Session
 */
export interface Session {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: int32 account_id = 2;
     */
    accountId: number;
    /**
     * @generated from protobuf field: string ip = 3;
     */
    ip: string;
    /**
     * @generated from protobuf field: string UserAgent = 4 [json_name = "UserAgent"];
     */
    userAgent: string;
    /**
     * @generated from protobuf field: int32 Device = 5 [json_name = "Device"];
     */
    device: number;
    /**
     * @generated from protobuf field: string Fcm = 6 [json_name = "Fcm"];
     */
    fcm: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp used_at = 8;
     */
    usedAt?: Timestamp;
}
/**
 * @generated from protobuf message users.GetEmailsResponse
 */
export interface GetEmailsResponse {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
    /**
     * @generated from protobuf field: repeated users.AccountEmail emails = 2;
     */
    emails: AccountEmail[];
}
/**
 * @generated from protobuf message users.GetPhonesResponse
 */
export interface GetPhonesResponse {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
    /**
     * @generated from protobuf field: repeated users.AccountPhone phones = 2;
     */
    phones: AccountPhone[];
}
/**
 * @generated from protobuf enum users.Method
 */
export declare enum Method {
    /**
     * @generated from protobuf enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from protobuf enum value: IDENTIFY = 1;
     */
    IDENTIFY = 1,
    /**
     * @generated from protobuf enum value: LOGIN = 2;
     */
    LOGIN = 2,
    /**
     * @generated from protobuf enum value: LOGOUT = 3;
     */
    LOGOUT = 3,
    /**
     * @generated from protobuf enum value: CHECK_CODE = 4;
     */
    CHECK_CODE = 4,
    /**
     * @generated from protobuf enum value: GET_ACCOUNT = 5;
     */
    GET_ACCOUNT = 5,
    /**
     * @generated from protobuf enum value: GET_ACCOUNT_SHORT = 6;
     */
    GET_ACCOUNT_SHORT = 6,
    /**
     * @generated from protobuf enum value: GET_SESSIONS = 7;
     */
    GET_SESSIONS = 7,
    /**
     * @generated from protobuf enum value: UPDATE_ACCOUNT_DATA = 8;
     */
    UPDATE_ACCOUNT_DATA = 8,
    /**
     * @generated from protobuf enum value: GET_PHONES = 9;
     */
    GET_PHONES = 9,
    /**
     * @generated from protobuf enum value: ATTACH_PHONE = 10;
     */
    ATTACH_PHONE = 10,
    /**
     * @generated from protobuf enum value: DETACH_PHONE = 11;
     */
    DETACH_PHONE = 11,
    /**
     * @generated from protobuf enum value: SET_PRIMARY_PHONE = 12;
     */
    SET_PRIMARY_PHONE = 12,
    /**
     * @generated from protobuf enum value: GET_EMAILS = 13;
     */
    GET_EMAILS = 13,
    /**
     * @generated from protobuf enum value: ATTACH_EMAIL = 14;
     */
    ATTACH_EMAIL = 14,
    /**
     * @generated from protobuf enum value: DETACH_EMAIL = 15;
     */
    DETACH_EMAIL = 15,
    /**
     * @generated from protobuf enum value: SET_PRIMARY_EMAIL = 16;
     */
    SET_PRIMARY_EMAIL = 16
}
declare class CommonRequest$Type extends MessageType<CommonRequest> {
    constructor();
    create(value?: PartialMessage<CommonRequest>): CommonRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonRequest): CommonRequest;
    internalBinaryWrite(message: CommonRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.CommonRequest
 */
export declare const CommonRequest: CommonRequest$Type;
declare class IdentifyRequest$Type extends MessageType<IdentifyRequest> {
    constructor();
    create(value?: PartialMessage<IdentifyRequest>): IdentifyRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IdentifyRequest): IdentifyRequest;
    internalBinaryWrite(message: IdentifyRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.IdentifyRequest
 */
export declare const IdentifyRequest: IdentifyRequest$Type;
declare class IdentifyResponse$Type extends MessageType<IdentifyResponse> {
    constructor();
    create(value?: PartialMessage<IdentifyResponse>): IdentifyResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IdentifyResponse): IdentifyResponse;
    private binaryReadMap2;
    internalBinaryWrite(message: IdentifyResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.IdentifyResponse
 */
export declare const IdentifyResponse: IdentifyResponse$Type;
declare class LoginRequest$Type extends MessageType<LoginRequest> {
    constructor();
    create(value?: PartialMessage<LoginRequest>): LoginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginRequest): LoginRequest;
    internalBinaryWrite(message: LoginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.LoginRequest
 */
export declare const LoginRequest: LoginRequest$Type;
declare class LoginResponse$Type extends MessageType<LoginResponse> {
    constructor();
    create(value?: PartialMessage<LoginResponse>): LoginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginResponse): LoginResponse;
    private binaryReadMap2;
    internalBinaryWrite(message: LoginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.LoginResponse
 */
export declare const LoginResponse: LoginResponse$Type;
declare class LoginData$Type extends MessageType<LoginData> {
    constructor();
    create(value?: PartialMessage<LoginData>): LoginData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginData): LoginData;
    internalBinaryWrite(message: LoginData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.LoginData
 */
export declare const LoginData: LoginData$Type;
declare class ConfirmResponse$Type extends MessageType<ConfirmResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmResponse>): ConfirmResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmResponse): ConfirmResponse;
    private binaryReadMap2;
    internalBinaryWrite(message: ConfirmResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.ConfirmResponse
 */
export declare const ConfirmResponse: ConfirmResponse$Type;
declare class LogoutRequest$Type extends MessageType<LogoutRequest> {
    constructor();
    create(value?: PartialMessage<LogoutRequest>): LogoutRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LogoutRequest): LogoutRequest;
    internalBinaryWrite(message: LogoutRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.LogoutRequest
 */
export declare const LogoutRequest: LogoutRequest$Type;
declare class Account$Type extends MessageType<Account> {
    constructor();
    create(value?: PartialMessage<Account>): Account;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Account): Account;
    internalBinaryWrite(message: Account, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.Account
 */
export declare const Account: Account$Type;
declare class Registration$Type extends MessageType<Registration> {
    constructor();
    create(value?: PartialMessage<Registration>): Registration;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Registration): Registration;
    internalBinaryWrite(message: Registration, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.Registration
 */
export declare const Registration: Registration$Type;
declare class AccountShort$Type extends MessageType<AccountShort> {
    constructor();
    create(value?: PartialMessage<AccountShort>): AccountShort;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountShort): AccountShort;
    internalBinaryWrite(message: AccountShort, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.AccountShort
 */
export declare const AccountShort: AccountShort$Type;
declare class CheckCodeRequest$Type extends MessageType<CheckCodeRequest> {
    constructor();
    create(value?: PartialMessage<CheckCodeRequest>): CheckCodeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckCodeRequest): CheckCodeRequest;
    internalBinaryWrite(message: CheckCodeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.CheckCodeRequest
 */
export declare const CheckCodeRequest: CheckCodeRequest$Type;
declare class HasSessionRequest$Type extends MessageType<HasSessionRequest> {
    constructor();
    create(value?: PartialMessage<HasSessionRequest>): HasSessionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HasSessionRequest): HasSessionRequest;
    internalBinaryWrite(message: HasSessionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.HasSessionRequest
 */
export declare const HasSessionRequest: HasSessionRequest$Type;
declare class RegisterRequest$Type extends MessageType<RegisterRequest> {
    constructor();
    create(value?: PartialMessage<RegisterRequest>): RegisterRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterRequest): RegisterRequest;
    internalBinaryWrite(message: RegisterRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.RegisterRequest
 */
export declare const RegisterRequest: RegisterRequest$Type;
declare class AccountEmail$Type extends MessageType<AccountEmail> {
    constructor();
    create(value?: PartialMessage<AccountEmail>): AccountEmail;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountEmail): AccountEmail;
    internalBinaryWrite(message: AccountEmail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.AccountEmail
 */
export declare const AccountEmail: AccountEmail$Type;
declare class AccountPhone$Type extends MessageType<AccountPhone> {
    constructor();
    create(value?: PartialMessage<AccountPhone>): AccountPhone;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountPhone): AccountPhone;
    internalBinaryWrite(message: AccountPhone, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.AccountPhone
 */
export declare const AccountPhone: AccountPhone$Type;
declare class AccountRole$Type extends MessageType<AccountRole> {
    constructor();
    create(value?: PartialMessage<AccountRole>): AccountRole;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountRole): AccountRole;
    internalBinaryWrite(message: AccountRole, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.AccountRole
 */
export declare const AccountRole: AccountRole$Type;
declare class UpdateAccountDataRequest$Type extends MessageType<UpdateAccountDataRequest> {
    constructor();
    create(value?: PartialMessage<UpdateAccountDataRequest>): UpdateAccountDataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateAccountDataRequest): UpdateAccountDataRequest;
    internalBinaryWrite(message: UpdateAccountDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.UpdateAccountDataRequest
 */
export declare const UpdateAccountDataRequest: UpdateAccountDataRequest$Type;
declare class PhoneManipulationRequest$Type extends MessageType<PhoneManipulationRequest> {
    constructor();
    create(value?: PartialMessage<PhoneManipulationRequest>): PhoneManipulationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PhoneManipulationRequest): PhoneManipulationRequest;
    internalBinaryWrite(message: PhoneManipulationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.PhoneManipulationRequest
 */
export declare const PhoneManipulationRequest: PhoneManipulationRequest$Type;
declare class EmailManipulationRequest$Type extends MessageType<EmailManipulationRequest> {
    constructor();
    create(value?: PartialMessage<EmailManipulationRequest>): EmailManipulationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EmailManipulationRequest): EmailManipulationRequest;
    internalBinaryWrite(message: EmailManipulationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.EmailManipulationRequest
 */
export declare const EmailManipulationRequest: EmailManipulationRequest$Type;
declare class GetSessionsRequest$Type extends MessageType<GetSessionsRequest> {
    constructor();
    create(value?: PartialMessage<GetSessionsRequest>): GetSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionsRequest): GetSessionsRequest;
    internalBinaryWrite(message: GetSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.GetSessionsRequest
 */
export declare const GetSessionsRequest: GetSessionsRequest$Type;
declare class GetSessionsResponse$Type extends MessageType<GetSessionsResponse> {
    constructor();
    create(value?: PartialMessage<GetSessionsResponse>): GetSessionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionsResponse): GetSessionsResponse;
    internalBinaryWrite(message: GetSessionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.GetSessionsResponse
 */
export declare const GetSessionsResponse: GetSessionsResponse$Type;
declare class Session$Type extends MessageType<Session> {
    constructor();
    create(value?: PartialMessage<Session>): Session;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Session): Session;
    internalBinaryWrite(message: Session, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.Session
 */
export declare const Session: Session$Type;
declare class GetEmailsResponse$Type extends MessageType<GetEmailsResponse> {
    constructor();
    create(value?: PartialMessage<GetEmailsResponse>): GetEmailsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetEmailsResponse): GetEmailsResponse;
    internalBinaryWrite(message: GetEmailsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.GetEmailsResponse
 */
export declare const GetEmailsResponse: GetEmailsResponse$Type;
declare class GetPhonesResponse$Type extends MessageType<GetPhonesResponse> {
    constructor();
    create(value?: PartialMessage<GetPhonesResponse>): GetPhonesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPhonesResponse): GetPhonesResponse;
    internalBinaryWrite(message: GetPhonesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message users.GetPhonesResponse
 */
export declare const GetPhonesResponse: GetPhonesResponse$Type;
/**
 * @generated ServiceType for protobuf service users.Users
 */
export declare const Users: ServiceType;
export {};
