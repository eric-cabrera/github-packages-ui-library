
<!-- 
 
    The component is a simple button that accepts two props, both fully typed with TypeScript: color, 
    which must be a string,  and size, which must be a number. Additionally, it has a default slot.
    
 -->


<script setup lang="ts">
// Import the computed function from Vue
import { computed } from "vue";

// Define a TypeScript type for the button's props
type BaseButtonProps = {
  size?: number;    // Optional size property
  color?: string;   // Optional color property
};

// Use withDefaults to set default values for the props
// This function allows you to define default values for the props you’ve declared with defineProps. 
// If a parent component does not provide a value for a prop, the default value will be used.
const props = withDefaults(defineProps<BaseButtonProps>(), {
  size: 16,           // Default size is 16
  color: "skyblue",   // Default color is skyblue
});

// Create a computed property for the font size based on the size prop
// This function is part of Vue's reactivity system. It allows you to define reactive properties 
// that depend on other reactive data. When the underlying data changes, 
// the computed property automatically recalculates and updates.
const fontSize = computed(() => `${props.size}px`);
</script>

<template>
  <!-- Button element with dynamic styles based on props -->
  <button id="baseButton" :style="{ backgroundColor: props.color, fontSize: fontSize }">
    <slot />  <!-- Slot for custom content -->
  </button>
</template>

<style>
/* Styles for the button */
#baseButton {
  padding: 1rem 2rem;  /* Padding for button */
  cursor: pointer;      /* Pointer cursor on hover */
  border: none;         /* No border */
}
</style>
