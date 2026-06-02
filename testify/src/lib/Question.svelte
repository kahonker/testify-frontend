<script>
    let { question } = $props();
    let answer = $state();
    const answers = ["A", "B", "C", "D", "E", "F"]

    $effect(() => {
      question.answered = answer;

      return () => {
        console.log("changed answer")
      };
    }
    )
</script>

<form>
  <h2>{question.question}</h2>

  {#each question.answers as ans, i}
    <input type="radio" id={answers[i]} name="answer" value={i} bind:group={answer}>
    <label for={answers[i]}>{answers[i]}. {ans}</label><br>
  {/each}
</form>