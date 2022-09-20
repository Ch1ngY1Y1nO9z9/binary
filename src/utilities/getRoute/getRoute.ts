import { useRouter } from "vue-router";

export default function routeName() {
    const router = useRouter();
    return router.currentRoute.value;
}