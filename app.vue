<template>
    <div>
        <button @click="signIn" class="button">Sign In</button>
        <button @click="signOut" class="button">Sign Out</button>
        <pre>
            {{credentials}}
        </pre>
    </div>
</template>
<script setup>
const credentials = ref();

const signIn = async () => {
    const email = "test@test.com";
    const password = "123456";
    credentials.value = await signInUser(email, password);
};

const signOut = async () => {
    credentials.value = await signOutUser();
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
