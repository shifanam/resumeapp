<template>
  <div id="app">
  <div>
    <input v-for="person, index, key in employee" v-if="index != 'id'" type="text"  :placeholder="index" v-model="employee[index]">
  </div>
  <button @click="clear">clear</button>
  <button @click="add(employee)">Add data </button>
  <ul>
    <li  v-for="(employee, index) in employees" v-if="employee" :key="employee.id"> 
      <input v-if="employee.edit" type="text" v-model="employee.name">
      <span v-else>{{employee.name}}</span>
      <button v-if="!employee.edit" @click="employee.edit = !employee.edit">&#9998;</button> 
      <button v-if="employee.edit" @click="edit(employee, index)">&#9998;</button>
      <button @click="remove(employee.id, index)" >&#9747;</button>
    </li>
  </ul>
 
</div>
</template>
<script>
export default {
}
</script>

