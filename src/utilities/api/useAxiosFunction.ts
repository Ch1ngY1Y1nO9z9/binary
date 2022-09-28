interface configObj {
    axiosInstance: any,
    method: string,
    url: string,
    requestConfig: {
        rawData?: object | null
    }
}

interface AxiosResponse<T> {
    res:{
        code: number;
        message: '';
        data:  T | null
    },
}

export default async function axiosFetch<T>(configObj: configObj) {
    const response:AxiosResponse<T> = {
        res: {
            code: 0,
            message: '',
            data: null
        },
    }

    const { axiosInstance, method, url, requestConfig = {} } = configObj
    try {
        const res = await axiosInstance[method.toLowerCase()](url, requestConfig.rawData)
        console.log("response: ", res)
        response.res = res.data
    } catch (err: any) {
        console.log("err: ", err.response)
        response.res = err.response.data
    } finally {
        return response
    }
}
