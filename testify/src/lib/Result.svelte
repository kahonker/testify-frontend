<script>
  let { question } = $props();
  const answers = ["A", "B", "C", "D", "E", "F"];
</script>

<section class="result">
  <h2 class="result__question">{question.question}</h2>

  <div class="result__answers">
    {#each question.answers as ans, i}
      <p
        class="result__answer"
        class:result__answer--correct={question.correct === i}
        class:result__answer--incorrect={question.answered === i &&
          question.correct !== i}
      >
        {answers[i]}. {ans}
      </p>
    {/each}
  </div>

  <div class="result__summary">
    <p>You answered <b>{answers[question.answered]}</b></p>
    <p>The correct answer is <b>{answers[question.correct]}</b></p>
  </div>

  <div class="result__explanation">
    <p>{question.explanation}</p>
  </div>
</section>
