<template>
    <div class="pdm-sidebar pdm-sidebar--dark">
        <div class="pdm-sidebar__inner">
           
            <el-menu default-active="2" class="pdm-sidebar__menu" @open="handleOpen" @close="handleClose">
                <el-menu-item index="welcome" @click="$router.push({ name : 'welcome'})">
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span slot="title">欢迎页</span>
                </el-menu-item>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon class="pdm-sidebar__menu-icon">
                            <location />
                        </el-icon>
                        <span>组织管理</span>
                    </template>
                    <el-menu-item-group title="山口组">
                        <el-menu-item index="1-1">涩谷</el-menu-item>
                        <el-menu-item index="1-2">北海道</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="青口组">
                        <el-menu-item index="1-3">贺联</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>铁道</template>
                        <el-menu-item index="1-4-1">车站设施</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon class="pdm-sidebar__menu-icon">
                        <icon-menu />
                    </el-icon>
                    <span>线路管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon class="pdm-sidebar__menu-icon">
                        <setting />
                    </el-icon>
                    <span>设备管理</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>