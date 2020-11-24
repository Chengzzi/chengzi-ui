<template>
    <div class="cz-body">
        <slot></slot> 
    </div>
</template>
<script>
export default { //输出
    name: "cz-body",
};
</script>
<style scoped>
.cz-body{
    flex-grow: 1;
}
</style>
