<template>
    <div>
        <button v-if="!firebaseUser" @click="signIn" class="button">Sign In</button>
        <button v-if="firebaseUser" @click="signOut" class="button">Sign Out</button>
        <div v-if="firebaseUser">
            <ClientOnly>
                <pre>
                    {{ firebaseUser }}
                </pre>
            </ClientOnly>
        </div>
        <div v-else>
            User signed out
        </div>
    </div>
</template>
<script setup>
const firebaseUser = useFirebaseUser();
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
