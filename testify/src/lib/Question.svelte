<script>
  let { question = $bindable() } = $props();
  const answers = ["A", "B", "C", "D", "E", "F"];
</script>

<form class="question-form">
  <h2 class="question-form__title">{@html question.question}</h2>

  <div class="question-form__options">
    {#each question.answers as ans, i}
      <div class="question-form__option">
        <input
          type="radio"
          id="answer-{answers[i]}"
          name="answer"
          value={i}
          class="question-form__radio"
          bind:group={question.answered}
        />
        <label for="answer-{answers[i]}" class="question-form__label">{answers[i]}. {ans}</label>
      </div>
    {/each}
  </div>
</form>

