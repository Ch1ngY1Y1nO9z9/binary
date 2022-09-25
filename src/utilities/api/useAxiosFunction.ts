import { onMounted, reactive } from 'vue'

interface configObj {
    axiosInstance: any,
    method: string,
    url: string,
    requestConfig: {
        rawData?: object | null
    }
}

const response = reactive({
    res: {},
    err: {},
    loading: false,
    controller: {}
})

const axiosFetch = async (configObj: configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj
    try {
        response.loading = true
        const ctrl = new AbortController()
        response.controller = ctrl

        const res = await axiosInstance[method.toLowerCase()](url, requestConfig.rawData)
        console.log("response: ", res)
        response.res = res.data
    } catch (err: any) {
        console.log("err: ", err.response)
        response.err = err.response.data
    } finally {
        response.loading = false

        return response
    }
}

export default axiosFetch