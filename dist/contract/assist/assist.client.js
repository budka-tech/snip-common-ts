import { Assist } from "./assist";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service assist.Assist
 */
export class AssistClient {
    _transport;
    typeName = Assist.typeName;
    methods = Assist.methods;
    options = Assist.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: CreateChat(assist.CreateChatRequest) returns (assist.CreateChatResponse);
     */
    createChat(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChangeChatFolder(assist.ChangeChatFolderRequest) returns (assist.ChangeChatFolderResponse);
     */
    changeChatFolder(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChangeChatTitle(assist.ChangeChatTitleRequest) returns (assist.ChangeChatTitleResponse);
     */
    changeChatTitle(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteChat(assist.DeleteChatRequest) returns (common.Response);
     */
    deleteChat(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetChatByID(assist.GetChatByIDRequest) returns (assist.GetChatByIDResponse);
     */
    getChatByID(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetChatsInFolder(assist.GetChatsInFolderRequest) returns (assist.GetChatsInFolderResponse);
     */
    getChatsInFolder(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetUserChats(assist.GetUserChatsRequest) returns (assist.GetUserChatsResponse);
     */
    getUserChats(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateFolder(assist.CreateFolderRequest) returns (assist.CreateFolderResponse);
     */
    createFolder(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteFolder(assist.DeleteFolderRequest) returns (common.Response);
     */
    deleteFolder(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetFolderByID(assist.GetFolderByIDRequest) returns (assist.GetFolderByIDResponse);
     */
    getFolderByID(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetUserFolders(assist.GetUserFoldersRequest) returns (assist.GetUserFoldersResponse);
     */
    getUserFolders(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SendMessage(assist.SendMessageRequest) returns (assist.SendMessageResponse);
     */
    sendMessage(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetMessageByID(assist.GetMessageByIDRequest) returns (assist.GetMessageByIDResponse);
     */
    getMessageByID(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetMessagesInChat(assist.GetMessagesInChatRequest) returns (assist.GetMessagesInChatResponse);
     */
    getMessagesInChat(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
