import Vue from "nativescript-vue";
import RadListView from 'nativescript-ui-listview/vue';
import Main from "./components/Main";

Vue.use(RadListView);
Vue.config.silent = false;

new Vue({
    template: `
        <Frame>
            <Main />
        </Frame>`,

    components: {
        Main,
    },
}).$start();
