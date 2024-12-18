import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ScheduleRequest } from "./push";
import type { CommonResponse } from "./push";
import type { NowRequest } from "./push";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service gsm.Push
 */
export interface IPushClient {
    /**
     * @generated from protobuf rpc: Now(gsm.NowRequest) returns (gsm.CommonResponse);
     */
    now(input: NowRequest, options?: RpcOptions): UnaryCall<NowRequest, CommonResponse>;
    /**
     * @generated from protobuf rpc: Schedule(gsm.ScheduleRequest) returns (gsm.CommonResponse);
     */
    schedule(input: ScheduleRequest, options?: RpcOptions): UnaryCall<ScheduleRequest, CommonResponse>;
}
/**
 * @generated from protobuf service gsm.Push
 */
export declare class PushClient implements IPushClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Now(gsm.NowRequest) returns (gsm.CommonResponse);
     */
    now(input: NowRequest, options?: RpcOptions): UnaryCall<NowRequest, CommonResponse>;
    /**
     * @generated from protobuf rpc: Schedule(gsm.ScheduleRequest) returns (gsm.CommonResponse);
     */
    schedule(input: ScheduleRequest, options?: RpcOptions): UnaryCall<ScheduleRequest, CommonResponse>;
}
