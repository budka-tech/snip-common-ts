import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { Empty } from "../google/protobuf/empty";
import type { ParamsRequest } from "./server";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service server.Server
 */
export interface IServerClient {
    /**
     * @generated from protobuf rpc: Request(server.ParamsRequest) returns (google.protobuf.Empty);
     */
    request(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, Empty>;
}
/**
 * @generated from protobuf service server.Server
 */
export declare class ServerClient implements IServerClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Request(server.ParamsRequest) returns (google.protobuf.Empty);
     */
    request(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, Empty>;
}
