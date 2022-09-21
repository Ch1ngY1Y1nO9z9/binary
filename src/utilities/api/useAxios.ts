import { onMounted, reactive, ref } from 'vue'


export default function useAxios(configObj: any) {
    const response = reactive({
        res: [],
        error: {},
        loading: false,
        controller: {},
    })

    const reload = ref(0)
    const refetch = () => reload.value++

    const { axiosInstance, method, url, requestConfig = {} } = configObj
    
    onMounted(() => {
        const ctrl = new AbortController()

        const axiosFetch = async () => {
            try {
                response.loading = true
    
                response.controller = ctrl
    
                const res = await axiosInstance[method.toLowerCase()](url, requestConfig.rawData)
                // console.log("response: ", res)
                response.res = res
            } catch (err: any) {
                // console.log(err.response)
                response.error = JSON.parse(err.response)
            } finally {
                response.loading = false
            }
        }

        axiosFetch()

        // 清除此reqeust減少暫存
        // return () => response.controller && response.controller.abort()
    })

    return [response, refetch]
}