<template>
    <div class="splash-screen">
        <img class="splash-screen_logo" src="../assets/flamingo.svg" alt="logo"/>
        <h1 class="splash-screen_title">FlaminGo</h1>
        <p class="splash-screen_descr">FlaminGo is a simple and fast web messenger</p>
    </div>
</template>

<script>
import router from '../router';
export default {
    mounted(){
        setTimeout(()=>{
            router.push('/login')
        }, 2000);
    }
}
</script>

<style>
    .splash-screen {
        min-width: 100vw;
        min-height: 100vh;
        background-color: #EC407A;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-rows: 60vh 20vh auto;
        transition: opacity .3s;
    }
    .splash-screen_logo {
        width: 60%;
        margin: 0 auto;
        animation: flamingo 2s infinite;
    }
    .splash-screen_title {
        color: #FFFFFF;
        text-align: center;
        font-family: 'Roboto Slab'
    }
    .splash-screen_descr {
        text-align: center;
        color: #f6c7d6;
        width: 50vw;
        margin: 0 auto;
    }

    @keyframes flamingo {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(0.9);
        }
        100%{
            transform: scale(1);
        }
    }
</style>