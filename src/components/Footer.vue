<template>
    <div class="Footer">
        <div class="Footer__summary">
            <input type="checkbox">
            <p>check All</p>
            <p>3 items ñlaf</p>
            <p>3 items ñlaf</p>
        </div>
        <hr>
        <div class="Footer__Buttons">
            <button class="Footer__Buttons--all">all</button>
            <button class="Footer__Buttons--active">active</button>
            <button class="Footer__Buttons--completed">completed</button>
        </div>

    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style lang="scss">
.Footer{
    width: 50%;
    .Footer__sumary{
        display: flex;
        
    }
    .Footer__Buttons{
        display: flex;
        justify-content: center;
    }
}
</style>
