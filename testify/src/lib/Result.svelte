<script>
  let { question } = $props();
  const answers = ["A", "B", "C", "D", "E", "F"];
</script>

<section>
  <h2>{question.question}</h2>

  {#each question.answers as ans, i}
    <p
      class={[
        "answer",
        {
          correct: question.correct === i,
          incorrect: question.answered === i && question.correct !== i,
        },
      ]}
    >
      {answers[i]}. {ans}
    </p>
  {/each}
  <br />
  <p>You answered <b>{answers[question.answered]}</b></p>
  <p>The correct answer is <b>{answers[question.answered]}</b></p>
  <br />
  <p>{question.explanation}</p>
</section>
