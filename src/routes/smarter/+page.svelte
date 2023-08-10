<script lang="ts">
    import SmarterErd from '$lib/images/smarter_erd.png'
    import Graphiql from '$lib/images/graphiql.png'
    import {nginx, python, yaml} from "svelte-highlight/languages";
    import {HighlightSvelte} from "svelte-highlight";
    import {SMARTER_DOCKER_COMPOSE} from "$lib/consts/smarter/SMARTER_DOCKER_COMPOSE";
    import {ORDER_MASTER} from "$lib/consts/smarter/ORDER_MASTER";
    import {ORDER_MASTER_TYPE} from "$lib/consts/smarter/ORDER_MASTER_TYPE";
    import {SCHEMA} from "$lib/consts/smarter/SCHEMA";
    import {SMARTER_NGINX} from "$lib/consts/smarter/SMARTER_NGINX";
    import Link from "$lib/components/Link.svelte";
</script>
<div class="mt-8 w-full flex flex-col space-y-8">
    <h1 class="text-2xl">Smarter Plus</h1>
    <h2 class="text-xl">1. Client Requirements Analysis</h2>
    <div>
        Here's a new project. Our client want to make an e-commerce mobile app in which taekwondo trainers buy stuffs
        for their
        students such as uniform. The app must be able to run on all mobile platform including iOS and Android. Also,
        there
        has to be an admin website to track customers' order process and manage orders. Since most of taekwondo uniforms
        need pre-work and post-work such as printing, and embroidery. So there need to be functions for administrating
        subcontractors and calculating their labor to be paid.
    </div>
    <div>
        For cross-platform mobile app, I decided to go with flutter since it saves a lot of time covering
        both iOS and Android with just one code base.
    </div>
    <div>
        For web, I chose sveltekit. Sveltekit is just an amazing tool to build an website. It minimize javascript code
        that it feels like writing old school html and css, but with fully dynamic functionality.
    </div>
    <div>So, let's begin by designing ERD.</div>
    <h2 class="text-xl">2. Design ERD</h2>

    <a href={SmarterErd}>
        <img src={SmarterErd} alt="smarter erd">
    </a>
    <div>
        E-commerce service needs a lot. Order, product, payment, pre-work, post-work, shipping, complain, calculation,
        point, coupon and more. It changed many time in the process of development. For client's request change, ui
        design change, and performance issue, I had to make modification day by day. I really hate those changes, but
        what can I do. Business is complicated by it's nature.
    </div>
    <h2 class="text-xl">3. Start django project with docker</h2>

    <HighlightSvelte code={SMARTER_DOCKER_COMPOSE} language={yaml}></HighlightSvelte>
    <div>
        As always, let's start with docker-compose file. We need django, postgres and redis. We use redis for caching
        asynchronous tasks handled by celery. Such as sending notifications, we have to queue those tasks that we don't
        have to wait for the external api response and get our business logics done.
    </div>

    <h2 class="text-xl">4. Build tables with django models</h2>
    <HighlightSvelte code={ORDER_MASTER} language={python}></HighlightSvelte>

    <div>
        OrderMaster model is very long. For calculating various price values, I made property functions accordingly.
        With those, we don't need to write those calculation code in many places in our view that keep our business
        logic short. Also, it helps avoiding duplicated data such as <code>price_to_pay</code>. We can make it as column
        and keep recording it as any price, quantity, point or coupon value changes. If successfully done, we can
        reserve
        resources for calculations, but any mistake such as missing out to track even one tiny change, we might get into
        a huge accident;
        money should
        be treated with utmost care.
    </div>


    <h2 class="text-xl">5. Define graphql schema</h2>


    <div>
        In this project, I chose to go with graphql api instead of REST. There will be lots of different kind of data
        from various tables. To handle those requests, graphql seemed to be a better choice over REST. So let's begin
        with defining object types.
    </div>
    <HighlightSvelte code={ORDER_MASTER_TYPE} language={python}></HighlightSvelte>

    <div>
        Using graphene_django, all we need to do is inherit DjangoObjectType and set model we created before.
    </div>

    <HighlightSvelte code={SCHEMA} language={python}></HighlightSvelte>

    <div>
        Then define our schema. In <code>schema.py</code> file, create Query class and set it as Schema's query using
        graphene library. That's it. Now we can request <code>order_master</code> query and get response including
        matching order_master data from our order_master table .
    </div>

    <h2 class="text-xl">6. Build backend server and run</h2>
    <HighlightSvelte code={SMARTER_NGINX} language={nginx}></HighlightSvelte>

    <div>
        Just like Wooridong Rep project, config backend server on EC2 instance.
    </div>

    <div>Now, it's time to run our app on the server. Let's visit
        <Link href="https://www.api.ksmarter.shop/graphql">graphql
            api endpoint
        </Link>
    </div>


    <a href={Graphiql}>
        <img src={Graphiql} alt="graphiql">
    </a>

    <div>
        Done. Works smoothly. We can provide this graphiql view to front-end developers with additional documentation to
        help theme use apis easily.
    </div>


</div>
