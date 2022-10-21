<template>
    <div>
        <input v-model="inputValue" type="text" @keydown.enter="updateValue">
        <button :disabled="inputValue.length == 0" @click="updateValue">{{props.btnLabel}}</button>
    </div>

</template>
<script setup>

import { ref } from 'vue';

const props = defineProps({
    btnLabel: {
        type: String,
        default: "Ajouter"
    }
});

const inputValue = ref("");

const emit = defineEmits(['newValue']);

function updateValue() {
    // S'assurer qu'il y a des données
    if (inputValue.value.length == 0) return;
    //Emettre un evemenement vers le parent
    emit("newValue", inputValue.value);
    //Vider le champ de texte
    inputValue.value = "";
}

</script>
<style scoped lang='scss'>
div {
    display: flex;
    gap: .5em;

    input {
        flex-basis: 70%;

    }

    button {
        flex-basis: 30%;
    }
}
</style>