<script>
    import Me from "$lib/images/me.jpg";
    import SvelteLogo from '$lib/images/svelte_logo.svg'
    import Tech from "$lib/components/Tech.svelte";
    import Django from '$lib/images/django.svg'
    import Flutter from '$lib/images/flutter-color.svg'
    import Graphql from '$lib/images/graphql-color.svg'
    import Underline from "$lib/components/Underline.svelte";
    import Docker from '$lib/images/docker.svg'
    import Python from '$lib/images/python.svg'
    import Typescript from '$lib/images/typescript.svg'
    import Dart from '$lib/images/dart.svg'
    import Aws from '$lib/images/amazonaws.svg'
    import Experience from "$lib/components/Experience.svelte";
</script>


<main class="mt-8 flex flex-col space-y-8 w-full">
    <div class="flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-8">
        <img src={Me} alt="me" class="h-56  object-cover rounded">
        <div>

            <h2 class="text-2xl">Summary</h2>
            <p class="mt-4">
                Junior Web Developer specializing in backend development. Experienced with
                <Underline> django</Underline>
                framework and graphql. Well-versed in OOP concept and programming languages including
                <Underline> python</Underline>
                ,
                <Underline> typescript</Underline>
                and
                <Underline>
                    dart
                </Underline>
                . Also, skillful with web frontend development using
                <Underline> sveltekit</Underline>
                and mobile app
                development using
                <Underline> flutter.
                </Underline>
            </p>
        </div>
    </div>
    <div>
        <h2 class="text-2xl">Skill Highlights</h2>
        <ul class="mt-4 flex flex-wrap gap-2">
            <Tech image={Django} label="django"></Tech>
            <Tech image={SvelteLogo} label="sveltekit"></Tech>
            <Tech image={Flutter} label="flutter"></Tech>
            <Tech image={Graphql} label="graphql"></Tech>
            <Tech image={Docker} label="docker"></Tech>
            <Tech image={Python} label="python"></Tech>
            <Tech image={Typescript} label="typescript"></Tech>
            <Tech image={Dart} label="dart"></Tech>
            <Tech image={Aws} label="aws"></Tech>
        </ul>
    </div>
    <Experience></Experience>


    <h2 class="text-2xl">Education</h2>

    <div>
        <b>Bachelor of Forest Engineering</b> <br/>2021
        Kyungpook National University, Daegu
    </div>


    <h2 class="text-2xl">Languages</h2>
    <div>
        English - TOEIC 910 <br/>
        Korean - native
    </div>

    <h2 class="text-2xl">Hobby</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8bcgRtUCdFg" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    <div>
        Guitar / Keyboard / Recording / Mixing
    </div>

    <div class="mb-40">{''}</div>

</main>