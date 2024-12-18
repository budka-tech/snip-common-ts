import { Endpoint } from "./s3";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Endpoint service definition
 *
 * @generated from protobuf service s3.Endpoint
 */
export class EndpointClient {
    _transport;
    typeName = Endpoint.typeName;
    methods = Endpoint.methods;
    options = Endpoint.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: RegisterBucket(s3.RegisterBucketRequest) returns (s3.RegisterBucketResponse);
     */
    registerBucket(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: HasBucket(s3.HasBucketRequest) returns (s3.HasBucketResponse);
     */
    hasBucket(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UnregisterBucket(s3.UnregisterBucketRequest) returns (common.Response);
     */
    unregisterBucket(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAllBuckets(s3.GetAllBucketsRequest) returns (s3.GetAllBucketsResponse);
     */
    getAllBuckets(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateImage(s3.CreateImageRequest) returns (s3.CreateImageResponse);
     */
    createImage(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetImage(s3.GetImageRequest) returns (s3.GetImageResponse);
     */
    getImage(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetImageWithBucket(s3.GetImageWithBucketRequest) returns (s3.GetImageWithBucketResponse);
     */
    getImageWithBucket(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteImage(s3.DeleteImageRequest) returns (common.Response);
     */
    deleteImage(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAllImages(s3.GetAllImagesRequest) returns (s3.GetAllImagesResponse);
     */
    getAllImages(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetImagesInBucket(s3.GetImagesInBucketRequest) returns (s3.GetImagesInBucketResponse);
     */
    getImagesInBucket(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
