<template>
    <div class="sidebar-wrapper">
        <div class="full-name">
            <h1>StarLabs <br> Portfolio -</h1>
        </div>
        <div class="navigation-menu">
            <ul>
                <router-link to="/home">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </ul>
        </div>
        <div class="copyright-statement">
            <p>© 2022 Vue3 Project</p>
            <p>Created By: <strong>Kujtim Ramadani</strong></p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.sidebar-wrapper {
    background-color: black;
    color: white;
    width: 15%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 80px;
    box-shadow: 10px 0px 10px rgb(196, 200, 203)
}
.full-name {
    margin-bottom: 60px;
}
.navigation-menu {
    margin-bottom: 60px;
}
.navigation-menu > ul {
    list-style-type: none;
}
.navigation-menu > ul > a {
    display: flex;
    margin-bottom: 20px;
    text-transform: uppercase;
    margin-right: 60px;
    letter-spacing: 3px;
    text-decoration: none;
    color: white;
}
.navigation-menu > ul > a:hover {
    color: #e03e27;
    cursor: pointer;
}
.copyright-statement > p:nth-child(2) {
    margin-top: 10px;
    font-style: italic;
}



</style>