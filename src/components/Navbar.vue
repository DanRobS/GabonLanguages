<template>
    <div id="navbar-div" class="container">
        <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                New App
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Langues">
                <b-navbar-item href="#">
                    Inzebi
                </b-navbar-item>
                <b-navbar-item href="#">
                    Fang
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            
        </template>

    </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    component: {

    }
}
</script>

<style>

#navbar-div {
    border-style: solid;
    border-width: 5px;
    border-color: black;
    border-radius: 5px;
    margin-bottom: 10%;
}

@media (max-width: 768px) {

}

</style>