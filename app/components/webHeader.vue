<template>
  <div class="headerBox">
    <el-row class="header" justify="end">
      <el-image :src="headerLogo" fit="contain" />
      <el-col :sm="24" :md="16" :lg="22">
        <el-row class="header" justify="end">
          <a
            class="header-button"
            href="https://levinlaw.com/free-case-review/"
            target="_self"
            >Free Case Review</a
          >
          <div class="flex navList">
            <div
              class="header-nav flex-center"
              v-for="item in navList"
              :key="item.name"
              :class="{ active: item.active }"
            >
              <a href="#" class="nav" v-if="item.name !== 'Search'">{{
                item.name
              }}</a>
              <a class="search" v-else>
                {{ item.name }}
              </a>
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import headerLogo from "../assets/headerLogo.png";

const navList = [
  {
    name: "Our Firm",
    active: true,
  },
  {
    name: "Attorneys",
  },
  {
    name: "Practice Areas",
  },
  {
    name: "Government",
  },
  {
    name: "News",
  },
  {
    name: "Co-Counsel",
  },
  {
    name: "(800) 277-1193",
  },
  {
    name: "Search",
    active: true,
  },
];
</script>

<style lang="scss" scoped>
.headerBox {
  position: sticky;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  .header {
    background-color: #043450;
    position: relative;
    .header-button {
      background-color: #007db3;
      color: #fff;
      font-family: Hind Madurai, sans-serif;
      font-size: 22px;
      font-weight: 700;
      line-height: 49px;
      margin-right: 8px;
      padding: 10px 38px !important;
    }
    .header-nav {
      font-family: Hind Madurai, sans-serif;
      &.active {
        background-color: #007db3;
      }
      a {
        font-size: 22px;
        line-height: 48px;
        padding: 10px 38px;
        color: #fff;
        font-family: Hind Madurai, sans-serif;
        font-weight: 700;
      }
      .search {
        // display: flex;
        // flex-direction: column;
        color: #fff;
        font-family: Hind Madurai, sans-serif;
        &::before {
          content: url("../assets/whiteSearch.svg");
          text-align: center;
        }
      }
    }
  }
  @media screen and (min-width: 75em) and (max-width: 1800px) {
    .header .header-nav a {
      font-size: 20px;
      line-height: 46px;
      padding: 10px 20px !important;
    }
    .header-button {
      font-size: 20px;
      line-height: 46px;
      padding: 10px 20px !important;
    }
  }
  @media screen and (min-width: 75em) and (max-width: 1400px) {
    .header .header-nav a {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 75em) and (max-width: 1300px) {
    .header .header-nav a {
      font-size: 17px;
    }
  }
  @media screen and (min-width: 75em) and (max-width: 1250px) {
    .header .header-nav a {
      font-size: 16px;
      line-height: 42px;
      padding: 10px 18px !important;
    }
  }

  @media print, screen and (max-width: 74.9988em) {
    .navList {
      display: none;
    }
    .header .header-nav a {
      background: #043450;
      color: #fff;
      font-size: 34px;
      font-weight: 700;
      line-height: 45px;
      text-align: center;
    }
  }
@media screen and (min-width: 75em) {
    .header .header-nav a.search {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #007db3;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        font-size: 20px;
        line-height: 1;
        position: relative;
    }
}
  @media screen and (min-width: 75em) and (max-width: 1800px) {
    .header .header-nav a.search {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 75em) and (max-width: 1400px) {
    .header .header-nav a.search {
      font-size: 16px;
    }
  }
    @media screen and (min-width: 75em) and (max-width: 1300px) {
    .header .header-nav a.search {
      font-size: 15px;
    }
  }
  @media screen and (min-width: 75em) and (max-width: 1250px) {
    .header .header-nav a.search {
        font-size: 14px;
    }
}
@media screen and (min-width: 75em) and (max-width: 1900px) {
    .header-menu.menu {
        gap: 0;
    }
}
@media screen and (min-width: 75em) {
    .header .navList{
        gap: 8px;
        // -webkit-box-pack: end;
        // -webkit-justify-content: flex-end;
        // -ms-flex-pack: end;
        // justify-content: flex-end;
        // position: static;
    }
}
@media screen and (min-width: 75em) and (max-width: 1900px) {
    .header .navList{
        gap: 0;
    }
}
@media screen and (min-width: 75em) {
    .header .header-nav a:hover {
        -webkit-box-shadow: inset 0 -5px 0 0 #0183bb;
        box-shadow: inset 0 -5px 0 0 #0183bb;
    }
}
}
</style>
