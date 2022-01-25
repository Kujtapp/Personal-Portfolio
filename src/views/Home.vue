<template>
    <div>
        <div class="wrapper">
            <div class="personal-picture">
                <img src="@/assets/personal-picture.jpg" alt="">
            </div>
            <div class="side-wrapper">
                <div class="text-wrapper">
                    <h1>Kujtim Ramadani</h1>
                    <blockquote>Freelance UI/UX Graphic Designer and a newbie in <br> Front-end Development using the latest/newest technologies</blockquote>
                </div>
                <div class="public-profiles">
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github-square"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
}
.personal-picture > img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
}
.text-wrapper > h1 {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 900;
}
.text-wrapper > blockquote {
    font-size: 20px;
    font-style: italic;
    color: #A6B2B3;
}
.side-wrapper {
    column-gap: 20px;
}
.public-profiles {
    font-size: 25px;
}
</style>