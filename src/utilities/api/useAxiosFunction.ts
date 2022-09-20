import { onMounted, reactive} from 'vue'


export default function useAxiosFunction() {
    const response = reactive({
        res: [],
        error: {},
        loading: true,
        controller: {}
    })

    const axiosFetch = async (configObj) => {
        const { axiosInstance, method, url, requestConfig = {} } = configObj
        try {
            response.loading = true
            const ctrl = new AbortController()
            response.controller = ctrl

            const res = await axiosInstance[method.toLowerCase()](url, requestConfig.rawData)
            // console.log("response: ", res)
            response.res = res.data.data
        } catch (err) {
            // console.log(err.response.data)
            response.error = JSON.parse(err.response.data)
        } finally {
            response.loading = false
        }
    }

    onMounted(() => {
        // 清除此reqeust減少暫存
        return () => response.controller && response.controller.abort()
    })

    return [response, axiosFetch]
}