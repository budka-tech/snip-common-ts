// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "users/users.proto" (package "users", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Users } from "./users";
import type { RemovePhoneRequest } from "./users";
import type { AddPhoneRequest } from "./users";
import type { UpdatePhotoRequest } from "./users";
import type { UpdatePasswordRequest } from "./users";
import type { UpdateAccountDataRequest } from "./users";
import type { Account } from "./users";
import type { CommonRequest } from "./users";
import type { HasSessionRequest } from "./users";
import type { RegisterRequest } from "./users";
import type { LoginResponse } from "./users";
import type { LoginRequest } from "./users";
import type { Response } from "../common/common";
import type { CheckCodeRequest } from "./users";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { IdentificationResponse } from "./users";
import type { IdentificationRequest } from "./users";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service users.Users
 */
export interface IUsersClient {
    /**
     * @generated from protobuf rpc: Identification(users.IdentificationRequest) returns (users.IdentificationResponse);
     */
    identification(input: IdentificationRequest, options?: RpcOptions): UnaryCall<IdentificationRequest, IdentificationResponse>;
    /**
     * @generated from protobuf rpc: CheckCode(users.CheckCodeRequest) returns (common.Response);
     */
    checkCode(input: CheckCodeRequest, options?: RpcOptions): UnaryCall<CheckCodeRequest, Response>;
    /**
     * @generated from protobuf rpc: LoginByCode(users.LoginRequest) returns (users.LoginResponse);
     */
    loginByCode(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * @generated from protobuf rpc: Register(users.RegisterRequest) returns (users.LoginResponse);
     */
    register(input: RegisterRequest, options?: RpcOptions): UnaryCall<RegisterRequest, LoginResponse>;
    /**
     * @generated from protobuf rpc: HasSession(users.HasSessionRequest) returns (common.Response);
     */
    hasSession(input: HasSessionRequest, options?: RpcOptions): UnaryCall<HasSessionRequest, Response>;
    /**
     * @generated from protobuf rpc: GetAccount(users.CommonRequest) returns (users.Account);
     */
    getAccount(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, Account>;
    /**
     * @generated from protobuf rpc: UpdateAccountData(users.UpdateAccountDataRequest) returns (common.Response);
     */
    updateAccountData(input: UpdateAccountDataRequest, options?: RpcOptions): UnaryCall<UpdateAccountDataRequest, Response>;
    /**
     * @generated from protobuf rpc: UpdatePassword(users.UpdatePasswordRequest) returns (common.Response);
     */
    updatePassword(input: UpdatePasswordRequest, options?: RpcOptions): UnaryCall<UpdatePasswordRequest, Response>;
    /**
     * @generated from protobuf rpc: UpdatePhoto(users.UpdatePhotoRequest) returns (common.Response);
     */
    updatePhoto(input: UpdatePhotoRequest, options?: RpcOptions): UnaryCall<UpdatePhotoRequest, Response>;
    /**
     * @generated from protobuf rpc: AddPhone(users.AddPhoneRequest) returns (common.Response);
     */
    addPhone(input: AddPhoneRequest, options?: RpcOptions): UnaryCall<AddPhoneRequest, Response>;
    /**
     * @generated from protobuf rpc: UpdatePhone(users.UpdatePhotoRequest) returns (common.Response);
     */
    updatePhone(input: UpdatePhotoRequest, options?: RpcOptions): UnaryCall<UpdatePhotoRequest, Response>;
    /**
     * @generated from protobuf rpc: RemovePhone(users.RemovePhoneRequest) returns (common.Response);
     */
    removePhone(input: RemovePhoneRequest, options?: RpcOptions): UnaryCall<RemovePhoneRequest, Response>;
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
     * @generated from protobuf rpc: Identification(users.IdentificationRequest) returns (users.IdentificationResponse);
     */
    identification(input: IdentificationRequest, options?: RpcOptions): UnaryCall<IdentificationRequest, IdentificationResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdentificationRequest, IdentificationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CheckCode(users.CheckCodeRequest) returns (common.Response);
     */
    checkCode(input: CheckCodeRequest, options?: RpcOptions): UnaryCall<CheckCodeRequest, Response> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CheckCodeRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: LoginByCode(users.LoginRequest) returns (users.LoginResponse);
     */
    loginByCode(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<LoginRequest, LoginResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Register(users.RegisterRequest) returns (users.LoginResponse);
     */
    register(input: RegisterRequest, options?: RpcOptions): UnaryCall<RegisterRequest, LoginResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<RegisterRequest, LoginResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: HasSession(users.HasSessionRequest) returns (common.Response);
     */
    hasSession(input: HasSessionRequest, options?: RpcOptions): UnaryCall<HasSessionRequest, Response> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<HasSessionRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAccount(users.CommonRequest) returns (users.Account);
     */
    getAccount(input: CommonRequest, options?: RpcOptions): UnaryCall<CommonRequest, Account> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<CommonRequest, Account>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateAccountData(users.UpdateAccountDataRequest) returns (common.Response);
     */
    updateAccountData(input: UpdateAccountDataRequest, options?: RpcOptions): UnaryCall<UpdateAccountDataRequest, Response> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateAccountDataRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePassword(users.UpdatePasswordRequest) returns (common.Response);
     */
    updatePassword(input: UpdatePasswordRequest, options?: RpcOptions): UnaryCall<UpdatePasswordRequest, Response> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdatePasswordRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePhoto(users.UpdatePhotoRequest) returns (common.Response);
     */
    updatePhoto(input: UpdatePhotoRequest, options?: RpcOptions): UnaryCall<UpdatePhotoRequest, Response> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdatePhotoRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AddPhone(users.AddPhoneRequest) returns (common.Response);
     */
    addPhone(input: AddPhoneRequest, options?: RpcOptions): UnaryCall<AddPhoneRequest, Response> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddPhoneRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePhone(users.UpdatePhotoRequest) returns (common.Response);
     */
    updatePhone(input: UpdatePhotoRequest, options?: RpcOptions): UnaryCall<UpdatePhotoRequest, Response> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdatePhotoRequest, Response>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RemovePhone(users.RemovePhoneRequest) returns (common.Response);
     */
    removePhone(input: RemovePhoneRequest, options?: RpcOptions): UnaryCall<RemovePhoneRequest, Response> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<RemovePhoneRequest, Response>("unary", this._transport, method, opt, input);
    }
}
