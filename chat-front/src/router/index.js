import MemberCreate from "@/views/MemberCreate.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/member/create',
        name: "MemberCreate",
        component: MemberCreate
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;