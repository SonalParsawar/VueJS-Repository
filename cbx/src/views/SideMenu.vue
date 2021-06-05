<template>
    <div>
        <input value="Sonal"/>
        <sidebar-menu
              class="sidebar"
              :menu="menu"
              :collapsed="collapsed"
              @item-click="onItemClick"
              @collapse="onCollapse"
            />
        <div id="view" :class="[{ collapsed: collapsed }]">
            <sidebar-menu
              class="sidebar"
              :menu="menu"
              :collapsed="collapsed"
              @item-click="onItemClick"
              @collapse="onCollapse"
            />
            <router-view />
        </div>
    </div>
</template>

<script>
import SidebarMenu  from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

export default {
  name: "SideMenu",
  components:{
        SidebarMenu ,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Getting Started",
        },
        {
          href: "/",
          title: "Installation",
          icon: "fa fa-download",
        },
        {
          href: "/basic-usage",
          title: "Basic Usage",
          icon: "fa fa-code",
        },
        {
          href: "/page",
          title: "Dropdown Page",
          icon: "fa fa-list-ul",
          child: [
            {
              href: "/page/sub-page-1",
              title: "Sub Page 01",
              icon: "fa fa-file-alt",
            },
            {
              href: "/page/sub-page-2",
              title: "Sub Page 02",
              icon: "fa fa-file-alt",
            },
          ],
        },
      ],
      collapsed: true,
    };
  },
  methods: {
    onItemClick(e,i) {
      console.log("onItemClick");
      console.log(e);
      console.log(i);
    },
    onCollapse(c) {
      console.log("onCollapse");
      this.collapsed = c;
    },
  },
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>