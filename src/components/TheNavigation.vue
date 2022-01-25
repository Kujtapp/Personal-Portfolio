<template>
    <div class="sidebar-wrapper">
        <div class="full-name">
            <h1>StarLabs <br> Portfolio -</h1>
        </div>
        <div class="navigation-menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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
    background-color: #05131D;
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
    color: #e03e27;
}
.navigation-menu {
    margin-bottom: 60px;
}
.navigation-menu > ul {
    list-style-type: none;
}
.navigation-menu > ul > li {
    margin-bottom: 20px;
    text-transform: uppercase;
    margin-right: 60px;
    letter-spacing: 3px;
}
.navigation-menu > ul > li:hover {
    color: #e03e27;
    cursor: pointer;
}
.copyright-statement > p:nth-child(2) {
    margin-top: 10px;
    font-style: italic;
}



</style>