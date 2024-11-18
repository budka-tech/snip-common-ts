// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "server/server.proto" (package "server", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Server } from "./server";
import type { ParamsRequest } from "./server";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Empty } from "../google/protobuf/empty";
import type { WhoamiRequest } from "./server";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service server.Server
 */
export interface IServerClient {
    /**
     * @generated from protobuf rpc: Whoami(server.WhoamiRequest) returns (google.protobuf.Empty);
     */
    whoami(input: WhoamiRequest, options?: RpcOptions): UnaryCall<WhoamiRequest, Empty>;
    /**
     * @generated from protobuf rpc: Request(server.ParamsRequest) returns (google.protobuf.Empty);
     */
    request(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, Empty>;
}
/**
 * @generated from protobuf service server.Server
 */
export class ServerClient implements IServerClient, ServiceInfo {
    typeName = Server.typeName;
    methods = Server.methods;
    options = Server.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Whoami(server.WhoamiRequest) returns (google.protobuf.Empty);
     */
    whoami(input: WhoamiRequest, options?: RpcOptions): UnaryCall<WhoamiRequest, Empty> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<WhoamiRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Request(server.ParamsRequest) returns (google.protobuf.Empty);
     */
    request(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, Empty> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ParamsRequest, Empty>("unary", this._transport, method, opt, input);
    }
}
