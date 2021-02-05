<template>
    <div id="LanguageInfo-div" class="container">
        <section>
        <b-tabs type="is-boxed">
            <b-tab-item label="Dictionary" icon="book"></b-tab-item>
            <b-tab-item label="History" icon="file-alt"></b-tab-item>
            <b-tab-item label="Language Specifics" icon="layer-group"></b-tab-item>
        </b-tabs>
    </section>
    </div>
</template>

<script>
export default {
    name: 'LanguageInfoTabs',
    components: {

    }
}
</script>

<style>
#LanguageInfo-div {   
    border-style: solid;
    border-width: 5px;
    border-radius: 5px;
    border-color: black;
    margin-bottom: 10%;
}

@media (max-width: 768px) {
    
}
</style>