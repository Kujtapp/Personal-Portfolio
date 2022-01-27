<template>
    <div>
        <div class="wrapper">
            <div class="personal-picture">
                <img src="@/assets/personal-picture.jpg" alt="">
            </div>
            <div class="side-wrapper">
                <div class="text-wrapper">
                    <h1>Kujtim Ramadani</h1>
                    <p>Freelance UI/UX Graphic Designer and a newbie in <br> Front-end Development using the latest/newest technologies</p>
                </div>
                <div class="public-profiles">
                    <a href="https://www.linkedin.com/in/kujtim-ramadani/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Kujtapp"><i class="fab fa-github-square"></i></a>
                </div>
                <router-link to="/about" class="about-button">More About Me</router-link>
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
    margin-bottom: 20px;
}
.text-wrapper > p {
    font-size: 17px;
    font-style: italic;
    font-weight: 300;
    color: #A6B2B3;
    margin-bottom: 20px;
    letter-spacing: 1px;
    line-height: 170%;
}
.public-profiles {
    display: flex;
    gap: 15px;
    font-size: 25px;
    margin-bottom: 40px;
}
.public-profiles a {
    color: black;
}
.about-button {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    border: 3px solid black;
    color: black;
    padding: 10px 25px;
    border-radius: 30px;
}
.about-button:hover {
    background-color: black;
    color: white;
    transition: background-color 0.4s ease;
}
</style>