import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../google/protobuf/timestamp";
/**
 * @generated from protobuf message assist.UUID
 */
export interface UUID {
    /**
     * @generated from protobuf field: bytes value = 1;
     */
    value: Uint8Array;
}
/**
 * Folder Messages
 *
 * @generated from protobuf message assist.Folder
 */
export interface Folder {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * @generated from protobuf field: int32 user_id = 2;
     */
    userId: number;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
}
/**
 * @generated from protobuf message assist.CreateFolderRequest
 */
export interface CreateFolderRequest {
    /**
     * @generated from protobuf field: int32 user_id = 1;
     */
    userId: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
/**
 * @generated from protobuf message assist.CreateFolderResponse
 */
export interface CreateFolderResponse {
    /**
     * @generated from protobuf field: assist.Folder folder = 1;
     */
    folder?: Folder;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.DeleteFolderRequest
 */
export interface DeleteFolderRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message assist.GetFolderByIDRequest
 */
export interface GetFolderByIDRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message assist.GetFolderByIDResponse
 */
export interface GetFolderByIDResponse {
    /**
     * @generated from protobuf field: assist.Folder folder = 1;
     */
    folder?: Folder;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.GetUserFoldersRequest
 */
export interface GetUserFoldersRequest {
    /**
     * @generated from protobuf field: int32 user_id = 1;
     */
    userId: number;
    /**
     * @generated from protobuf field: int32 limit = 2;
     */
    limit: number;
}
/**
 * @generated from protobuf message assist.GetUserFoldersResponse
 */
export interface GetUserFoldersResponse {
    /**
     * @generated from protobuf field: repeated assist.Folder folders = 1;
     */
    folders: Folder[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * Chat Messages
 *
 * @generated from protobuf message assist.Chat
 */
export interface Chat {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * @generated from protobuf field: int32 user_id = 2;
     */
    userId: number;
    /**
     * @generated from protobuf field: optional bytes folder_id = 3;
     */
    folderId?: Uint8Array;
    /**
     * @generated from protobuf field: optional string title = 4;
     */
    title?: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
}
/**
 * @generated from protobuf message assist.CreateChatRequest
 */
export interface CreateChatRequest {
    /**
     * @generated from protobuf field: int32 user_id = 1;
     */
    userId: number;
    /**
     * @generated from protobuf field: optional bytes folder_id = 3;
     */
    folderId?: Uint8Array;
    /**
     * @generated from protobuf field: optional string title = 4;
     */
    title?: string;
}
/**
 * @generated from protobuf message assist.CreateChatResponse
 */
export interface CreateChatResponse {
    /**
     * @generated from protobuf field: assist.Chat chat = 1;
     */
    chat?: Chat;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.ChangeChatFolderRequest
 */
export interface ChangeChatFolderRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes folder_id = 2;
     */
    folderId?: Uint8Array;
}
/**
 * @generated from protobuf message assist.ChangeChatFolderResponse
 */
export interface ChangeChatFolderResponse {
    /**
     * @generated from protobuf field: assist.Chat chat = 1;
     */
    chat?: Chat;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.ChangeChatTitleRequest
 */
export interface ChangeChatTitleRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * @generated from protobuf field: optional string title = 2;
     */
    title?: string;
}
/**
 * @generated from protobuf message assist.ChangeChatTitleResponse
 */
export interface ChangeChatTitleResponse {
    /**
     * @generated from protobuf field: assist.Chat chat = 1;
     */
    chat?: Chat;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.DeleteChatRequest
 */
export interface DeleteChatRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message assist.GetChatByIDRequest
 */
export interface GetChatByIDRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message assist.GetChatByIDResponse
 */
export interface GetChatByIDResponse {
    /**
     * @generated from protobuf field: assist.Chat chat = 1;
     */
    chat?: Chat;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.GetChatsInFolderRequest
 */
export interface GetChatsInFolderRequest {
    /**
     * @generated from protobuf field: bytes folder_id = 1;
     */
    folderId: Uint8Array;
    /**
     * @generated from protobuf field: int32 limit = 2;
     */
    limit: number;
}
/**
 * @generated from protobuf message assist.GetChatsInFolderResponse
 */
export interface GetChatsInFolderResponse {
    /**
     * @generated from protobuf field: repeated assist.Chat chats = 1;
     */
    chats: Chat[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.GetUserChatsRequest
 */
export interface GetUserChatsRequest {
    /**
     * @generated from protobuf field: int32 user_id = 1;
     */
    userId: number;
    /**
     * @generated from protobuf field: int32 limit = 2;
     */
    limit: number;
}
/**
 * @generated from protobuf message assist.GetUserChatsResponse
 */
export interface GetUserChatsResponse {
    /**
     * @generated from protobuf field: repeated assist.Chat chats = 1;
     */
    chats: Chat[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * Message Messages
 *
 * @generated from protobuf message assist.Message
 */
export interface Message {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * @generated from protobuf field: bytes chat_id = 2;
     */
    chatId: Uint8Array;
    /**
     * @generated from protobuf field: bool is_bot = 3;
     */
    isBot: boolean;
    /**
     * @generated from protobuf field: string content = 4;
     */
    content: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
}
/**
 * @generated from protobuf message assist.SendMessageRequest
 */
export interface SendMessageRequest {
    /**
     * @generated from protobuf field: bytes chat_id = 1;
     */
    chatId: Uint8Array;
    /**
     * @generated from protobuf field: string content = 2;
     */
    content: string;
}
/**
 * @generated from protobuf message assist.SendMessageResponse
 */
export interface SendMessageResponse {
    /**
     * @generated from protobuf field: assist.Message message = 1;
     */
    message?: Message;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.GetMessageByIDRequest
 */
export interface GetMessageByIDRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message assist.GetMessageByIDResponse
 */
export interface GetMessageByIDResponse {
    /**
     * @generated from protobuf field: assist.Message message = 1;
     */
    message?: Message;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message assist.GetMessagesInChatRequest
 */
export interface GetMessagesInChatRequest {
    /**
     * @generated from protobuf field: bytes chat_id = 1;
     */
    chatId: Uint8Array;
    /**
     * @generated from protobuf field: int32 limit = 2;
     */
    limit: number;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp from_message_date = 3;
     */
    fromMessageDate?: Timestamp;
}
/**
 * @generated from protobuf message assist.GetMessagesInChatResponse
 */
export interface GetMessagesInChatResponse {
    /**
     * @generated from protobuf field: repeated assist.Message messages = 1;
     */
    messages: Message[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf enum assist.Method
 */
export declare enum Method {
    /**
     * @generated from protobuf enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from protobuf enum value: CREATE_CHAT = 1;
     */
    CREATE_CHAT = 1,
    /**
     * @generated from protobuf enum value: CHANGE_CHAT_FOLDER = 2;
     */
    CHANGE_CHAT_FOLDER = 2,
    /**
     * @generated from protobuf enum value: CHANGE_CHAT_TITLE = 3;
     */
    CHANGE_CHAT_TITLE = 3,
    /**
     * @generated from protobuf enum value: DELETE_CHAT = 4;
     */
    DELETE_CHAT = 4,
    /**
     * @generated from protobuf enum value: GET_CHAT_BY_ID = 5;
     */
    GET_CHAT_BY_ID = 5,
    /**
     * @generated from protobuf enum value: GET_CHATS_IN_FOLDER = 6;
     */
    GET_CHATS_IN_FOLDER = 6,
    /**
     * @generated from protobuf enum value: GET_USER_CHATS = 7;
     */
    GET_USER_CHATS = 7,
    /**
     * @generated from protobuf enum value: CREATE_FOLDER = 8;
     */
    CREATE_FOLDER = 8,
    /**
     * @generated from protobuf enum value: DELETE_FOLDER = 9;
     */
    DELETE_FOLDER = 9,
    /**
     * @generated from protobuf enum value: GET_FOLDER_BY_ID = 10;
     */
    GET_FOLDER_BY_ID = 10,
    /**
     * @generated from protobuf enum value: GET_USER_FOLDERS = 11;
     */
    GET_USER_FOLDERS = 11,
    /**
     * @generated from protobuf enum value: SEND_MESSAGE = 12;
     */
    SEND_MESSAGE = 12,
    /**
     * @generated from protobuf enum value: GET_MESSAGE_BY_ID = 13;
     */
    GET_MESSAGE_BY_ID = 13,
    /**
     * @generated from protobuf enum value: GET_MESSAGES_IN_CHAT = 14;
     */
    GET_MESSAGES_IN_CHAT = 14
}
declare class UUID$Type extends MessageType<UUID> {
    constructor();
    create(value?: PartialMessage<UUID>): UUID;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UUID): UUID;
    internalBinaryWrite(message: UUID, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.UUID
 */
export declare const UUID: UUID$Type;
declare class Folder$Type extends MessageType<Folder> {
    constructor();
    create(value?: PartialMessage<Folder>): Folder;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Folder): Folder;
    internalBinaryWrite(message: Folder, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.Folder
 */
export declare const Folder: Folder$Type;
declare class CreateFolderRequest$Type extends MessageType<CreateFolderRequest> {
    constructor();
    create(value?: PartialMessage<CreateFolderRequest>): CreateFolderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateFolderRequest): CreateFolderRequest;
    internalBinaryWrite(message: CreateFolderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.CreateFolderRequest
 */
export declare const CreateFolderRequest: CreateFolderRequest$Type;
declare class CreateFolderResponse$Type extends MessageType<CreateFolderResponse> {
    constructor();
    create(value?: PartialMessage<CreateFolderResponse>): CreateFolderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateFolderResponse): CreateFolderResponse;
    internalBinaryWrite(message: CreateFolderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.CreateFolderResponse
 */
export declare const CreateFolderResponse: CreateFolderResponse$Type;
declare class DeleteFolderRequest$Type extends MessageType<DeleteFolderRequest> {
    constructor();
    create(value?: PartialMessage<DeleteFolderRequest>): DeleteFolderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteFolderRequest): DeleteFolderRequest;
    internalBinaryWrite(message: DeleteFolderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.DeleteFolderRequest
 */
export declare const DeleteFolderRequest: DeleteFolderRequest$Type;
declare class GetFolderByIDRequest$Type extends MessageType<GetFolderByIDRequest> {
    constructor();
    create(value?: PartialMessage<GetFolderByIDRequest>): GetFolderByIDRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFolderByIDRequest): GetFolderByIDRequest;
    internalBinaryWrite(message: GetFolderByIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetFolderByIDRequest
 */
export declare const GetFolderByIDRequest: GetFolderByIDRequest$Type;
declare class GetFolderByIDResponse$Type extends MessageType<GetFolderByIDResponse> {
    constructor();
    create(value?: PartialMessage<GetFolderByIDResponse>): GetFolderByIDResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFolderByIDResponse): GetFolderByIDResponse;
    internalBinaryWrite(message: GetFolderByIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetFolderByIDResponse
 */
export declare const GetFolderByIDResponse: GetFolderByIDResponse$Type;
declare class GetUserFoldersRequest$Type extends MessageType<GetUserFoldersRequest> {
    constructor();
    create(value?: PartialMessage<GetUserFoldersRequest>): GetUserFoldersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserFoldersRequest): GetUserFoldersRequest;
    internalBinaryWrite(message: GetUserFoldersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetUserFoldersRequest
 */
export declare const GetUserFoldersRequest: GetUserFoldersRequest$Type;
declare class GetUserFoldersResponse$Type extends MessageType<GetUserFoldersResponse> {
    constructor();
    create(value?: PartialMessage<GetUserFoldersResponse>): GetUserFoldersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserFoldersResponse): GetUserFoldersResponse;
    internalBinaryWrite(message: GetUserFoldersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetUserFoldersResponse
 */
export declare const GetUserFoldersResponse: GetUserFoldersResponse$Type;
declare class Chat$Type extends MessageType<Chat> {
    constructor();
    create(value?: PartialMessage<Chat>): Chat;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Chat): Chat;
    internalBinaryWrite(message: Chat, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.Chat
 */
export declare const Chat: Chat$Type;
declare class CreateChatRequest$Type extends MessageType<CreateChatRequest> {
    constructor();
    create(value?: PartialMessage<CreateChatRequest>): CreateChatRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateChatRequest): CreateChatRequest;
    internalBinaryWrite(message: CreateChatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.CreateChatRequest
 */
export declare const CreateChatRequest: CreateChatRequest$Type;
declare class CreateChatResponse$Type extends MessageType<CreateChatResponse> {
    constructor();
    create(value?: PartialMessage<CreateChatResponse>): CreateChatResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateChatResponse): CreateChatResponse;
    internalBinaryWrite(message: CreateChatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.CreateChatResponse
 */
export declare const CreateChatResponse: CreateChatResponse$Type;
declare class ChangeChatFolderRequest$Type extends MessageType<ChangeChatFolderRequest> {
    constructor();
    create(value?: PartialMessage<ChangeChatFolderRequest>): ChangeChatFolderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChangeChatFolderRequest): ChangeChatFolderRequest;
    internalBinaryWrite(message: ChangeChatFolderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.ChangeChatFolderRequest
 */
export declare const ChangeChatFolderRequest: ChangeChatFolderRequest$Type;
declare class ChangeChatFolderResponse$Type extends MessageType<ChangeChatFolderResponse> {
    constructor();
    create(value?: PartialMessage<ChangeChatFolderResponse>): ChangeChatFolderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChangeChatFolderResponse): ChangeChatFolderResponse;
    internalBinaryWrite(message: ChangeChatFolderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.ChangeChatFolderResponse
 */
export declare const ChangeChatFolderResponse: ChangeChatFolderResponse$Type;
declare class ChangeChatTitleRequest$Type extends MessageType<ChangeChatTitleRequest> {
    constructor();
    create(value?: PartialMessage<ChangeChatTitleRequest>): ChangeChatTitleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChangeChatTitleRequest): ChangeChatTitleRequest;
    internalBinaryWrite(message: ChangeChatTitleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.ChangeChatTitleRequest
 */
export declare const ChangeChatTitleRequest: ChangeChatTitleRequest$Type;
declare class ChangeChatTitleResponse$Type extends MessageType<ChangeChatTitleResponse> {
    constructor();
    create(value?: PartialMessage<ChangeChatTitleResponse>): ChangeChatTitleResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChangeChatTitleResponse): ChangeChatTitleResponse;
    internalBinaryWrite(message: ChangeChatTitleResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.ChangeChatTitleResponse
 */
export declare const ChangeChatTitleResponse: ChangeChatTitleResponse$Type;
declare class DeleteChatRequest$Type extends MessageType<DeleteChatRequest> {
    constructor();
    create(value?: PartialMessage<DeleteChatRequest>): DeleteChatRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteChatRequest): DeleteChatRequest;
    internalBinaryWrite(message: DeleteChatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.DeleteChatRequest
 */
export declare const DeleteChatRequest: DeleteChatRequest$Type;
declare class GetChatByIDRequest$Type extends MessageType<GetChatByIDRequest> {
    constructor();
    create(value?: PartialMessage<GetChatByIDRequest>): GetChatByIDRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetChatByIDRequest): GetChatByIDRequest;
    internalBinaryWrite(message: GetChatByIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetChatByIDRequest
 */
export declare const GetChatByIDRequest: GetChatByIDRequest$Type;
declare class GetChatByIDResponse$Type extends MessageType<GetChatByIDResponse> {
    constructor();
    create(value?: PartialMessage<GetChatByIDResponse>): GetChatByIDResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetChatByIDResponse): GetChatByIDResponse;
    internalBinaryWrite(message: GetChatByIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetChatByIDResponse
 */
export declare const GetChatByIDResponse: GetChatByIDResponse$Type;
declare class GetChatsInFolderRequest$Type extends MessageType<GetChatsInFolderRequest> {
    constructor();
    create(value?: PartialMessage<GetChatsInFolderRequest>): GetChatsInFolderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetChatsInFolderRequest): GetChatsInFolderRequest;
    internalBinaryWrite(message: GetChatsInFolderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetChatsInFolderRequest
 */
export declare const GetChatsInFolderRequest: GetChatsInFolderRequest$Type;
declare class GetChatsInFolderResponse$Type extends MessageType<GetChatsInFolderResponse> {
    constructor();
    create(value?: PartialMessage<GetChatsInFolderResponse>): GetChatsInFolderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetChatsInFolderResponse): GetChatsInFolderResponse;
    internalBinaryWrite(message: GetChatsInFolderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetChatsInFolderResponse
 */
export declare const GetChatsInFolderResponse: GetChatsInFolderResponse$Type;
declare class GetUserChatsRequest$Type extends MessageType<GetUserChatsRequest> {
    constructor();
    create(value?: PartialMessage<GetUserChatsRequest>): GetUserChatsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserChatsRequest): GetUserChatsRequest;
    internalBinaryWrite(message: GetUserChatsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetUserChatsRequest
 */
export declare const GetUserChatsRequest: GetUserChatsRequest$Type;
declare class GetUserChatsResponse$Type extends MessageType<GetUserChatsResponse> {
    constructor();
    create(value?: PartialMessage<GetUserChatsResponse>): GetUserChatsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserChatsResponse): GetUserChatsResponse;
    internalBinaryWrite(message: GetUserChatsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetUserChatsResponse
 */
export declare const GetUserChatsResponse: GetUserChatsResponse$Type;
declare class Message$Type extends MessageType<Message> {
    constructor();
    create(value?: PartialMessage<Message>): Message;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Message): Message;
    internalBinaryWrite(message: Message, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.Message
 */
export declare const Message: Message$Type;
declare class SendMessageRequest$Type extends MessageType<SendMessageRequest> {
    constructor();
    create(value?: PartialMessage<SendMessageRequest>): SendMessageRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendMessageRequest): SendMessageRequest;
    internalBinaryWrite(message: SendMessageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.SendMessageRequest
 */
export declare const SendMessageRequest: SendMessageRequest$Type;
declare class SendMessageResponse$Type extends MessageType<SendMessageResponse> {
    constructor();
    create(value?: PartialMessage<SendMessageResponse>): SendMessageResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendMessageResponse): SendMessageResponse;
    internalBinaryWrite(message: SendMessageResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.SendMessageResponse
 */
export declare const SendMessageResponse: SendMessageResponse$Type;
declare class GetMessageByIDRequest$Type extends MessageType<GetMessageByIDRequest> {
    constructor();
    create(value?: PartialMessage<GetMessageByIDRequest>): GetMessageByIDRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMessageByIDRequest): GetMessageByIDRequest;
    internalBinaryWrite(message: GetMessageByIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetMessageByIDRequest
 */
export declare const GetMessageByIDRequest: GetMessageByIDRequest$Type;
declare class GetMessageByIDResponse$Type extends MessageType<GetMessageByIDResponse> {
    constructor();
    create(value?: PartialMessage<GetMessageByIDResponse>): GetMessageByIDResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMessageByIDResponse): GetMessageByIDResponse;
    internalBinaryWrite(message: GetMessageByIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetMessageByIDResponse
 */
export declare const GetMessageByIDResponse: GetMessageByIDResponse$Type;
declare class GetMessagesInChatRequest$Type extends MessageType<GetMessagesInChatRequest> {
    constructor();
    create(value?: PartialMessage<GetMessagesInChatRequest>): GetMessagesInChatRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMessagesInChatRequest): GetMessagesInChatRequest;
    internalBinaryWrite(message: GetMessagesInChatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetMessagesInChatRequest
 */
export declare const GetMessagesInChatRequest: GetMessagesInChatRequest$Type;
declare class GetMessagesInChatResponse$Type extends MessageType<GetMessagesInChatResponse> {
    constructor();
    create(value?: PartialMessage<GetMessagesInChatResponse>): GetMessagesInChatResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMessagesInChatResponse): GetMessagesInChatResponse;
    internalBinaryWrite(message: GetMessagesInChatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message assist.GetMessagesInChatResponse
 */
export declare const GetMessagesInChatResponse: GetMessagesInChatResponse$Type;
/**
 * @generated ServiceType for protobuf service assist.Assist
 */
export declare const Assist: ServiceType;
export {};
