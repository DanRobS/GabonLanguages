<template>
    <div id="navbar-div" class="container">
        <b-navbar>
        
        <template #brand>
            <router-link to="/">
                <b-navbar-item class="navbar-items">
                    App Icon
                </b-navbar-item>
            </router-link>
        </template>
        <template #start>
            <router-link to="/">
                <b-navbar-item class="navbar-items">
                    Accueil
                </b-navbar-item>
            </router-link>
            <b-navbar-dropdown class="navbar-items" label="Langues">
                <router-link to="/langues/inzebi">
                    <b-navbar-item class="navbar-items">
                        Inzebi
                    </b-navbar-item>
                </router-link>
                <router-link to="/langues/fang">
                    <b-navbar-item class="navbar-items">
                        Fang
                    </b-navbar-item>
                </router-link>
            </b-navbar-dropdown>    
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
}

.navbar-items {
    font-size: 170%;
}



@media (max-width: 768px) {

}

</style>