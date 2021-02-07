<template>
    <div id="LanguageInfo-div" class="container">
        <section>
        <b-tabs size="is-medium" type="is-boxed">
            <b-tab-item label="Dictionary" icon="book">
                <Dictionary />
            </b-tab-item>
            <b-tab-item label="History" icon="file-alt">
                <History />
            </b-tab-item>
            <b-tab-item label="Language Specifics" icon="layer-group">
                <LanguageSpecifics />
            </b-tab-item>
        </b-tabs>
    </section>
    </div>
</template>

<script>
import Dictionary from './Dictionary'
import History from './History'
import LanguageSpecifics from './LanguageSpecifics'

export default {
    name: 'LanguageInfoTabs',
    components: {
        Dictionary, History, LanguageSpecifics
    }
}
</script>

<style>
#LanguageInfo-div {   
    border-style: solid;
    border-radius: 5px;
    border-color: black;
    margin-top: 10%;
    margin-bottom: 5%;
}

@media (max-width: 768px) {
    
}
</style>