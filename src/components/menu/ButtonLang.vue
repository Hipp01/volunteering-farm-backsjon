<template>
    <div id="BtnLang">
        <b-dropdown variant="link" class="text-center">
            <template #button-content>
                <BIconTranslate color="white" font-size="1.5rem"/>
            </template>
            <b-dropdown-item @click="changeLanguage('fr')"><flag iso="fr" style="font-size:25px; margin-right: 10px;"/>{{ $t("Language.fr") }}</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('en')"><flag iso="gb" style="font-size:25px; margin-right: 10px;"/>{{ $t("Language.en") }}</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('sv')"><flag iso="se" style="font-size:25px; margin-right: 10px;"/>{{ $t("Language.sv") }}</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('de')"><flag iso="de" style="font-size:25px; margin-right: 10px;"/>{{ $t("Language.de") }}</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('nl')"><flag iso="nl" style="font-size:25px; margin-right: 10px;"/>{{ $t("Language.nl") }}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
    methods: {
        changeLanguage(language) {
            this.$i18n.locale = language;
        }
    }
}
</script>
