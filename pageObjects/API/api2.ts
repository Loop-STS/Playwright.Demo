import { APIRequestContext } from "@playwright/test"

export class Order {
    readonly request: APIRequestContext
    orderID: any

    constructor(request: APIRequestContext) {
        this.request = request
        this.orderID = ""
    }

    async getOrder(id: string) {
        const url = `./api/CRMApi/Order?orderID=${id}`
        const response = await this.request.get(url, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
        })
        return response
    }

    async getOrderQueueList(searchMode: string, searchValue: string) {
        const url = `./api/CRMApi/Order/QueueList/${searchMode}/${searchValue}`

        const response = await this.request.get(url, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
        })
        return response
    }

    async postOrder(body: any) {
        const response = await this.request.post(`./api/CRMApi/Order`, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
            data: body,
        })
        return response
    }

    async putOrder(body: any) {
        const response = await this.request.put(`./api/CRMApi/Order`, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
            data: body,
        })
        return response
    }
    // 	curl -X 'DELETE' \
    //   'https://mtest.innovsys.com/LOOP1external/api/CRMApi/Order?orderID=56574&orderDeleteReason=Test' \
    //   -H 'accept: application/json' \
    //   -H 'AccessKey: q3cBWH3GknGSdZ9GNUtU'
    async deleteOrder(params: Record<string, any>) {
        const queryParams = Object.keys(params)
            .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
            .join("&")

        const response = await this.request.delete(`./api/CRMApi/Order?${queryParams}`, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
        })
        return response
    }

    // Get billing summary for an order

    async getBillingSummary(orderID: string, includeSummaryDetail?: boolean) {
        let url = `./api/CRMApi/Order/BillEstimateSummary?orderID=${orderID}`
        if (includeSummaryDetail === true) {
            url += `&includeSummaryDetail=y`
        }
        console.log(url)
        const response = await this.request.get(url, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
        })
        return response
    }
    async getLocks(id: string) {
        const url = `./api/CRMApi/Order/Locks?orderID=${id}`

        const response = await this.request.get(url, {
            headers: {
                accept: "application/json",
                AccessKey: process.env.CRM_ACCESS_KEY!,
                User: "Loop Tester",
            },
        })
        return response
    }
}
