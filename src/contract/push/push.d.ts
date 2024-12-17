import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../google/protobuf/timestamp";
/**
 * @generated from protobuf message gsm.CommonResponse
 */
export interface CommonResponse {
    /**
     * @generated from protobuf field: uint32 status = 1;
     */
    status: number;
}
/**
 * @generated from protobuf message gsm.NowRequest
 */
export interface NowRequest {
    /**
     * @generated from protobuf field: repeated string id = 1;
     */
    id: string[];
    /**
     * @generated from protobuf field: string text = 2;
     */
    text: string;
}
/**
 * @generated from protobuf message gsm.ScheduleRequest
 */
export interface ScheduleRequest {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 2;
     */
    date?: Timestamp;
    /**
     * @generated from protobuf field: repeated string id = 3;
     */
    id: string[];
}
declare class CommonResponse$Type extends MessageType<CommonResponse> {
    constructor();
    create(value?: PartialMessage<CommonResponse>): CommonResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonResponse): CommonResponse;
    internalBinaryWrite(message: CommonResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message gsm.CommonResponse
 */
export declare const CommonResponse: CommonResponse$Type;
declare class NowRequest$Type extends MessageType<NowRequest> {
    constructor();
    create(value?: PartialMessage<NowRequest>): NowRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NowRequest): NowRequest;
    internalBinaryWrite(message: NowRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message gsm.NowRequest
 */
export declare const NowRequest: NowRequest$Type;
declare class ScheduleRequest$Type extends MessageType<ScheduleRequest> {
    constructor();
    create(value?: PartialMessage<ScheduleRequest>): ScheduleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ScheduleRequest): ScheduleRequest;
    internalBinaryWrite(message: ScheduleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message gsm.ScheduleRequest
 */
export declare const ScheduleRequest: ScheduleRequest$Type;
/**
 * @generated ServiceType for protobuf service gsm.Push
 */
export declare const Push: ServiceType;
export {};
