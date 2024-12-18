import { Users } from "./users";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service users.Users
 */
export class UsersClient {
    _transport;
    typeName = Users.typeName;
    methods = Users.methods;
    options = Users.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: Identify(users.IdentifyRequest) returns (users.IdentifyResponse);
     */
    identify(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Login(users.LoginRequest) returns (users.LoginResponse);
     */
    login(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Logout(users.LogoutRequest) returns (common.Response);
     */
    logout(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CheckCode(users.CheckCodeRequest) returns (common.Response);
     */
    checkCode(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAccount(users.CommonRequest) returns (users.Account);
     */
    getAccount(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAccountShort(users.CommonRequest) returns (users.Account);
     */
    getAccountShort(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetSessions(users.CommonRequest) returns (users.GetSessionsResponse);
     */
    getSessions(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateAccountData(users.UpdateAccountDataRequest) returns (common.Response);
     */
    updateAccountData(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetPhones(users.CommonRequest) returns (users.GetPhonesResponse);
     */
    getPhones(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttachPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    attachPhone(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DetachPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    detachPhone(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetPrimaryPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    setPrimaryPhone(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetEmails(users.CommonRequest) returns (users.GetEmailsResponse);
     */
    getEmails(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttachEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    attachEmail(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DetachEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    detachEmail(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetPrimaryEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    setPrimaryEmail(input, options) {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
