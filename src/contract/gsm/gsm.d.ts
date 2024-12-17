import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message gsm.FlashCallRequest
 */
export interface FlashCallRequest {
    /**
     * @generated from protobuf field: string phone = 1;
     */
    phone: string;
    /**
     * @generated from protobuf field: string code = 2;
     */
    code: string;
}
/**
 * @generated from protobuf message gsm.FlashCallBackRequest
 */
export interface FlashCallBackRequest {
    /**
     * @generated from protobuf field: string phone = 1;
     */
    phone: string;
}
/**
 * @generated from protobuf enum gsm.Method
 */
export declare enum Method {
    /**
     * @generated from protobuf enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from protobuf enum value: FlASH_CALL = 1;
     */
    FlASH_CALL = 1,
    /**
     * @generated from protobuf enum value: FlASH_CALL_BACK = 2;
     */
    FlASH_CALL_BACK = 2
}
declare class FlashCallRequest$Type extends MessageType<FlashCallRequest> {
    constructor();
    create(value?: PartialMessage<FlashCallRequest>): FlashCallRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FlashCallRequest): FlashCallRequest;
    internalBinaryWrite(message: FlashCallRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message gsm.FlashCallRequest
 */
export declare const FlashCallRequest: FlashCallRequest$Type;
declare class FlashCallBackRequest$Type extends MessageType<FlashCallBackRequest> {
    constructor();
    create(value?: PartialMessage<FlashCallBackRequest>): FlashCallBackRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FlashCallBackRequest): FlashCallBackRequest;
    internalBinaryWrite(message: FlashCallBackRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message gsm.FlashCallBackRequest
 */
export declare const FlashCallBackRequest: FlashCallBackRequest$Type;
/**
 * @generated ServiceType for protobuf service gsm.Gsm
 */
export declare const Gsm: ServiceType;
export {};
