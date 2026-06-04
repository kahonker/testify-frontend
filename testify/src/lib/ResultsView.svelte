<script>
  import Result from "./Result.svelte";

  let { questions, refreshPage } = $props();
  let currQuestionIdx = $state(0);

  function changeCurrQuestionIdx(idx) {
    currQuestionIdx = idx;
  }
</script>

<section id="results-view" class="results-view">
  {#if currQuestionIdx !== 0}
    <button
      class="results-view__nav-button results-view__nav-button--previous"
      onclick={() => changeCurrQuestionIdx(currQuestionIdx - 1)}
      >Previous</button
    >
  {/if}

  <section id="results-display" class="results-view__content">
    {#if currQuestionIdx !== questions.length}
      <Result question={questions[currQuestionIdx]} />
    {:else}
      <h1>You finished</h1>
      <div class="results-view__question-selector">
        {#each questions as question, i}
          <button
            class="results-view__question-selector-button"
            onclick={() => changeCurrQuestionIdx(i)}
            class:result__answer--correct={question.correct ===
              question.answered}
            class:result__answer--incorrect={question.answered !==
              question.correct}
          >
            {i + 1}
          </button>
        {/each}
      </div>
    {/if}
  </section>

  {#if currQuestionIdx !== questions.length}
    <button
      class="results-view__nav-button results-view__nav-button--next"
      onclick={() => changeCurrQuestionIdx(currQuestionIdx + 1)}>Next</button
    >
  {:else}
    <button class="results-view__new-test-button" onclick={() => refreshPage()}
      >New Test</button
    >
  {/if}
</section>
