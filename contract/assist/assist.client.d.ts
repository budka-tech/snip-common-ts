import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetMessagesInChatResponse } from "./assist";
import type { GetMessagesInChatRequest } from "./assist";
import type { GetMessageByIDResponse } from "./assist";
import type { GetMessageByIDRequest } from "./assist";
import type { SendMessageResponse } from "./assist";
import type { SendMessageRequest } from "./assist";
import type { GetUserFoldersResponse } from "./assist";
import type { GetUserFoldersRequest } from "./assist";
import type { GetFolderByIDResponse } from "./assist";
import type { GetFolderByIDRequest } from "./assist";
import type { DeleteFolderRequest } from "./assist";
import type { CreateFolderResponse } from "./assist";
import type { CreateFolderRequest } from "./assist";
import type { GetUserChatsResponse } from "./assist";
import type { GetUserChatsRequest } from "./assist";
import type { GetChatsInFolderResponse } from "./assist";
import type { GetChatsInFolderRequest } from "./assist";
import type { GetChatByIDResponse } from "./assist";
import type { GetChatByIDRequest } from "./assist";
import type { Response } from "../common/common";
import type { DeleteChatRequest } from "./assist";
import type { ChangeChatTitleResponse } from "./assist";
import type { ChangeChatTitleRequest } from "./assist";
import type { ChangeChatFolderResponse } from "./assist";
import type { ChangeChatFolderRequest } from "./assist";
import type { CreateChatResponse } from "./assist";
import type { CreateChatRequest } from "./assist";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service assist.Assist
 */
export interface IAssistClient {
    /**
     * @generated from protobuf rpc: CreateChat(assist.CreateChatRequest) returns (assist.CreateChatResponse);
     */
    createChat(input: CreateChatRequest, options?: RpcOptions): UnaryCall<CreateChatRequest, CreateChatResponse>;
    /**
     * @generated from protobuf rpc: ChangeChatFolder(assist.ChangeChatFolderRequest) returns (assist.ChangeChatFolderResponse);
     */
    changeChatFolder(input: ChangeChatFolderRequest, options?: RpcOptions): UnaryCall<ChangeChatFolderRequest, ChangeChatFolderResponse>;
    /**
     * @generated from protobuf rpc: ChangeChatTitle(assist.ChangeChatTitleRequest) returns (assist.ChangeChatTitleResponse);
     */
    changeChatTitle(input: ChangeChatTitleRequest, options?: RpcOptions): UnaryCall<ChangeChatTitleRequest, ChangeChatTitleResponse>;
    /**
     * @generated from protobuf rpc: DeleteChat(assist.DeleteChatRequest) returns (common.Response);
     */
    deleteChat(input: DeleteChatRequest, options?: RpcOptions): UnaryCall<DeleteChatRequest, Response>;
    /**
     * @generated from protobuf rpc: GetChatByID(assist.GetChatByIDRequest) returns (assist.GetChatByIDResponse);
     */
    getChatByID(input: GetChatByIDRequest, options?: RpcOptions): UnaryCall<GetChatByIDRequest, GetChatByIDResponse>;
    /**
     * @generated from protobuf rpc: GetChatsInFolder(assist.GetChatsInFolderRequest) returns (assist.GetChatsInFolderResponse);
     */
    getChatsInFolder(input: GetChatsInFolderRequest, options?: RpcOptions): UnaryCall<GetChatsInFolderRequest, GetChatsInFolderResponse>;
    /**
     * @generated from protobuf rpc: GetUserChats(assist.GetUserChatsRequest) returns (assist.GetUserChatsResponse);
     */
    getUserChats(input: GetUserChatsRequest, options?: RpcOptions): UnaryCall<GetUserChatsRequest, GetUserChatsResponse>;
    /**
     * @generated from protobuf rpc: CreateFolder(assist.CreateFolderRequest) returns (assist.CreateFolderResponse);
     */
    createFolder(input: CreateFolderRequest, options?: RpcOptions): UnaryCall<CreateFolderRequest, CreateFolderResponse>;
    /**
     * @generated from protobuf rpc: DeleteFolder(assist.DeleteFolderRequest) returns (common.Response);
     */
    deleteFolder(input: DeleteFolderRequest, options?: RpcOptions): UnaryCall<DeleteFolderRequest, Response>;
    /**
     * @generated from protobuf rpc: GetFolderByID(assist.GetFolderByIDRequest) returns (assist.GetFolderByIDResponse);
     */
    getFolderByID(input: GetFolderByIDRequest, options?: RpcOptions): UnaryCall<GetFolderByIDRequest, GetFolderByIDResponse>;
    /**
     * @generated from protobuf rpc: GetUserFolders(assist.GetUserFoldersRequest) returns (assist.GetUserFoldersResponse);
     */
    getUserFolders(input: GetUserFoldersRequest, options?: RpcOptions): UnaryCall<GetUserFoldersRequest, GetUserFoldersResponse>;
    /**
     * @generated from protobuf rpc: SendMessage(assist.SendMessageRequest) returns (assist.SendMessageResponse);
     */
    sendMessage(input: SendMessageRequest, options?: RpcOptions): UnaryCall<SendMessageRequest, SendMessageResponse>;
    /**
     * @generated from protobuf rpc: GetMessageByID(assist.GetMessageByIDRequest) returns (assist.GetMessageByIDResponse);
     */
    getMessageByID(input: GetMessageByIDRequest, options?: RpcOptions): UnaryCall<GetMessageByIDRequest, GetMessageByIDResponse>;
    /**
     * @generated from protobuf rpc: GetMessagesInChat(assist.GetMessagesInChatRequest) returns (assist.GetMessagesInChatResponse);
     */
    getMessagesInChat(input: GetMessagesInChatRequest, options?: RpcOptions): UnaryCall<GetMessagesInChatRequest, GetMessagesInChatResponse>;
}
/**
 * @generated from protobuf service assist.Assist
 */
export declare class AssistClient implements IAssistClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: CreateChat(assist.CreateChatRequest) returns (assist.CreateChatResponse);
     */
    createChat(input: CreateChatRequest, options?: RpcOptions): UnaryCall<CreateChatRequest, CreateChatResponse>;
    /**
     * @generated from protobuf rpc: ChangeChatFolder(assist.ChangeChatFolderRequest) returns (assist.ChangeChatFolderResponse);
     */
    changeChatFolder(input: ChangeChatFolderRequest, options?: RpcOptions): UnaryCall<ChangeChatFolderRequest, ChangeChatFolderResponse>;
    /**
     * @generated from protobuf rpc: ChangeChatTitle(assist.ChangeChatTitleRequest) returns (assist.ChangeChatTitleResponse);
     */
    changeChatTitle(input: ChangeChatTitleRequest, options?: RpcOptions): UnaryCall<ChangeChatTitleRequest, ChangeChatTitleResponse>;
    /**
     * @generated from protobuf rpc: DeleteChat(assist.DeleteChatRequest) returns (common.Response);
     */
    deleteChat(input: DeleteChatRequest, options?: RpcOptions): UnaryCall<DeleteChatRequest, Response>;
    /**
     * @generated from protobuf rpc: GetChatByID(assist.GetChatByIDRequest) returns (assist.GetChatByIDResponse);
     */
    getChatByID(input: GetChatByIDRequest, options?: RpcOptions): UnaryCall<GetChatByIDRequest, GetChatByIDResponse>;
    /**
     * @generated from protobuf rpc: GetChatsInFolder(assist.GetChatsInFolderRequest) returns (assist.GetChatsInFolderResponse);
     */
    getChatsInFolder(input: GetChatsInFolderRequest, options?: RpcOptions): UnaryCall<GetChatsInFolderRequest, GetChatsInFolderResponse>;
    /**
     * @generated from protobuf rpc: GetUserChats(assist.GetUserChatsRequest) returns (assist.GetUserChatsResponse);
     */
    getUserChats(input: GetUserChatsRequest, options?: RpcOptions): UnaryCall<GetUserChatsRequest, GetUserChatsResponse>;
    /**
     * @generated from protobuf rpc: CreateFolder(assist.CreateFolderRequest) returns (assist.CreateFolderResponse);
     */
    createFolder(input: CreateFolderRequest, options?: RpcOptions): UnaryCall<CreateFolderRequest, CreateFolderResponse>;
    /**
     * @generated from protobuf rpc: DeleteFolder(assist.DeleteFolderRequest) returns (common.Response);
     */
    deleteFolder(input: DeleteFolderRequest, options?: RpcOptions): UnaryCall<DeleteFolderRequest, Response>;
    /**
     * @generated from protobuf rpc: GetFolderByID(assist.GetFolderByIDRequest) returns (assist.GetFolderByIDResponse);
     */
    getFolderByID(input: GetFolderByIDRequest, options?: RpcOptions): UnaryCall<GetFolderByIDRequest, GetFolderByIDResponse>;
    /**
     * @generated from protobuf rpc: GetUserFolders(assist.GetUserFoldersRequest) returns (assist.GetUserFoldersResponse);
     */
    getUserFolders(input: GetUserFoldersRequest, options?: RpcOptions): UnaryCall<GetUserFoldersRequest, GetUserFoldersResponse>;
    /**
     * @generated from protobuf rpc: SendMessage(assist.SendMessageRequest) returns (assist.SendMessageResponse);
     */
    sendMessage(input: SendMessageRequest, options?: RpcOptions): UnaryCall<SendMessageRequest, SendMessageResponse>;
    /**
     * @generated from protobuf rpc: GetMessageByID(assist.GetMessageByIDRequest) returns (assist.GetMessageByIDResponse);
     */
    getMessageByID(input: GetMessageByIDRequest, options?: RpcOptions): UnaryCall<GetMessageByIDRequest, GetMessageByIDResponse>;
    /**
     * @generated from protobuf rpc: GetMessagesInChat(assist.GetMessagesInChatRequest) returns (assist.GetMessagesInChatResponse);
     */
    getMessagesInChat(input: GetMessagesInChatRequest, options?: RpcOptions): UnaryCall<GetMessagesInChatRequest, GetMessagesInChatResponse>;
}
