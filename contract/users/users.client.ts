// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "users/users.proto" (package "users", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Users } from "./users";
import type { EmailManipulationRequest } from "./users";
import type { GetEmailsResponse } from "./users";
import type { ConfirmResponse } from "./users";
import type { PhoneManipulationRequest } from "./users";
import type { GetPhonesResponse } from "./users";
import type { UpdateAccountDataRequest } from "./users";
import type { GetSessionsResponse } from "./users";
import type { Account } from "./users";
import type { CommonRequest } from "./users";
import type { CheckCodeRequest } from "./users";
import type { Response } from "../common/common";
import type { LogoutRequest } from "./users";
import type { LoginResponse } from "./users";
import type { LoginRequest } from "./users";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { IdentifyResponse } from "./users";
import type { IdentifyRequest } from "./users";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service users.Users
 */
export interface IUsersClient {
    /**
     * @generated from protobuf rpc: Identify(users.IdentifyRequest) returns (users.IdentifyResponse);
     */
    identify(input: IdentifyRequest, options?: RpcOptions): UnaryCall<IdentifyRequest, IdentifyResponse>;
    /**
     * @generated from protobuf rpc: Login(users.LoginRequest) returns (users.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * @generated from protobuf rpc: Logout(users.LogoutRequest) returns (common.Response);
     */
    logout(input: LogoutRequest, options?: RpcOptions): UnaryCall<LogoutRequest, Response>;
    /**
     * @generated from protobuf rpc: CheckCode(users.CheckCodeRequest) returns (common.Response);
     */
    checkCode(input: CheckCodeRequest, options?: RpcOptions): UnaryCall<CheckCodeRequest, Response>;
    /**
     * @generated from protobuf rpc: GetAccount(users.CommonRequest) returns (users.Account);
     */
    getAccount(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, Account>;
    /**
     * @generated from protobuf rpc: GetAccountShort(users.CommonRequest) returns (users.Account);
     */
    getAccountShort(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, Account>;
    /**
     * @generated from protobuf rpc: GetSessions(users.CommonRequest) returns (users.GetSessionsResponse);
     */
    getSessions(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, GetSessionsResponse>;
    /**
     * @generated from protobuf rpc: UpdateAccountData(users.UpdateAccountDataRequest) returns (common.Response);
     */
    updateAccountData(input: UpdateAccountDataRequest, options?: RpcOptions): UnaryCall<UpdateAccountDataRequest, Response>;
    /**
     * @generated from protobuf rpc: GetPhones(users.CommonRequest) returns (users.GetPhonesResponse);
     */
    getPhones(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, GetPhonesResponse>;
    /**
     * @generated from protobuf rpc: AttachPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    attachPhone(input: PhoneManipulationRequest, options?: RpcOptions): UnaryCall<PhoneManipulationRequest, ConfirmResponse>;
    /**
     * @generated from protobuf rpc: DetachPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    detachPhone(input: PhoneManipulationRequest, options?: RpcOptions): UnaryCall<PhoneManipulationRequest, ConfirmResponse>;
    /**
     * @generated from protobuf rpc: SetPrimaryPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    setPrimaryPhone(input: PhoneManipulationRequest, options?: RpcOptions): UnaryCall<PhoneManipulationRequest, ConfirmResponse>;
    /**
     * @generated from protobuf rpc: GetEmails(users.CommonRequest) returns (users.GetEmailsResponse);
     */
    getEmails(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, GetEmailsResponse>;
    /**
     * @generated from protobuf rpc: AttachEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    attachEmail(input: EmailManipulationRequest, options?: RpcOptions): UnaryCall<EmailManipulationRequest, ConfirmResponse>;
    /**
     * @generated from protobuf rpc: DetachEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    detachEmail(input: EmailManipulationRequest, options?: RpcOptions): UnaryCall<EmailManipulationRequest, ConfirmResponse>;
    /**
     * @generated from protobuf rpc: SetPrimaryEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    setPrimaryEmail(input: EmailManipulationRequest, options?: RpcOptions): UnaryCall<EmailManipulationRequest, ConfirmResponse>;
}
/**
 * @generated from protobuf service users.Users
 */
export class UsersClient implements IUsersClient, ServiceInfo {
    typeName = Users.typeName;
    methods = Users.methods;
    options = Users.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Identify(users.IdentifyRequest) returns (users.IdentifyResponse);
     */
    identify(input: IdentifyRequest, options?: RpcOptions): UnaryCall<IdentifyRequest, IdentifyResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdentifyRequest, IdentifyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Login(users.LoginRequest) returns (users.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<LoginRequest, LoginResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Logout(users.LogoutRequest) returns (common.Response);
     */
    logout(input: LogoutRequest, options?: RpcOptions): UnaryCall<LogoutRequest, Response> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<LogoutRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CheckCode(users.CheckCodeRequest) returns (common.Response);
     */
    checkCode(input: CheckCodeRequest, options?: RpcOptions): UnaryCall<CheckCodeRequest, Response> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CheckCodeRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAccount(users.CommonRequest) returns (users.Account);
     */
    getAccount(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, Account> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<CommonRequest, Account>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAccountShort(users.CommonRequest) returns (users.Account);
     */
    getAccountShort(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, Account> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<CommonRequest, Account>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetSessions(users.CommonRequest) returns (users.GetSessionsResponse);
     */
    getSessions(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, GetSessionsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<CommonRequest, GetSessionsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateAccountData(users.UpdateAccountDataRequest) returns (common.Response);
     */
    updateAccountData(input: UpdateAccountDataRequest, options?: RpcOptions): UnaryCall<UpdateAccountDataRequest, Response> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateAccountDataRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetPhones(users.CommonRequest) returns (users.GetPhonesResponse);
     */
    getPhones(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, GetPhonesResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<CommonRequest, GetPhonesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttachPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    attachPhone(input: PhoneManipulationRequest, options?: RpcOptions): UnaryCall<PhoneManipulationRequest, ConfirmResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<PhoneManipulationRequest, ConfirmResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DetachPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    detachPhone(input: PhoneManipulationRequest, options?: RpcOptions): UnaryCall<PhoneManipulationRequest, ConfirmResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<PhoneManipulationRequest, ConfirmResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetPrimaryPhone(users.PhoneManipulationRequest) returns (users.ConfirmResponse);
     */
    setPrimaryPhone(input: PhoneManipulationRequest, options?: RpcOptions): UnaryCall<PhoneManipulationRequest, ConfirmResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<PhoneManipulationRequest, ConfirmResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetEmails(users.CommonRequest) returns (users.GetEmailsResponse);
     */
    getEmails(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, GetEmailsResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<CommonRequest, GetEmailsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttachEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    attachEmail(input: EmailManipulationRequest, options?: RpcOptions): UnaryCall<EmailManipulationRequest, ConfirmResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmailManipulationRequest, ConfirmResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DetachEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    detachEmail(input: EmailManipulationRequest, options?: RpcOptions): UnaryCall<EmailManipulationRequest, ConfirmResponse> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmailManipulationRequest, ConfirmResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetPrimaryEmail(users.EmailManipulationRequest) returns (users.ConfirmResponse);
     */
    setPrimaryEmail(input: EmailManipulationRequest, options?: RpcOptions): UnaryCall<EmailManipulationRequest, ConfirmResponse> {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmailManipulationRequest, ConfirmResponse>("unary", this._transport, method, opt, input);
    }
}
