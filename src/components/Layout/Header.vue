<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'contact'}">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'product'}">Product</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>