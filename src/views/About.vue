<template>
    <div class="container">
        <h1 class="title">About Me</h1>
        <div class="personal-information">
            <div class="first-left-column">
                <h1>Personal Information</h1>
                <div class="both-rows">
                    <div class="left-column">
                        <p>First Name: <strong>Kujtim</strong></p>
                        <p>Age: <strong>25 Years</strong></p>
                        <p>Phone: <strong>+38349325320</strong></p>
                        <p>Freelance: <strong>Graphic Designer</strong></p>
                    </div>
                    <div class="right-column">
                        <p>Last Name: <strong>Ramadani</strong></p>
                        <p>Nationality: <strong>Kosova</strong></p>
                        <p>Address: <strong>Ferizaj</strong></p>
                        <p>Email: <strong>Kujta27@gmail.com</strong></p>
                    </div>
                </div>
                <router-link to="/about" class="about-button">Download CV</router-link>
            </div>
            <div class="box">
                <div class="first-row-box">
                    <div class="first-box">
                        <h1>6+</h1>
                        <h4>Years of Experience in Graphic Design</h4>
                    </div>
                    <div class="first-box">
                        <h1>1+</h1>
                        <h4>Years of Experience in Frontend Development</h4>
                    </div>
                </div>
                <div class="second-row-box">
                    <div class="first-box">
                        <h1>100+</h1>
                        <h4>Happy Customers</h4>
                    </div>
                    <div class="first-box">
                        <h1>100+</h1>
                        <h4>Completed Projects</h4>
                    </div>
                </div>  
            </div>  
        </div>
        <div class="second-wrapper">
            <h1>My Skills</h1>
        </div>
    </div>
</template>

<style scoped>
.title {
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    margin-top: 100px;
}
.personal-information {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    gap: 120px;
}
.first-left-column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
}
.first-left-column > h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
}
.both-rows {
    display: flex;
    gap: 80px;
}
.left-column, .right-column {
    line-height: 3;
    color: #747e7e;
    font-size: 18px;
}
.box {
    display: flex;
    flex-direction: column;
}
.first-row-box {
    display: flex;
    gap: 30px
}
.second-row-box {
    display: flex;
    gap: 30px;
    margin-top: 30px;
}
.first-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 230px;
    height: 120px;
    border: 1px solid #c7cece;
    padding: 30px;
}
.first-box:hover {
    box-shadow: 1px 2px 5px #9AA2A2;
}
.first-box > h1 {
    margin: 0;
    font-size: 60px;
    font-weight:900
}

.about-button {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    border: 3px solid black;
    color: black;
    padding: 10px 25px;
    border-radius: 30px;
    width: 115px;
}
.about-button:hover {
    background-color: black;
    color: white;
    transition: background-color 0.4s ease;
}

/* Second-row-wrapper */

.second-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
.second-wrapper > h1 {
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    margin-top: 100px;
}
</style>