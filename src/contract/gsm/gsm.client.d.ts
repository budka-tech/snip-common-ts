import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { FlashCallBackRequest } from "./gsm";
import type { Response } from "../common/common";
import type { FlashCallRequest } from "./gsm";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service gsm.Gsm
 */
export interface IGsmClient {
    /**
     *  rpc SendSms(SendSmsRequest) returns(common.Response);
     *
     * @generated from protobuf rpc: FlashCall(gsm.FlashCallRequest) returns (common.Response);
     */
    flashCall(input: FlashCallRequest, options?: RpcOptions): UnaryCall<FlashCallRequest, Response>;
    /**
     * @generated from protobuf rpc: FlashCallBack(gsm.FlashCallBackRequest) returns (common.Response);
     */
    flashCallBack(input: FlashCallBackRequest, options?: RpcOptions): UnaryCall<FlashCallBackRequest, Response>;
}
/**
 * @generated from protobuf service gsm.Gsm
 */
export declare class GsmClient implements IGsmClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     *  rpc SendSms(SendSmsRequest) returns(common.Response);
     *
     * @generated from protobuf rpc: FlashCall(gsm.FlashCallRequest) returns (common.Response);
     */
    flashCall(input: FlashCallRequest, options?: RpcOptions): UnaryCall<FlashCallRequest, Response>;
    /**
     * @generated from protobuf rpc: FlashCallBack(gsm.FlashCallBackRequest) returns (common.Response);
     */
    flashCallBack(input: FlashCallBackRequest, options?: RpcOptions): UnaryCall<FlashCallBackRequest, Response>;
}
