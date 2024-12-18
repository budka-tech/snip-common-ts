import { Gsm } from "./gsm";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service gsm.Gsm
 */
export class GsmClient {
    _transport;
    typeName = Gsm.typeName;
    methods = Gsm.methods;
    options = Gsm.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     *  rpc SendSms(SendSmsRequest) returns(common.Response);
     *
     * @generated from protobuf rpc: FlashCall(gsm.FlashCallRequest) returns (common.Response);
     */
    flashCall(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FlashCallBack(gsm.FlashCallBackRequest) returns (common.Response);
     */
    flashCallBack(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
