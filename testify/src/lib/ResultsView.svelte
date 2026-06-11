<script>
  import { onMount } from "svelte";
  import Result from "./Result.svelte";

  let { questions, refreshPage } = $props();
  let currQuestionIdx = $state(0);
  let score = $state(0);

  function changeCurrQuestionIdx(idx) {
    currQuestionIdx = idx;
  }

  onMount(() => {
    let correctCount = 0;
    for (let index = 0; index < questions.length; index++) {
      const question = questions[index];
      if (question.answered !== question.correct) correctCount++;
    }
    score = Math.round(correctCount / questions.length) * 100;
  });
</script>

<section id="results-view" class="results-view">
  {#if currQuestionIdx !== 0}
    <button
      class="results-view__nav-button results-view__nav-button--previous results-view__corner-button"
      onclick={() => changeCurrQuestionIdx(currQuestionIdx - 1)}
      >Previous</button
    >
  {/if}

  <section id="results-display" class="results-view__content">
    {#if currQuestionIdx !== questions.length}
      <Result question={questions[currQuestionIdx]} />
    {:else}
      <div class="results-view__finished">
        <h1 class="results-view__finished-title">Your score is {score}</h1>
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
      </div>
    {/if}
  </section>

  {#if currQuestionIdx !== questions.length}
    <button
      class="results-view__nav-button results-view__nav-button--next results-view__corner-button"
      onclick={() => changeCurrQuestionIdx(currQuestionIdx + 1)}>Next</button
    >
  {:else}
    <button
      class="results-view__new-test-button results-view__corner-button"
      onclick={() => refreshPage()}>New Test</button
    >
  {/if}
</section>
