<template>
  <div>
    <button @click="signIn" class="button">Sign In</button>
    <button @click="signOut" class="button">Sign Out</button>
  </div>
</template>
<script setup>
const signIn = async () => {
  const email = "test@test.com";
  const password = "123456";
  const credentials = await signInUser(email, password);
  console.log("Credentials:", credentials);
};

const signOut = async () => {
  const result = await signOutUser();
};
onMounted(async () => {
  // const email = "test@test.com";
  // const password = "123456";
  // const credentials = await createUser(email, password);
  // console.log(credentials);
  // const email = "test@test.com";
  // const password = "123456";
  // const credentials = await signInUser(email, password);
  // console.log(credentials)
  // const result = await signOutUser()
  // console.log(result)
});
</script>
