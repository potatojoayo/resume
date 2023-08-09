<script>
    export let image, label;
</script>
<li class="rounded-full px-4 py-2 bg-gray-100 flex space-x-2 cursor-default hover:bg-gray-200 transition-all items-center">
    <img src={image} alt="svelte" class="h-5"
    >
    <div>
        {label}
    </div>
</li>
