<template>

    {{data}}
    <div class="w-full" no-paging autocomplete filter-row>
        <vue-excel-editor v-model="data" >
            <vue-excel-column field="user"   label="User ID"       type="string" width="80px" />
            <vue-excel-column field="name"   label="Name"          type="string" width="150px" />
            <vue-excel-column field="phone"  label="Contact"       type="string" width="130px" />
            <vue-excel-column field="gender" label="Gender"        type="select" width="150px" :options="['F','M','U']" />
            <vue-excel-column field="age"    label="Age"           type="number" width="70px" />
            <vue-excel-column field="birth"  label="Date Of Birth" type="date"   width="80px" />
        </vue-excel-editor>
    </div>
</template>


<script setup>
import {ref} from "vue"

const data = ref([
            {user: 'hc', name: 'Harry Cole',    phone: '1-415-2345678', gender: 'M', age: 25, birth: '1997-07-01'},
            {user: 'sm', name: 'Simon Minolta', phone: '1-123-7675682', gender: 'M', age: 20, birth: '1999-11-12'},
            {user: 'ra', name: 'Raymond Atom',  phone: '1-456-9981212', gender: 'M', age: 19, birth: '2000-06-11'},
            {user: 'ag', name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01'},
            {user: 'kl', name: 'Kenny Linus',   phone: '1-891-2345685', gender: 'M', age: 29, birth: '1990-09-01'}
        ])

</script>