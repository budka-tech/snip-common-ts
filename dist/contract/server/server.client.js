import { Server } from "./server";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service server.Server
 */
export class ServerClient {
    _transport;
    typeName = Server.typeName;
    methods = Server.methods;
    options = Server.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: Request(server.ParamsRequest) returns (google.protobuf.Empty);
     */
    request(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
