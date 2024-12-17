import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message common.Response
 */
export interface Response {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
    /**
     * @generated from protobuf field: map<string, string> errors = 2;
     */
    errors: {
        [key: string]: string;
    };
}
declare class Response$Type extends MessageType<Response> {
    constructor();
    create(value?: PartialMessage<Response>): Response;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Response): Response;
    private binaryReadMap2;
    internalBinaryWrite(message: Response, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message common.Response
 */
export declare const Response: Response$Type;
export {};
