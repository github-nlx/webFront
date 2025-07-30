<template>
    <div class="headerBox">
        <el-row class="header" justify="end">
            <el-image :src="headerLogo" fit="contain" />
            <el-col :sm="24" :md="16" :lg="22">
                <el-row class="header" justify="end">
                    <a class="header-button" href="https://levinlaw.com/free-case-review/" target="_self">Free Case
                        Review</a>
                    <div class="header-nav flex-center" v-for="item in navList" :key="item.name" :class="{'active': item.active}">
                        <a href="#" v-if="item.name !== 'Search'">{{ item.name }}</a>
                        <a href="#" class="search" v-else>
                            {{ item.name }}
                        </a>
                    </div>
                </el-row>
            </el-col>
        </el-row>


    </div>

</template>

<script setup>
import { ref } from 'vue'
import headerLogo from '../assets/headerLogo.png'

const navList = [
    {
        name: 'Our Firm',
        active: true,
    },
    {
        name: 'Attorneys',
    },
    {
        name: 'Practice Areas',
    },
    {
        name: 'Government',
    },
    {
        name: 'News',
    },
    {
        name: 'Co-Counsel',
    },
    {
        name: '(800) 277-1193',
    },
    {
        name: 'Search',
        active: true,
    },
]

</script>

<style lang="scss" scoped>
.headerBox {
    position: sticky;
    top: 0;
    z-index: 10;
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
            padding: 10px 38px;
        }
        .header-nav {
                font-size: 20px;
                line-height: 46px;
                padding: 10px 38px;
                line-height: 1;
                &.active {
                    background-color: #007db3;
                }
                a {
                    color: #fff;
                    font-family: Hind Madurai, sans-serif;
                    font-weight: 700;
                }
                .search {
                  font-size: 18px;
                  display: flex;
                  flex-direction: column;
                  &::before {
                    content: url('../assets/whiteSearch.svg');
                    text-align: center;
                  }
                }
            }
    }
    @media (max-width: 768px) {
        .header-button {
        }
    }
}

</style>