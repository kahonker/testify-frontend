<script>
  import Question from "./Question.svelte";

  let { questions = $bindable(), setSubmitted } = $props();
  let currQuestionIdx = $state(0);

  function changeCurrQuestionIdx(idx) {
    currQuestionIdx = idx;
    console.log(currQuestionIdx);
  }
</script>

<section id="question-view" class="question-view">
  {#if currQuestionIdx !== 0}
    <button
      class="question-view__nav-button question-view__nav-button--previous question-view__corner-button"
      onclick={() => changeCurrQuestionIdx(currQuestionIdx - 1)}
      >Previous</button
    >
  {/if}

  <section id="question-display" class="question-view__content">
    {#if currQuestionIdx !== questions.length}
      <Question bind:question={questions[currQuestionIdx]} />
    {:else}
      <div class="question-view__finished">
        <h1 class="question-view__finished-title">You finished</h1>
        <div class="question-view__question-selector">
          {#each questions as question, i}
            <button
              class="question-view__question-selector-button"
              onclick={() => changeCurrQuestionIdx(i)}
              class:question-view__question-selector-button--answered={question.answered !== -1}
              class:question-view__question-selector-button--no-answer={question.answered ===
                -1}
              >{i + 1}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </section>

  {#if currQuestionIdx !== questions.length}
    <button
      class="question-view__nav-button question-view__nav-button--next question-view__corner-button"
      onclick={() => changeCurrQuestionIdx(currQuestionIdx + 1)}>Next</button
    >
  {:else}
    <button class="question-view__submit-button question-view__corner-button" onclick={() => setSubmitted()}
      >Submit</button
    >
  {/if}
</section>
