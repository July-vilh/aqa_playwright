import test, { APIRequestContext, APIResponse } from "@playwright/test";
import { RequestApi } from "api/apiClients/request";
import { apiConfig } from "config/api-config";
import _ from "lodash";
import { IRequestOptions, IResponse } from "types/api.types";
import { IProduct, IProductResponse } from "types/product.types";
import { AddNewProductPage } from "ui/pages/products/addNewProduct.page";
import { ProductsPage } from "ui/pages/products/product.page";

export class ProductsController {
    private request: RequestApi;

    constructor(context: APIRequestContext) {
        this.request = new RequestApi(context);
    }
    
    async create(body: IProduct, token: string) {
        const options: IRequestOptions = {
            baseURL: apiConfig.BASE_URL,
            url: apiConfig.ENDPOINTS.PRODUCTS,
            method: "post",
            data: body,
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        return await this.request.send<IProductResponse>(options);
    }

    async getById(id: string, token: string) {
        const options: IRequestOptions = {
            baseURL: apiConfig.BASE_URL,
            url: apiConfig.ENDPOINTS.PRODUCT_BY_ID(id),
            method: "get",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        return await this.request.send<IProductResponse>(options);
    }

    async delete(id: string, token: string) {
        const options: IRequestOptions = {
            baseURL: apiConfig.BASE_URL,
            url: apiConfig.ENDPOINTS.PRODUCT_BY_ID(id),
            method: "delete",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        return await this.request.send<null>(options);
    }
}