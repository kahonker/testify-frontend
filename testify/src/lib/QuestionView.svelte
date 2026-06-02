<script>
    import Question from "./Question.svelte";

    let { questions } = $props();
    let currQuestionIdx = $state(0);

    function changeCurrQuestionIdx(idx){
        currQuestionIdx = idx;
        console.log(currQuestionIdx);
    }
</script>

<section id="question-view">
    {#if currQuestionIdx !== 0}
        <button onclick={() => changeCurrQuestionIdx(currQuestionIdx-1)}>Previous</button>
    {/if}

    <section id="center">
        {#if currQuestionIdx !== questions.length}
            <Question question={questions[currQuestionIdx]} />
        {:else}
            <h1>You finished</h1>
            {#each questions as _, i}
                <button class="question-view__button--select" onclick={() => changeCurrQuestionIdx(i)}>{i+1}</button>
            {/each}
        {/if}
    </section>

    {#if currQuestionIdx !== questions.length}
        <button onclick={() => changeCurrQuestionIdx(currQuestionIdx+1)}>Next</button>
    {:else}
        <button>Submit</button>
    {/if}
</section>
