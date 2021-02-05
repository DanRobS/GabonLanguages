<template>
    <div id="navbar-div" class="container">
        <b-navbar>
        <template #brand>
            <b-navbar-item class="navbar-items" tag="router-link" :to="{ path: '/' }">
                New App
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item class="navbar-items" href="/">
                Home
            </b-navbar-item>
            <b-navbar-dropdown class="navbar-items" label="Langues">
                <b-navbar-item class="navbar-items" href="#">
                    Inzebi
                </b-navbar-item>
                <b-navbar-item class="navbar-items" href="#">
                    Fang
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item class="navbar-items" href="#">
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
    margin-bottom: 8%;
}

.navbar-items {
    font-size: 170%;
}



@media (max-width: 768px) {

}

</style>