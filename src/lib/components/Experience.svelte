<script>
    import Link from "$lib/components/Link.svelte";
    import Github from '$lib/images/github.svg'
</script>
<div>
    <h2 class="text-2xl">Experience</h2>
    <p class="mt-4">
        <b>
            Fullstack Developer / Team Leader:
        </b>
        01/2022 ~ (an year and 8 months)
    </p>
    <p class="mt-2">
        <b>
            <Link href="https://blocket.co.kr">
                (주) 블로켓,
            </Link>
        </b>
        Jejusi
    </p>

    <div class="rounded bg-gray-100 p-4 mt-4">
        <div class="flex sm:justify-between sm:flex-row flex-col">
            <a href="/wooridong-rep">
                <h2 class="text-lg cursor-pointer w-fit underline underline-offset-4">
                    Wooridong Rep (01/2022 - 04/2022)
                </h2>
            </a>
            <a href="https://github.com/potatojoayo/wooridong_rep_server"
               class="flex space-x-1 items-center mt-2 sm:mt-0"
               target="_blank">
                <img src={Github} alt="github" class="w-4">
                <div>github</div>
            </a>
        </div>
        <div class="mt-1 text-gray-800">apartment house management app</div>
        <ul class="mt-2 list-disc pl-6">
            <li>Built PostgresQL database on RDS</li>
            <li>Constructed REST api with dockerized django using DRF</li>
            <li>Set Ubuntu backend server up on EC2</li>
            <li>Connected client and server using nginx reverse proxy</li>
            <li>Made cross-platform mobile app using flutter</li>
            <li>Released on
                <Link href="https://apps.apple.com/za/app/%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%8C%80%ED%91%9C/id1617951145">
                    iOS Appstore
                </Link>
                and
                <Link href="https://play.google.com/store/apps/details?id=com.blocket.wooridongrep&pli=1">Google
                    Playstore
                </Link>
            </li>
            <li>Created
                <Link href="https://wooridong-rep.blocket.co.kr/">landing page</Link>
                using nextjs
            </li>
        </ul>
    </div>

    <div class="rounded bg-gray-100 p-4 mt-4">
        <div class="flex sm:justify-between sm:flex-row flex-col">
            <a href="/smarter">
                <h2 class="text-lg cursor-pointer w-fit underline underline-offset-4">
                    Smarter Plus (05/2022 - 02/2023)
                </h2>
            </a>

            <a href="https://github.com/potatojoayo/smarter_server" class="flex space-x-1 items-center mt-2 sm:mt-0"
               target="_blank">
                <img src={Github} alt="github" class="w-4">
                <div>github</div>
            </a>
        </div>
        <div class="mt-1 text-gray-800">Taekwondo goods e-commerce app</div>
        <ul class="mt-2 list-disc pl-6">
            <li>Built PostgresQL database on RDS</li>
            <li>Constructed graphql api with dockerized django using graphene</li>
            <li>Set Ubuntu backend server up on EC2</li>
            <li>Connected client and server using nginx reverse proxy</li>
            <li>Made cross-platform mobile app using flutter</li>
            <li>Released on
                <Link href="https://apps.apple.com/kr/app/%EC%8A%A4%EB%A7%88%ED%84%B0-%ED%94%8C%EB%9F%AC%EC%8A%A4/id1641226640">
                    iOS Appstore
                </Link>
                and
                <Link href="https://play.google.com/store/apps/details?id=com.blocket.smarter&hl=ko-KR">Google
                    Playstore
                </Link>
            </li>
            <li>Created
                <Link href="https://test.admin.ksmarter.shop/login">
                    administration web
                </Link>
                using sveltekit <br/>(test server, id: admin / pwd: admin)
            </li>
        </ul>
    </div>

    <div class="rounded bg-gray-100 p-4 mt-4">
        <h2 class="text-lg cursor-pointer w-fit">
            Fix Please (03/2023 - 04/2023)
        </h2>
        <div class="mt-1 text-gray-800">Home fix service platform</div>
        <ul class="mt-2 list-disc pl-6">
            <li>Built
                <Link href="https://www.fix-please.com/index">landing page</Link>
                introducing the service
            </li>
            <li>Injected kakao chat using Kakao sdk</li>
        </ul>
    </div>

    <div class="rounded bg-gray-100 p-4 mt-4">
        <h2 class="text-lg cursor-pointer w-fit">
            Smarter Plus update (05/2023 - 08/2023)
        </h2>
        <div class="mt-1 text-gray-800">Advanced e-commerce service</div>
        <ul class="mt-2 list-disc pl-6">
            <li>Added more features to mobile app</li>
            <li>Added more features to admin site</li>
            <li>Created
                <Link href="https://test.cs.ksmarter.shop/login">customer service web</Link>
                using sveltekit and graphql<br/>(test server, id: admin / pwd: admin)
            </li>
        </ul>
    </div>
</div>
