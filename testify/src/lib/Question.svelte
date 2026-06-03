<script>
  let { question = $bindable() } = $props();
  const answers = ["A", "B", "C", "D", "E", "F"];
</script>

<form>
  <h2>{@html question.question}</h2>

  {#each question.answers as ans, i}
    <input
      type="radio"
      id={answers[i]}
      name="answer"
      value={i}
      bind:group={question.answered}
    />
    <label for={answers[i]}>{answers[i]}. {ans}</label><br />
  {/each}
</form>
