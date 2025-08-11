import OrderListComponent from "@/components/OrderListComponent.vue";


export const orderRouter = [
    {
        path: "/order/list",
        name: "OrderListComponent",
        component: OrderListComponent,
        props: {pageTitle: "전체 주문목록", isMyPage: false}
    }
]