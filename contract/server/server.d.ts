import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType as MessageType$ } from "@protobuf-ts/runtime";
import { Any } from "../google/protobuf/any";
/**
 * @generated from protobuf message server.Meta
 */
export interface Meta {
    /**
     * @generated from protobuf field: server.MessageType type = 1;
     */
    type: MessageType;
    /**
     * @generated from protobuf field: server.Domain domain = 2;
     */
    domain: Domain;
    /**
     * @generated from protobuf field: uint32 method = 3;
     */
    method: number;
    /**
     * @generated from protobuf field: uint32 id = 4;
     */
    id: number;
}
/**
 * @generated from protobuf message server.ParamsRequest
 */
export interface ParamsRequest {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 2;
     */
    data?: Any;
}
/**
 * @generated from protobuf message server.Response
 */
export interface Response {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 3;
     */
    data?: Any;
}
/**
 * @generated from protobuf message server.SubscribeData
 */
export interface SubscribeData {
    /**
     * @generated from protobuf field: server.SubscribeAction action = 1;
     */
    action: SubscribeAction;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 2;
     */
    data?: Any;
}
/**
 * @generated from protobuf enum server.MessageType
 */
export declare enum MessageType {
    /**
     * @generated from protobuf enum value: Null0 = 0;
     */
    Null0 = 0,
    /**
     * @generated from protobuf enum value: Call = 1;
     */
    Call = 1,
    /**
     * @generated from protobuf enum value: Subscribe = 2;
     */
    Subscribe = 2,
    /**
     * @generated from protobuf enum value: Unsubscribe = 3;
     */
    Unsubscribe = 3,
    /**
     * @generated from protobuf enum value: Event = 4;
     */
    Event = 4
}
/**
 * @generated from protobuf enum server.Domain
 */
export declare enum Domain {
    /**
     * @generated from protobuf enum value: Null1 = 0;
     */
    Null1 = 0,
    /**
     * @generated from protobuf enum value: Socket = 1;
     */
    Socket = 1,
    /**
     * @generated from protobuf enum value: Auth = 2;
     */
    Auth = 2,
    /**
     * @generated from protobuf enum value: Users = 3;
     */
    Users = 3,
    /**
     * @generated from protobuf enum value: Assist = 4;
     */
    Assist = 4,
    /**
     * @generated from protobuf enum value: Gsm = 5;
     */
    Gsm = 5
}
/**
 * @generated from protobuf enum server.SubscribeAction
 */
export declare enum SubscribeAction {
    /**
     * @generated from protobuf enum value: Null2 = 0;
     */
    Null2 = 0,
    /**
     * @generated from protobuf enum value: Init = 1;
     */
    Init = 1,
    /**
     * @generated from protobuf enum value: Create = 2;
     */
    Create = 2,
    /**
     * @generated from protobuf enum value: Update = 3;
     */
    Update = 3,
    /**
     * @generated from protobuf enum value: Delete = 4;
     */
    Delete = 4
}
declare class Meta$Type extends MessageType$<Meta> {
    constructor();
    create(value?: PartialMessage<Meta>): Meta;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Meta): Meta;
    internalBinaryWrite(message: Meta, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message server.Meta
 */
export declare const Meta: Meta$Type;
declare class ParamsRequest$Type extends MessageType$<ParamsRequest> {
    constructor();
    create(value?: PartialMessage<ParamsRequest>): ParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsRequest): ParamsRequest;
    internalBinaryWrite(message: ParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message server.ParamsRequest
 */
export declare const ParamsRequest: ParamsRequest$Type;
declare class Response$Type extends MessageType$<Response> {
    constructor();
    create(value?: PartialMessage<Response>): Response;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Response): Response;
    internalBinaryWrite(message: Response, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message server.Response
 */
export declare const Response: Response$Type;
declare class SubscribeData$Type extends MessageType$<SubscribeData> {
    constructor();
    create(value?: PartialMessage<SubscribeData>): SubscribeData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeData): SubscribeData;
    internalBinaryWrite(message: SubscribeData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message server.SubscribeData
 */
export declare const SubscribeData: SubscribeData$Type;
/**
 * @generated ServiceType for protobuf service server.Server
 */
export declare const Server: ServiceType;
export {};
