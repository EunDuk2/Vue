import TestVue from "@/components/practice/0.TestVue.vue";
import ModelingComponent from "@/components/practice/1.ModelingComponent.vue";
import ConditionalComponent from "@/components/practice/2.ConditionalComponent.vue";

export const practiceRouter = [
    {
        path: "/practice/test",
        name: "TestVue",
        component: TestVue
    },
    {
        path: "/practice/modeling",
        name: "ModelingComponent",
        component: ModelingComponent
    },
    {
        path: "/practice/conditional",
        name: "ConditionalComponent",
        component: ConditionalComponent
    }
]