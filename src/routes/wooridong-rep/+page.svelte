<script lang="ts">
    import {HighlightSvelte} from "svelte-highlight";
    import {WOORIDONG_DOCKER_COMPOSE} from "$lib/consts/wooridong/docker-compose";
    import {nginx, python, shell, yaml} from "svelte-highlight/languages";
    import WooridongErd from '$lib/images/wooridong_erd.png'
    import DRF from '$lib/images/drf.png'
    import {USER_MODEL} from "$lib/consts/wooridong/user_model";
    import {VILLA_SERIALIZER} from "$lib/consts/wooridong/villa_serializer";
    import {VILLA_VIEWSET} from "$lib/consts/wooridong/villa_viewset";
    import {MODEL_VIEWSET} from "$lib/consts/wooridong/model_viewset";
    import {REGISTER_VIEW} from "$lib/consts/wooridong/register_view";
    import {REGISTER_ROUTER} from "$lib/consts/wooridong/register_router";
    import {WOORIDONG_NGINX} from "$lib/consts/wooridong/wooriding_nginx";
</script>

<div class="mt-8 w-full flex flex-col space-y-8">
    <h1 class="text-2xl">Wooridong-rep</h1>
    <h2 class="text-xl">1. Design ERD</h2>
    <a href={WooridongErd}>
        <img src={WooridongErd} alt="wooridong_erd">
    </a>
    <div>
        Based on client's request, I designed an ERD(Entity Relationship Diagram). It's a blueprint of DB that would be
        built later. It can never be perfect. There will always be modifications since change of business logic can
        occur anytime.
    </div>
    <h2 class="text-xl">2. Setup docker-compose.yml</h2>
    <HighlightSvelte code={WOORIDONG_DOCKER_COMPOSE} language={yaml}></HighlightSvelte>
    <div>
        Let the project begin. I prefer setting docker up from scratch. I don't want to create another venv that will be
        obsolete as soon as docker image is built. I always forget to remove it, so don't create in the first place.
    </div>
    <h2 class="text-xl">3. Build DB by defining django models</h2>

    <HighlightSvelte code={USER_MODEL} language={python}></HighlightSvelte>
    <div>
        I prefer starting with User model. It's easier User model to be defined before any migrations. Without
        customization of User model, django automatically create default User model, and it's quite annoying to replace
        the default User with customized one. <br/>
        <br/>
        To Customize User model, we can inherit AbstractBaseUser. We need Custom Manger as well to override default
        <code>
            create_user
        </code>
        method.
    </div>

    <h2 class="text-xl">4. Create ModelSerializer</h2>
    <HighlightSvelte code={VILLA_SERIALIZER} language={python}></HighlightSvelte>
    <div>
        After define all models, make serializer for each model accordingly. Serializer parse request data to return
        django model and vice versa. ModelSerializer is extremely useful since it takes only model in Meta subclass and
        takes care of all the chores that defining fields to sync with model fields. Inheriting ModelSerializer, all we
        need to do is set model to django model and set <code>fields = '__all__'</code>
    </div>

    <h2 class="text-xl">5. Create Views</h2>
    <HighlightSvelte code={VILLA_VIEWSET} language={python}></HighlightSvelte>
    <div>
        Now, it's time to create views where most business logic takes palace in. all we need to do is defining queryset
        field or override <code>get_queryset</code> method, and defining serializer_class or override <code>get_serializer_class</code>
        method.
    </div>

    <HighlightSvelte code={MODEL_VIEWSET} language={python}></HighlightSvelte>
    <div>
        ModelViewSet is just a GenericViewSet which inherit bunch of mixins and GenericViewSet. It provides <code>create(),
        retrieve(), update(), partial_update(), and list()</code> methods as default. Thus, providing queryset and
        serializer_class, we can use all methods inherited from mixins right away. But, usually we need to customize
        some methods. Then we can just override methods to write our business logic accordingly.
    </div>

    <HighlightSvelte code={REGISTER_VIEW} language={python}></HighlightSvelte>
    <div>
        If we need only one method, we can just use api_view as class or function view. Above, I created register_view
        as function view with <code>@api_view</code> decorator that only takes POST method.
    </div>

    <HighlightSvelte code={REGISTER_ROUTER} language={python}></HighlightSvelte>
    <div>
        After creating views, we can provide those views by registering views in router. Simply we can just include the
        router to <code>urlpatterns</code> list.
    </div>

    <h2 class="text-xl">6. Build backend server and run</h2>
    <HighlightSvelte code={WOORIDONG_NGINX} language={nginx}></HighlightSvelte>

    <div>
        On ec2 Ubuntu server, installed nginx and configured as above. It's just a simple logic that listen to
        server_name and
        reverse proxy to localhost 8000 port on which django app run.
    </div>

    <div>Now, it's time to run our app on the server.</div>

    <HighlightSvelte code="$ sudo docker compose up -d" language={shell}></HighlightSvelte>

    <div>
        Let's test our server.
    </div>

    <a href={DRF}>
        <img src={DRF} alt="wooridong_erd">
    </a>


    <div>
        Done. Works smoothly.
    </div>

</div>